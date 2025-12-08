"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What's the Off Menu delivery process?",
    answer: "Our delivery process is designed to be efficient and transparent. We start with a discovery phase to understand your needs, then move to design concepts, revisions, and final delivery. Throughout the process, you'll have regular check-ins and opportunities for feedback.",
  },
  {
    question: "How does the Monthly Retainer work?",
    answer: "The monthly retainer gives you dedicated design hours each month. This is perfect for ongoing needs like social media assets, website updates, or iterative product design. You get priority scheduling and consistent quality.",
  },
  {
    question: "What if I'm not happy with the work?",
    answer: "Client satisfaction is our top priority. We have a revision process built into every project. If the initial concepts don't hit the mark, we'll work with you to understand why and pivot the direction until you're thrilled with the result.",
  },
  {
    question: "How do I share feedback?",
    answer: "We use collaborative tools like Figma and dedicated project management boards. You can leave comments directly on designs, ensuring clear communication and keeping everything in one place.",
  },
  {
    question: "Is there a limit to how much I can ask for?",
    answer: "For project-based work, the scope is defined upfront. For retainers, we work within the agreed-upon hours. We're transparent about time usage so you always know where you stand.",
  },
  {
    question: "Can we have calls?",
    answer: "Absolutely. While we prioritize async communication for efficiency, we schedule key milestone calls (kickoff, concept review, final handover) to ensure we're perfectly aligned.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default like reference

  return (
    <section className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - CTA Card */}
          <div className="md:col-span-5 lg:col-span-4">
             <div className="sticky top-32 p-8 rounded-[2rem] bg-[#1f1f1f] border border-white/5 flex flex-col items-start h-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 bg-neutral-800 relative">
                     <img 
                       src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
                       alt="Portrait" 
                       className="object-cover w-full h-full grayscale"
                     />
                </div>
                
                <h3 className="text-3xl font-serif font-medium mb-4 leading-tight">Book an intro call</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                    Time to get introduced and explore how Refined can help.
                </p>

                <Button className="bg-[#f5f5f5] text-black hover:bg-white rounded-full px-6 py-6 mb-12 group">
                    Book a Call <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center gap-4 mt-auto w-full pt-8 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0">
                        <Mail size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 mb-1">Do you prefer email communication?</p>
                        <a href="mailto:hello@refined.design" className="text-sm font-medium hover:underline decoration-neutral-500 underline-offset-4">hello@refined.design</a>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-16 leading-tight">
                Frequently <br/>
                <span className="text-neutral-500">asked questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 last:border-0 pb-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                  >
                    <span className="text-xl font-medium font-serif group-hover:text-neutral-300 transition-colors pr-8">
                        {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-all">
                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
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

        </div>
      </div>
    </section>
  );
}
