# 📋 Common Edits - Copy & Paste Examples

## 1. Change Your Brand Name

**File**: `All files`
**Method**: Find & Replace

```
Find: SSAARGG
Replace: YOUR BRAND NAME
```

Press `Ctrl+Shift+H` and replace all instances.

---

## 2. Update Contact Information

**File**: `src/app/components/ContactInfo.tsx`

### Change Email (Lines 7-12)
```tsx
{ 
  icon: Mail, 
  label: 'Email', 
  value: 'youremail@example.com',  // ← Change this
  href: 'mailto:youremail@example.com',  // ← And this
  color: 'from-purple-500 to-purple-600'
},
```

### Change Phone (Lines 13-19)
```tsx
{ 
  icon: Phone, 
  label: 'Phone', 
  value: '+1 234 567 8900',  // ← Change this
  href: 'tel:+12345678900',  // ← And this
  color: 'from-blue-500 to-blue-600'
},
```

### Change Location (Lines 20-26)
```tsx
{ 
  icon: MapPin, 
  label: 'Location', 
  value: 'Your City, Country',  // ← Change this
  href: 'https://maps.google.com/?q=YourCity,Country',  // ← And this
  color: 'from-pink-500 to-pink-600'
},
```

---

## 3. Change Hero Section Text

**File**: `src/app/components/Hero.tsx`

### Main Headline (Line 61-65)
```tsx
<h1>
  <motion.span>
    Your Main  // ← Change this
  </motion.span>
  <br />
  <span>Headline Here</span>  // ← Change this
</h1>
```

### Subheadline (Line 68-71)
```tsx
<p>
  Your description or tagline goes here.  // ← Change this
  You can write anything you want about your services.
</p>
```

---

## 4. Modify Service Sections

**File**: `src/app/components/Services.tsx`

### Change Service Title
Find (around line 59):
```tsx
<h3>Video Editing</h3>  // ← Change to your service name
```

### Change Service Description
Find (around line 60-62):
```tsx
<p>
  Your service description here.  // ← Change this text
</p>
```

### Modify Service Features List
Find (around lines 64-70):
```tsx
{[
  'Feature 1',  // ← Edit these
  'Feature 2',
  'Feature 3',
  'Feature 4',
  'Feature 5'
].map((item, idx) => (
```

---

## 5. Update Statistics

**File**: `src/app/components/Stats.tsx`

### Change Stats (Lines 5-10)
```tsx
const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+' },  // ← Change these
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];
```

---

## 6. Modify Project Cards

**File**: `src/app/components/Projects.tsx`

### Add/Edit Projects (Lines 7-28)
```tsx
const projects = [
  {
    title: 'Your Project Name',  // ← Edit
    category: 'Project Type • Category',  // ← Edit
    image: 'your-image-url-here',  // ← Edit
    link: '#',
    color: 'purple'  // purple, blue, or pink
  },
  // Copy and paste to add more projects
];
```

---

## 7. Edit Testimonials

**File**: `src/app/components/Testimonials.tsx`

### Change Testimonials (Lines 6-27)
```tsx
const testimonials = [
  {
    name: 'Client Name',  // ← Edit
    role: 'Their Position',  // ← Edit
    content: 'Their testimonial quote here',  // ← Edit
    rating: 5,  // 1-5
    avatar: 'CN',  // Initials
    gradient: 'from-purple-500 to-pink-500'
  },
  // Copy and paste to add more testimonials
];
```

---

## 8. Update Footer Social Links

**File**: `src/app/components/Footer.tsx`

### Social Links (Lines 50-54)
```tsx
{[
  { icon: Github, href: 'https://github.com/yourname', color: 'hover:bg-zinc-800' },
  { icon: Twitter, href: 'https://twitter.com/yourname', color: 'hover:bg-blue-500' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourname', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: 'https://instagram.com/yourname', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
].map((social, idx) => (
```

### Copyright Text (Line 81)
```tsx
<p>
  © 2026 YOUR BRAND. Made with ❤️ in Your Country  // ← Edit
</p>
```

---

## 9. Change Navigation Menu

**File**: `src/app/components/Navbar.tsx`

### Menu Links (Lines 17-22)
```tsx
const navLinks = [
  { name: 'Services', href: '#services' },  // ← Edit
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Stats', href: '#stats' },
  { name: 'Contact', href: '#contact-info' },
  // Add more: { name: 'About', href: '#about' },
];
```

---

## 10. Change Color Scheme

### Option A: Find & Replace (All Purple)
```
Find: #9333ea
Replace: #3b82f6  (for blue) or #ef4444 (for red)
```

### Option B: Find & Replace (All Colors)
```
Find: from-purple-    Replace: from-blue-
Find: to-purple-      Replace: to-blue-
Find: bg-purple-      Replace: bg-blue-
Find: text-purple-    Replace: text-blue-
Find: border-purple-  Replace: border-blue-
```

---

## 11. Add a New Section

### Step 1: Create File
Create: `src/app/components/NewSection.tsx`

### Step 2: Copy This Template
```tsx
import React from 'react';
import { motion } from 'motion/react';

export const NewSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-6 text-center"
        >
          Your Section Title
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-center max-w-3xl mx-auto"
        >
          Your section content goes here.
        </motion.p>
      </div>
    </section>
  );
};
```

### Step 3: Add to App.tsx
```tsx
// Add import at top
import { NewSection } from './components/NewSection';

// Add in the return statement where you want it
<NewSection />
```

---

## 12. Remove a Section

### Step 1: Open App.tsx
Find the section you want to remove:
```tsx
<Testimonials />  // ← Delete this entire line
```

### Step 2: Remove Import (Optional)
At the top of App.tsx, remove:
```tsx
import { Testimonials } from './components/Testimonials';  // ← Delete this line
```

---

## 13. Change Button Text

### Hero Section Buttons
**File**: `src/app/components/Hero.tsx`

```tsx
// Line 79
Get Started  // ← Change to "Start Now", "Book Now", etc.

// Line 98
View Portfolio  // ← Change to "See Work", "My Work", etc.
```

### Contact Form Button
**File**: `src/app/components/ContactForm.tsx`

```tsx
// Line 154
Send Message Now  // ← Change to "Submit", "Send", etc.
```

---

## 14. Modify Animation Speed

### Slower Animations
Find any `duration:` value and increase it:
```tsx
transition={{ duration: 0.3 }}  // Fast
transition={{ duration: 1.0 }}  // Slower
```

### Remove Animations
Remove the entire `motion.*` wrapper:
```tsx
// Before
<motion.div animate={{ ... }}>Content</motion.div>

// After
<div>Content</div>
```

---

## 15. Add Your Own Images

### Replace Unsplash Images
Find any image URL like this:
```tsx
src="https://images.unsplash.com/photo-..."
```

Replace with:
```tsx
src="https://your-image-hosting.com/image.jpg"
// or
src="/images/your-local-image.jpg"
```

---

## Quick Copy-Paste: Complete Contact Card

Add this to `ContactInfo.tsx` contactDetails array:
```tsx
{ 
  icon: Globe,  // Add: import { Globe } from 'lucide-react';
  label: 'Website', 
  value: 'www.yoursite.com',
  href: 'https://yoursite.com',
  color: 'from-green-500 to-emerald-600'
},
```

---

## Quick Copy-Paste: Add WhatsApp Link

In `ContactInfo.tsx`:
```tsx
{ 
  icon: MessageCircle,  // Add: import { MessageCircle } from 'lucide-react';
  label: 'WhatsApp', 
  value: '+1 234 567 8900',
  href: 'https://wa.me/12345678900',  // Replace with your number
  color: 'from-green-500 to-green-600'
},
```

---

**Pro Tip**: Always save your file with `Ctrl+S` after making changes, and the browser will auto-refresh to show your updates! 🎉
