"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Jordan P.",
    handle: "@jordanp",
    text: "Alex is a designer who actually listens. Every round of feedback felt understood and reflected in the next version. That kind of collaboration is rare.",
    image: "/avatars/jordan.jpg", // Placeholder
  },
  {
    name: "Juno C.",
    handle: "@juno123",
    text: "Alex just gets it. Clean design, smart structure, and an eye for detail that makes everything feel intentional.",
    image: "/avatars/juno.jpg",
  },
  {
    name: "Nina S.",
    handle: "@ninas95",
    text: "Working with Alex was one of the best creative decisions we made this year. He took our scattered ideas and turned them into a cohesive digital experience that truly represents our brand. The whole process was smooth, transparent, and surprisingly fast.",
    image: "/avatars/nina.jpg",
  },
  {
    name: "Lucas M.",
    handle: "@lucasm",
    text: "Found Alex through one of his Framer templates and was instantly impressed. The final site he built for us feels effortless — light, modern, and exactly on-brand. You can tell he’s obsessed with quality.",
    image: "/avatars/lucas.jpg",
  },
  {
    name: "Marc K",
    handle: "@kuipermarc",
    text: "Our website used to feel clunky and outdated. Alex gave it a total transformation — cleaner layout, faster load time, and a much better mobile experience. Our audience noticed the difference immediately.",
    image: "/avatars/marc.jpg",
  },
  {
    name: "Samantha R.",
    handle: "@samanthar",
    text: "Sharp, reliable, and full of good taste. Alex is the kind of creative you can trust to deliver without micromanaging.",
    image: "/avatars/samantha.jpg",
  },
];

// Split testimonials into two columns
const col1 = [testimonials[0], testimonials[2], testimonials[4]];
const col2 = [testimonials[1], testimonials[3], testimonials[5]];

const Card = ({ data }: { data: typeof testimonials[0] }) => (
  <div className="p-8 bg-[#1f1f1f] rounded-3xl border border-white/5 mb-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-neutral-700 rounded-full overflow-hidden relative">
         {/* Placeholder for avatar image */}
         <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
             {data.name.charAt(0)}
         </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
            <p className="font-bold text-white text-base">{data.name}</p>
            <BadgeCheck size={16} className="text-blue-500 fill-blue-500/20" />
        </div>
        <p className="text-sm text-neutral-500">{data.handle}</p>
      </div>
    </div>
    <p className="text-neutral-300 leading-relaxed font-light">
      {data.text}
    </p>
  </div>
);

export function Testimonials() {
  return (
    <section className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white border-y border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end gap-2 mb-16 border-b border-white/10 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif">What others say</h2>
            <span className="text-neutral-500 mb-1 text-lg">({testimonials.length})</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 h-[800px] overflow-hidden relative mask-gradient">
           {/* Gradient Masks for smooth fade in/out */}
           <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Column 1 - Bottom to Top */}
          <div className="relative">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...col1, ...col1].map((t, i) => (
                <Card key={`col1-${i}`} data={t} />
              ))}
            </motion.div>
          </div>

          {/* Column 2 - Top to Bottom */}
          <div className="relative">
            <motion.div
               animate={{ y: ["-50%", "0%"] }}
               transition={{
                duration: 25, // Slightly different speed for natural feel
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...col2, ...col2].map((t, i) => (
                <Card key={`col2-${i}`} data={t} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
