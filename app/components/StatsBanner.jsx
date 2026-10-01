'use client';

import { motion } from 'framer-motion';
import Container from './container';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function StatsBanner({ title, subtitle, stats, glow = false }) {
  const gridCols =
    stats.length >= 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : stats.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3';

  return (
    <section>
      <Container className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-md border border-red-700/50 bg-gradient-to-br from-red-950 via-[#2a0808] to-black px-6 pt-5 pb-8 text-center relative overflow-hidden"
        >
          {glow && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 100% at 15% 0%, rgba(239,68,68,0.35) 0%, rgba(239,68,68,0) 60%)',
              }}
            />
          )}

          <div className="relative z-10">
            {title && <h3 className="font-display text-xl md:text-2xl font-bold mb-8">{title}</h3>}
            {subtitle && <p className="text-[#999] text-[12.5px] max-w-[560px] mx-auto mb-8">{subtitle}</p>}

            <motion.div
              className={`grid grid-cols-2 ${gridCols} gap-6 divide-x divide-red-800/30`}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center justify-center gap-3 px-2 first:pl-0">
                  {typeof Icon === 'string' ? (
                    <img src={Icon} alt="" className="w-10 h-10 object-contain shrink-0" />
                  ) : (
                    <Icon className="text-red-500 shrink-0" size={36} strokeWidth={1.6} />
                  )}
                  <div className="text-left">
                    <p className="font-display text-2xl font-bold text-white leading-tight">{value}</p>
                    <p className="text-[#777] text-[11.5px]">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}