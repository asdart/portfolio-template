"use client";

import { Twitter, Instagram, Circle } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white text-center relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-12 tracking-tight leading-[1.2] text-neutral-300">
            Let's create something <br/> awesome together.
        </h2>
        
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8">
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </Link>
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </Link>
          <Link 
            href="#" 
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Other"
          >
            <Circle size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
