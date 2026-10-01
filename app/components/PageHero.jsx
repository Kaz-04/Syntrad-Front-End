'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from './container';
import { resetNavTrail, readNavTrail, writeNavTrail } from './navTrail';

function useBreadcrumb(pageLabel) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const processedPathRef = useRef(null);

  const [crumbs, setCrumbs] = useState(() => {
    if (!pageLabel) return [];
    return isHome ? [{ label: pageLabel }] : [{ label: 'Home', href: '/' }, { label: pageLabel }];
  });

  useEffect(() => {
    if (!pageLabel || typeof window === 'undefined') return;

    if (processedPathRef.current === pathname) return;
    processedPathRef.current = pathname;

    if (isHome) {

      setCrumbs([{ label: pageLabel }]);
      resetNavTrail();
      return;
    }

    const trail = readNavTrail();
    const middleCrumbs = trail.map((t) => ({ label: t.label, href: t.path }));
    setCrumbs([{ label: 'Home', href: '/' }, ...middleCrumbs, { label: pageLabel }]);

    const nextTrail = [...trail.filter((t) => t.path !== pathname), { label: pageLabel, path: pathname }];
    writeNavTrail(nextTrail);
  }, [pathname, pageLabel, isHome]);

  return crumbs;
}

const HERO_TYPE = {
  breadcrumbWrap: 'flex items-center gap-2 text-[14px] text-gray-500 mb-2',
  breadcrumbLink: 'hover:text-white transition-colors',
  breadcrumbCurrent: 'text-red-500',
  breadcrumbChevron: 'text-gray-600',

  heading: 'font-display text-[42px] sm:text-[52px] md:text-[58px] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-4',
  headingLine: 'block',
  headingAccent: 'text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]',

  description: 'text-[#8d8d8d] text-[14px] md:text-[15px] leading-[1.6] max-w-[460px] mb-6',

  buttonBase: 'px-5 py-2.5 rounded-md text-[13px] font-semibold inline-flex items-center justify-center gap-2 transition-colors',
  buttonFilled: 'bg-red-600 hover:bg-red-700',
  buttonOutline: 'border border-red-600/80 hover:bg-red-600',

  featureTitle: 'font-semibold text-[12.5px] leading-[1.2] mb-1 text-white/85 whitespace-nowrap',
  featureDesc: 'text-[#777] text-[11px] leading-[1.35] line-clamp-2',
};

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
    return (
      <img
        src={icon}
        alt=""
        style={{ width: size, height: size }}
        className={`object-contain shrink-0 ${className}`}
      />
    );
  }
  const Icon = icon;
  return <Icon size={size} strokeWidth={1.7} className={className} />;
}

export default function PageHero({
  breadcrumb,
  pageLabel,
  heading,
  headingAccentIndex,
  description,
  buttons = [],
  features = [],
  visual,
  textOffset = '',
}) {
  const autoBreadcrumb = useBreadcrumb(pageLabel);
  const resolvedBreadcrumb = breadcrumb ?? autoBreadcrumb;

  const isHeadingLines = Array.isArray(heading);
  const accentIndex =
    headingAccentIndex !== undefined
      ? headingAccentIndex
      : isHeadingLines
      ? heading.length - 1
      : -1;

  return (
    <section className="relative overflow-hidden bg-black min-h-[380px] md:min-h-[420px] flex items-stretch border-b border-white/10">

      {visual && (
        <motion.div
          className="absolute inset-y-0 right-0 w-full md:w-[74%] lg:w-[70%]"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="relative w-full h-full">
            {visual}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, #000 0%, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0.35) 32%, rgba(0,0,0,0) 55%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.55) 100%)',
              }}
            />
          </div>
        </motion.div>
      )}

      <Container className="relative z-10 pt-4 md:pt-5 pb-6 flex flex-col">
        {resolvedBreadcrumb && resolvedBreadcrumb.length > 0 && (
          <nav className={HERO_TYPE.breadcrumbWrap}>
            {resolvedBreadcrumb.map((crumb, i) => {
              const isLast = i === resolvedBreadcrumb.length - 1;
              return (
                <span key={i} className="flex items-center gap-1.5">
                  {crumb.href && !isLast ? (

                    <Link href={crumb.href} onClick={resetNavTrail} className={HERO_TYPE.breadcrumbLink}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? HERO_TYPE.breadcrumbCurrent : ''}>{crumb.label}</span>
                  )}
                  {!isLast && <ChevronRight size={12} className={HERO_TYPE.breadcrumbChevron} />}
                </span>
              );
            })}
          </nav>
        )}

        <motion.div
          className={`relative z-10 w-full max-w-[620px] lg:max-w-[880px] flex flex-col ${textOffset}`}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp} className={HERO_TYPE.heading}>
            {isHeadingLines
              ? heading.map((line, i) => (
                  <span
                    key={i}
                    className={`${HERO_TYPE.headingLine} ${i === accentIndex ? HERO_TYPE.headingAccent : ''}`}
                  >
                    {line}
                  </span>
                ))
              : heading  }
          </motion.h1>

          {description && (
            <motion.p variants={fadeUp} className={HERO_TYPE.description}>
              {description}
            </motion.p>
          )}

          {buttons.length > 0 && (
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
              {buttons.map((btn) => {
                const filled = btn.variant !== 'outline';
                return (

                  <Link
                    key={btn.label}
                    href={btn.href}
                    className={`${HERO_TYPE.buttonBase} ${filled ? HERO_TYPE.buttonFilled : HERO_TYPE.buttonOutline}`}
                  >
                    {btn.label}
                    <RenderIcon icon={btn.icon} size={14} />
                  </Link>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        {features.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full flex flex-wrap sm:flex-nowrap divide-y sm:divide-y-0 sm:divide-x divide-white/10 mt-8"
          >
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex-1 basis-1/2 sm:basis-0 min-w-0 flex items-start gap-3 px-0 sm:px-6 py-4 sm:py-0 first:pl-0"
              >
                <div className="w-9 h-9 rounded-full border border-red-600/60 flex items-center justify-center shrink-0">
                  <RenderIcon icon={icon} size={15} className="text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className={HERO_TYPE.featureTitle}>{title}</p>
                  <p className={HERO_TYPE.featureDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}