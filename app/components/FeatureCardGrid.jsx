'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function RenderIcon({ icon, size, className = '' }) {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return <img src={icon} alt="" style={{ width: size, height: size }} className={`object-contain ${className}`} />;
  }
  const Icon = icon;
  return <Icon size={size} strokeWidth={1.7} className={className} />;
}

export default function FeatureCardGrid({
  items,
  variant = 'compact',
  cols,
  iconSize,
  compactIconSize,
  compactIconBoxSize,
  rowIconSize,
  rowIconBoxSize,
  cardHeight,
  cardPadding,
}) {
  const isPrimary = variant === 'primary';
  const isRow = variant === 'row';
  const gridCols = cols || 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6';
  const primaryIconSize = iconSize ?? 110;
  const resolvedCompactIconSize = compactIconSize ?? 17;
  const resolvedCompactIconBoxSize = compactIconBoxSize ?? 36;
  const resolvedRowIconSize = rowIconSize ?? 16;
  const resolvedRowIconBoxSize = rowIconBoxSize ?? 36;
  const resolvedCardPadding = cardPadding ?? 'p-4';
  const defaultHeight = isPrimary ? 260 : isRow ? undefined : 170;
  const resolvedCardHeight = cardHeight ?? defaultHeight;
  const cardHeightStyle = resolvedCardHeight
    ? { height: typeof resolvedCardHeight === 'number' ? `${resolvedCardHeight}px` : resolvedCardHeight }
    : undefined;

  return (
    <motion.div
      className={`grid ${gridCols} gap-3`}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map(({ icon, title, desc, href }) => {
        const CardTag = isPrimary && href ? Link : 'div';
        const cardProps = isPrimary && href ? { href } : {};
        return (
          <motion.div key={title} variants={fadeUp} style={cardHeightStyle}>
            <CardTag
              {...cardProps}
              className={`group bg-[#111] border border-white/10 rounded-md ${resolvedCardPadding} w-full h-full transition-colors ${
                isRow ? 'flex items-center gap-4' : 'flex flex-col'
              } ${isPrimary ? 'items-center text-center' : ''} ${isPrimary && href ? 'hover:border-red-600/60 cursor-pointer' : ''}`}
            >
              {isPrimary && (
                <div className="h-28 w-28 shrink-0 flex items-center justify-center mb-[-2px] -mt-4">
                  <RenderIcon icon={icon} size={primaryIconSize} className="text-red-500" />
                </div>
              )}

              {isRow && (
                <div
                  className="rounded-full border border-red-600/60 flex items-center justify-center shrink-0"
                  style={{ width: resolvedRowIconBoxSize, height: resolvedRowIconBoxSize }}
                >
                  <RenderIcon icon={icon} size={resolvedRowIconSize} className="text-red-500" />
                </div>
              )}

              {!isPrimary && !isRow && (
                <div
                  className="shrink-0 flex items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 mb-3"
                  style={{ width: resolvedCompactIconBoxSize, height: resolvedCompactIconBoxSize }}
                >
                  <RenderIcon icon={icon} size={resolvedCompactIconSize} className="text-red-500" />
                </div>
              )}

              <div className={isRow ? 'min-w-0' : isPrimary ? 'shrink-0 flex items-start justify-center' : ''}>
                <h3
                  className={
                    isPrimary
                      ? 'font-display font-medium text-[18px] leading-[1.25] text-white/90 group-hover:text-red-500 transition-colors'
                      : isRow
                      ? 'font-display font-semibold text-[13px] leading-[1.25] mb-1'
                      : 'font-display font-semibold text-[13.5px] leading-[1.25] mb-2'
                  }
                >
                  {title}
                </h3>
                {isRow && <div className="text-[#999] text-[12.5px] leading-[1.5]">{desc}</div>}
              </div>

              {!isRow && (
                <div className={isPrimary ? 'shrink-0 overflow-hidden mt-2' : ''}>
                  <p className={isPrimary ? 'text-[#999] text-[13px] font-normal leading-[1.5]' : 'text-[#777] text-[12px] leading-[1.4]'}>
                    {desc}
                  </p>
                </div>
              )}
            </CardTag>
          </motion.div>
        );
      })}
    </motion.div>
  );
}