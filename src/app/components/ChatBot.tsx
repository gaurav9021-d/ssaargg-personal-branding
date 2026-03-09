import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm Boot, Aarya's AI brain. 🤖 How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const currentInput = inputValue;
        const userMessage: Message = {
            id: Date.now().toString(),
            text: currentInput,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3001`;
            const response = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: currentInput,
                    history: messages.slice(-5) // Send last few messages for context
                })
            });

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.reply || "I'm having trouble thinking. Try again later!",
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "My connection to the brain is weak. Please check if the backend is running!",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Boot (AI Assistant)</h3>
                                    <p className="text-[10px] text-purple-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Boot is Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-2 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50"
                        >
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${message.sender === 'user'
                                            ? 'bg-purple-600 text-white rounded-tr-none'
                                            : 'bg-white text-zinc-800 shadow-sm border border-zinc-100 rounded-tl-none'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                                            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-zinc-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask Boot anything..."
                                    className="w-full bg-zinc-100 border-none rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-purple-500/20 transition-all outline-none pr-12"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:grayscale"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="mt-2 text-[10px] text-center text-zinc-400 font-medium flex items-center justify-center gap-1">
                                <Sparkles size={10} />
                                Powered by Gemini AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-zinc-900 text-white rotate-90' : 'bg-purple-600 text-white'
                    }`}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>
        </div>
    );
};
