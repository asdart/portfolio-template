"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Guidy",
    type: "Brand Book Template",
    price: "$99",
    color: "bg-gradient-to-br from-[#1a4d4d] to-[#0d2626]",
  },
  {
    id: 2,
    title: "Feature",
    type: "SaaS Template",
    price: "Free",
    color: "bg-gradient-to-br from-[#1a334d] to-[#0d1a26]",
  },
  {
    id: 3,
    title: "Keynote",
    type: "Presentation Kit",
    price: "$49",
    color: "bg-gradient-to-br from-[#331a4d] to-[#1a0d26]",
  },
];

export function DigitalGoods() {
  return (
    <section id="shop" className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-4xl font-serif">Digital goods</h2>
          <Link href="/shop" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            See all <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-square ${product.color} rounded-3xl mb-6 relative overflow-hidden border border-white/5`}>
                 <div className="absolute inset-0 flex items-center justify-center text-white/30 group-hover:text-white/50 transition-colors">
                    <span className="text-3xl font-serif font-bold">{product.title}</span>
                 </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium font-serif">{product.title}</h3>
                <span className="text-sm font-medium bg-white/10 text-white px-3 py-1 rounded-full border border-white/5">{product.price}</span>
              </div>
              <p className="text-neutral-500 text-sm mb-6">{product.type}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-[#1f1f1f] text-white border-none hover:bg-[#2a2a2a] hover:text-white rounded-full h-10"
              >
                Purchase
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
