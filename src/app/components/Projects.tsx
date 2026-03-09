import React from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Projects = ({ onViewAll }: { onViewAll?: () => void }) => {
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
        "https://images.unsplash.com/photo-1753299942901-b1feb2dc52f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjB0eXBld3RpdGVyJTIwc2NyaXB0JTIwd3JpdGluZyUyMHBhcGVyfGVufDF8fHx8MTc3MDc0NDUwNnww",
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
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              onViewAll?.();
            }}
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