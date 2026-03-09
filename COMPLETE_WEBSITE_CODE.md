# Complete Website Code - SSAARGG Personal Branding Website

This document contains all the code for the complete website.

---

## /src/app/App.tsx

```tsx
import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-purple-100 selection:text-purple-900 scroll-smooth">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <div id="portfolio">
          <Projects />
        </div>
        <Testimonials />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## /src/app/components/Navbar.tsx

```tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact-info" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-3 shadow-lg shadow-purple-50"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-black tracking-tight text-zinc-900 relative group"
          whileHover={{ scale: 1.05 }}
        >
          SSAARGG
          <span className="text-[#9333ea] group-hover:animate-pulse">
            .
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
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
            className="relative bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white px-7 py-3 rounded-full text-sm font-bold overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] to-[#4f46e5]"
              initial={{ x: "-100%" }}
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
            animate={{ opacity: 1, height: "auto" }}
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
    </motion.nav>
  );
};
```

---

## /src/app/components/Hero.tsx

```tsx
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

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
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-[140px] opacity-40"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional accent orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full blur-[100px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating shapes - enhanced */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl backdrop-blur-sm shadow-2xl shadow-purple-500/20"
        animate={{
          rotate: [0, 180, 360],
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full backdrop-blur-sm shadow-2xl shadow-blue-500/20"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-2xl backdrop-blur-sm shadow-2xl shadow-pink-500/20"
        animate={{
          rotate: [0, -180, -360],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(147, 51, 234, 0.25)",
            }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(147, 51, 234, 0.1)",
                "0 15px 40px rgba(147, 51, 234, 0.2)",
                "0 10px 30px rgba(147, 51, 234, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles size={16} />
            </motion.div>
            SSAARGG
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.05] max-w-5xl mx-auto">
            <motion.span
              className="bg-gradient-to-r from-[#9333ea] via-[#7e22ce] to-[#4f46e5] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Build Your Brand,
            </motion.span>
            <br />
            <span className="text-zinc-900">
              Tell Your Story
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Professional video editing, social media management,
            and content writing services to elevate your digital
            presence
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
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
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
              <Play
                size={20}
                className="group-hover:scale-125 transition-transform"
              />
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
```

---

## /src/app/components/Services.tsx

```tsx
import React from "react";
import { motion } from "motion/react";
import {
  Video,
  Share2,
  PenTool,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Services = () => {
  return (
    <section
      id="services"
      className="py-32 bg-white overflow-hidden relative"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.05),transparent_50%)]" />

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
            Comprehensive digital solutions to help you stand
            out in the crowded online space
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
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Video size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">
                  Video Editing
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Transform raw footage into compelling visual
                  stories that captivate your audience and drive
                  engagement across all platforms.
                </p>
                <ul className="space-y-4">
                  {[
                    "Professional color grading and correction",
                    "Motion graphics and visual effects",
                    "Audio mixing and sound design",
                    "Multi-platform format optimization",
                    "Fast turnaround times",
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
                        <CheckCircle2
                          size={16}
                          className="text-[#9333ea]"
                        />
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
                    borderColor: [
                      "rgba(147,51,234,0)",
                      "rgba(147,51,234,0.5)",
                      "rgba(147,51,234,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
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
                    borderColor: [
                      "rgba(59,130,246,0)",
                      "rgba(59,130,246,0.5)",
                      "rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
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
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Share2 size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">
                  Social Media Handling
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Build and engage your community with strategic
                  social media management designed to boost your
                  reach and brand authority.
                </p>
                <ul className="space-y-4">
                  {[
                    "Content strategy and planning",
                    "Daily posting and scheduling",
                    "Community engagement and growth",
                    "Analytics and performance tracking",
                    "Influencer collaboration management",
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
                        <CheckCircle2
                          size={16}
                          className="text-blue-600"
                        />
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
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <PenTool size={40} className="relative z-10" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-black mb-4 text-zinc-900">
                  Content Writing
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Craft compelling copy that resonates with your
                  audience and drives action across all your
                  digital touchpoints.
                </p>
                <ul className="space-y-4">
                  {[
                    "SEO-optimized blog posts and articles",
                    "Website copy and landing pages",
                    "Email marketing campaigns",
                    "Social media captions and scripts",
                    "Brand voice development",
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
                        <CheckCircle2
                          size={16}
                          className="text-pink-600"
                        />
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
                    borderColor: [
                      "rgba(236,72,153,0)",
                      "rgba(236,72,153,0.5)",
                      "rgba(236,72,153,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## /src/app/components/Stats.tsx

```tsx
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: 500, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
  ];

  return (
    <section
      id="stats"
      className="py-32 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#4f46e5]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Decorative animated blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
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
                    transition={{
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      duration={2}
                      delay={index * 0.15 + 0.3}
                    />
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
const AnimatedCounter = ({
  end,
  duration,
  delay,
}: {
  end: number;
  duration: number;
  delay: number;
}) => {
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
      const progress = Math.min(
        (currentTime - startTime) / animationDuration,
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <>{count}</>;
};
```

---

## /src/app/components/Projects.tsx

```tsx
import React from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Projects = () => {
  const projects = [
    {
      title: "YouTube Masterclass Edit",
      category: "Video Editing • Retention Strategy",
      image:
        "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzdHVkaW8lMjB3b3Jrc3RhdGlvbiUyMHByZW1pZXJlJTIwcHJvfGVufDF8fHx8MTc3MDc0NDUwNnww",
      link: "#",
      color: "purple",
    },
    {
      title: "Brand Viral Campaign",
      category: "Social Media • Creative Direction",
      image:
        "https://images.unsplash.com/photo-1758611972975-5b7e6568eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnQlMjBzbWFydHBob25lJTIwZGVza3xlbnwxfHx8fDE3NzA3NDQ1MDZ8MA",
      link: "#",
      color: "blue",
    },
    {
      title: "Short Film Script",
      category: "Script Writing • Storytelling",
      image:
        "https://images.unsplash.com/photo-1753299942901-b1feb2dc52f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjB0eXBld3JpdGVyJTIwc2NyaXB0JTIwd3JpdGluZyUyMHBhcGVyfGVufDF8fHx8MTc3MDc0NDUwNnww",
      link: "#",
      color: "pink",
    },
  ];

  const colorClasses = {
    purple: "from-purple-600/95 to-purple-800/95",
    blue: "from-blue-600/95 to-blue-800/95",
    pink: "from-pink-600/95 to-pink-800/95",
  };

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements - enhanced */}
      <motion.div
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.2, 0.15],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles
                  className="text-[#9333ea]"
                  size={24}
                />
              </motion.div>
              <span className="text-[#9333ea] font-black tracking-[0.2em] uppercase text-sm">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
              Selected Works
            </h2>
          </motion.div>
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold px-6 py-3 rounded-xl border-2 border-zinc-800 hover:border-purple-500 hover:bg-purple-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            View All Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <motion.div
                className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-2xl shadow-black/50 border-2 border-zinc-800/50 hover:border-white/20"
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay with animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.link}
                    className="w-16 h-16 bg-white text-zinc-900 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: [0, 1],
                      rotate: [-180, 0],
                    }}
                    transition={{ delay: 0.1 }}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-16 h-16 bg-white text-zinc-900 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: [0, 1],
                      rotate: [180, 0],
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <Github size={24} />
                  </motion.a>
                </motion.div>
                {/* Animated border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem]"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(147,51,234,0)",
                      "0 0 0 4px rgba(147,51,234,0.3)",
                      "0 0 0 0px rgba(147,51,234,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.h3
                className="text-2xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-zinc-500 font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                <motion.span
                  className="w-2 h-2 rounded-full bg-purple-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
```

---

## /src/app/components/Testimonials.tsx

```tsx
import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Tech Startup Founder",
      content:
        "Exceptional video editing that transformed our product demos. The attention to detail and quick turnaround exceeded all expectations!",
      rating: 5,
      avatar: "PS",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Rahul Verma",
      role: "Content Creator",
      content:
        "My social media engagement skyrocketed after working with SSAARGG. Professional, creative, and truly understands digital trends.",
      rating: 5,
      avatar: "RV",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Anjali Desai",
      role: "E-commerce Business Owner",
      content:
        "The content writing service gave our brand a unique voice. SEO results have been incredible - highly recommended!",
      rating: 5,
      avatar: "AD",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden">
      {/* Background decoration - enhanced */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Quote size={24} className="text-[#9333ea]" />
                </motion.div>

                {/* Stars with stagger animation */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map(
                    (_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          rotate: -180,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Star
                          size={20}
                          fill="#9333ea"
                          className="text-[#9333ea]"
                        />
                      </motion.div>
                    ),
                  )}
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
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">
                      {testimonial.avatar}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-black text-zinc-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-zinc-500 font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## /src/app/components/ContactInfo.tsx

```tsx
import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "aaryakhetan12@gmail.com",
      href: "mailto:aaryakhetan12@gmail.com",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 80871 23809",
      href: "tel:+918087123809",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, India",
      href: "https://maps.google.com/?q=Nagpur,India",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section
      id="contact-info"
      className="py-32 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Background decoration - enhanced */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
                      "0 0 0 0px rgba(147, 51, 234, 0)",
                      "0 0 0 10px rgba(147, 51, 234, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-zinc-50 to-zinc-100 group-hover:from-white group-hover:to-white rounded-[2rem] flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all relative overflow-hidden"
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <item.icon
                      size={40}
                      className="text-zinc-900 group-hover:text-zinc-900 relative z-10"
                    />
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
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowUpRight
                      size={22}
                      className="text-zinc-900 group-hover:text-white"
                    />
                  </motion.div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## /src/app/components/ContactForm.tsx

```tsx
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Send, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success(
      "Message sent successfully! I will get back to you within 24 hours.",
    );
    reset();
  };

  return (
    <section
      id="contact-form"
      className="py-32 bg-gradient-to-b from-white to-zinc-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
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
                    {...register("name", { required: true })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs px-2 font-semibold">
                      This field is required
                    </p>
                  )}
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
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs px-2 font-semibold">
                      Valid email is required
                    </p>
                  )}
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
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Subject
                </label>
                <motion.input
                  {...register("subject", { required: true })}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 placeholder:text-zinc-400"
                  placeholder="How can I help you?"
                  whileFocus={{ scale: 1.01 }}
                />
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
                  Message
                </label>
                <motion.textarea
                  {...register("message", { required: true })}
                  rows={6}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 hover:border-purple-200 rounded-2xl px-6 py-5 focus:ring-0 focus:border-purple-500 transition-all font-semibold text-zinc-900 resize-none placeholder:text-zinc-400"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 50px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative w-full bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white font-black py-6 rounded-2xl transition-all text-xl tracking-tight overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message Now
                  <Send
                    size={22}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] to-[#4f46e5]"
                  initial={{ x: "-100%" }}
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
```

---

## /src/app/components/Footer.tsx

```tsx
import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
              Elevating brands through high-impact video
              editing, strategic content writing, and viral
              social media management.
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
              {
                icon: Github,
                href: "#",
                color: "hover:bg-zinc-800",
              },
              {
                icon: Twitter,
                href: "#",
                color: "hover:bg-blue-500",
              },
              {
                icon: Linkedin,
                href: "#",
                color: "hover:bg-blue-600",
              },
              {
                icon: Instagram,
                href: "#",
                color:
                  "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
              },
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
            © 2026 SSAARGG. Made with{" "}
            <Heart
              size={16}
              className="text-red-500 fill-red-500 animate-pulse"
            />{" "}
            in India
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
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp
                  size={18}
                  className="group-hover:text-[#7e22ce]"
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
```

---

## Package Dependencies

```json
{
  "dependencies": {
    "motion": "^latest",
    "react-hook-form": "7.55.0",
    "sonner": "^latest",
    "lucide-react": "^latest"
  }
}
```

---

## Notes

- All images use `ImageWithFallback` component from `/src/app/components/figma/ImageWithFallback.tsx`
- The website uses Motion (Framer Motion) for all animations
- Color scheme: Purple gradient (#9333ea, #7e22ce, #4f46e5)
- Contact details: aaryakhetan12@gmail.com, +91 80871 23809, Nagpur, India
- Brand name: SSAARGG

---

End of Complete Website Code Documentation