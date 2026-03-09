const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const notifier = require('node-notifier');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('🔌 New Admin Dashboard connected via WebSocket');
});

// Middleware
app.use(cors());
app.use(express.json());

// Firebase Initialization
try {
  // Option 1: Using a local service account key file (Recommended for development)
  // const serviceAccount = require('./serviceAccountKey.json');
  
  // Option 2: Using environment variables (Recommended for production/Render)
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT 
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT) 
    : null;

  if (serviceAccount || require('fs').existsSync('./serviceAccountKey.json')) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount || require('./serviceAccountKey.json'))
    });
    console.log('✅ Connected to Firebase Firestore successfully');
  } else {
    // If no credentials, we won't crash, but we'll log a strong warning to the developer.
    console.log('⚠️ FIREBASE CREDENTIALS NOT FOUND!');
    console.log('👉 Please add a serviceAccountKey.json file OR set FIREBASE_SERVICE_ACCOUNT in .env');
    console.log('👉 The app will automatically fall back to saving data locally in "temp-storage.json".');
  }
} catch (error) {
  console.error('❌ Failed to initialize Firebase:', error);
}

const db = admin.apps.length ? admin.firestore() : null;

// Temporary in-memory storage (fallback when Firebase fails or is not configured)
const fs = require('fs');
const path = require('path');
const tempStorageFile = path.join(__dirname, 'temp-storage.json');

let tempContacts = [];
let tempFeedbacks = [];

// Load existing temporary storage on startup
try {
  if (fs.existsSync(tempStorageFile)) {
    const data = JSON.parse(fs.readFileSync(tempStorageFile, 'utf8'));
    tempContacts = data.contacts || [];
    tempFeedbacks = data.feedbacks || [];
    console.log('📁 Loaded temporary storage from file');
  }
} catch (error) {
  console.log('📁 No existing temporary storage found, starting fresh');
}

// Save temporary storage to file
function saveTempStorage() {
  try {
    fs.writeFileSync(tempStorageFile, JSON.stringify({
      contacts: tempContacts,
      feedbacks: tempFeedbacks
    }));
  } catch (error) {
    console.error('Error saving temporary storage:', error);
  }
}

// Log all requests for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Email configuration
const getTransporter = () => {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (user && pass && pass !== 'your_gmail_app_password_here' && pass.trim() !== '') {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });
    }
    return null;
};

const transporter = getTransporter();
if (transporter) {
    transporter.verify(function (error, success) {
        if (error) {
            console.log('❌ EMAIL CONNECTION FAILED');
            console.log(error);
        } else {
            console.log('✅ Server is ready to take our messages');
        }
    });
}

// Gemini AI Setup
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-pro" }) : null;

const systemPrompt = `
You are "Boot", the professional AI assistant for Aarya Khetan's Personal Branding Website.
Your mission is to help visitors understand Aarya's services and brand.
Aarya's Core Services:
1. Video Editing: Professional flavor, motion graphics, and storytelling.
2. Social Media Management: Strategic growth and community engagement.
3. Content Writing: SEO-optimized blogs, scripts, and brand copy.

Guidelines:
- If a user asks about services, explain these 3 clearly.
- If a user wants to hire Aarya or has a specific project, ALWAYS ask them to use the "Contact Form" on the website.
- Be professional, polite, and brand-aligned.
- Keep responses concise but helpful.
- For non-work related questions, you can still answer but always circle back to how Aarya can help them if relevant.
- Location: Aarya is based in Nagpur, India, but works globally.
`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required' });
    }

    if (!model) {
        console.log('⚠️ GEMINI_API_KEY NOT FOUND - Boot running in Basic Mode');
        const lowerMsg = message.toLowerCase();
        let reply = "I'm currently running in limited mode. Please add a Gemini API Key to my brain to unlock my full potential!";

        if (lowerMsg.includes('work') || lowerMsg.includes('hire')) {
            reply = "Aarya is open for work! Use the contact form to reach out.";
        }
        return res.json({ success: true, reply });
    }

    try {
        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "Understood. I am Boot, Aarya's professional assistant." }] },
                ...(history || []).map(h => ({
                    role: h.sender === 'user' ? 'user' : 'model',
                    parts: [{ text: h.text }]
                }))
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ success: true, reply: text });
    } catch (error) {
        console.error('❌ AI Chat Error:', error);
        res.status(500).json({ success: false, message: 'AI is resting right now. Try again later!' });
    }
});

// Feedback endpoint
app.post('/api/feedback', async (req, res) => {
    console.log('📨 Received feedback submission:', req.body);
    const { name, email, feedback, rating } = req.body;

    if (!name || !email || !feedback || !rating) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const feedbackEntry = {
        name,
        email,
        feedback,
        rating,
        status: 'new',
        createdAt: new Date().toISOString()
    };

    try {
        if (db) {
            // Save to Firebase
            await db.collection('feedbacks').add(feedbackEntry);
            console.log('✅ Feedback saved to Firebase');
        } else {
            // Fallback to memory
            feedbackEntry._id = Date.now().toString();
            tempFeedbacks.push(feedbackEntry);
            saveTempStorage();
            console.log('✅ Feedback saved to temporary storage');
        }
        io.emit('new-feedback'); 
    } catch (dbError) {
        console.error('❌ Save error:', dbError);
    }

    notifier.notify({ title: '⭐ New Feedback Received!', message: `From: ${name}\nRating: ${rating}/5`, sound: true, wait: true });

    const transporter = getTransporter();
    if (!transporter) {
        console.log('⚠️ NO EMAIL CREDENTIALS FOUND - RUNNING IN MOCK MODE');
        return res.json({ success: true, message: 'Feedback received (Mock Mode)' });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'aaryakhetan12@gmail.com',
            replyTo: email,
            subject: `New Feedback: ${rating}/5 stars`,
            html: `<h2>⭐ New Feedback Received</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Rating:</strong> ${rating}/5</p><p><strong>Feedback:</strong></p><p>${feedback}</p>`
        });
        console.log('✅ Feedback email sent successfully to owner!');
        res.json({ success: true, message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('❌ ERROR SENDING FEEDBACK EMAIL:', error.message);
        res.status(500).json({ success: false, message: 'Failed to send feedback. Please try again later.' });
    }
});

// Get all feedbacks
app.get('/api/feedbacks', async (req, res) => {
    try {
        if (db) {
            const snapshot = await db.collection('feedbacks').orderBy('createdAt', 'desc').get();
            const feedbacks = snapshot.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
            return res.json(feedbacks);
        }
        res.json(tempFeedbacks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.json(tempFeedbacks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
});

// Update feedback status
app.put('/api/feedbacks/:id', async (req, res) => {
    const { status } = req.body;
    try {
        if (db) {
            await db.collection('feedbacks').doc(req.params.id).update({ status });
            return res.json({ success: true });
        }
        const feedback = tempFeedbacks.find(f => f._id === req.params.id);
        if (feedback) {
            feedback.status = status;
            saveTempStorage();
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false });
        }
    } catch (error) {
        console.error('Error updating feedback:', error);
        res.status(500).json({ success: false });
    }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    console.log('📨 Received contact form submission:', req.body);
    const { name, email, subject, message, phone, company, priority } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const contactEntry = {
        name, email, subject, message, phone, company, priority,
        status: 'new',
        createdAt: new Date().toISOString()
    };

    try {
        if (db) {
            // Save to Firebase
            await db.collection('contacts').add(contactEntry);
            console.log('✅ Contact saved to Firebase');
        } else {
            // Fallback to memory
            contactEntry._id = Date.now().toString();
            tempContacts.push(contactEntry);
            saveTempStorage();
            console.log('✅ Contact saved to temporary storage');
        }
        io.emit('new-contact'); 
    } catch (dbError) {
        console.error('❌ Save error:', dbError);
    }

    notifier.notify({ title: '🚀 New Website Message!', message: `From: ${name}\nSubject: ${subject || 'No Subject'}`, sound: true, wait: true });

    const transporter = getTransporter();
    if (!transporter) {
        console.log('⚠️ NO EMAIL CREDENTIALS FOUND - RUNNING IN MOCK MODE');
        return res.json({ success: true, message: 'Message received (Mock Mode)' });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'aaryakhetan12@gmail.com',
            replyTo: email,
            subject: `New Contact: ${subject || 'No Subject'}`,
            html: `<h2>📧 New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
        });
        console.log('✅ Email sent successfully to owner!');
        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('❌ ERROR SENDING EMAIL', error.message);
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
    }
});

// Get all contacts
app.get('/api/contacts', async (req, res) => {
    try {
        if (db) {
            const snapshot = await db.collection('contacts').orderBy('createdAt', 'desc').get();
            const contacts = snapshot.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
            return res.json(contacts);
        }
        res.json(tempContacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.json(tempContacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
});

// Update contact status
app.put('/api/contacts/:id', async (req, res) => {
    const { status } = req.body;
    try {
        if (db) {
            await db.collection('contacts').doc(req.params.id).update({ status });
            return res.json({ success: true });
        }
        const contact = tempContacts.find(c => c._id === req.params.id);
        if (contact) {
            contact.status = status;
            saveTempStorage();
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false });
        }
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ success: false });
    }
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`
🚀 Backend running on http://localhost:${PORT}
-----------------------------------------------
👉 API Endpoint: http://localhost:${PORT}/api/contact
👉 Mode: ${process.env.EMAIL_USER ? 'Production (Sending Real Emails)' : 'Development (Logging to Console)'}
-----------------------------------------------
    `);
});
