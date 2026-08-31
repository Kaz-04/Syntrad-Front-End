'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Headphones,
  BadgeCheck,
  Timer,
  Workflow,
  MapPin,
  Activity,
  CircuitBoard,
  Wrench,
  Waves,
  Cog,
  ShieldCheck,
  Zap,
  Radio,
  Lightbulb,
  Cable,
  PanelsTopLeft,
  AlertTriangle,
  Gauge,
  Thermometer,
  ClipboardCheck,
  FileText,
  Server,
  SlidersHorizontal,
  Microscope,
  ShieldAlert as ShieldAlertIcon,
} from 'lucide-react';

const coreCapabilities = [
  {
    icon: <Activity size={34} strokeWidth={1.5} />,
    title: 'Three-Phase Power Systems',
    desc: 'Design, analysis and troubleshooting of three-phase distribution, loads and protective systems.',
  },
  {
    icon: <CircuitBoard size={34} strokeWidth={1.5} />,
    title: 'Circuit Analysis & Troubleshooting',
    desc: 'In-depth circuit analysis, signal tracing and root-cause identification across power and control systems.',
  },
  {
    icon: <Wrench size={34} strokeWidth={1.5} />,
    title: 'PCB Diagnostics & Repair',
    desc: 'Component-level diagnostics, micro-soldering and PCB repair for control boards and power electronics.',
  },
  {
    icon: <Waves size={34} strokeWidth={1.5} />,
    title: 'Electronic Fault Finding',
    desc: 'Advanced testing and fault finding in analogue, digital and mixed-signal electronic systems.',
  },
  {
    icon: <Cog size={34} strokeWidth={1.5} />,
    title: 'Control Systems Integration',
    desc: 'PLC, relay, HMI and control system integration, testing and performance optimisation.',
  },
  {
    icon: <ShieldCheck size={34} strokeWidth={1.5} />,
    title: 'Reliability & Performance',
    desc: 'Enhancing system reliability, reducing downtime and optimising electrical performance.',
  },
];

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

const electricalServices = [
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: 'Power Distribution & Protection',
    desc: 'Switchboards, MCCs, distribution boards, circuit protection and load balancing.',
  },
  {
    icon: <Radio size={24} strokeWidth={1.5} />,
    title: 'Sensor & Instrumentation Systems',
    desc: 'Signal conditioning, transmitters, calibration and loop diagnostics.',
  },
  {
    icon: <Gauge size={24} strokeWidth={1.5} />,
    title: 'Motor Control & Drives',
    desc: 'VFDs, soft starters, contactors, overload protection and motor circuit diagnostics.',
  },
  {
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    title: 'Lighting & Power Quality',
    desc: 'LED systems, harmonic analysis, power factor correction and surge protection.',
  },
  {
    icon: <Cable size={24} strokeWidth={1.5} />,
    title: 'Wiring, Harnessing & Terminations',
    desc: 'Industrial wiring systems, cable management and termination integrity.',
  },
  {
    icon: <PanelsTopLeft size={24} strokeWidth={1.5} />,
    title: 'Panel Building & Modifications',
    desc: 'Custom control panels, retrofits, upgrades and system modifications.',
  },
];

const commonFaults = [
  {
    title: 'Intermittent Power Loss',
    desc: 'Find and resolve loose connections, thermal issues and faulty components.',
  },
  {
    title: 'Drive & Motor Issues',
    desc: 'Resolve VFD faults, motor trips and performance concerns.',
  },
  {
    title: 'Control Circuit Failures',
    desc: 'Diagnose relay, contactor and PLC input/output issues.',
  },
  {
    title: 'PCB & Component Failures',
    desc: 'Locate and repair failed components, shorts, open circuits and signal faults.',
  },
  {
    title: 'Overheating & Thermal Faults',
    desc: 'Identify hotspots, overloads and insulation breakdowns.',
  },
  {
    title: 'Signal Integrity Problems',
    desc: 'Investigate noise, interference, grounding and signal degradation.',
  },
];

const complianceCards = [
  {
    icon: <ShieldAlertIcon size={30} strokeWidth={1.5} />,
    title: 'Electrical Safety Testing',
    desc: 'Insulation resistance, earth continuity, polarity and RCD/ELCB testing.',
  },
  {
    icon: <Activity size={30} strokeWidth={1.5} />,
    title: 'Three-Phase Analysis',
    desc: 'Voltage, current, imbalance, power factor and harmonic analysis.',
  },
  {
    icon: <Thermometer size={30} strokeWidth={1.5} />,
    title: 'Thermal Imaging',
    desc: 'Infrared inspections to identify overheating and prevent failures.',
  },
  {
    icon: <Microscope size={30} strokeWidth={1.5} />,
    title: 'PCB & Electronic Testing',
    desc: 'Oscilloscope, signal injection, component testing and functional tests.',
  },
  {
    icon: <ClipboardCheck size={30} strokeWidth={1.5} />,
    title: 'Compliance Standards',
    desc: 'Work to BS, IEC and industry best practices and regulations.',
  },
  {
    icon: <FileText size={30} strokeWidth={1.5} />,
    title: 'Documentation & Reporting',
    desc: 'Detailed test reports, schematics, findings and recommendations.',
  },
];

const featuredSystems = [
  {
    image: "/assets/control-panel.jpeg",
    title: 'Control Panels & MCCs',
    desc: 'Custom-built panels for power distribution and control.',
  },
  {
    image: "/assets/system-integration.jpeg",
    title: 'Variable Frequency Drives',
    desc: 'ABB, Siemens, Schneider and other leading drive systems.',
  },
  {
    image: "/assets/temperature-control.jpeg",
    title: 'PLC & Control Systems',
    desc: 'Siemens, Allen-Bradley, Omron and Mitsubishi platforms.',
  },
  {
    image: "/assets/Test-measurement.jpeg",
    title: 'Test & Measurement Tools',
    desc: 'Thermal imaging, power analysers, oscilloscopes and multimeters.',
  },
  {
    image: "/assets/diagnostics.jpeg",
    title: 'PCB Repair & Rework',
    desc: 'Micro-soldering, component replacement and rework.',
  },
  {
    image: "/assets/pump-flow-control.jpeg",
    title: 'Motors & Actuators',
    desc: 'AC motors, servos, actuators and gear systems.',
  },
];

export default function ElectricalClient() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Global Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[140px]" />
        <div className="absolute right-0 top-[35%] h-[500px] w-[450px] rounded-full bg-red-900/10 blur-[140px]" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(220,38,38,0.14),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-[1220px] px-4 py-8 sm:px-6 md:py-10 lg:px-0">
          {/* Breadcrumb */}
          <div className="mb-7 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-gray-500">
            <Link
              href="/"
              className="transition-colors hover:text-gray-300"
            >
              Home
            </Link>

            <ChevronRight size={13} />

            <Link
              href="/solutions"
              className="transition-colors hover:text-gray-300"
            >
              Solutions
            </Link>

            <ChevronRight size={13} />

            <span className="text-red-500">
              Electrical &amp; Electronic Engineering
            </span>
          </div>

          {/* Hero Grid */}
          <div className="grid mt-10 grid-cols-1 items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9">
            {/* Hero Content */}
            <div>
              <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-tight sm:text-[44px] md:text-[48px] lg:text-[50px]">
                Electrical &amp;
                <br />
                Electronic Engineering.
              </h1>

              <p className="mt-4 text-lg font-semibold text-red-500 sm:text-xl">
                Diagnose. Test. Restore. Power Performance.
              </p>

              <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-gray-400 sm:text-base">
                Syntrad delivers expert electrical and electronic engineering
                services across industrial and commercial systems. From
                three-phase power and control systems to PCB-level diagnostics
                and electronic fault-finding, we identify root causes, restore
                reliability and prevent future failures.
              </p>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 mb-7 mt-4"
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

              {/* Hero Stats */}
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
                <HeroStat
                  icon={<BadgeCheck size={20} />}
                  title="Engineering Excellence"
                  desc="Certified, experienced and solution-driven"
                />

                <HeroStat
                  icon={<Timer size={20} />}
                  title="Rapid Response"
                  desc="Fast turnarounds and minimal downtime"
                />

                <HeroStat
                  icon={<Workflow size={20} />}
                  title="End-to-End Delivery"
                  desc="Design, test, integrate and support"
                />

                <HeroStat
                  icon={<MapPin size={20} />}
                  title="London Based"
                  desc="Serving clients across the UK"
                />
              </div>
            </div>

            {/* Hero Graphic */}
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE CAPABILITIES
      ========================================================= */}
      <Section title="Core Capabilities">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {coreCapabilities.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[215px] w-full flex-col rounded-md border border-white/10 bg-[#111] p-4"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-red-700/30 bg-red-600/10 text-red-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-5 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
      {/* =========================================================
          SERVICES + COMMON FAULTS
      ========================================================= */}
      <Section>
        <div>
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-[1fr_1px_1fr] lg:gap-8">

            {/* SERVICES */}
            <div className="flex h-full flex-col">
              <SectionTitle title="Electrical & Electronic Services" />

              <div className="mt-7 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                {electricalServices.map((service) => (
                  <div key={service.title} className="h-full">
                    <ServiceItem
                      icon={service.icon}
                      title={service.title}
                      desc={service.desc}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="hidden lg:block w-px bg-white/10" />

            {/* COMMON FAULTS */}
            <div className="flex h-full flex-col">
              <SectionTitle title="Common Faults & Investigations" />

              <div className="mt-7 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                {commonFaults.map((fault) => (
                  <div key={fault.title} className="h-full">
                    <ServiceItem
                      icon={
                        <AlertTriangle
                          size={30}
                          strokeWidth={1.5}
                        />
                      }
                      title={fault.title}
                      desc={fault.desc}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Section>
      {/* =========================================================
          COMPLIANCE
      ========================================================= */}
      <Section title="Compliance, Testing & Diagnostics">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {complianceCards.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[145px] items-start gap-3 rounded-md border border-white/10 bg-[#151515] p-4"
            >
              {/* ICON */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-red-500">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <h3 className="mb-2 text-[14px] font-bold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-5 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================
          FEATURED SYSTEMS
      ========================================================= */}
      <Section title="Featured Systems & Equipment">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {featuredSystems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[265px] flex-col overflow-hidden rounded-md border border-white/10 bg-[#111]"
            >
              {/* Image Area */}
              <div className="h-[145px] shrink-0 overflow-hidden border-b border-white/10 bg-[#151515]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-[16px] font-bold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-[13px] leading-6 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================================================
          CASE STUDY
      ========================================================= */}
      <Section>
        <div className="overflow-hidden rounded-md border border-red-800/30 bg-[#0b0b0b]">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
            {/* Visual */}
            <div className="flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-red-950/60 via-black to-black md:min-h-[100%]">
              <img
                src="/assets/control-panel.jpeg"
                alt="Control panel system"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
                Case Study
              </p>

              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Control Board Recovery – Complex Fault Resolution
              </h3>

              <p className="max-w-3xl text-[14px] leading-7 text-gray-400">
                A manufacturing client experienced repeated shutdowns due to
                an intermittent control board failure. Our engineers performed
                in-depth circuit analysis, identified a rare component failure
                and restored full system operation, preventing costly
                production downtime.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-5">
                <CaseStat
                  label="Root Cause Identified"
                  value="Component-Level Fault"
                />

                <CaseStat
                  label="Downtime Avoided"
                  value="48+ Hours"
                />

                <CaseStat
                  label="System Restored"
                  value="100% Operational"
                />

                <CaseStat
                  label="Client Outcome"
                  value="Zero Recurrence"
                />

                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center gap-2 text-red-600 transition-colors hover:text-red-500"
                >
                  View Case Study
                  <ArrowRight size={15} />
                </Link>
              </div>


            </div>
          </div>
        </div>
      </Section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
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
                  Need expert elecrical & electronic engineering support?
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

/* =============================================================
   SECTION
============================================================= */

function Section({ title, children }) {
  return (
    <section className="relative mx-auto w-full max-w-[1220px] px-4 py-7 sm:px-6 sm:py-9 lg:px-0">
      {title && <SectionHeading title={title} />}

      {children}
    </section>
  );
}

/* =============================================================
   SECTION HEADING
   Red line is ABOVE the title
============================================================= */

function SectionHeading({ title }) {
  return (
    <div className="mb-7">
      <div className="mb-3 h-[3px] w-12 rounded-full bg-red-600" />

      <h2 className="text-[25px] font-extrabold leading-tight tracking-tight text-white sm:text-[29px]">
        {title}
      </h2>
    </div>
  );
}

/* =============================================================
   SUB SECTION TITLE
============================================================= */

function SectionTitle({ title }) {
  return (
    <div>
      <div className="mb-3 h-[3px] w-10 rounded-full bg-red-600" />

      <h2 className="text-[23px] font-extrabold leading-tight text-white sm:text-[27px]">
        {title}
      </h2>
    </div>
  );
}

/* =============================================================
   SERVICE ITEM
============================================================= */

function ServiceItem({ icon, title, desc }) {
  return (
    <div className="flex h-full min-h-[150px] flex-col p-3">

      {/* ICON */}
      <div className="mb-4 flex h-8 w-8 shrink-0 items-center justify-center text-red-600">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="mb-2 text-[15px] font-semibold leading-[1.2] text-white">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[13px] leading-[1.5] text-white/60">
        {desc}
      </p>

    </div>
  );
}

/* =============================================================
   HERO STAT
============================================================= */

function HeroStat({ icon, title, desc }) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2 text-red-500">
        {icon}
      </div>

      <p className="text-[13px] font-bold leading-tight text-white sm:text-sm">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs">
        {desc}
      </p>
    </div>
  );
}

/* =============================================================
   CASE STAT
============================================================= */

function CaseStat({ label, value }) {
  return (
    <div>
      <p className="mb-1 text-[11px] leading-tight text-gray-500">
        {label}
      </p>

      <p className="text-[13px] font-bold leading-tight text-white sm:text-sm">
        {value}
      </p>
    </div>
  );
}

/* =============================================================
   HERO GRAPHIC
============================================================= */

function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-md border border-red-800/30 bg-gradient-to-br from-red-950/40 via-black to-black">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(220,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.5)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 scale-150 rounded-full bg-red-600/25 blur-2xl" />

          <div className="relative flex h-24 w-24 rotate-45 items-center justify-center rounded-2xl border border-red-600/50 bg-red-600/20">
            <Zap
              size={42}
              strokeWidth={1.5}
              className="-rotate-45 text-red-500"
            />
          </div>
        </div>
      </div>

      {/* Top Left */}
      <div className="absolute left-5 top-5 flex h-14 w-20 items-center justify-center rounded-md border border-red-700/40 bg-black/70 text-red-500/80 backdrop-blur-sm">
        <Waves size={25} strokeWidth={1.5} />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-5 right-5 flex h-16 w-24 items-center justify-center rounded-md border border-red-700/40 bg-black/70 text-red-500/80 backdrop-blur-sm">
        <CircuitBoard size={27} strokeWidth={1.5} />
      </div>

      {/* Number */}
      <div className="absolute bottom-6 left-6 rounded-md border border-red-700/40 bg-black/80 px-3 py-2 font-mono text-xs text-red-400">
        398.7
      </div>

      {/* Small Decorative Lines */}
      <div className="absolute left-8 top-1/2 h-px w-16 bg-red-600/40" />
      <div className="absolute right-8 top-1/2 h-px w-16 bg-red-600/40" />
    </div>
  );
}