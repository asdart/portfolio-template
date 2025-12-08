"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Turning critique into creative opportunities",
    date: "Oct 24, 2025",
    readTime: "2 min",
  },
  {
    title: "Creating compelling narratives through design",
    date: "Oct 20, 2025",
    readTime: "4 min",
  },
  {
    title: "Tools and techniques for better productivity",
    date: "Oct 8, 2025",
    readTime: "1 min",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-7xl">
         <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-4xl font-serif">From the blog</h2>
          <Link href="/blog" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            See all <ArrowUpRight size={16} />
          </Link>
        </div>
        
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
                <Link href="#" className="group block border-b border-white/10 pb-8 last:border-0 hover:bg-white/5 p-6 -mx-6 rounded-3xl transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-serif font-medium group-hover:text-neutral-300 transition-colors">
                            {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-neutral-500 font-mono">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
