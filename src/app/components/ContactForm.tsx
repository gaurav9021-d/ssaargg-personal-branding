import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { Send, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // BACKEND OPTIONS - Choose one:

  /* 
  // OPTION 1: Web3Forms (Easiest - No signup, free unlimited)
  // Get your access key from: https://web3forms.com
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      const formData = {
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replace with your key from web3forms.com
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        from_name: 'SSAARGG Website Contact Form'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        toast.success('Message sent successfully! I will get back to you within 24 hours.');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  */

  /* 
  // OPTION 2: Formspree (50 submissions/month free)
  // Sign up at: https://formspree.io
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        toast.success('Message sent successfully! I will get back to you within 24 hours.');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  */

  // OPTION 4: MongoDB Backend (Recommended - Full solution with database)
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3001`;
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! I will get back to you within 24 hours.');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-32 bg-gradient-to-b from-white to-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest text-[#9333ea] uppercase bg-white rounded-full border border-purple-200 shadow-lg"
          >
            <MessageSquare size={16} />
            Get Started
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent"
          >
            Send a Message
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            Have a project in mind? Drop me a line below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-purple-100 border-2 border-zinc-100 hover:border-purple-200 transition-all duration-500"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Your Name
                  </label>
                  <motion.input
                    {...register('name', { required: true })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.name && <p className="text-red-500 text-xs px-2 font-semibold">This field is required</p>}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Your Email
                  </label>
                  <motion.input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.email && <p className="text-red-500 text-xs px-2 font-semibold">Valid email is required</p>}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Phone (Optional)
                  </label>
                  <motion.input
                    {...register('phone')}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="+1 (555) 123-4567"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Company (Optional)
                  </label>
                  <motion.input
                    {...register('company')}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="Acme Inc."
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Priority
                </label>
                <motion.select
                  {...register('priority')}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900"
                  whileFocus={{ scale: 1.01 }}
                  defaultValue="medium"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </motion.select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Subject
                </label>
                <motion.input
                  {...register('subject', { required: true })}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                  placeholder="How can I help you?"
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.subject && <p className="text-red-500 text-xs px-2 font-semibold">This field is required</p>}
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Message
                </label>
                <motion.textarea
                  {...register('message', { required: true })}
                  rows={6}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 resize-none placeholder:text-zinc-400"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.message && <p className="text-red-500 text-xs px-2 font-semibold">This field is required</p>}
              </motion.div>

              <motion.button

                whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-black py-6 rounded-2xl transition-all text-xl tracking-tight overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'Sending...' : 'Send Message Now'}
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] to-[#4f46e5]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};