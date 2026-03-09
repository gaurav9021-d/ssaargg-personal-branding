import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Happy Clients', value: 150, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
  ];

  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#4f46e5]"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Decorative animated blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center text-white group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative inline-block">
                  <motion.h3 
                    className="text-6xl md:text-7xl font-black mb-4 tracking-tighter relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <AnimatedCounter end={stat.value} duration={2} delay={index * 0.15 + 0.3} />
                    {stat.suffix}
                  </motion.h3>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 blur-3xl group-hover:bg-white/30 transition-all" />
                </div>
                <p className="text-lg md:text-xl font-bold text-white/90 tracking-tight">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated counter component
const AnimatedCounter = ({ end, duration, delay }: { end: number; duration: number; delay: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animationDuration = duration * 1000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / animationDuration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <>{count}</>;
};