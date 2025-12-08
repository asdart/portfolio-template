"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-16">Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-[#1f1f1f] border border-white/5 flex flex-col"
          >
            <div className="mb-8">
                <h3 className="text-2xl font-serif font-medium mb-2">Per project</h3>
                <p className="text-neutral-400">For clients seeking a professionally designed website with no recurring costs.</p>
            </div>
            
            <div className="mb-10">
                <p className="text-sm text-neutral-500 mb-1">From</p>
                <p className="text-5xl md:text-6xl font-serif text-white">$5000<span className="text-xl text-neutral-500 font-sans font-normal ml-2">/project</span></p>
            </div>

            <Button className="w-full mb-10 bg-[#d4f5ce] text-black hover:bg-[#bfeebe] rounded-full h-14 text-base font-semibold" size="lg">Book a call</Button>

            <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-[#d4f5ce]" /> One-time investment
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-[#d4f5ce]" /> Full ownership
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-[#d4f5ce]" /> Get all the design files
                </li>
            </ul>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
             className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 flex flex-col relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             
            <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-serif font-medium mb-2">Monthly</h3>
                <p className="text-neutral-400">For clients who want ongoing design updates and support.</p>
            </div>
            
            <div className="mb-10 relative z-10">
                <p className="text-sm text-neutral-500 mb-1">From</p>
                <p className="text-5xl md:text-6xl font-serif text-white">$2500<span className="text-xl text-neutral-500 font-sans font-normal ml-2">/month</span></p>
            </div>

            <Button className="w-full mb-10 bg-white text-black hover:bg-neutral-200 rounded-full h-14 text-base font-semibold relative z-10" size="lg">Book a call</Button>

            <ul className="space-y-4 mt-auto relative z-10">
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-white" /> Lower upfront cost
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-white" /> Monthly updates and support
                </li>
                <li className="flex items-center gap-3 text-neutral-400">
                    <Check size={18} className="text-white" /> Easily add new features
                </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
