'use client';

import Link from 'next/link';
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

function ImageOverlay({ variant }) {
  const common = 'absolute inset-0 w-full h-full pointer-events-none';

  if (variant === 0) {

    return (
      <svg className={common} viewBox="0 0 200 220" preserveAspectRatio="none" fill="none">
        <g stroke="#ef4444" strokeOpacity="0.75" strokeWidth="1">
          <path d="M100 40 L165 55 L165 130 L100 118 L100 40 Z" />
          <path d="M100 40 L60 55 L60 130 L100 118" />
          <path d="M60 55 L165 55" strokeDasharray="3 3" />
          <path d="M60 92 L165 105" strokeDasharray="3 3" />
          <path d="M100 40 L100 118" strokeDasharray="3 3" />
        </g>
        <circle cx="100" cy="79" r="2" fill="#ef4444" />
        <circle cx="60" cy="55" r="2" fill="#ef4444" />
        <circle cx="165" cy="55" r="2" fill="#ef4444" />
      </svg>
    );
  }

  if (variant === 1) {

    return (
      <svg className={common} viewBox="0 0 200 220" preserveAspectRatio="none" fill="none">
        <g stroke="#ef4444" strokeOpacity="0.75" strokeWidth="1">
          <circle cx="55" cy="60" r="10" />
          <path d="M55 46 L55 74" strokeDasharray="2 2" />
          <path d="M41 60 L69 60" strokeDasharray="2 2" />
        </g>
        <circle cx="55" cy="60" r="1.5" fill="#ef4444" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 200 220" preserveAspectRatio="none" fill="none">
      <g stroke="#ef4444" strokeOpacity="0.75" strokeWidth="1">
        <circle cx="48" cy="150" r="9" />
        <path d="M48 138 L48 162" strokeDasharray="2 2" />
        <path d="M36 150 L60 150" strokeDasharray="2 2" />
        <rect x="70" y="168" width="52" height="30" rx="2" />
        <path d="M70 183 L122 183" strokeDasharray="3 3" />
      </g>
      <circle cx="48" cy="150" r="1.5" fill="#ef4444" />
    </svg>
  );
}

export default function ProjectCardGrid({ items, cols, linkLabel = 'View case study', layout = 'top', decorative = false }) {
  const gridCols =
    cols || (items.length >= 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3');

  const isSideBySide = layout === 'left' || layout === 'right';

  return (
    <motion.div
      className={`grid grid-cols-1 ${gridCols} gap-3`}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map(({ title, location, desc, image, href, flip, blueFilter }, idx) => {
        const cardBody = (
          <>
            {isSideBySide ? (
              <>
                <div className="relative w-1/2 h-full shrink-0 overflow-hidden">
                  <img
                    src={image}
                    alt={location ? `${title}, ${location}` : title}
                    className={`w-full h-full object-cover ${flip ? 'scale-x-[-1]' : ''}`}
                  />
                  {blueFilter && <div className="absolute inset-0 bg-blue-600/40 mix-blend-multiply" />}
                  {decorative && <ImageOverlay variant={idx % 3} />}
                </div>
                <div className="p-4 flex flex-col flex-1 justify-center min-w-0 w-1/2">
                  <h3 className="font-display font-semibold text-[14px] leading-[1.2] mb-2 group-hover:text-red-500 transition-colors">{title}</h3>
                  {location && <p className="text-red-500 text-[11px] font-medium mb-2">{location}</p>}
                  <p className="text-[#777] text-[11.5px] leading-[1.4]">{desc}</p>
                  <span className="text-red-500 text-[12px] font-medium inline-flex mt-3 items-center gap-1 group-hover:text-red-400 transition-colors">
                    {linkLabel}
                    <ArrowRight size={10} />
                  </span>
                </div>
              </>
            ) : (
              <>
                <img
                  src={image}
                  alt={location ? `${title}, ${location}` : title}
                  className={`absolute inset-0 w-full h-full object-cover ${flip ? 'scale-x-[-1]' : ''}`}
                />
                {blueFilter && <div className="absolute inset-0 bg-blue-600/40 mix-blend-multiply" />}
                {decorative && <ImageOverlay variant={idx % 3} />}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-3">
                  <h3 className="font-display font-semibold text-[14px] leading-[1.2] mb-1 text-white group-hover:text-red-500 transition-colors text-balance">{title}</h3>
                  {location && <p className="text-red-500 text-[11px] font-medium mb-1">{location}</p>}
                  <p className="text-gray-300 text-[11.5px] leading-[1.4]">{desc}</p>
                </div>
              </>
            )}
          </>
        );

        const cardClasses = isSideBySide
          ? `group bg-[#111] border border-white/10 rounded-md overflow-hidden flex h-full w-full transition-colors hover:border-red-600/60 ${
              layout === 'right' ? 'flex-row-reverse' : 'flex-row'
            }`
          : 'group relative block bg-[#111] border border-white/10 rounded-md overflow-hidden h-full w-full transition-colors hover:border-red-600/60';

        return (
          <motion.div key={title} variants={fadeUp} className={isSideBySide ? 'h-[220px]' : 'h-[220px]'}>
            {href ? (
              <Link href={href} className={cardClasses}>
                {cardBody}
              </Link>
            ) : (
              <div className={cardClasses}>{cardBody}</div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}