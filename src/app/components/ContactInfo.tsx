import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'aaryakhetan12@gmail.com',
      href: 'mailto:aaryakhetan12@gmail.com',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 80871 23809',
      href: 'tel:+918087123809',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'Nagpur, India',
      href: 'https://maps.google.com/?q=Nagpur,India',
      color: 'from-pink-500 to-pink-600'
    },
  ];

  return (
    <section id="contact-info" className="py-32 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      {/* Background decoration - enhanced */}
      <motion.div 
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest text-[#9333ea] uppercase bg-white/80 backdrop-blur-xl rounded-full border-2 border-purple-200 shadow-2xl shadow-purple-200/50"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail size={16} />
            </motion.div>
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent"
          >
            Contact Information
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            Feel free to reach out via any of these channels
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactDetails.map((item, index) => (
            <motion.a 
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              {/* Card with glassmorphism effect */}
              <div className="relative p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border-2 border-zinc-100 hover:border-transparent transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-3xl">
                {/* Gradient background on hover - enhanced */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />
                
                {/* Animated ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem]"
                  animate={{
                    boxShadow: [
                      '0 0 0 0px rgba(147, 51, 234, 0)',
                      '0 0 0 10px rgba(147, 51, 234, 0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-zinc-50 to-zinc-100 group-hover:from-white group-hover:to-white rounded-[2rem] flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <item.icon size={40} className="text-zinc-900 group-hover:text-zinc-900 relative z-10" />
                  </motion.div>
                  
                  <p className="text-sm text-zinc-400 group-hover:text-white/90 font-black uppercase tracking-widest mb-3 transition-colors">
                    {item.label}
                  </p>
                  
                  <p className="text-xl font-black text-zinc-900 group-hover:text-white transition-colors mb-4">
                    {item.value}
                  </p>
                  
                  {/* Arrow icon with pulse effect */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-zinc-100 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.3 }}
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowUpRight size={22} className="text-zinc-900 group-hover:text-white" />
                  </motion.div>
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};