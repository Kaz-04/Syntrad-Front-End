'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function FeaturedProjectCard({
  project,
  stats = [],
  eyebrow = "Featured Project",
  ctaLabel = "View Case Study",
}) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b] grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div className="relative min-h-[220px] lg:min-h-[280px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-[#0b0b0b] pointer-events-none" />
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0b0b0b] pointer-events-none" />
      </div>

      <div className="relative p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
        <span className="block font-body text-[10.5px] font-semibold uppercase leading-none tracking-widest text-red-600 mb-3">
          {eyebrow}
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-3">
          {project.title}
        </h2>
        <p className="text-gray-400 text-[13px] leading-[1.6] mb-5 max-w-[46ch]">
          {project.desc}
        </p>

        {stats.length > 0 && (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 mb-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div key={label} variants={fadeUp} className="flex items-start gap-2">
                <Icon size={18} strokeWidth={1.7} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-0.5">{label}</h3>
                  <p className="text-[#777] text-[10.5px] leading-[1.35]">{value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <Link
          href={project.href}
          className="self-start inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          {ctaLabel} <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}