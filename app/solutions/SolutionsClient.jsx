'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot, Cpu, Settings2, PackageSearch, CloudCog, BatteryCharging,
  ShieldCheck, Zap, Wrench, MapPin, ArrowRight, Headphones,
  ClipboardCheck, MonitorCog, CheckCircle2, Target, Clock, Award, Leaf,
} from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, title: "Engineering Excellence", desc: "Certified, experienced and solution-driven" },
  { icon: Zap, title: "Rapid Response", desc: "Fast turnarounds and minimal downtime" },
  { icon: Wrench, title: "End-to-End Delivery", desc: "Design, build, integrate and support" },
  { icon: MapPin, title: "London Based", desc: "Serving clients across the UK" },
];

const solutions = [
  { icon: Bot, title: "Automation & Control Systems", desc: "Custom automation solutions that optimise performance, safety and efficiency across complex operations.", href: "/solutions/automation" },
  { icon: Cpu, title: "Electrical & Electronic Engineering", desc: "Expert design, repair and integration of advanced electrical and electronic systems with a focus on reliability and compliance.", href: "/solutions/electrical" },
  { icon: Settings2, title: "Electromechanical Systems", desc: "Precision engineering combining mechanical and electrical systems for seamless, high-performance operation.", href: "/solutions/electromechanical" },
  { icon: PackageSearch, title: "Specialist Equipment Engineering", desc: "Design, build and support for bespoke equipment and specialist applications tailored to unique requirements.", href: "/solutions/equipment" },
  { icon: CloudCog, title: "Connected Infrastructure & IoT", desc: "Intelligent connectivity solutions for monitoring, control and data-driven decisions in modern environments.", href: "/solutions/iot" },
  { icon: BatteryCharging, title: "Energy & EV Infrastructure", desc: "EV charging, power distribution and energy systems for a smarter, more sustainable future.", href: "/solutions/energy" },
];

const steps = [
  { icon: ClipboardCheck, number: "1", title: "Assess", desc: "We in-depth assessment to understand your technical challenges, goals and operational requirements." },
  { icon: MonitorCog, number: "2", title: "Design", desc: "Our engineers design tailored solutions that balance performance, compliance, scalability and cost-efficiency." },
  { icon: Wrench, number: "3", title: "Deliver", desc: "We build, integrate and test with precision, ensuring minimal disruption and maximum quality at every stage." },
  { icon: Headphones, number: "4", title: "Support", desc: "Ongoing support and maintenance to keep your systems performing reliably, today and tomorrow." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Proven Expertise", desc: "Years of hands-on engineering experience across diverse sectors and complex projects." },
  { icon: CheckCircle2, title: "End-to-End Partner", desc: "From concept to completion and beyond, we manage the full lifecycle." },
  { icon: Target, title: "Tailored Solutions", desc: "Every solution is custom-designed to fit your exact operational needs." },
  { icon: Clock, title: "Fast & Reliable", desc: "Agile team and efficient processes for rapid response and reliable delivery." },
  { icon: Award, title: "Quality Assured", desc: "Committed to the highest standards of safety, quality and compliance." },
  { icon: Leaf, title: "Future-Focused", desc: "Sustainable, scalable solutions that support innovation and long-term growth." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function SectionHeading({ title }) {
  return (
    <h2 className="font-display text-3xl font-bold mb-10 relative text-left pt-3 before:content-[''] before:absolute before:left-0 before:top-0 before:w-10 before:h-[2px] before:bg-red-600">
      {title}
    </h2>
  );
}

function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="coreGlowS" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeS" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#7a0000" />
        </linearGradient>
      </defs>

      {[190, 150, 110].map((r, i) => (
        <motion.circle
          key={r}
          cx="250" cy="250" r={r}
          fill="none" stroke="#ffffff14" strokeWidth="1" strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
      ))}

      <circle cx="250" cy="250" r="90" fill="url(#coreGlowS)" />

      <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <polygon points="250,150 320,190 250,230 180,190" fill="url(#edgeS)" opacity="0.95" />
        <polygon points="180,190 250,230 250,320 180,280" fill="#4a0000" opacity="0.9" />
        <polygon points="320,190 250,230 250,320 320,280" fill="#2a0000" opacity="0.9" />
        <polygon points="250,150 320,190 250,230 180,190" fill="none" stroke="#ff8080" strokeWidth="1.5" />
        <line x1="250" y1="230" x2="250" y2="320" stroke="#ff8080" strokeWidth="1" opacity="0.5" />
      </motion.g>

      {[0, 120, 240].map((deg, i) => (
        <motion.circle
          key={deg} r="5" fill="#ff2d2d"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
          style={{ transformOrigin: "250px 250px" }}
          cx={250 + 190 * Math.cos((deg * Math.PI) / 180)}
          cy={250 + 190 * Math.sin((deg * Math.PI) / 180)}
        />
      ))}
    </motion.svg>
  );
}

export default function SolutionsClient() {
  return (
        <main className="w-full overflow-hidden bg-black text-white font-body mt-10">

      {/* HERO */}
     <section className="relative border-b border-white/10 overflow-hidden">
  <div className="absolute inset-y-0 right-0 w-[48%] bg-red-950/20 blur-3xl pointer-events-none" />
  <div className="absolute top-0 right-[8%] w-[320px] h-[320px] bg-red-700/10 blur-[110px] pointer-events-none" />

  <div className="relative max-w-[1220px] mx-auto px-4 lg:px-0 min-h-[350px] flex items-center py-12 md:py-14">
    
    <div className="grid grid-cols-1 md:grid-cols-[73%_27%] items-center w-full gap-0">

      {/* LEFT CONTENT */}
      <motion.div
        className="relative z-10 w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-[38px] sm:text-[45px] md:text-[50px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[590px] mb-4"
        >
          Engineering Solution{" "}
          <span className="text-white">Built for Complex systems.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[#8d8d8d] text-[13px] md:text-[14px] leading-[1.65] max-w-[530px] mb-5"
        >
          Syntrad delivers integrated electronics, automation, and specialist
          equipment solutions for commercial, industrial and premium
          residential clients.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-3 mb-7"
        >
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-[12px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            Discuss a Project
            <ArrowRight size={14} />
          </Link>

          <Link
            href="/contact"
            className="border border-red-600/80 hover:bg-red-600 px-5 py-2.5 rounded-md text-[12px] font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            Request Technical Support
            <Headphones size={14} />
          </Link>
        </motion.div>

        {/* TRUST POINTS */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-4 gap-8 w-full max-w-[850px]"
        >
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 min-w-0"
            >
              <Icon
                className="text-red-600 shrink-0 mt-0.5"
                size={24}
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="font-semibold text-[15px] leading-[1.2] whitespace-nowrap mb-1">
                  {title}
                </p>

                <p className="text-[#777] text-[13px] leading-[1.35]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-end"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/assets/mainImg.png"
          alt="Main Illustration"
          width={450}
          height={550}
          className="
            w-[300px]
            sm:w-[300px]
            md:w-[350px]
            lg:w-[400px]
            max-w-none
            h-auto
            object-contain
            translate-x-[20px]
            md:translate-x-[35px]
            lg:translate-x-[45px]
            mt-0
          "
        />
      </motion.div>

    </div>
  </div>
</section>

      {/* CORE SOLUTIONS */}
     <section className="border-b border-white/10">
  <div className="max-w-[1400px] mx-auto px-4 lg:px-0 py-5 md:py-6">
    
    <SectionHeading
      title="Core Solutions"
      action={{ label: "View all solutions", href: "/solutions" }}
    />

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {solutions.map(({ icon: Icon, title, desc, href }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="bg-[#111] border border-white/10 rounded-md p-4 w-full h-[260px] flex flex-col"
        >
          {/* FIXED ICON AREA */}
          <div className="h-[62px] w-[52px] shrink-0 flex items-center">
            <Icon
              className="text-red-500"
              size={52}
              strokeWidth={1.25}
            />
          </div>

          {/* FIXED TITLE AREA */}
          <div className="h-[48px] shrink-0 flex items-start mt-3">
            <h3 className="font-display font-semibold text-[18px] leading-[1.25]">
              {title}
            </h3>
          </div>

          {/* FIXED DESCRIPTION AREA */}
          <div className="h-[64px] shrink-0 overflow-hidden mt-3">
            <p className="text-[#777] text-[15px] leading-[1.45]">
              {desc}
            </p>
          </div>

          {/* FIXED LINK AREA */}
          <div className="h-[20px] shrink-0 flex items-end">
            <Link
              href={href}
              className="text-red-500 text-[15px] font-medium inline-flex mt-3 items-center gap-1 hover:text-red-400 transition-colors"
            >
              Learn more
              <ArrowRight size={10} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* HOW WE WORK */}
      <section className="py-12 border-b border-white/10">
  <div className="container mx-auto px-4">
    <SectionHeading title="How We Work" />

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map(({ icon: Icon, number, title, desc }, idx) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="relative flex flex-col items-start"
        >
          {/* Number + Arrow — DON'T CHANGE POSITION */}
          <div className="flex items-center gap-3 mb-4 w-full">
            <span className="w-7 h-7 rounded-full border border-red-600 text-red-600 text-xs font-bold flex items-center justify-center shrink-0">
              {number}
            </span>

            {idx < steps.length - 1 && (
              <ArrowRight
  className="hidden lg:block text-white ml-auto"
  size={22}
  strokeWidth={2.5}
/>
            )}
          </div>

          {/* ICON LEFT + TEXT RIGHT */}
          <div className="flex items-start gap-4 w-full">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="text-red-600" size={26} />
            </div>

            {/* Text */}
            <div className="pt-1">
              <h3 className="font-display font-semibold text-lg mb-2">
                {title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* WHY BUSINESSES CHOOSE SYNTRAD */}
      <section className="py-14 border-b border-white/10 ">
  <div className="container mx-auto px-4 ">
    <SectionHeading title="Why Businesses Choose Syntrad" />

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 rounded-md md:grid-cols-3 lg:grid-cols-6 border border-white/10"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {whyChoose.map(({ icon: Icon, title, desc }, index) => (
        <motion.div
  key={title}
  variants={fadeUp}
  className="relative bg-[#111111] p-6 flex flex-col items-start min-h-[210px]
    lg:[&:not(:first-child)]:before:content-['']
    lg:[&:not(:first-child)]:before:absolute
    lg:[&:not(:first-child)]:before:left-0
    lg:[&:not(:first-child)]:before:top-5
    lg:[&:not(:first-child)]:before:bottom-5
    lg:[&:not(:first-child)]:before:w-px
    lg:[&:not(:first-child)]:before:bg-white/10"
>
          <Icon
            className="text-red-600 mb-5"
            size={42}
            strokeWidth={1.7}
          />

          <h3 className="font-display font-semibold text-[17px] leading-tight mb-3 text-white">
            {title}
          </h3>

          <p className="text-gray-400 text-[14px] leading-[1.6]">
            {desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
      {/* CTA BANNER */}
       <section>
              <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-5">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="relative rounded-md overflow-hidden border border-red-700/50 bg-gradient-to-r from-[#390505] via-[#240303] to-[#110000] px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,40,40,.5),transparent_35%)]" />
      
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0">
                      <Headphones className="text-white" size={22} />
                    </div>
      
                    <div>
                      <h3 className="font-display text-[19px] md:text-[21px] font-bold leading-tight mb-1">
                        Need a practical solution to a technical challenge?
                      </h3>
      
                      <p className="text-[#999] text-[10px]">
                        Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime.
                      </p>
                    </div>
                  </div>
      
                  <Link
                    href="/contact"
                    className="relative bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-[11px] font-semibold whitespace-nowrap inline-flex items-center gap-2 transition-colors"
                  >
                    Get in Touch Today
                    <ArrowRight size={12} />
                  </Link>
                </motion.div>
              </div>
            </section>
</main>
  );
}

