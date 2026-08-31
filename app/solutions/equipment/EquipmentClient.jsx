"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Headphones,
  Wrench as BespokeIcon,
  Search as DiagnosticsIcon,
  Users as SupportIcon,
  ShieldCheck as ReliabilityIcon,
  Dumbbell,
  UtensilsCrossed,
  Building2,
  HomeIcon,
  ShieldAlert,
  PanelTop,
  Bot,
  Gauge,
  Wrench,
  Hammer,
  RefreshCw,
  LayoutGrid,
  Cog,
  Zap,
  Cpu,
  Network,
  FileText,
  ClipboardList,
  MonitorCog,
  Lightbulb,
  Activity,
  BarChart3,
  Clock,
} from "lucide-react";

const heroBadges = [
  {
    icon: <BespokeIcon size={20} />,
    title: "Bespoke Engineering",
    description: "Tailored solutions for unique challenges",
  },
  {
    icon: <DiagnosticsIcon size={20} />,
    title: "Advanced Diagnostics",
    description: "Identify issues early and prevent downtime",
  },
  {
    icon: <SupportIcon size={20} />,
    title: "Expert Support",
    description: "Skilled engineers across multiple disciplines",
  },
  {
    icon: <ReliabilityIcon size={20} />,
    title: "Built for Reliability",
    description: "Engineered for safety, compliance and uptime",
  },
];

function SectionHeading({ title, action }) {
  return (
    <div className="mb-5 flex items-end justify-between md:mb-6">
      <div>
        <div className="mb-2 h-[2px] w-8 bg-red-600" />

        <h2 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-[26px]">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className="hidden items-center gap-1 text-[11px] font-medium text-red-500 transition-colors hover:text-red-400 sm:inline-flex"
        >
          {action.label}
          <ArrowRight size={13} />
        </Link>
      )}
    </div>
  );
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

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

const sectors = [
  {
    icon: Dumbbell,
    title: "Leisure, Wellness & Fitness",
    img: "/assets/leisure.jpeg",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Catering",
    img: "/assets/hospitality.jpeg",
  },
  {
    icon: Building2,
    title: "Commercial & Industrial",
    img: "/assets/commercial.jpeg",
  },
  {
    icon: HomeIcon,
    title: "Premium Residential",
    img: "/assets/residential.jpeg",
  },
  {
    icon: ShieldAlert,
    title: "Specialist Technical Environments",
    img: "/assets/technical.jpeg",
  },
];

const equipmentTypes = [
  {
    icon: <PanelTop size={26} />,
    title: "Control Systems & Panels",
    description:
      "Custom control panels, PLCs, HMIs and SCADA system design, build and optimisation.",
    href: "/solutions/equipment/control-systems-panels",
  },
  {
    icon: <Bot size={26} />,
    title: "Specialist Machinery & Automation",
    description:
      "Bespoke machines and automation solutions designed for precision and reliability.",
    href: "/solutions/equipment/machinery-automation",
  },
  {
    icon: <Gauge size={26} />,
    title: "Test, Measurement & Diagnostics",
    description:
      "Advanced test rigs and diagnostic equipment for performance and fault analysis.",
    href: "/solutions/equipment/test-measurement-diagnostics",
  },
  {
    icon: <Wrench size={26} />,
    title: "Pumps, Drives & Motion Systems",
    description:
      "Installation, repair and upgrades for pumps, drives and motion assemblies.",
    href: "/solutions/equipment/pumps-drives-motion",
  },
  {
    icon: <Hammer size={26} />,
    title: "Fabricated & Process Equipment",
    description:
      "Custom fabricated equipment for industrial, process and specialist applications.",
    href: "/solutions/equipment/fabricated-process-equipment",
  },
  {
    icon: <RefreshCw size={26} />,
    title: "Upgrades, Retrofits & Integrations",
    description:
      "Modernise, integrate and extend equipment life with engineered upgrade solutions.",
    href: "/solutions/equipment/upgrades-retrofits",
  },
];

const capabilities = [
  {
    icon: <LayoutGrid size={22} />,
    title: "Bespoke Design",
    description:
      "Tailored engineering solutions for unique operational needs.",
  },
  {
    icon: <Cog size={22} />,
    title: "Mechanical Engineering",
    description:
      "Precision design and manufacture for complex systems and assemblies.",
  },
  {
    icon: <Zap size={22} />,
    title: "Electrical Engineering",
    description:
      "Control system design, cabling, panel build and commissioning.",
  },
  {
    icon: <Cpu size={22} />,
    title: "Software & Control",
    description:
      "PLC, HMI and SCADA programming with seamless integration.",
  },
  {
    icon: <Network size={22} />,
    title: "Integration Services",
    description:
      "System integration, upgrades and third-party equipment interfaces.",
  },
  {
    icon: <FileText size={22} />,
    title: "Documentation & Compliance",
    description:
      "Technical documentation, certification and regulatory compliance support.",
  },
];

const workflow = [
  {
    number: "1",
    icon: <ClipboardList size={22} />,
    title: "Assess",
    description:
      "We assess the equipment, review history and identify key challenges.",
  },
  {
    number: "2",
    icon: <MonitorCog size={22} />,
    title: "Diagnose",
    description:
      "Advanced diagnostics to pinpoint faults and performance bottlenecks.",
  },
  {
    number: "3",
    icon: <Lightbulb size={22} />,
    title: "Solution",
    description:
      "We design the optimal solution, from repair to upgrade or full redesign.",
  },
  {
    number: "4",
    icon: <Wrench size={22} />,
    title: "Implement",
    description:
      "Expert engineering and integration with minimal disruption to operations.",
  },
  {
    number: "5",
    icon: <Activity size={22} />,
    title: "Test & Validate",
    description:
      "Rigorous testing and validation to ensure safety, reliability and compliance.",
  },
  {
    number: "6",
    icon: <Headphones size={22} />,
    title: "Support",
    description:
      "Ongoing support and maintenance to keep your systems performing.",
  },
];

const applications = [
  {
    image: "/assets/leisure.jpeg",
    title: "Gym HVAC & Automation Upgrade",
    description:
      "Design and integration of control systems to improve efficiency and reliability.",
  },
  {
    image: "/assets/hospitality.jpeg",
    title: "Commercial Kitchen Control System",
    description:
      "Bespoke control panel and automation solution for high-performance kitchen equipment.",
  },
  {
    image: "/assets/Industrial plant.jpeg",
    title: "Industrial Plant Modernisation",
    description:
      "Upgrade of legacy controls with modern controls and safety compliance.",
  },
  {
    image: "/assets/diagnostics.jpeg",
    title: "Test & Diagnostic Equipment",
    description:
      "Custom-built test rigs for component validation and system diagnostics.",
  },
];

const caseStudyStats = [
  {
    icon: <BarChart3 size={20} />,
    value: "28%",
    label: "Efficiency Increase",
  },
  {
    icon: <Clock size={20} />,
    value: "35%",
    label: "Downtime Reduction",
  },
  {
    icon: <ShieldAlert size={20} />,
    value: "100%",
    label: "System Reliability",
  },
];

export default function EquipmentClient() {
  return (
    <main className="bg-black">
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* HERO CONTENT */}
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Specialist Equipment
                <br />
                Engineering. Tailored
                <br />
                Support for Critical Systems.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
                We design, support and enhance specialist equipment with deep
                technical expertise, advanced diagnostics and precision
                engineering. From bespoke machinery and control systems to
                complex integrations and upgrades, we keep your equipment
                performing at its best.
              </p>

              <motion.div
                variants={fadeUp}
                className="mb-7 mt-4 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Discuss a Project
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-red-600/80 px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-red-600"
                >
                  Request Technical Support
                  <Headphones size={14} />
                </Link>
              </motion.div>

              {/* HERO BADGES */}
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {heroBadges.map((badge) => (
                  <div key={badge.title} className="flex flex-col gap-2">
                    <span className="text-red-500">{badge.icon}</span>

                    <div>
                      <p className="text-sm font-semibold leading-tight text-white">
                        {badge.title}
                      </p>

                      <p className="mt-1 text-xs leading-snug text-gray-500">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO GRAPHIC */}
            <div className="relative flex items-center justify-center">
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS WE SUPPORT */}
      <section className="border-b border-white/10 text-white">
        <div className="mx-auto max-w-[1220px] px-4 py-5 md:py-2 lg:px-0">
          <div className="mb-5 flex items-center justify-between md:mb-6">
  <SectionHeading title="Sectors We Support" />

  <Link
    href="/solutions/equipment"
    className="hidden items-center gap-1.5 text-sm font-semibold text-red-500 transition-colors hover:text-red-400 sm:inline-flex"
  >
    View all sectors
    <ArrowRight size={14} />
  </Link>
</div>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sectors.map(({ icon: Icon, title, img }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative h-[140px] w-full overflow-hidden rounded-md border border-white/10"
              >
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
                  <div className="mb-2 flex h-[40px] w-[42px] shrink-0 items-center justify-center">
                    <Icon
                      className="text-red-500"
                      size={35}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="flex h-[38px] w-full shrink-0 items-start justify-center">
                    <p className="font-display max-w-[180px] text-[18px] font-semibold leading-[1.25]">
                      {title}
                    </p>
                  </div>

                  <div className="mt-2 h-[2px] w-[32px] shrink-0 bg-red-600" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT TYPES */}
      <section className="border-t border-white/5 py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="mb-10 flex items-end justify-between">
  <div>
    {/* RED LINE ABOVE TITLE */}
    <div className="mb-2 h-0.5 w-8 bg-red-600" />

    <h2 className="text-2xl font-bold text-white sm:text-3xl">
      Equipment Types We Support
    </h2>
  </div>

  <Link
    href="/solutions/equipment"
    className="hidden items-center gap-1.5 text-sm font-semibold text-red-500 transition-colors hover:text-red-400 sm:inline-flex"
  >
    View all equipment
    <ArrowRight size={14} />
  </Link>
</div>

    {/* CARDS */}
    <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
      {equipmentTypes.map((item) => (
        <div
          key={item.title}
          className="flex min-h-[230px] flex-col rounded-md border border-white/10 bg-[#151515] p-5"
        >
          {/* ICON + CONTENT */}
          <div className="flex items-start gap-3">
            {/* ICON */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-red-500">
              {item.icon}
            </div>

            {/* TITLE + DESCRIPTION */}
            <div className="min-w-0">
              <h3 className="mb-2 text-[15px] font-bold leading-tight text-white">
                {item.title}
              </h3>

              <p className="text-[13px] leading-5 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>

          {/* FREE SPACE */}
          <div className="flex-1" />

          {/* LEARN MORE */}
          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-red-500 transition-colors hover:text-red-400"
          >
            Learn more
            <ArrowRight size={14} />
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ENGINEERING CAPABILITIES */}
      <section className="border-t border-white/5 py-5 sm:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
  <div>
    <div className="mb-2 h-0.5 w-8 bg-red-600" />

    <h2 className="text-2xl font-bold text-white sm:text-3xl">
      Our Engineering Capabilities
    </h2>
  </div>
</div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-red-800/20 p-5 transition-colors bg-[#151515] hover:border-red-600/50"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-800/40 text-red-500">
                  {item.icon}
                </span>

                <h3 className="mb-2 text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC WORKFLOW */}
      <section className="border-t border-white/5 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
  <div>
    {/* RED LINE ABOVE TITLE */}
    <div className="mb-2 h-0.5 w-8 bg-red-600" />

    <h2 className="text-2xl font-bold text-white sm:text-3xl">
       Our Diagnostic &amp; Support Workflow
    </h2>
  </div>
</div>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
            {workflow.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-red-800/40 bg-white/[0.03] text-red-500">
                  {step.icon}

                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-[11px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  {step.title}
                </h3>

                <p className="max-w-[160px] text-xs leading-relaxed text-gray-400">
                  {step.description}
                </p>

                {idx < workflow.length - 1 && (
                  <span className="absolute -right-2 top-8 hidden text-red-800/50 xl:flex">
                    <ArrowRight size={16} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED APPLICATIONS */}
      <section className="border-t border-white/5 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-red-600" />

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Featured Applications
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-400 sm:inline-flex"
            >
              View all applications
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl border border-red-800/20 transition-colors hover:border-red-600/50"
              >
                {/* IMAGE */}
                <div className="h-36 overflow-hidden bg-[#111]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mb-4 text-xs leading-relaxed text-gray-400">
                    {item.description}
                  </p>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-400"
                  >
                    View case study
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="border-t border-white/5 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-red-800/30 bg-gradient-to-r from-red-950/20 via-black to-black">
            <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
              {/* CASE STUDY IMAGE */}
              <div className="h-44 overflow-hidden bg-[#111] lg:h-auto">
                <img
                  src="/assets/industrial-cooling.jpeg"
                  alt="Industrial Cooling System Upgrade"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
                <div className="max-w-xl">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-500">
                    Featured Case Study
                  </p>

                  <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                    Industrial Cooling System Upgrade
                  </h3>

                  <p className="mb-3 text-sm leading-relaxed text-gray-400">
                    We designed and integrated a new control system for an
                    industrial cooling plant, improving efficiency by 28% and
                    reducing unplanned downtime through advanced monitoring and
                    predictive diagnostics.
                  </p>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-400"
                  >
                    View full case study
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="flex shrink-0 items-center gap-8">
                  {caseStudyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3"
                    >
                      <span className="text-red-500">{stat.icon}</span>

                      <div>
                        <p className="text-lg font-bold leading-none text-white">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1220px] px-4 py-5 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-md border border-red-700/50 bg-gradient-to-r from-[#390505] via-[#240303] to-[#110000] px-5 py-5 md:flex-row"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,40,40,.5),transparent_35%)] opacity-20" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-600">
                <Headphones className="text-white" size={22} />
              </div>

              <div>
                <h3 className="mb-1 font-display text-white text-[19px] font-bold leading-tight md:text-[21px]">
                  Need expert electrical &amp; electronic engineering support?
                </h3>

                <p className="text-[10px] text-[#999]">
                  Our engineers are ready to help. Fast response. Expert
                  solutions. Minimal downtime.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-red-600 px-5 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-red-700"
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

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 560 400"
      className="h-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="equipCoreGlow" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor="#ff2d2d"
            stopOpacity="0.9"
          />
          <stop
            offset="100%"
            stopColor="#ff2d2d"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* Background grid dots */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 90}
            cy={20 + row * 56}
            r="1.4"
            fill="#7a1f1f"
            opacity="0.5"
          />
        ))
      )}

      {/* Monitor panel */}
      <g
        stroke="#7a2020"
        strokeWidth="1.2"
        fill="none"
        opacity="0.85"
      >
        <rect x="60" y="60" width="140" height="100" rx="4" />
        <circle cx="130" cy="95" r="18" />
        <path d="M75,140 l14,-18 l12,10 l14,-24 l12,16 l14,-8" />
      </g>

      {/* Workbench surface */}
      <g stroke="#ff4d4d" strokeWidth="1.4" fill="none">
        <polygon
          points="70,260 280,220 490,260 280,300"
          opacity="0.85"
        />
        <line
          x1="70"
          y1="260"
          x2="70"
          y2="290"
          opacity="0.5"
        />
        <line
          x1="490"
          y1="260"
          x2="490"
          y2="290"
          opacity="0.5"
        />
        <polygon
          points="70,290 280,330 490,290"
          opacity="0.5"
        />
      </g>

      {/* Machine body */}
      <g stroke="#ff4d4d" strokeWidth="1.5" fill="none">
        <rect
          x="230"
          y="120"
          width="110"
          height="120"
          rx="6"
          opacity="0.9"
        />

        <circle
          cx="285"
          cy="160"
          r="20"
          opacity="0.9"
        />

        <circle
          cx="285"
          cy="160"
          r="6"
          fill="#ff4d4d"
          opacity="0.9"
        />

        <line
          x1="245"
          y1="205"
          x2="245"
          y2="225"
          opacity="0.7"
        />

        <line
          x1="265"
          y1="205"
          x2="265"
          y2="225"
          opacity="0.7"
        />

        <line
          x1="305"
          y1="205"
          x2="305"
          y2="225"
          opacity="0.7"
        />

        <line
          x1="325"
          y1="205"
          x2="325"
          y2="225"
          opacity="0.7"
        />
      </g>

      {/* Dials cluster */}
      <g
        stroke="#ff4d4d"
        strokeWidth="1.2"
        fill="none"
        opacity="0.85"
      >
        <rect
          x="400"
          y="90"
          width="90"
          height="110"
          rx="4"
        />

        <circle cx="445" cy="120" r="14" />
        <circle cx="445" cy="160" r="14" />

        <line
          x1="445"
          y1="112"
          x2="450"
          y2="122"
        />

        <line
          x1="445"
          y1="152"
          x2="440"
          y2="162"
        />
      </g>

      {/* Connecting lines */}
      <g
        stroke="#7a2020"
        strokeWidth="1"
        opacity="0.6"
      >
        <line
          x1="200"
          y1="110"
          x2="240"
          y2="150"
        />

        <line
          x1="400"
          y1="140"
          x2="340"
          y2="160"
        />
      </g>

      {/* Glow */}
      <circle
        cx="285"
        cy="160"
        r="70"
        fill="url(#equipCoreGlow)"
      />

      {/* Target reticle */}
      <g
        stroke="#ff4d4d"
        strokeWidth="1.2"
        fill="none"
        opacity="0.9"
      >
        <circle cx="150" cy="150" r="20" />
        <circle cx="150" cy="150" r="8" />

        <line
          x1="150"
          y1="120"
          x2="150"
          y2="132"
        />

        <line
          x1="150"
          y1="168"
          x2="150"
          y2="180"
        />

        <line
          x1="120"
          y1="150"
          x2="132"
          y2="150"
        />

        <line
          x1="168"
          y1="150"
          x2="180"
          y2="150"
        />
      </g>
    </svg>
  );
}