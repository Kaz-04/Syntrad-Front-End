"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot, Cpu, Settings2, PackageSearch, CloudCog, BatteryCharging,
  ShieldCheck, Zap, Wrench, MapPin, ArrowRight, Headphones,
  Dumbbell, UtensilsCrossed, Building2, Home as HomeIcon, ShieldAlert,
  Award, Users, CheckCircle2, UserCheck,
} from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, title: "Engineering Excellence", desc: "Certified, experienced and solution-driven" },
  { icon: Zap, title: "Rapid Response", desc: "Fast turnarounds and minimal downtime" },
  { icon: Wrench, title: "End-to-End Delivery", desc: "Design, install, integrate and support" },
  { icon: MapPin, title: "London Based", desc: "Serving clients across the UK" },
];

const solutions = [
  { icon: Bot, title: "Automation & Control Systems", desc: "Custom automation solutions that optimise performance, safety and efficiency.", href: "/solutions/automation" },
  { icon: Cpu, title: "Electrical & Electronic Engineering", desc: "Expert design, repair and integration of advanced electrical and electronic systems.", href: "/solutions/electrical" },
  { icon: Settings2, title: "Electromechanical Systems", desc: "Precision engineering combining mechanical and electrical systems for seamless operation.", href: "/solutions/electromechanical" },
  { icon: PackageSearch, title: "Specialist Equipment Engineering", desc: "Design, build and support for bespoke equipment and specialist applications.", href: "/solutions/equipment" },
  { icon: CloudCog, title: "Connected Infrastructure & IoT", desc: "Intelligent connectivity solutions for monitoring, control and data-driven decisions.", href: "/solutions/iot" },
  { icon: BatteryCharging, title: "Energy & EV Infrastructure", desc: "EV charging, power distribution and energy systems for a smarter, sustainable future.", href: "/solutions/energy" },
];

const sectors = [
  { icon: Dumbbell, title: "Leisure, Wellness & Fitness", img: "/assets/leisure.jpeg" },
  { icon: UtensilsCrossed, title: "Hospitality & Catering", img: "/assets/hospitality.jpeg" },
  { icon: Building2, title: "Commercial & Industrial", img: "/assets/commercial.jpeg" },
  { icon: HomeIcon, title: "Premium Residential", img: "/assets/residential.jpeg" },
  { icon: ShieldAlert, title: "Specialist Technical Environments", img: "/assets/technical.jpeg" },
];

const projects = [
  { title: "Cold Plunge Automation", desc: "Full automation solution for temperature control, filtration and lighting with remote monitoring and user interface.", img: "/assets/cold-plunge.jpeg", href: "/projects/cold-plunge-automation" },
  { title: "Sauna Control Systems", desc: "Custom control system with precise temperature regulation, safety interlocks and energy optimisation.", img: "/assets/sauna.jpeg", href: "/projects/sauna-control" },
  { title: "Specialist Equipment Diagnostics", desc: "Advanced fault-finding and repair for high-value electronic equipment, minimising downtime.", img: "/assets/diagnostics.jpeg", href: "/projects/equipment-diagnostics" },
];

const founderStats = [
  { icon: Award, text: "15+ years engineering experience across electronics & automation" },
  { icon: Users, text: "Trusted by businesses across London and the UK" },
  { icon: CheckCircle2, text: "Commitment to quality, safety and reliability" },
  { icon: UserCheck, text: "Personal involvement in every critical project" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SectionHeading({ title, action }) {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-6">
      <div>
        <div className="w-8 h-[2px] bg-red-600 mb-2" />
        <h2 className="font-display text-2xl md:text-[26px] font-bold leading-tight tracking-tight">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className="hidden sm:inline-flex items-center gap-1 text-red-500 hover:text-red-400 text-[11px] font-medium transition-colors"
        >
          {action.label}
          <ArrowRight size={13} />
        </Link>
      )}
    </div>
  );
}


export default function HomePage() {
  return (
    <main className="w-full overflow-hidden bg-black text-white font-body mt-10">

    {/* HERO */}
      {/* HERO */}
<section className="relative border-b border-white/10 overflow-hidden">
  <div className="absolute inset-y-0 right-0 w-[48%] bg-red-950/20 blur-3xl pointer-events-none" />
  <div className="absolute top-0 right-[8%] w-[320px] h-[320px] bg-red-700/10 blur-[110px] pointer-events-none" />

  <div className="relative max-w-[1220px] mx-auto px-4 lg:px-0 min-h-[350px] flex items-center py-12 md:py-14">
    <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-center w-full">

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
          Engineering Complex Systems. Delivering{" "}
          <span className="text-red-600">Reliable Solutions.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[#8d8d8d] text-[13px] md:text-[14px] leading-[1.65] max-w-[530px] mb-5"
        >
          Syntrad Ltd is a London-based engineering partner delivering advanced
          electronics, automation, and specialist equipment solutions for
          businesses where performance, uptime and safety are non-negotiable.
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

      {/* MAIN IMAGE */}
      <motion.div
        className="flex justify-center md:justify-end items-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/assets/mainImg.png"
          alt="Main Illustration"
          width={750}
          height={650}
          className="w-full max-w-[620px] h-auto object-contain md:translate-x-8"
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

      {/* SECTORS */}
      <section className="border-b border-white/10">
  <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-5 md:py-6">

    <SectionHeading title="Sectors We Support" />

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {sectors.map(({ icon: Icon, title, img }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="relative rounded-md overflow-hidden w-full h-[140px] border border-white/10"
        >
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/58" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">

            {/* FIXED ICON */}
            <div className="h-[40px] w-[42px] flex items-center justify-center shrink-0 mb-2">
              <Icon
                className="text-red-500"
                size={35}
                strokeWidth={1.6}
              />
            </div>

            {/* FIXED TITLE */}
            <div className="h-[38px] w-full flex items-start justify-center shrink-0">
              <p className="font-display font-semibold text-[18px] leading-[1.25] max-w-[180px]">
                {title}
              </p>
            </div>

            {/* FIXED UNDERLINE */}
            <div className="w-[32px] h-[2px] bg-red-600 mt-2 shrink-0" />

          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* FEATURED PROJECTS */}
      <section className="border-b border-white/10">
        <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-5 md:py-6">
          <SectionHeading
            title="Featured Projects"
            action={{ label: "View all projects", href: "/projects" }}
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map(({ title, desc, img, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-md overflow-hidden grid grid-cols-[42%_58%] h-[125px]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-3 py-2.5 flex flex-col justify-center min-w-0">
                  <span className="text-red-500 text-[8px] font-semibold uppercase tracking-[0.14em] mb-1">
                    Featured Project
                  </span>

                  <h3 className="font-display font-semibold text-[12px] leading-[1.3] mb-1.5">
                    {title}
                  </h3>

                  <p className="text-[#777] text-[9px] leading-[1.45] mb-1.5 line-clamp-3">
                    {desc}
                  </p>

                  <Link
                    href={href}
                    className="text-red-500 text-[9px] font-medium inline-flex items-center gap-1 w-fit"
                  >
                    View case study
                    <ArrowRight size={9} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-b border-white/10">
  <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-6 md:py-7">
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[225px_1fr_280px] gap-6 lg:gap-8 items-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* IMAGE */}
      <motion.div
        variants={fadeUp}
        className="relative h-[210px] rounded-md overflow-hidden border border-white/10"
      >
        <Image
          src="/assets/kaz-moorjani.jpeg"
          alt="Kaz Moorjani"
          fill
          sizes="225px"
          className="object-cover"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div variants={fadeUp}>
        <p className="text-red-600 text-[10px] font-semibold tracking-[0.13em] uppercase mb-1.5">
          Director & Lead Engineer
        </p>

        <h2 className="font-display text-[26px] font-bold leading-tight mb-3">
          Kaz Moorjani
        </h2>

        <p className="text-[#858585] text-[11px] leading-[1.6] mb-2.5 max-w-[650px]">
          Kaz Moorjani leads Syntrad Ltd with a hands-on, engineering-first approach.
          With deep expertise in electronics, automation and specialist equipment, he
          ensures every project is delivered to the highest standard of quality,
          reliability and safety.
        </p>

        <p className="text-[#858585] text-[11px] leading-[1.6] mb-4 max-w-[650px]">
          From concept to completion, Kaz and the team focus on practical solutions
          that solve complex technical challenges and keep your systems performing.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center border border-red-600 hover:bg-red-600 px-5 py-2 rounded-md text-[10px] font-medium transition-colors"
        >
          Learn more about Kaz
          <ArrowRight size={12} className="ml-1.5" />
        </Link>
      </motion.div>

      {/* STATS */}
      <motion.div
        variants={fadeUp}
        className="border-l border-white/10 pl-6 flex flex-col gap-4"
      >
        {founderStats.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon
              className="text-red-600 mt-0.5 shrink-0"
              size={18}
              strokeWidth={1.6}
            />

            <p className="text-[#858585] text-[10px] leading-[1.45]">
              {text}
            </p>
          </div>
        ))}
      </motion.div>
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
                  Have a system, fault or project that needs serious technical attention?
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


