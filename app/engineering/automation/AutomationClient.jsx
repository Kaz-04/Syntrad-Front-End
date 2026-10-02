"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Activity,
  Plug,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const HERO_DIR = "/assets/Hero/";
const IMG_DIR = "/assets/images/";
const ICON_DIR = "/assets/icons/";

function Glyph({ png, size = 48, scale = 1, className = "" }) {
  return (
    <div
      className={`shrink-0 flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={`${ICON_DIR}${png}`}
        alt=""
        className="w-full h-full object-contain object-center"
        style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
      />
    </div>
  );
}

const resolveHref = (href, projectType) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const DEFAULT_TYPE = "Automation & Control Systems";

const heroFeatures = [
  {
    icon: Activity,
    title: "Engineered for Reliability",
    desc: "Robust systems built for 24/7 performance",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    desc: "Integrating new systems with existing operations",
  },
  {
    icon: ShieldCheck,
    title: "Built for Safety",
    desc: "Safety interlocks and fail-safe design",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready",
    desc: "Scalable, data-driven automation solutions",
  },
];

const capabilities = [
  {
    png: "05_Bespoke_Engineering.png",
    title: "Custom Automation Design",
    desc: "Tailored control systems designed to match your process and performance goals.",
    projectType: DEFAULT_TYPE,
  },
  {
    png: "icon_building_automation_transparent.png",
    title: "PLC & HMI Programming",
    desc: "Expert programming for Siemens, Allen-Bradley, Mitsubishi and more.",
    projectType: DEFAULT_TYPE,
  },
  {
    png: "03_Energy_Management.png",
    title: "Process Control Solutions",
    desc: "Reliable process control strategies for consistent output and efficiency.",
    projectType: DEFAULT_TYPE,
  },
  {
    png: "23_Sensor_Control.png",
    title: "Sensor & Instrumentation Integration",
    desc: "Seamless integration of sensors, transmitters and field devices.",
    projectType: DEFAULT_TYPE,
  },
  {
    png: "15_Smart_Home_Control.png",
    title: "System Integration",
    desc: "End-to-end integration of automation, electrical and mechanical systems.",
    projectType: DEFAULT_TYPE,
  },
  {
    png: "icon_headset.png",
    title: "Support & Maintenance",
    desc: "Ongoing support, remote monitoring and system optimisation.",
    projectType: DEFAULT_TYPE,
  },
];

const systems = [
  {
    png: "icon_building_automation_transparent.png",
    title: "PLCs",
    desc: "Siemens, Allen-Bradley, Mitsubishi & more",
  },
  {
    png: "04_Specialist_Diagnostics.png",
    title: "HMIs & SCADA",
    desc: "Intuitive interfaces for monitoring & control",
  },
  {
    png: "icon_electrical_transparent.png",
    title: "Relays & Contactors",
    desc: "Reliable switching & protection solutions",
  },
  {
    png: "23_Sensor_Control.png",
    title: "Sensors & Transmitters",
    desc: "Temperature, pressure, level, flow & more",
  },
  {
    png: "icon_gears.png",
    title: "Pumps & Motors",
    desc: "Control, monitoring & energy optimisation",
  },
  {
    png: "icon_shield.png",
    title: "Safety Interlocks",
    desc: "Guarding, E-Stops & safety PLC integration",
  },
  {
    png: "22_Audio_Visual.png",
    title: "Remote Monitoring",
    desc: "Secure remote access, alerts & data logging",
  },
];

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

const applications = [
  {
    png: "icon_robot_arm.png",
    title: "Process Automation",
    desc: "Automate and optimise complex industrial processes.",
    image: `${IMG_DIR}factory-production-line.jpg`,
    href: "/sectors/commercial-industrial",
  },
  {
    png: "24_Water.png",
    title: "Pump & Flow Control",
    desc: "Precision pump control, VFD integration and flow management.",
    image: `${IMG_DIR}industrial-pumps-piping.jpg`,
    projectType: DEFAULT_TYPE,
  },
  {
    png: "09_Temperature_Control.png",
    title: "Temperature Control",
    desc: "Precise temperature regulation for consistent performance.",
    image: `${IMG_DIR}hvac-cooling-unit.jpg`,
    projectType: DEFAULT_TYPE,
  },
  {
    png: "icon_maintenance_transparent.png",
    title: "Batch & Recipe Control",
    desc: "Automated batching with recipe management and traceability.",
    image: `${IMG_DIR}industrial-machine-grayscale.jpg`,
    projectType: DEFAULT_TYPE,
  },
  {
    png: "03_Energy_Management.png",
    title: "Energy Management",
    desc: "Monitor, control and reduce energy consumption.",
    image: `${IMG_DIR}industrial-generator-blue.jpg`,
    href: "/solutions/energy",
  },
  {
    png: "15_Smart_Home_Control.png",
    title: "System Integration",
    desc: "Integrate control systems across multi-disciplinary platforms.",
    image: `${IMG_DIR}warehouse-interior.jpg`,
    projectType: DEFAULT_TYPE,
  },
];

const processSteps = [
  {
    png: "04_Specialist_Diagnostics.png",
    title: "Assess",
    desc: "We understand your process, goals and technical requirements.",
  },
  {
    png: "05_Bespoke_Engineering.png",
    title: "Design",
    desc: "We create a tailored automation solution and control strategy.",
  },
  {
    png: "icon_building_automation_transparent.png",
    title: "Engineer",
    desc: "We program, configure and build your control systems.",
  },
  {
    png: "icon_chart.png",
    title: "Test",
    desc: "Rigorous testing and validation to ensure reliability and safety.",
  },
  {
    png: "icon_maintenance_transparent.png",
    title: "Install",
    desc: "Professional installation with minimal disruption to operations.",
  },
  {
    png: "icon_gears.png",
    title: "Commission",
    desc: "We commission, optimise and hand over a fully functional system.",
  },
  {
    png: "icon_headset.png",
    title: "Support",
    desc: "Ongoing support, maintenance and system improvements.",
  },
];

const caseStudy = {
  title: "Cold Plunge Pump Automation",
  desc: "We designed and implemented a fully automated pump and filtration control system for a commercial cold plunge facility.",
  image: `${IMG_DIR}cold-plunge-pool.jpg`,
  href: "/projects",
};

const caseStudyStats = [
  { png: "icon_chart.png", value: "98%", label: "Uptime Achieved" },
  { png: "03_Energy_Management.png", value: "40%", label: "Energy Savings" },
  {
    png: "09_Temperature_Control.png",
    value: "±0.2°C",
    label: "Temperature Control",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AutomationClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <div
        onClickCapture={(e) => {
          const link = e.target.closest("a");
          if (link && link.getAttribute("href") === "#technical-advice") {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <PageHero
          pageLabel="Automation & Control Systems"
          heading={[
            "Automation & Control",
            "Systems That Drive",
            "Performance.",
          ]}
          description="We design, build and integrate advanced automation and control systems using PLCs, HMIs, relays, sensors and process control solutions—delivering reliability, efficiency and full operational control."
          buttons={[
            {
              label: "Discuss Your Project",
              href: resolveHref(undefined, DEFAULT_TYPE),
              icon: ArrowRight,
            },
            {
              label: "Request Technical Support",
              href: "#technical-advice",
              icon: Headphones,
              variant: "outline",
            },
          ]}
          features={heroFeatures}
          visual={
            <img
              src={`${HERO_DIR}auto.png`}
              alt="Automation and control systems: PLC cabinet, HMI, sensors, pump and motor"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Key Capabilities" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(({ png, scale, title, desc, projectType }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-4 pt-3 pb-4 transition-colors w-full flex flex-col items-center justify-start text-center"
              >
                <Glyph png={png} scale={scale} size={64} className="mb-2" />
                <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] mb-2 text-gray-100 transition-colors group-hover:text-red-400">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">
                  {desc}
                </p>

                <Link
                  href={resolveHref(undefined, projectType)}
                  aria-label={`${title}: start an enquiry`}
                  className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Systems We Work With" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {systems.map(({ png, scale, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-3 pt-3 pb-3 transition-colors flex flex-col items-center text-center"
              >
                <Glyph png={png} scale={scale} size={52} className="mb-2" />
                <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1 text-gray-100">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Problems We Solve" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-6 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {problems.map(({ title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex items-start gap-2.5"
              >
                <Glyph png="06_Safety_Security.png" size={26} />
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-[11px] leading-[1.25] mb-1 text-gray-100">
                    {title}
                  </h3>
                  <p className="text-[#8a8a8a] text-[10px] leading-[1.4]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Featured Automation Applications" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {applications.map(
              ({ png, scale, title, desc, image, href, projectType }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative rounded-md overflow-hidden min-h-[150px] border border-white/10 hover:border-red-700/50 transition-colors"
                >
                  <img
                    src={image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/90" />

                  <div className="relative z-10 h-full min-h-[150px] flex flex-col items-center justify-between px-3 py-3 text-center">
                    <Glyph png={png} scale={scale} size={44} />
                    <div>
                      <h3 className="font-display font-semibold text-[12px] leading-[1.25] text-white mb-1">
                        {title}
                      </h3>
                      <p className="text-[#b5b5b5] text-[9.5px] leading-[1.4]">
                        {desc}
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center gap-1 text-red-500 text-[10px] font-semibold">
                      {href ? "Learn more" : "Enquire Now"}{" "}
                      <ArrowRight size={10} />
                    </span>
                  </div>

                  <Link
                    href={resolveHref(href, projectType)}
                    aria-label={
                      href
                        ? `${title}: learn more`
                        : `${title}: start an enquiry`
                    }
                    className="absolute inset-0 z-20 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Our Process: From Concept to Commissioning" />

          <motion.div
            className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map(({ png, scale, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center px-2"
              >
                <div className="relative w-16 h-16 rounded-full border border-white/10 bg-[#0c0c0c] flex items-center justify-center mb-2">
                  <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full border border-red-600 bg-black flex items-center justify-center z-10">
                    <span className="font-display font-bold text-[11px] text-red-500">
                      {i + 1}
                    </span>
                  </div>
                  <Glyph png={png} scale={scale} size={44} />
                </div>

                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t border-dashed border-white/25">
                    <ArrowRight className="absolute -right-1 -top-[6px] w-3 h-3 text-white/40 bg-black" />
                  </div>
                )}

                <h3 className="font-display font-semibold text-[12px] leading-[1.25] mb-1 text-gray-100">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center gap-5 rounded-lg border border-white/10 bg-[#0e0e0e] p-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full lg:w-[170px] h-[80px] shrink-0 rounded-md object-cover"
            />

            <div className="flex-1 min-w-0 lg:pr-5 lg:border-r lg:border-white/10">
              <p className="text-red-500 text-[9px] font-semibold tracking-[0.08em] uppercase mb-1">
                Case Study
              </p>
              <h3 className="font-display font-semibold text-[15px] leading-[1.25] mb-1 text-white">
                {caseStudy.title}
              </h3>
              <p className="text-[#999] text-[10.5px] leading-[1.5] max-w-[300px]">
                {caseStudy.desc}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 shrink-0">
              {caseStudyStats.map(({ png, scale, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Glyph png={png} scale={scale} size={36} />
                  <div>
                    <p className="font-display text-[18px] leading-none font-bold text-white">
                      {value}
                    </p>
                    <p className="text-[#999] text-[10.5px] leading-[1.3] mt-1">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={caseStudy.href}
              className="shrink-0 lg:px-6 inline-flex items-center gap-1 text-red-500 text-[11px] font-semibold hover:text-red-400 transition-colors"
            >
              View case study <ArrowRight size={12} />
            </Link>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Ready to automate and optimise your operations?"
        subtitle="Let's build a smarter, safer and more efficient control system for your business."
        buttonLabel="Discuss Your Project"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
