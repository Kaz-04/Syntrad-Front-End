'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ProcessSteps({ steps, numbered = true }) {
  return (
    <motion.div
      className="flex flex-wrap lg:flex-nowrap items-start gap-3"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map(({ icon: Icon, title, desc }, idx) => (
        <motion.div key={title} variants={fadeUp} className="flex items-start gap-3 flex-1 min-w-[140px]">
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="relative w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0">
              {numbered && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
              )}
              <Icon className="text-red-600" size={22} strokeWidth={1.7} />
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-[13px] leading-[1.25] mb-1.5">{title}</h3>
              <p className="text-[#777] text-[11.5px] leading-[1.4]">{desc}</p>
            </div>
          </div>

          {idx < steps.length - 1 && (
            <ArrowRight className="hidden lg:block text-gray-600 mt-5 shrink-0" size={18} strokeWidth={2} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
