import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 100, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block">
              <motion.span 
                className="text-4xl font-black tracking-tighter text-zinc-900"
                whileHover={{ scale: 1.05 }}
              >
                SSAARGG<span className="text-[#9333ea]">.</span>
              </motion.span>
            </a>
            <p className="mt-4 text-zinc-600 font-medium max-w-sm leading-relaxed">
              Elevating brands through high-impact video editing, strategic content writing, and viral social media management.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Github, href: '#', color: 'hover:bg-zinc-800' },
              { icon: Twitter, href: '#', color: 'hover:bg-blue-500' },
              { icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
              { icon: Instagram, href: '#', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.href} 
                className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white border-2 border-zinc-100 text-zinc-400 hover:border-transparent hover:text-white transition-all shadow-sm hover:shadow-lg ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center border-t-2 border-zinc-100 pt-10 text-sm font-semibold text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="flex items-center gap-2">
            © 2026 SSAARGG. Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> in India
          </p>
          <div className="flex gap-8 mt-6 md:mt-0 items-center">
            <motion.a 
              href="#" 
              className="hover:text-zinc-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-zinc-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#9333ea] font-bold hover:gap-3 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={18} className="group-hover:text-[#7e22ce]" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};