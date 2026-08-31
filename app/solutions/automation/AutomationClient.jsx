"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Headphones,
  Settings2,
  Cpu,
  Workflow,
  Radio,
  Puzzle,
  ShieldCheck,
  MonitorCog,
  Gauge,
  Wrench,
  Factory,
  Thermometer,
  Zap,
  CheckCircle2,
  Clock3,
  FlaskConical,
  PlayCircle,
  BarChart3,
  SlidersHorizontal,
  CircuitBoard,
  ServerCog,
  Waves,
  MapPin,
} from "lucide-react";

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: Settings2,
    title: "Custom Automation Design",
    desc: "Tailored control systems designed to match your process and performance goals.",
  },
  {
    icon: Cpu,
    title: "PLC & HMI Programming",
    desc: "Expert programming for Siemens, Allen-Bradley, Mitsubishi and more.",
  },
  {
    icon: Workflow,
    title: "Process Control Solutions",
    desc: "Reliable process control strategies for consistent output and efficiency.",
  },
  {
    icon: Radio,
    title: "Sensor & Instrumentation Integration",
    desc: "Seamless integration of sensors, transmitters and field devices.",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    desc: "End-to-end integration of automation, electrical and mechanical systems.",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    desc: "Ongoing support, remote monitoring and system optimisation.",
  },
];

/* =========================================================
   SYSTEMS
========================================================= */

const systems = [
  {
    icon: Cpu,
    title: "PLCs",
    desc: "Siemens, Allen-Bradley, Mitsubishi & more.",
  },
  {
    icon: MonitorCog,
    title: "HMIs & SCADA",
    desc: "Intuitive interfaces for monitoring & control.",
  },
  {
    icon: CircuitBoard,
    title: "Relays & Contactors",
    desc: "Reliable switching & protection solutions.",
  },
  {
    icon: Thermometer,
    title: "Sensors & Transmitters",
    desc: "Temperature, pressure, level, flow & more.",
  },
  {
    icon: Gauge,
    title: "Pumps & Motors",
    desc: "Control, monitoring & energy optimisation.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Interlocks",
    desc: "Guarding, E-Stop & safety PLC integration.",
  },
  {
    icon: ServerCog,
    title: "Remote Monitoring",
    desc: "Secure remote access, alerts & data logging.",
  },
];


const trustPoints = [
  { icon: ShieldCheck, title: "Engineered for Reliability", desc: "Robust systems built for 24/7 performance" },
  { icon: Zap, title: "Seamless Integration", desc: "Integrate new systems with existing infrastructure" },
  { icon: Wrench, title: "Built for Safety", desc: "Safety interlocks and fall-safe design" },
  { icon: MapPin, title: "Future-Ready", desc: "Scalable, data-driven automation solutions" },
];
 
/* =========================================================
   PROBLEMS
========================================================= */

const problems = [
  {
    title: "Manual & Inefficient Processes",
    desc: "Automate repetitive tasks and reduce human error.",
  },
  {
    title: "Unreliable Equipment",
    desc: "Increase uptime with robust control & protection.",
  },
  {
    title: "Poor Visibility",
    desc: "Gain real-time insight and data-driven decisions.",
  },
  {
    title: "Safety Risks",
    desc: "Implement interlocks and fail-safe protection.",
  },
  {
    title: "Integration Challenges",
    desc: "Connect new systems with existing infrastructure.",
  },
  {
    title: "Downtime & Delays",
    desc: "Rapid response and predictive maintenance support.",
  },
];

/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  {
    icon: Factory,
    title: "Process Automation",
    desc: "Automate and optimise complex industrial processes.",
    image: "/assets/process-automation.jpeg",
    style: "from-[#202020] via-[#111] to-black",
  },

  {
    icon: Waves,
    title: "Pump & Flow Control",
    desc: "Precision pump control, VFD integration and flow management.",
    image: "/assets/pump-flow-control.jpeg",
    style: "from-[#182020] via-[#111] to-black",
  },

  {
    icon: Thermometer,
    title: "Temperature Control",
    desc: "Precise temperature regulation for consistent performance.",
    image: "/assets/temperature-control.jpeg",
    style: "from-[#202020] via-[#111] to-black",
  },

  {
    icon: FlaskConical,
    title: "Batch & Recipe Control",
    desc: "Automated batching with recipe management and traceability.",
    image: "/assets/batch-recipe-control.jpeg",
    style: "from-[#1c1c20] via-[#111] to-black",
  },

  {
    icon: Zap,
    title: "Energy Management",
    desc: "Monitor, control and reduce energy consumption.",
    image: "/assets/enery-management.jpeg",
    style: "from-[#202020] via-[#111] to-black",
  },

  {
    icon: CircuitBoard,
    title: "System Integration",
    desc: "Integrate control systems across multi-disciplinary platforms.",
    image: "/assets/system-integration.jpeg",
    style: "from-[#181818] via-[#111] to-black",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "1",
    icon: BarChart3,
    title: "Assess",
    desc: "We understand your process, goals and technical requirements.",
  },
  {
    number: "2",
    icon: Settings2,
    title: "Design",
    desc: "We create a tailored automation solution and control strategy.",
  },
  {
    number: "3",
    icon: Workflow,
    title: "Engineer",
    desc: "We program, configure and build your control systems.",
  },
  {
    number: "4",
    icon: SlidersHorizontal,
    title: "Test",
    desc: "Rigorous testing and validation to ensure reliability and safety.",
  },
  {
    number: "5",
    icon: Wrench,
    title: "Install",
    desc: "Professional installation with minimal disruption to operations.",
  },
  {
    number: "6",
    icon: PlayCircle,
    title: "Commission",
    desc: "We commission, optimise and hand over a fully functional system.",
  },
  {
    number: "7",
    icon: Headphones,
    title: "Support",
    desc: "Ongoing support, maintenance and system improvements.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ title }) {
  return (
    <div className="mb-7">
      <div className="mb-2 h-[3px] w-10 bg-red-600" />

      <h2 className="font-display text-[28px] font-bold leading-tight text-white md:text-[32px]">
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   HERO AUTOMATION ILLUSTRATION
========================================================= */

function AutomationHeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[380px] w-full overflow-hidden md:h-[440px]"
    >
      <img
        src="/assets/mainImg.png"
        alt="Industrial automation and control system"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}

/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapabilityCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
  variants={fadeUp}
  className="
    w-full h-[240px]
    rounded-lg
    border border-white/10
    bg-[#0e0e0e]
    p-5
    flex flex-col
    overflow-hidden
    transition duration-300
    hover:-translate-y-1
    hover:border-red-700/50
  "
>
  {/* Icon */}
  <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center">
    <Icon
      size={40}
      strokeWidth={1.5}
      className="text-red-600"
    />
  </div>

  {/* Content */}
  <div className="mt-4 flex flex-col min-h-0">
    <h3 className="mb-2 text-[15px] font-semibold leading-[1.25] text-white line-clamp-2">
      {item.title}
    </h3>

    <p className="text-[13px] leading-[1.5] text-gray-500 line-clamp-4">
      {item.desc}
    </p>
  </div>
</motion.div>
  );
}


/* =========================================================
   SYSTEM CARD
========================================================= */

function SystemCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="
        group
        h-[160px]
        w-full
        overflow-hidden
        rounded-lg
        border border-white/10
        bg-[#0e0e0e]
        p-4
        text-center
        transition duration-300
        hover:border-red-700/50
      "
    >
      {/* Icon */}
      <div className="flex h-[42px] w-full items-center justify-center">
        <Icon
          size={40}
          strokeWidth={1.5}
          className="text-red-600"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 line-clamp-1 text-[15px] font-semibold leading-tight text-white">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-[13px] leading-[1.4] text-gray-400">
        {item.desc}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AutomationClient() {
  return (
    <main className="mt-10 w-full overflow-hidden bg-black font-body text-white">
    
          {/* HERO */}
          <section className="relative border-b border-white/10 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-[48%] bg-red-950/20 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-[8%] w-[320px] h-[320px] bg-red-700/10 blur-[110px] pointer-events-none" />
    
            <div className="relative max-w-[1220px] mx-auto px-4 lg:px-0 min-h-[350px] flex items-center py-12 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-[73%_27%] items-center w-full gap-0">
    
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
                    Automation & Control{" "}
                    <span className="text-red-600">Systems That Drive Performance.</span>
                  </motion.h1>
    
                  <motion.p
                    variants={fadeUp}
                    className="text-[#8d8d8d] text-[13px] md:text-[14px] leading-[1.65] max-w-[530px] mb-5"
                  >
                   We design, build and integrate advanced automation and control systems using PLCs, HMIs, relays, sensors and process control solutions—delivering reliability, efficiency and full operational control.
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
    
                <div className="flex justify-center md:justify-end">
                  <AutomationHeroGraphic />
                </div>
              </div>
            </div>
          </section>

      {/* =====================================================
          KEY CAPABILITIES
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
  <div className="mx-auto max-w-[1220px] px-4 md:px-6">
    <SectionHeading title="Key Capabilities" />

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-4
        items-stretch
      "
    >
      {capabilities.map((item) => (
        <CapabilityCard
          key={item.title}
          item={item}
        />
      ))}
    </motion.div>
  </div>
</section>

      {/* =====================================================
          SYSTEMS WE WORK WITH
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
  <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">

    <SectionHeading title="Systems We Work With" />

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="
        grid
        w-full
        grid-cols-2
        items-stretch
        gap-1
        sm:grid-cols-4
        lg:grid-cols-7
      "
    >
      {systems.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="h-[150px] w-full"
        >
          <SystemCard item={item} />
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* =====================================================
          PROBLEMS WE SOLVE
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
  <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">

    <SectionHeading title="Problems We Solve" />

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="
        grid
        w-full
        grid-cols-2
        gap-x-6
        gap-y-7
        md:grid-cols-3
        lg:grid-cols-6
      "
    >
      {problems.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          className="
            grid
            min-h-[100px]
            w-full
            grid-cols-[22px_minmax(0,1fr)]
            gap-2.5
            overflow-hidden
          "
        >
          {/* ICON COLUMN */}
          <div className="flex w-[22px] justify-center pt-[2px]">
            <CheckCircle2
              size={20}
              strokeWidth={2}
              className="shrink-0 text-red-600"
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="min-w-0">

            {/* Always reserves exactly 2 title lines */}
            <h3
              className="
                h-[40px]
                overflow-hidden
                text-[15px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                line-clamp-3
                overflow-hidden
                text-[13px]
                leading-[18px]
                text-gray-400
              "
            >
              {item.desc}
            </p>

          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* =====================================================
          FEATURED AUTOMATION APPLICATIONS
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
  <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">

    <SectionHeading title="Featured Automation Applications" />

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="
        grid
        w-full
        grid-cols-2
        items-stretch
        gap-3
        sm:grid-cols-3
        lg:grid-cols-6
      "
    >
      {applications.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="
              group
              relative
              h-[230px]
              w-full
              overflow-hidden
              rounded-lg
              border
              border-white/10
              bg-black
            "
          >

            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/60
                transition
                duration-300
                group-hover:bg-black/50
              "
            />

            {/* Card Content */}
            <div className="relative z-10 flex h-full flex-col p-4">

              {/* Center Icon */}
              <div className="flex flex-1 items-center justify-center">
                <div
                  className="
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-red-600/30
                    bg-black/40
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    size={40}
                    strokeWidth={1.5}
                    className="text-red-600"
                  />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">

                {/* Title */}
                <h3
                  className="
                    line-clamp-2
                    h-[42px]
                    overflow-hidden
                    text-[17px]
                    font-semibold
                    leading-[21px]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    line-clamp-2
                    h-[38px]
                    overflow-hidden
                    text-[13px]
                    leading-[19px]
                    text-gray-300
                  "
                >
                  {item.desc}
                </p>

                {/* Learn More */}
                <span
                  className="
                    mt-3
                    inline-flex
                    h-[20px]
                    items-center
                    gap-1
                    text-[13px]
                    font-semibold
                    leading-none
                    text-red-500
                  "
                >
                  Learn more
                  <ArrowRight size={15} />
                </span>

              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

  </div>
</section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto max-w-[1220px] px-4 md:px-6">
          <SectionHeading title="Our Process: From Concept to Commissioning" />

          <div className="relative">
            <div className="absolute left-[6%] right-[6%] top-[18px] hidden border-t border-dashed border-gray-700 lg:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7 lg:gap-2"
            >
              {processSteps.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    variants={fadeUp}
                    className="relative z-10 text-center"
                  >
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-red-600 bg-black text-[10px] font-bold text-red-500">
                      {item.number}
                    </div>

                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0c0c0c]">
                      <Icon
                        size={34}
                        strokeWidth={1.4}
                        className="text-red-600"
                      />
                    </div>

                    <h3 className="text-[9px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.45] text-gray-400">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY
      ===================================================== */}

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto max-w-[1220px] px-4 md:px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="grid overflow-hidden rounded-lg border border-white/10 bg-[#101010] md:grid-cols-[320px_1fr_auto]"
          >
            {/* Image */}
            <div className="relative min-h-[200px] overflow-hidden bg-black">
              <img
                src="/assets/cold-plunge.jpeg"
                alt="Industrial automation project"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Description */}
            <div className="p-4">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-red-600">
                Case Study
              </p>

              <h3 className="mt-2 text-[22px] font-bold">
                Cold Plunge Pump Automation
              </h3>

              <p className="mt-3 max-w-[620px] text-[15px] leading-[1.6] text-gray-400">
                We designed and implemented a fully automated pump and
                filtration control system for a commercial cold plunge
                facility.
              </p>

              <Link
  href="/case-studies/cold-plunge-pump-automation"
  className="mt-4 inline-flex items-center gap-2 text-red-600 transition-colors hover:text-red-500"
>
  View Case Study
  <ArrowRight size={15} />
</Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 border-t border-white/10 p-4 md:flex md:items-center md:border-l md:border-t-0">
              <div className="min-w-[85px] px-3 text-center md:border-r md:border-white/10">
                <BarChart3
                  size={32}
                  className="mx-auto mb-1.5 text-red-600"
                />

                <p className="text-[28px] font-bold">98%</p>

                <p className="text-[13px] text-gray-400">
                  Uptime Achieved
                </p>
              </div>

              <div className="min-w-[85px] px-3 text-center md:border-r md:border-white/10">
                <Clock3
                  size={32}
                  className="mx-auto mb-1.5 text-red-600"
                />

                <p className="text-[28px] font-bold">40%</p>

                <p className="text-[13px] text-gray-400">
                  Energy Savings
                </p>
              </div>

              <div className="min-w-[85px] px-3 text-center">
                <Thermometer
                  size={32}
                  className="mx-auto mb-1.5 text-red-600"
                />

                <p className="text-[28px] font-bold">±0.2°C</p>

                <p className="text-[13px] text-gray-400">
                  Temperature Control
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

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


