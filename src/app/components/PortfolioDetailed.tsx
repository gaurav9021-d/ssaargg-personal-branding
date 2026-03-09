import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Youtube, MessageSquare, ExternalLink, Play, Hash } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
    title: string;
    description: string;
    image: string;
    tag: string;
    link: string;
}

const ProjectCard = ({ project, color }: { project: Project, color: string }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -10 }}
        className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all shadow-2xl"
    >
        <div className="relative aspect-video overflow-hidden">
            <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60`} />
            <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-${color}-500 text-white`}>
                    {project.tag}
                </span>
            </div>
        </div>
        <div className="p-6">
            <h4 className="text-xl font-black text-white mb-2">{project.title}</h4>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
            <a
                href={project.link}
                className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
            >
                View Work
                <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
        </div>
    </motion.div>
);

export const PortfolioDetailed = ({ onBack }: { onBack: () => void }) => {
    const categories = [
        {
            id: 'instagram',
            name: 'Instagram Growth',
            icon: <Instagram size={24} className="text-pink-500" />,
            color: 'pink',
            description: 'Viral strategies and aesthetic content design for high-engagement accounts.',
            projects: [
                {
                    title: "@snappbugzz",
                    description: "High-performance Instagram growth and content strategy.",
                    tag: "Branding",
                    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
                    link: "https://www.instagram.com/snappybugzz?igsh=NmFwNGQ3dWFsaGtk"
                },
                {
                    title: "Lensed by Gokul",
                    description: "Professional aesthetic photography and brand visual storytelling.",
                    tag: "Photography",
                    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000",
                    link: "https://www.instagram.com/lensedbygokul?igsh=MThzc2NkaGRyejB4cQ=="
                }
            ]
        },
        {
            id: 'youtube',
            name: 'YouTube Mastery',
            icon: <Youtube size={24} className="text-red-500" />,
            color: 'red',
            description: 'Retention-focused editing and strategy for creators.',
            projects: [
                {
                    title: "Tulip Bliss",
                    description: "Creative YouTube content management and editing strategy.",
                    tag: "Production",
                    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000",
                    link: "https://youtube.com/@tulip_bliss?si=RRFQQGDvd8yeefIX"
                }
            ]
        },
        {
            id: 'discord',
            name: 'Discord Communities',
            icon: <MessageSquare size={24} className="text-indigo-500" />,
            color: 'indigo',
            description: 'Custom server architecture and community engagement systems.',
            projects: [
                {
                    title: "Community Alpha Hub",
                    description: "Scale-ready Discord infrastructure for high-engagement communities.",
                    tag: "Architecture",
                    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000",
                    link: "https://discord.gg/t7TA8YPz"
                }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-black text-white pt-32 pb-20 px-6"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-16">
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={onBack}
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-bold mb-8 uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </motion.button>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent">
                        Our Work
                    </h1>
                    <p className="text-xl text-zinc-500 max-w-2xl font-medium">
                        A deep dive into the projects that define my creative journey across high-impact digital platforms.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-32">
                    {categories.map((cat, idx) => (
                        <section key={cat.id} id={cat.id}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white">{cat.name}</h2>
                                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{cat.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {cat.projects.map((p, pIdx) => (
                                    <ProjectCard key={pIdx} project={p} color={cat.color} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Footer Call to Action */}
            <div className="mt-32 text-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    className="bg-zinc-900 rounded-[3rem] p-16 border border-zinc-800"
                >
                    <h2 className="text-4xl font-black mb-6">Inspired by these?</h2>
                    <p className="text-zinc-400 mb-10 max-w-xl mx-auto">Let's create something equally legendary for your brand. Direct message or use the contact form.</p>
                    <motion.button
                        onClick={onBack}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-white text-black font-black rounded-2xl tracking-tight"
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};
