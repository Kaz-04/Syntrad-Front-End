'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Headphones, ArrowRight } from 'lucide-react';
import Container from './container';

const MotionLink = motion(Link);

function CircuitTraces({ side }) {
  const flip = side === 'right';
  return (
    <svg
      className={`absolute top-0 h-full w-[260px] pointer-events-none ${flip ? 'right-0 scale-x-[-1]' : 'left-0'}`}
      viewBox="0 0 260 140"
      preserveAspectRatio="none"
      fill="none"
    >
      <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1">
        <path d="M0 20 H60 L75 35 H140" />
        <path d="M0 45 H30" />
        <path d="M0 70 H90 L105 55 H180" />
        <path d="M0 100 H50 L65 115 H130" />
        <path d="M0 125 H35" />
        <path d="M140 35 V15 H200" />
        <path d="M180 55 V75 H230" />
        <path d="M130 115 V130 H210" />
      </g>
      <g fill="#ffffff" fillOpacity="0.35">
        <circle cx="60" cy="20" r="2" />
        <circle cx="90" cy="70" r="2" />
        <circle cx="50" cy="100" r="2" />
        <circle cx="200" cy="15" r="1.5" />
        <circle cx="230" cy="75" r="1.5" />
        <circle cx="210" cy="130" r="1.5" />
      </g>
    </svg>
  );
}

export default function UrgentCall({
  title,
  subtitle,
  buttonLabel = 'Get in Touch Today',
  buttonHref = '/contact',
  icon: Icon = Headphones,
}) {
  return (
    <section>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-md overflow-hidden border border-red-700/50 bg-[linear-gradient(90deg,#4a0808_0%,#180303_22%,#2c0606_50%,#180303_78%,#4a0808_100%)] px-2 md:px-6 py-[26px]"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_15%_50%,rgba(255,40,40,.5),transparent_35%),radial-gradient(circle_at_85%_50%,rgba(255,40,40,.5),transparent_35%)]" />

          <CircuitTraces side="left" />
          <CircuitTraces side="right" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-[56px] md:gap-[104px]">
            <div className="flex items-center gap-8 md:gap-16">
              <div className="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center shrink-0">
                <Icon className="text-white" size={30} />
              </div>

              <div>
                <h3 className="font-display text-[19px] md:text-[21px] font-bold leading-tight mb-1">
                  {title}
                </h3>

                <p className="text-[#999] text-[13px]">{subtitle}</p>
              </div>
            </div>

            <MotionLink
              href={buttonHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-red-600 hover:bg-red-700 hover:shadow-[0_0_24px_rgba(239,68,68,0.55)] px-10 py-2 rounded-md text-[14px] font-display font-semibold text-white/80 whitespace-nowrap inline-flex items-center gap-2 transition-colors shrink-0"
            >
              {buttonLabel}
              <ArrowRight size={16} />
            </MotionLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}