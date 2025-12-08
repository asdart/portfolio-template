"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if Unicorn Studio script is already loaded
    const checkUnicornStudio = () => {
      if (typeof window !== 'undefined' && window.UnicornStudio) {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
        setScriptLoaded(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkUnicornStudio()) return;

    // If not loaded, check periodically
    const interval = setInterval(() => {
      if (checkUnicornStudio()) {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-32 pb-0 px-4 md:px-6 relative overflow-hidden flex flex-col items-center">
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
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Branding", "Web Design", "3D Design", "Photography"].map((tag) => (
              <span 
                key={tag} 
                className="bg-[#1f1f1f] text-neutral-300 px-4 py-1.5 rounded-full text-xs font-medium font-sans border border-white/5 hover:bg-[#2a2a2a] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight leading-[1] mb-6 text-white">
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
              Shop products
            </Button>
          </div>
        </motion.div>

        {/* Hero Image / Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md aspect-[4/5] md:aspect-square"
        >
          <div className="absolute inset-0 bg-neutral-900 rounded-t-[3rem] overflow-hidden">
             {/* Gradient overlay to simulate the dark moody lighting */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
             
             {/* Abstract shape or placeholder for the person */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-20"></div>
             </div>
             
             {/* Actual Image Placeholder */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-neutral-800 rounded-t-3xl opacity-50 flex items-center justify-center text-neutral-600">
               <span className="text-sm">Hero Image</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-20 z-[2]"></div>
    </section>
  );
}
