"use client";

import { Quote } from "lucide-react";

const testimonials = {
  col1: [
    {
      text: "The instant setup let our team start tracking KPIs in minutes, not days. It changed how we plan every sprint.",
      name: "Aisha Green",
      role: "Head of Business Intelligence",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "Reporting is effortless now. Our team shares concise insights in seconds—no confusion, no wasted time.",
      name: "Priya Patel",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "From trial to rollout took under a week. Dashboards finally match how our teams actually work.",
      name: "Jonas Weber",
      role: "Operations Lead",
      image: "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=256&auto=format&fit=crop",
    },
  ],
  col2: [
    {
      text: "Clear, trustworthy reports across the org—security included. We cut weekly review time by 62%.",
      name: "Michael Chen",
      role: "IT Security Lead",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "Integrations were seamless. No extra IT tickets, and we saved 120+ hours in the first quarter.",
      name: "Rachel Adams",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "Support is outstanding. Every question had a thoughtful answer within minutes.",
      name: "Liam O'Connor",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
    },
  ],
  col3: [
    {
      text: "Switching platforms was our best decision this year—intuitive, secure, and measurable results.",
      name: "Carlos Rivera",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "Transparency removed all doubt. We always know where metrics stand and what to do next.",
      name: "Sofia Martinez",
      role: "Analytics Lead",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop",
    },
    {
      text: "Predictive models helped us spot trends early and act faster. It's like a compass for growth.",
      name: "Noah Bennett",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
    },
  ],
};

const TestimonialCard = ({ text, name, role, image }: { text: string; name: string; role: string; image: string }) => (
  <article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70">
    <blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
      <span className="flex items-start gap-2">
        <Quote className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
        {text}
      </span>
    </blockquote>
    <div className="mt-5 flex items-center gap-3">
      <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src={image} alt={name} />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-neutral-400">{role}</div>
      </div>
    </div>
  </article>
);

export function Testimonials() {
  return (
    <section className="py-32 px-4 md:px-6 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto pr-4 pl-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6 gap-6">
          <h2 className="text-3xl md:text-4xl font-serif max-w-2xl">
            Real stories from teams who transformed their design.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-12 gap-x-6 gap-y-6"
          style={{
            maskImage: "linear-gradient(180deg, transparent, black 45%, black 45%, transparent)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 45%, black 45%, transparent)",
          }}
        >
          {/* Column 1 - Scroll Up */}
          <div className="overflow-hidden">
            <div data-scroll-column="1" className="space-y-6">
              {[...testimonials.col1, testimonials.col1[0]].map((testimonial, i) => (
                <TestimonialCard key={`col1-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scroll Down */}
          <div className="overflow-hidden">
            <div data-scroll-column="2" className="space-y-6">
              {[...testimonials.col2, testimonials.col2[0]].map((testimonial, i) => (
                <TestimonialCard key={`col2-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scroll Up */}
          <div className="overflow-hidden">
            <div data-scroll-column="3" className="space-y-6">
              {[...testimonials.col3, testimonials.col3[0]].map((testimonial, i) => (
                <TestimonialCard key={`col3-${i}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
