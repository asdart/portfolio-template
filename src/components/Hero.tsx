"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-40 pb-0 px-4 md:px-6 relative overflow-hidden flex flex-col items-center">
      {/* Unicorn Studio Background Animation */}
      <div 
        data-us-project="oqgvurDfuceNlEnsXYtL" 
        className="absolute top-0 left-0 w-full h-screen z-0"
        style={{ 
          width: '100%', 
          height: '100vh', 
          minHeight: '100vh',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      
      {/* Dark overlay to maintain readability - reduced opacity */}
      <div className="absolute inset-0 bg-[#0a0a0a]/30 z-[1] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-[2] flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight leading-[1] mb-6 text-white">
            Bold thinking, <br />
            <span className="text-neutral-400">Better design.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-lg leading-relaxed">
            Amsterdam-based digital storyteller for worldwide brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#d4f5ce] text-black hover:bg-[#bfeebe] rounded-full px-8 h-12 text-sm font-semibold"
            >
              See work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-[#1f1f1f] text-white border-none hover:bg-[#2a2a2a] hover:text-white rounded-full px-8 h-12 text-sm font-semibold"
            >
              Contact me
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md md:max-w-[560px] aspect-[4/5] md:aspect-square"
        >
          <div className="relative w-full h-full rounded-t-[3rem] overflow-hidden">
             <Image
               src="/images/hero-portrait-2.png"
               alt="Hero Portrait"
               fill
               className="object-cover z-0"
               priority
               sizes="(max-width: 768px) 100vw, 560px"
             />
             {/* Gradient overlay to simulate the dark moody lighting */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-[1]"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-20 z-[2]"></div>
    </section>
  );
}
