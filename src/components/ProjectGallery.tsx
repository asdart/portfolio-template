"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Halo",
    category: "Identity, Development",
    description: "Reworking a brand and building a website that grows with it.",
    // Using a gradient or solid color that fits the dark theme but provides contrast
    color: "bg-gradient-to-br from-[#1a4d4d] to-[#0d2626]", 
  },
  {
    id: 2,
    title: "Meridian",
    category: "Identity, Design",
    description: "A fresh identity for a brand that needed clarity and confidence.",
    color: "bg-gradient-to-br from-[#4d3319] to-[#26190d]",
  },
  {
    id: 3,
    title: "Atlas",
    category: "Web Design",
    description: "Digital transformation for a global logistics partner.",
    color: "bg-gradient-to-br from-[#1a334d] to-[#0d1a26]",
  },
  {
    id: 4,
    title: "Voxel",
    category: "3D Art",
    description: "Explaining complex technology through abstract visuals.",
    color: "bg-gradient-to-br from-[#331a4d] to-[#1a0d26]",
  },
];

export function ProjectGallery() {
  return (
    <section id="work" className="py-24 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl md:text-4xl font-serif font-medium">Projects</h2>
            <span className="text-neutral-500 text-sm align-top">({projects.length})</span>
          </div>
          <Link href="/work" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            See all
          </Link>
        </div>

        {/* Projects List - One column layout */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Project Image/Card */}
              <div className={`aspect-[16/10] md:aspect-[16/9] ${project.color} rounded-3xl mb-8 overflow-hidden relative border border-white/5`}>
                 
                 {/* Floating Badge inside image */}
                 <div className="absolute top-6 right-6 z-10">
                    <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-white border border-white/10">
                        {project.category}
                    </span>
                 </div>

                 {/* Center Title in Image (like reference) */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-4 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out">
                        {/* Logo Placeholder */}
                        <div className="w-12 h-12 bg-white rounded-lg opacity-20 rotate-45"></div>
                        <span className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">{project.title}</span>
                    </div>
                 </div>

                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Project Info below image */}
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl md:text-4xl font-serif font-medium group-hover:text-neutral-300 transition-colors">
                    {project.title}
                </h3>
                <p className="text-neutral-500 text-lg max-w-xl leading-relaxed">
                    {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
