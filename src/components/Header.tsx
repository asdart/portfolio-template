"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, ShoppingBag, PenTool, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "#work", label: "Work", icon: PenTool },
  { href: "#shop", label: "Shop", icon: ShoppingBag },
  { href: "#blog", label: "Blog", icon: Mail }, // Using Mail as placeholder for Blog/Contact mix
  { href: "#about", label: "About", icon: User },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating Dock Navigation */}
      <nav className={cn(
        "flex items-center gap-2 p-2 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10",
        isScrolled ? "bg-black/80 shadow-lg shadow-black/20" : "bg-[#1f1f1f]/80"
      )}>
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative p-3 text-neutral-400 hover:text-white transition-colors group rounded-full hover:bg-white/10"
            >
              <Icon size={20} />
              <span className="sr-only">{link.label}</span>
              
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
