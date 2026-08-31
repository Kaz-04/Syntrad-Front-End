'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket, Gauge, Puzzle, Target, ArrowRight, Headphones,
  Sparkles, Bot, Wrench, BatteryCharging, SlidersHorizontal, CloudCog, Home, Building2,
  Thermometer, Radio, Zap, ShieldCheck, RefreshCw, Settings2,
} from "lucide-react";

const trustPoints = [
  { icon: Rocket, title: "Concept to Completion", desc: "End-to-end delivery with clear accountability." },
  { icon: Gauge, title: "Engineering Excellence", desc: "Deep technical expertise across multiple disciplines." },
  { icon: Puzzle, title: "Practical Results", desc: "Solutions built for performance and reliability." },
  { icon: Target, title: "Trusted Partner", desc: "Long-term relationships built on proven delivery." },
];

const featuredProject = {
  title: "Cold Plunge Automation & Monitoring",
  desc: "End-to-end automation and remote monitoring for temperature control, filtration, and lighting with real-time analytics and alerts.",
  img: "/assets/cold-plunge.jpeg",
  href: "/projects/cold-plunge-automation",
  stats: [
    { icon: Thermometer, label: "Precise Temperature", value: "±0.3°C control accuracy" },
    { icon: Radio, label: "Remote Monitoring", value: "Live data & alerts" },
    { icon: Zap, label: "Energy Efficient", value: "25% energy reduction" },
    { icon: ShieldCheck, label: "Reliable Operation", value: "99.8% system uptime" },
  ],
};

const filters = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "automation", label: "Automation", icon: Bot },
  { id: "equipment", label: "Equipment", icon: Wrench },
  { id: "ev", label: "EV", icon: BatteryCharging },
  { id: "controls", label: "Controls", icon: SlidersHorizontal },
  { id: "iot", label: "IoT", icon: CloudCog },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
];

const projects = [
  {
    title: "Sauna Control Systems",
    desc: "Custom control systems with precise temperature regulation, safety interlocks and energy optimisation.",
    img: "/assets/sauna.jpeg",
    href: "/projects/sauna-control",
    categories: ["controls", "automation"],
  },
  {
    title: "Specialist Equipment Diagnostics",
    desc: "Advanced fault-finding and repair for high-value electronic & electromechanical equipment.",
    img: "/assets/diagnostics.jpeg",
    href: "/projects/equipment-diagnostics",
    categories: ["equipment"],
  },
  {
    title: "Commercial EV Infrastructure",
    desc: "EV charging infrastructure with load management, monitoring and payment integration.",
    img: "/assets/ev-infrastructure.jpeg",
    href: "/projects/commercial-ev-infrastructure",
    categories: ["ev", "commercial"],
  },
  {
    title: "Coffee Machine Technical Recovery",
    desc: "Diagnostic, repair and system recovery for premium coffee equipment to minimise downtime.",
    img: "/assets/coffee-machine.jpeg",
    href: "/projects/coffee-machine-recovery",
    categories: ["equipment", "commercial"],
  },
  {
    title: "Connected Infrastructure & IoT",
    desc: "Smart monitoring and IoT solutions for distributed assets and critical infrastructure.",
    img: "/assets/iot-infrastructure.jpeg",
    href: "/projects/connected-infrastructure-iot",
    categories: ["iot", "commercial"],
  },
  {
    title: "Premium Residential Automation",
    desc: "Integrated automation for lighting, climate, security and energy management.",
    img: "/assets/residential.jpeg",
    href: "/projects/premium-residential-automation",
    categories: ["automation", "residential", "controls"],
  },
];

const outcomes = [
  { icon: Headphones, value: "30–50%", title: "Reduced Downtime", desc: "Through smarter systems and proactive monitoring." },
  { icon: Settings2, value: "40%", title: "Improved Safety", desc: "With engineered safeguards and automation." },
  { icon: RefreshCw, value: "25–35%", title: "Better Reliability", desc: "Built for performance, tested for real-world use." },
  { icon: Bot, value: "20–40%", title: "Smarter Control", desc: "Data-driven insights for better decisions." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

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
        <radialGradient id="coreGlowP" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeP" x1="0" y1="0" x2="1" y2="1">
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

      <circle cx="250" cy="250" r="90" fill="url(#coreGlowP)" />

      <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <polygon points="250,150 320,190 250,230 180,190" fill="url(#edgeP)" opacity="0.95" />
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

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white font-body">

      {/* HERO */}
      <section className="relative w-full flex items-center px-6 pt-5 pb-4 border-b border-white/10">
        <motion.div
          className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-red-700/20 blur-3xl z-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
        />
        <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 z-20">
          <motion.div className="w-full md:w-3/5" variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-red-600 text-sm font-semibold tracking-wide uppercase mb-3">
              Projects
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              Project Delivery Backed by{" "}
              <span className="text-red-600">Engineering Depth.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10 max-w-2xl">
              Syntrad delivers bespoke engineering, automation and specialist equipment
              projects that solve real-world challenges and deliver practical,
              measurable results.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
              {trustPoints.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-2.5 min-w-0">
                  <Icon className="text-red-600 mt-0.5 shrink-0" size={20} />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
                className="w-full md:w-[42%] flex justify-center md:justify-end items-center"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="/assets/mainImg.png"
                  alt="Main Illustration"
                  width={400}
                  height={420}
                  className="w-full max-w-[380px] md:max-w-[440px] h-auto object-contain mt-10"
                />
              </motion.div>
          
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-w-0"
          >
            <div className="relative h-72 lg:h-auto min-w-0">
              <Image src={featuredProject.img} alt={featuredProject.title} fill className="object-cover" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center min-w-0">
              <p className="text-red-600 text-xs font-semibold tracking-wide uppercase mb-3">Featured Project</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h2>
              <p className="text-gray-400 mb-8">{featuredProject.desc}</p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
                {featuredProject.stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="text-red-600 mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-gray-500 text-xs">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={featuredProject.href}
                className="self-start bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
              >
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {filters.map(({ id, label, icon: Icon }) => {
              const active = activeFilter === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                    active
                      ? "border-red-600 text-red-500 bg-red-600/10"
                      : "border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-14 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(({ title, desc, img, href }) => (
                <motion.div
                  key={title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden group"
                >
                  <div className="relative h-48 w-full">
                    <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{desc}</p>
                    <Link href={href} className="text-red-500 text-sm font-medium inline-flex items-center gap-1">
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-gray-500 text-center py-16">No projects found in this category yet.</p>
          )}
        </div>
      </section>

      {/* PROJECT OUTCOMES */}
      <section className="py-8 border-b border-white/10">
        <div className="container mx-auto px-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Project Outcomes</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {outcomes.map(({ icon: Icon, value, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#111111] border border-white/10 rounded-xl p-4 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-red-600/40 flex items-center justify-center shrink-0">
                  <Icon className="text-red-600" size={30} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-red-600 mb-1">{value}</p>
                  <p className="font-semibold text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
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
                  Have a project that needs technical leadership from concept to completion?
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
    </div>
  );
}