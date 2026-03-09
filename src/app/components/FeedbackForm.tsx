import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { Send, MessageCircle, Star } from 'lucide-react';

export const FeedbackForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(5);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3001`;
      const response = await fetch(`${apiUrl}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, rating })
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Thank you for your feedback! We appreciate your input.');
        reset();
        setRating(5);
      } else {
        toast.error('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]"
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
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest text-[#9333ea] uppercase bg-white rounded-full border-2 border-blue-200 shadow-lg"
          >
            <MessageCircle size={16} />
            Share Your Feedback
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent"
          >
            Your Feedback Matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            Help us improve by sharing your experience
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-100 border-2 border-zinc-100 hover:border-blue-200 transition-all duration-500"
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
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Your Name
                  </label>
                  <motion.input
                    {...register('name', { required: true })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-blue-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-blue-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
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
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Your Email
                  </label>
                  <motion.input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-blue-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-blue-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.email && <p className="text-red-500 text-xs px-2 font-semibold">Valid email is required</p>}
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Rating
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-2 transition-all"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star
                        size={28}
                        className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"}
                        fill={star <= rating ? "#facc15" : "none"}
                      />
                    </motion.button>
                  ))}
                </div>
                <input type="hidden" {...register('rating')} value={rating} />
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-sm font-black text-zinc-900 uppercase tracking-widest px-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Your Feedback
                </label>
                <motion.textarea
                  {...register('feedback', { required: true })}
                  rows={6}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-blue-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-blue-500 transition-all font-semibold text-zinc-900 resize-none placeholder:text-zinc-400"
                  placeholder="Share your experience with us..."
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.feedback && <p className="text-red-500 text-xs px-2 font-semibold">This field is required</p>}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-black py-6 rounded-2xl transition-all text-xl tracking-tight overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1e40af]"
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
