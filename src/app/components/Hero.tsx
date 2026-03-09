import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      {/* Animated gradient orbs - enhanced */}
      <motion.div 
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full blur-[140px] opacity-40"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -40, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-[140px] opacity-40"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional accent orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full blur-[100px] opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating shapes - enhanced */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl backdrop-blur-sm shadow-2xl shadow-purple-500/20"
        animate={{ 
          rotate: [0, 180, 360],
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full backdrop-blur-sm shadow-2xl shadow-blue-500/20"
        animate={{ 
          y: [0, 40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl backdrop-blur-sm shadow-2xl shadow-pink-500/20"
        animate={{ 
          rotate: [0, -180, -360],
          y: [0, -25, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-sm font-bold tracking-widest text-[#9333ea] uppercase bg-white/70 backdrop-blur-xl rounded-full border-2 border-purple-200/50 shadow-2xl shadow-purple-200/50"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(147, 51, 234, 0.25)" }}
            animate={{ 
              boxShadow: [
                "0 10px 30px rgba(147, 51, 234, 0.1)",
                "0 15px 40px rgba(147, 51, 234, 0.2)",
                "0 10px 30px rgba(147, 51, 234, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} />
            </motion.div>
            SSAARGG
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.05] max-w-5xl mx-auto">
            <motion.span 
              className="bg-gradient-to-r from-[#9333ea] via-[#7e22ce] to-[#4f46e5] bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Build Your Brand,
            </motion.span>
            <br />
            <span className="text-zinc-900">Tell Your Story</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Professional video editing, social media management, and content writing services to elevate your digital presence
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#contact-form" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#9333ea] via-[#7e22ce] to-[#4f46e5] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all text-lg group overflow-hidden shadow-2xl shadow-purple-500/50"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] via-[#7e22ce] to-[#9333ea]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={22} />
                </motion.div>
              </span>
            </motion.a>
            
            <motion.a 
              href="#portfolio" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-xl text-zinc-900 border-2 border-purple-200 px-10 py-5 rounded-2xl font-bold hover:bg-white hover:border-purple-300 transition-all text-lg shadow-2xl shadow-purple-100/50 flex items-center gap-2 group"
            >
              <Play size={20} className="group-hover:scale-125 transition-transform" />
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};