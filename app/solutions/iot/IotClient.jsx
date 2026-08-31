"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  Lock,
  BarChart3,
  Layers,
  Radio,
  Router,
  Cpu,
  CloudCog,
  Network,
  Smartphone,
  Monitor,
  Sliders,
  Bell,
  LineChart,
  LayoutDashboard,
  Antenna,
  Settings2,
  ShieldCheck,
  Database,
  Gauge,
  PiggyBank,
  TrendingUp,
  FileCheck,
  Rocket,
  ArrowRight,
  Headphones,
} from "lucide-react";

/* =========================================================
TRUST POINTS
========================================================= */

const trustPoints = [
  {
    icon: Eye,
    title: "Real-Time Visibility",
    desc: "Monitor assets and environments 24/7.",
  },
  {
    icon: Lock,
    title: "Secure Connectivity",
    desc: "Reliable, encrypted and resilient.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Actionable insights for better outcomes.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    desc: "Built to grow with your infrastructure.",
  },
];

/* =========================================================
CONNECTIVITY SOLUTIONS
========================================================= */

const connectivitySolutions = [
  {
    icon: Radio,
    title: "Remote Connectivity",
    desc: "Secure VPN, cellular, Wi-Fi and satellite connectivity for reliable remote access.",
    href: "/solutions/iot/remote-connectivity",
  },
  {
    icon: Router,
    title: "IoT Gateways",
    desc: "Industrial-grade gateways that connect, protect and process data at the edge.",
    href: "/solutions/iot/gateways",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    desc: "Local data processing to reduce latency and ensure business continuity.",
    href: "/solutions/iot/edge-computing",
  },
  {
    icon: CloudCog,
    title: "Cloud Connectivity",
    desc: "Seamless and secure connections to cloud platforms and services.",
    href: "/solutions/iot/cloud-connectivity",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    desc: "Design, implementation and management of robust IT/OT networks.",
    href: "/solutions/iot/network-infrastructure",
  },
  {
    icon: Smartphone,
    title: "IoT SIM & Data Plans",
    desc: "Flexible, global data connectivity for IoT devices and assets.",
    href: "/solutions/iot/sim-data-plans",
  },
];

/* =========================================================
MONITORING & CONTROL
========================================================= */

const monitoringControl = [
  {
    icon: Monitor,
    title: "Real-Time Monitoring",
    desc: "Live dashboards and alerts for assets, systems and environments.",
  },
  {
    icon: Sliders,
    title: "Remote Control",
    desc: "Securely control devices and equipment from anywhere.",
  },
  {
    icon: Bell,
    title: "Alarm & Notification",
    desc: "Instant alerts via email, SMS or app for critical events.",
  },
  {
    icon: LineChart,
    title: "Historical Analytics",
    desc: "Analyse trends, detect issues early and optimise performance.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    desc: "Role-based dashboards tailored to your operations.",
  },
];

/* =========================================================
NETWORK SYSTEMS
========================================================= */

const networkSystems = [
  {
    icon: Antenna,
    title: "Sensor Networks",
    desc: "Deploy wired and wireless sensors for any environment.",
  },
  {
    icon: Cpu,
    title: "IoT Control Systems",
    desc: "PLC, RTU and microcontroller solutions for automation.",
  },
  {
    icon: Radio,
    title: "Wireless Solutions",
    desc: "LoRaWAN, Zigbee, MQTT and other IoT protocols.",
  },
  {
    icon: Settings2,
    title: "Device Management",
    desc: "Provision, configure and update devices at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "End-to-end security for devices, networks and data.",
  },
];

/* =========================================================
INTEGRATION BENEFITS
========================================================= */

const integrationBenefits = [
  {
    icon: Database,
    title: "Unified Data",
    desc: "Integrate data from multiple sources into one platform.",
  },
  {
    icon: Gauge,
    title: "Operational Efficiency",
    desc: "Automate workflows and reduce manual overhead.",
  },
  {
    icon: PiggyBank,
    title: "Cost Savings",
    desc: "Optimise resources and reduce downtime.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    desc: "Flexible solutions that grow with your needs.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    desc: "Secure, traceable and audit-ready by design.",
  },
  {
    icon: Rocket,
    title: "Future-Proof",
    desc: "Modern technology built for long-term reliability.",
  },
];

/* =========================================================
USE CASES
========================================================= */

const useCases = [
  {
    title: "Water & Wastewater Monitoring",
    desc: "Quality, level and flow monitoring in real time.",
    img: "/assets/water-wastewater.jpeg",
  },
  {
    title: "Energy & Utilities Management",
    desc: "Monitor assets and optimise energy performance.",
    img: "/assets/energy-utilities.jpeg",
  },
  {
    title: "Industrial Asset Monitoring",
    desc: "Track equipment health and predict maintenance.",
    img: "/assets/Industrial plant.jpeg",
  },
  {
    title: "Smart Building Solutions",
    desc: "Monitor HVAC, lighting, energy and occupancy.",
    img: "/assets/smart-building.jpeg",
  },
  {
    title: "Smart City Infrastructure",
    desc: "Connected street lighting, traffic and environmental monitoring.",
    img: "/assets/iot-infrastructure.jpeg",
  },
  {
    title: "Logistics & Fleet Tracking",
    desc: "Real-time location, status and condition tracking.",
    img: "/assets/commercial.jpeg",
  },
];

/* =========================================================
CASE STUDY STATS
========================================================= */

const caseStudyStats = [
  {
    icon: Antenna,
    value: "200+",
    label: "IoT Sensors Deployed",
  },
  {
    icon: Gauge,
    value: "25%",
    label: "Reduction in Downtime",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Improvement in Efficiency",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Remote Visibility",
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

function SectionHeading({ title, action }) {
  return (
    <div className="mb-7 flex items-end justify-between">
      <div>
        <div className="mb-2 h-[3px] w-10 bg-red-600" />
        <h2 className="font-display text-[28px] font-bold leading-tight text-white md:text-[32px]">
          {title}
        </h2>
      </div>

      {action && (
        <Link
          href={action.href}
          className="hidden items-center gap-1 text-[13px] font-medium text-red-500 transition-colors hover:text-red-400 sm:inline-flex"
        >
          {action.label}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}

/* =========================================================
HERO ILLUSTRATION
========================================================= */

function IotHeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="w-full max-w-[430px] mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="iotGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="iotEdge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#7a0000" />
        </linearGradient>
      </defs>

      <motion.path
        d="M180 150 q-10 -35 30 -40 q10 -25 45 -20 q30 -20 55 5 q35 0 35 30 q20 5 20 30 q0 30 -35 30 h-140 q-30 0 -30 -25 q0 -20 20 -25 Z"
        fill="none"
        stroke="#ff2d2d"
        strokeWidth="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <line
        x1="120"
        y1="260"
        x2="120"
        y2="120"
        stroke="#ff8080"
        strokeWidth="2"
      />

      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M${100 - i * 10} ${140 - i * 22} Q120 ${100 - i * 30
            } ${140 + i * 10} ${140 - i * 22}`}
          fill="none"
          stroke="#ff2d2d"
          strokeWidth="2"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <circle cx="260" cy="290" r="110" fill="url(#iotGlow)" />

      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <polygon
          points="260,220 320,255 260,290 200,255"
          fill="url(#iotEdge)"
          opacity="0.95"
        />

        <polygon
          points="200,255 260,290 260,360 200,325"
          fill="#4a0000"
          opacity="0.9"
        />

        <polygon
          points="320,255 260,290 260,360 320,325"
          fill="#2a0000"
          opacity="0.9"
        />

        <polygon
          points="260,220 320,255 260,290 200,255"
          fill="none"
          stroke="#ff8080"
          strokeWidth="1.5"
        />
      </motion.g>

      {[0, 60, 150, 210, 300].map((deg, i) => (
        <motion.g
          key={deg}
          animate={{ rotate: 360 }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "260px 290px",
          }}
        >
          <circle
            r="6"
            fill="#ff2d2d"
            cx={
              260 +
              170 * Math.cos((deg * Math.PI) / 180)
            }
            cy={
              290 +
              170 * Math.sin((deg * Math.PI) / 180)
            }
          />
        </motion.g>
      ))}

      <rect
        x="360"
        y="150"
        width="70"
        height="90"
        rx="6"
        fill="#111111"
        stroke="#ff2d2d"
        strokeOpacity="0.5"
      />

      <line
        x1="372"
        y1="170"
        x2="418"
        y2="170"
        stroke="#ff8080"
        strokeWidth="2"
      />

      <line
        x1="372"
        y1="185"
        x2="410"
        y2="185"
        stroke="#ff8080"
        strokeWidth="2"
        opacity="0.7"
      />

      <line
        x1="372"
        y1="200"
        x2="418"
        y2="200"
        stroke="#ff8080"
        strokeWidth="2"
        opacity="0.5"
      />

      <line
        x1="372"
        y1="215"
        x2="400"
        y2="215"
        stroke="#ff8080"
        strokeWidth="2"
        opacity="0.3"
      />
    </motion.svg>
  );
}

/* =========================================================
SOLUTION CARD
========================================================= */

function SolutionCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="flex h-[220px] w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0e0e0e] p-5"
    >
      <Icon
        size={40}
        strokeWidth={1.5}
        className="mb-5 shrink-0 text-red-600"
      />

      <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-[1.25] text-white">
        {item.title}
      </h3>

      <p className="line-clamp-4 text-[13px] leading-[1.5] text-gray-400">
        {item.desc}
      </p>

      <Link
        href={item.href}
        className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-semibold text-red-500"
      >
        Learn more
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

/* =========================================================
STANDARD CARD
========================================================= */

function StandardCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="flex h-[175px] w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0e0e0e] p-5"
    >
      <Icon
        size={38}
        strokeWidth={1.5}
        className="mb-4 shrink-0 text-red-600"
      />

      <h3 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-[1.25] text-white">
        {item.title}
      </h3>

      <p className="line-clamp-3 text-[13px] leading-[1.5] text-gray-400">
        {item.desc}
      </p>
    </motion.div>
  );
}

/* =========================================================
PAGE
========================================================= */

export default function IotClient() {
  return (
    <main className="mt-10 w-full overflow-hidden bg-black font-body text-white">
      {/* =====================================================
        HERO
    ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%] bg-red-950/20 blur-3xl" />

        <div className="pointer-events-none absolute right-[8%] top-0 h-[320px] w-[320px] bg-red-700/10 blur-[110px]" />

        <div className="relative mx-auto flex min-h-[350px] max-w-[1220px] items-center px-4 py-12 md:py-14 lg:px-0">

          <div className="grid w-full grid-cols-1 items-center gap-0 md:grid-cols-[73%_27%]">

            {/* HERO TEXT */}

            <motion.div
              className="relative z-10 w-full"
              variants={stagger}
              initial="hidden"
              animate="show"
            >

              <motion.h1
                variants={fadeUp}
                className="mb-4 max-w-[620px] font-display text-[38px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[45px] md:text-[50px]"
              >
                Connected Infrastructure &{" "}
                <span className="text-red-600">
                  IoT Solutions.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mb-5 max-w-[560px] text-[13px] leading-[1.65] text-[#8d8d8d] md:text-[14px]"
              >
                Syntrad delivers connected infrastructure and IoT
                solutions that intelligently monitor, control and
                optimise operations. From sensor networks and edge
                devices to cloud dashboards and secure connectivity,
                we help you turn data into real-time decisions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mb-7 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-[12px] font-semibold transition-colors hover:bg-red-700"
                >
                  Discuss a Project
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-red-600/80 px-5 py-2.5 text-[12px] font-semibold transition-colors hover:bg-red-600"
                >
                  Request Technical Support
                  <Headphones size={14} />
                </Link>
              </motion.div>

              {/* TRUST POINTS */}

              <motion.div
                variants={fadeUp}
                className="grid w-full max-w-[850px] grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4"
              >
                {trustPoints.map(
                  ({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex min-w-0 items-start gap-3"
                    >
                      <Icon
                        className="mt-0.5 shrink-0 text-red-600"
                        size={24}
                        strokeWidth={1.7}
                      />

                      <div className="min-w-0">
                        <p className="mb-1 text-[14px] font-semibold leading-[1.2] text-white">
                          {title}
                        </p>

                        <p className="text-[12px] leading-[1.4] text-[#777]">
                          {desc}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* HERO GRAPHIC */}

            <div className="hidden justify-end md:flex">
              <IotHeroIllustration />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
      CONNECTIVITY SOLUTIONS
  ===================================================== */}

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6 lg:px-0">

          <SectionHeading title="Connectivity Solutions" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {connectivitySolutions.map((item) => (
              <SolutionCard
                key={item.title}
                item={item}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
    MONITORING + INTEGRATION + NETWORK SYSTEMS
===================================================== */}

<section className="border-b border-white/10 py-10">
  <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6 lg:px-0">

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_270px] lg:items-stretch">

      {/* =================================================
          LEFT COLUMN
          MONITORING + INTEGRATION
      ================================================= */}

      <div className="flex flex-col gap-10">

        {/* ================= MONITORING ================= */}

        <div>
          <SectionHeading title="Monitoring & Control" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            {monitoringControl.map((item) => (
              <StandardCard
                key={item.title}
                item={item}
                className="min-h-[200px]"
              />
            ))}
          </motion.div>
        </div>


        {/* ================= INTEGRATION ================= */}

        <div>
          <SectionHeading title="Integration Benefits" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {integrationBenefits.map((item) => (
              <StandardCard
                key={item.title}
                item={item}
                className="min-h-[200px]"
              />
            ))}
          </motion.div>
        </div>

      </div>


      {/* =================================================
          RIGHT COLUMN
          NETWORK & IOT SYSTEMS
      ================================================= */}

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="flex h-full min-h-[440px] flex-col rounded-lg border border-white/10 bg-[#0e0e0e] p-5"
      >

        {/* TITLE */}

        <div className="mb-5">
          <div className="mb-2 h-[3px] w-8 bg-red-600" />

          <h3 className="font-display text-[21px] font-bold text-white">
            Network & IoT Systems
          </h3>
        </div>


        {/* NETWORK ITEMS */}

        <div className="flex flex-1 flex-col justify-between gap-6">

          {networkSystems.map(
            ({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex items-start gap-3"
              >

                <Icon
                  className="mt-0.5 shrink-0 text-red-600"
                  size={24}
                  strokeWidth={1.5}
                />

                <div className="min-w-0">

                  <p className="mb-1 text-[14px] font-semibold leading-tight text-white">
                    {title}
                  </p>

                  <p className="text-[12px] leading-[1.5] text-gray-500">
                    {desc}
                  </p>

                </div>

              </motion.div>
            )
          )}

        </div>

      </motion.div>

    </div>

  </div>
</section>

      {/* =====================================================
      FEATURED USE CASES
  ===================================================== */}

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6 lg:px-0">

          <SectionHeading title="Featured Use Cases" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {useCases.map(
              ({ title, desc, img }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative h-[210px] w-full overflow-hidden rounded-lg border border-white/10 bg-black"
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/65" />

                  <div className="absolute inset-0 flex flex-col justify-end p-4">

                    <p className="mb-2 line-clamp-2 text-[15px] font-semibold leading-[1.25] text-white">
                      {title}
                    </p>

                    <p className="line-clamp-3 text-[12px] leading-[1.45] text-gray-300">
                      {desc}
                    </p>

                  </div>
                </motion.div>
              )
            )}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
      CASE STUDY
  ===================================================== */}

      <section className="border-b border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6 lg:px-0">

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
            transition={{
              duration: 0.55,
            }}
            className="grid overflow-hidden rounded-lg border border-white/10 bg-[#101010] md:grid-cols-[300px_1fr_auto]"
          >

            {/* IMAGE */}

            <div className="relative min-h-[210px] overflow-hidden bg-black">
              <Image
                src="/assets/industrial-plant.jpeg"
                alt="IoT Monitoring Solution for Industrial Plant"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* CONTENT */}

            <div className="p-5">

              <p className="text-[12px] font-semibold uppercase tracking-widest text-red-600">
                Case Study
              </p>

              <h3 className="mt-2 text-[22px] font-bold leading-tight text-white">
                IoT Monitoring Solution for Industrial Plant
              </h3>

              <p className="mt-3 max-w-[620px] text-[13px] leading-[1.6] text-gray-400">
                Syntrad implemented a comprehensive IoT solution
                for a manufacturing plant, integrating 200+ sensors,
                edge computing and cloud dashboards to deliver
                real-time visibility, predictive maintenance and a
                25% reduction in unplanned downtime.
              </p>

              <Link
                href="/projects/iot-monitoring-industrial-plant"
                className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-red-600 transition-colors hover:text-red-500"
              >
                View Case Study
                <ArrowRight size={15} />
              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-5 border-t border-white/10 p-5 md:flex md:items-center md:border-l md:border-t-0">

              {caseStudyStats.map(
                ({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="min-w-[105px] px-3 text-center md:border-r md:border-white/10 last:border-r-0"
                  >
                    <Icon
                      size={30}
                      className="mx-auto mb-1.5 text-red-600"
                    />

                    <p className="text-[25px] font-bold leading-none text-white">
                      {value}
                    </p>

                    <p className="mt-1 text-[11px] leading-tight text-gray-400">
                      {label}
                    </p>
                  </div>
                )
              )}

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
      CTA
  ===================================================== */}

      <section>
        <div className="mx-auto max-w-[1220px] px-4 py-5 lg:px-0">

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-md border border-red-700/50 bg-gradient-to-r from-[#390505] via-[#240303] to-[#110000] px-5 py-5 md:flex-row"
          >

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,40,40,.5),transparent_35%)] opacity-20" />

            <div className="relative flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-600">
                <Headphones
                  className="text-white"
                  size={22}
                />
              </div>

              <div>
                <h3 className="mb-1 font-display text-[19px] font-bold leading-tight md:text-[21px]">
                  Ready to connect and control your infrastructure?
                </h3>

                <p className="text-[10px] text-[#999]">
                  Our engineers are ready to help. Fast response.
                  Expert solutions. Minimal downtime.
                </p>
              </div>

            </div>

            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-red-600 px-5 py-2.5 text-[11px] font-semibold transition-colors hover:bg-red-700"
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
