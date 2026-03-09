import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Tech Startup Founder',
      content: 'Exceptional video editing that transformed our product demos. The attention to detail and quick turnaround exceeded all expectations!',
      rating: 5,
      avatar: 'PS',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Rahul Verma',
      role: 'Content Creator',
      content: 'My social media engagement skyrocketed after working with SSAARGG. Professional, creative, and truly understands digital trends.',
      rating: 5,
      avatar: 'RV',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Anjali Desai',
      role: 'E-commerce Business Owner',
      content: 'The content writing service gave our brand a unique voice. SEO results have been incredible - highly recommended!',
      rating: 5,
      avatar: 'AD',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden">
      {/* Background decoration - enhanced */}
      <motion.div 
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-[140px]"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -60, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, 40, 0]
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
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Star size={16} fill="#9333ea" />
            </motion.div>
            Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 font-medium"
          >
            Trusted by creators and businesses worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border-2 border-zinc-100 hover:border-purple-200 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-purple-200/30 overflow-hidden">
                {/* Gradient glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Quote icon with animation */}
                <motion.div 
                  className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity shadow-lg"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Quote size={24} className="text-[#9333ea]" />
                </motion.div>

                {/* Stars with stagger animation */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Star size={20} fill="#9333ea" className="text-[#9333ea]" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-700 leading-relaxed mb-8 font-medium relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-black text-lg shadow-2xl relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">{testimonial.avatar}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-black text-zinc-900">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};