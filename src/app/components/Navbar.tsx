import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ onHome }: { onHome?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact-info' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-3 shadow-lg shadow-purple-50'
        : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              onHome();
            }
          }}
          className="text-2xl font-black tracking-tight text-zinc-900 relative group"
          whileHover={{ scale: 1.05 }}
        >
          SSAARGG<span className="text-[#9333ea] group-hover:animate-pulse">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => onHome?.()}
              className="relative text-sm font-bold text-zinc-600 hover:text-[#9333ea] transition-colors group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9333ea] to-[#4f46e5] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact-form"
            onClick={() => onHome?.()}
            className="relative bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white px-7 py-3 rounded-full text-sm font-bold overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] to-[#4f46e5]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden p-2 text-zinc-900 rounded-xl hover:bg-purple-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-zinc-100 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-zinc-800 hover:text-[#9333ea] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact-form"
                className="bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white px-6 py-4 rounded-2xl text-center font-bold shadow-lg shadow-purple-200"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};