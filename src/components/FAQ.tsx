"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of digital products do you design?",
    answer: "We specialize in branding, web design, and digital product design including SaaS interfaces and mobile apps.",
  },
  {
    question: "What is your design process like?",
    answer: "Our process is collaborative and iterative. We start with discovery, move to concepting, then refinement, and finally delivery.",
  },
  {
    question: "What is your typical timeline for projects?",
    answer: "Timelines vary by project scope, but a typical branding and website project takes 4-8 weeks.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "We need a clear brief, understanding of your goals, and any existing brand assets or content you have.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif mb-16">Most asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 last:border-0 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className="text-xl font-medium font-serif group-hover:text-neutral-300 transition-colors">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-neutral-500 group-hover:text-white transition-colors">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-400 pb-8 pr-12 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
