"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Logos and brand identity",
    description: "Creating visual identities that make your brand memorable.",
  },
  {
    id: "02",
    title: "3D Product Design",
    description: "Turning complex ideas into 3D digital products people love.",
  },
  {
    id: "03",
    title: "Websites",
    description: "Strategic, beautiful websites that achieve your business goals.",
  },
  {
    id: "04",
    title: "Photography",
    description: "Building scalable design foundations that keep your product consistent and efficient.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Solutions</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We help brands stand out through powerful, elegant visual design.
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border-b border-white/10 pb-12 last:border-0 last:pb-0"
                >
                  <span className="text-sm font-mono text-neutral-500 mb-4 block">{service.id}.</span>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-neutral-300 transition-colors font-serif">{service.title}</h3>
                  <p className="text-neutral-400 max-w-lg leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
