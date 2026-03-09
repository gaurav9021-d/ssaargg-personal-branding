import React from 'react';
import { motion } from 'motion/react';
import { Video, Share2, PenTool, CheckCircle2, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white overflow-hidden relative">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_50%)]" />
      
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest text-[#9333ea] uppercase bg-white/80 backdrop-blur-xl rounded-full border-2 border-purple-100 shadow-xl shadow-purple-100/50"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={16} />
            </motion.div>
            What We Offer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent"
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 font-medium leading-relaxed"
          >
            Comprehensive digital solutions to help you stand out in the crowded online space
          </motion.p>
        </div>

        <div className="space-y-32">
          {/* Video Editing */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8 order-2 lg:order-1"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 rounded-[2rem] flex items-center justify-center text-[#9333ea] shadow-2xl shadow-purple-200/50 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <Video size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">Video Editing</h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Transform raw footage into compelling visual stories that captivate your audience and drive engagement across all platforms.
                </p>
                <ul className="space-y-4">
                  {[
                    'Professional color grading and correction',
                    'Motion graphics and visual effects',
                    'Audio mixing and sound design',
                    'Multi-platform format optimization',
                    'Fast turnaround times'
                  ].map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-zinc-700 font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-lg shadow-purple-200/50"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 size={16} className="text-[#9333ea]" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-1 lg:order-2"
            >
              <motion.div 
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-300/50 group border-4 border-white bg-white"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzdHVkaW8lMjB3b3Jrc3RhdGlvbiUyMHByZW1pZXJlJTIwcHJvfGVufDF8fHx8MTc3MDc0NDUwNnww"
                  alt="Video Editing Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-pink-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                {/* Animated border effect */}
                <motion.div 
                  className="absolute inset-0 border-4 border-transparent"
                  whileHover={{ 
                    borderColor: ['rgba(147,51,234,0)', 'rgba(147,51,234,0.5)', 'rgba(147,51,234,0)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Social Media Handling */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <motion.div 
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-300/50 group border-4 border-white bg-white"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758611972975-5b7e6568eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnQlMjBzbWFydHBob25lJTIwZGVza3xlbnwxfHx8fDE3NzA3NDQ1MDZ8MA"
                  alt="Social Media Management"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-cyan-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                <motion.div 
                  className="absolute inset-0 border-4 border-transparent"
                  whileHover={{ 
                    borderColor: ['rgba(59,130,246,0)', 'rgba(59,130,246,0.5)', 'rgba(59,130,246,0)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 rounded-[2rem] flex items-center justify-center text-blue-600 shadow-2xl shadow-blue-200/50 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <Share2 size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">Social Media Handling</h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Build and engage your community with strategic social media management designed to boost your reach and brand authority.
                </p>
                <ul className="space-y-4">
                  {[
                    'Content strategy and planning',
                    'Daily posting and scheduling',
                    'Community engagement and growth',
                    'Analytics and performance tracking',
                    'Influencer collaboration management'
                  ].map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-zinc-700 font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg shadow-blue-200/50"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Content Writing */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8 order-2 lg:order-1"
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 rounded-[2rem] flex items-center justify-center text-pink-600 shadow-2xl shadow-pink-200/50 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <PenTool size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">Content Writing</h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Craft compelling copy that resonates with your audience and drives action across all your digital touchpoints.
                </p>
                <ul className="space-y-4">
                  {[
                    'SEO-optimized blog posts and articles',
                    'Website copy and landing pages',
                    'Email marketing campaigns',
                    'Social media captions and scripts',
                    'Brand voice development'
                  ].map((item, idx) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3 text-zinc-700 font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center shadow-lg shadow-pink-200/50"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle2 size={16} className="text-pink-600" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-1 lg:order-2"
            >
              <motion.div 
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-300/50 group border-4 border-white bg-white"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1753299942901-b1feb2dc52f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjB0eXBld3JpdGVyJTIwc2NyaXB0JTIwd3JpdGluZyUyMHBhcGVyfGVufDF8fHx8MTc3MDc0NDUwNnww"
                  alt="Content Writing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-transparent to-rose-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                <motion.div 
                  className="absolute inset-0 border-4 border-transparent"
                  whileHover={{ 
                    borderColor: ['rgba(236,72,153,0)', 'rgba(236,72,153,0.5)', 'rgba(236,72,153,0)']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};