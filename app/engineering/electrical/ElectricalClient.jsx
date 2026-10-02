"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  BadgeCheck,
  Timer,
  Workflow,
  MapPin,
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

const DEFAULT_TYPE = "Electrical & Electronic Engineering";

const resolveHref = (href, projectType = DEFAULT_TYPE) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const heroFeatures = [
  {
    icon: BadgeCheck,
    title: "Engineering Excellence",
    desc: "Certified, experienced and solution-driven",
  },
  {
    icon: Timer,
    title: "Rapid Response",
    desc: "Fast turnarounds and minimal downtime",
  },
  {
    icon: Workflow,
    title: "End-to-End Delivery",
    desc: "Design, test, integrate and support",
  },
  {
    icon: MapPin,
    title: "London Based",
    desc: "Serving clients across the UK",
  },
];

const coreCapabilities = [
  {
    png: "icon_transformer.png",
    title: "Three-Phase Power Systems",
    desc: "Design, analysis and troubleshooting of three-phase distribution, loads and protective systems.",
  },
  {
    png: "icon_building_automation_transparent.png",
    title: "Circuit Analysis & Troubleshooting",
    desc: "In-depth circuit analysis, signal tracing and root-cause identification across power and control systems.",
  },
  {
    png: "icon_maintenance_transparent.png",
    title: "PCB Diagnostics & Repair",
    desc: "Component-level diagnostics, micro-soldering and PCB repair for control boards and power electronics.",
  },
  {
    png: "04_Specialist_Diagnostics.png",
    title: "Electronic Fault Finding",
    desc: "Advanced testing and fault finding in analogue, digital and mixed-signal electronic systems.",
  },
  {
    png: "icon_gears.png",
    title: "Control Systems Integration",
    desc: "PLC, relay, HMI and control system integration, testing and performance optimisation.",
  },
  {
    png: "icon_shield.png",
    title: "Reliability & Performance",
    desc: "Enhancing system reliability, reducing downtime and optimising electrical performance.",
  },
];

const electricalServices = [
  {
    png: "icon_electrical_transparent.png",
    title: "Power Distribution & Protection",
    desc: "Switchboards, MCCs, distribution boards, circuit protection and load balancing.",
  },
  {
    png: "23_Sensor_Control.png",
    title: "Sensor & Instrumentation Systems",
    desc: "Signal conditioning, transmitters, calibration and loop diagnostics.",
  },
  {
    png: "icon_gears.png",
    title: "Motor Control & Drives",
    desc: "VFDs, soft starters, contactors, overload protection and motor circuit diagnostics.",
  },
  {
    png: "07_Lighting_Control.png",
    title: "Lighting & Power Quality",
    desc: "LED systems, harmonic analysis, power factor correction and surge protection.",
  },
  {
    png: "icon_building_automation_transparent.png",
    title: "Wiring, Harnessing & Terminations",
    desc: "Industrial wiring systems, cable management and termination integrity.",
  },
  {
    png: "15_Smart_Home_Control.png",
    title: "Panel Building & Modifications",
    desc: "Custom control panels, retrofits, upgrades and system modifications.",
  },
];

const commonFaults = [
  {
    png: "icon_electrical_transparent.png",
    title: "Intermittent Power Loss",
    desc: "Find and resolve loose connections, thermal issues and faulty components.",
  },
  {
    png: "icon_gears.png",
    title: "Drive & Motor Issues",
    desc: "Resolve VFD faults, motor trips and performance concerns.",
  },
  {
    png: "15_Smart_Home_Control.png",
    title: "Control Circuit Failures",
    desc: "Diagnose relay, contactor and PLC input/output issues.",
  },
  {
    png: "icon_building_automation_transparent.png",
    title: "PCB & Component Failures",
    desc: "Locate and repair failed components, shorts, open circuits and signal faults.",
  },
  {
    png: "09_Temperature_Control.png",
    title: "Overheating & Thermal Faults",
    desc: "Identify hotspots, overloads and insulation breakdowns.",
  },
  {
    png: "23_Sensor_Control.png",
    title: "Signal Integrity Problems",
    desc: "Investigate noise, interference, grounding and signal degradation.",
  },
];

const complianceCards = [
  {
    png: "06_Safety_Security.png",
    title: "Electrical Safety Testing",
    desc: "Insulation resistance, earth continuity, polarity and RCD/ELCB testing.",
  },
  {
    png: "icon_transformer.png",
    title: "Three-Phase Analysis",
    desc: "Voltage, current, imbalance, power factor and harmonic analysis.",
  },
  {
    png: "09_Temperature_Control.png",
    title: "Thermal Imaging",
    desc: "Infrared inspections to identify overheating and prevent failures.",
  },
  {
    png: "04_Specialist_Diagnostics.png",
    title: "PCB & Electronic Testing",
    desc: "Oscilloscope, signal injection, component testing and functional tests.",
  },
  {
    png: "icon_shield.png",
    title: "Compliance Standards",
    desc: "Work to BS, IEC and industry best practices and regulations.",
  },
  {
    png: "icon_chart.png",
    title: "Documentation & Reporting",
    desc: "Detailed test reports, schematics, findings and recommendations.",
  },
];

const featuredSystems = [
  {
    title: "Control Panels & MCCs",
    desc: "Custom-built panels for power distribution and control.",
    image: `${IMG_DIR}electrical-switchboard.jpg`,
  },
  {
    title: "Variable Frequency Drives",
    desc: "ABB, Siemens, Schneider and other leading drive systems.",
    image: `${IMG_DIR}switchgear-panel-row.jpg`,
  },
  {
    title: "PLC & Control Systems",
    desc: "Siemens, Allen-Bradley, Omron and Mitsubishi platforms.",
    image: `${IMG_DIR}plc-control-panel.jpg`,
  },
  {
    title: "Test & Measurement Tools",
    desc: "Thermal imaging, power analysers, oscilloscopes and multimeters.",
    image: `${IMG_DIR}equipment-testing-rig.jpg`,
  },
  {
    title: "PCB Repair & Rework",
    desc: "Micro-soldering, component replacement and rework.",
    image: `${IMG_DIR}circuit-board-testing.jpg`,
  },
  {
    title: "Motors & Actuators",
    desc: "AC motors, servos, actuators and gear systems.",
    image: `${IMG_DIR}industrial-motor.jpg`,
  },
];

const caseStudy = {
  title: "Control Board Recovery – Complex Fault Resolution",
  desc: "A manufacturing client experienced repeated shutdowns due to an intermittent control board failure. Our engineers performed in-depth circuit analysis, identified a rare component failure and restored full system operation, preventing costly production downtime.",
  image: `${IMG_DIR}pm.png`,

  projectType: DEFAULT_TYPE,
};

const caseStudyStats = [
  {
    png: "04_Specialist_Diagnostics.png",
    label: "Root Cause Identified",
    value: "Component-Level Fault",
  },
  {
    png: "03_Energy_Management.png",
    label: "Downtime Avoided",
    value: "48+ Hours",
  },
  {
    png: "icon_gears.png",
    label: "System Restored",
    value: "100% Operational",
  },
  { png: "icon_shield.png", label: "Client Outcome", value: "Zero Recurrence" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ElectricalClient() {
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
          pageLabel="Electrical & Electronic Engineering"
          heading={[
            "Electrical &",
            "Electronic Engineering.",
            "Diagnose. Test. Restore. Power Performance.",
          ]}
          description="Syntrad delivers expert electrical and electronic engineering services across industrial and commercial systems. From three-phase power and control systems to PCB-level diagnostics and electronic fault-finding, we identify root causes, restore reliability and prevent future failures."
          buttons={[
            { label: "Discuss a Project", href: "/contact", icon: ArrowRight },
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
              src={`${HERO_DIR}eee.webp`}
              alt="Electrical and electronic engineering: circuit diagnostics with a digital multimeter"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Core Capabilities" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coreCapabilities.map(
              ({ png, scale, title, desc, href, projectType }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-4 pt-3 pb-4 transition-colors w-full flex flex-col items-center justify-start text-center"
                >
                  <Glyph png={png} scale={scale} size={72} className="mb-2" />
                  <h3 className="font-display font-semibold text-[13px] leading-[1.25] mb-2 text-gray-100 transition-colors group-hover:text-red-400">
                    {title}
                  </h3>
                  <p className="text-[#8a8a8a] text-[11px] leading-[1.45]">
                    {desc}
                  </p>

                  <Link
                    href={resolveHref(href, projectType)}
                    aria-label={`${title}: start an enquiry`}
                    className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:divide-x lg:divide-white/10">
            <motion.div
              className="lg:pr-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading title="Electrical & Electronic Services" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-6"
              >
                {electricalServices.map(({ png, scale, title, desc }) => (
                  <div key={title} className="flex items-start gap-2.5">
                    <Glyph png={png} scale={scale} size={40} />
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1 text-gray-100">
                        {title}
                      </h3>
                      <p className="text-[#8a8a8a] text-[10.5px] leading-[1.4]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:pl-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading title="Common Faults & Investigations" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-6"
              >
                {commonFaults.map(({ png, scale, title, desc }) => (
                  <div key={title} className="flex items-start gap-2.5">
                    <Glyph png={png} scale={scale} size={40} />
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1 text-gray-100">
                        {title}
                      </h3>
                      <p className="text-[#8a8a8a] text-[10.5px] leading-[1.4]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Compliance, Testing & Diagnostics" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {complianceCards.map(
              ({ png, scale, title, desc, href, projectType }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative flex items-start gap-2.5 bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-3 min-h-[84px] transition-colors"
                >
                  <Glyph png={png} scale={scale} size={40} />
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[10.5px] leading-[1.25] mb-1 text-gray-100 transition-colors group-hover:text-red-400">
                      {title}
                    </h3>
                    <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">
                      {desc}
                    </p>
                  </div>

                  <Link
                    href={resolveHref(href, projectType)}
                    aria-label={`${title}: start an enquiry`}
                    className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                  />
                </motion.div>
              ),
            )}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Featured Systems & Equipment" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredSystems.map(
              ({ title, desc, image, href, projectType }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative flex flex-col bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
                >
                  <div className="h-[100px] w-full overflow-hidden">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-3 text-center">
                    <h3 className="font-display font-semibold text-[12px] leading-[1.25] mb-1 text-gray-100 transition-colors group-hover:text-red-400">
                      {title}
                    </h3>
                    <p className="text-[#8a8a8a] text-[10px] leading-[1.4]">
                      {desc}
                    </p>
                  </div>

                  <Link
                    href={resolveHref(href, projectType)}
                    aria-label={`${title}: start an enquiry`}
                    className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          <motion.div
            className="mt-4 flex flex-col lg:flex-row lg:items-center gap-5 rounded-lg border border-red-700/60 bg-gradient-to-r from-[#1c0909] via-[#100606] to-[#1c0909] p-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full lg:w-[235px] h-[125px] shrink-0 rounded-md object-cover"
            />

            <div className="flex-1 min-w-0">
              <p className="text-red-500 text-[9.5px] font-semibold tracking-[0.08em] uppercase mb-1">
                Case Study
              </p>
              <h3 className="font-display font-semibold text-[16px] leading-[1.25] mb-1.5 text-white">
                {caseStudy.title}
              </h3>
              <p className="text-[#999] text-[11px] leading-[1.5] max-w-[560px]">
                {caseStudy.desc}
              </p>

              <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3">
                {caseStudyStats.map(({ png, scale, label, value }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Glyph png={png} scale={scale} size={26} />
                    <div className="min-w-0">
                      <p className="text-[#999] text-[9.5px] leading-[1.3]">
                        {label}
                      </p>
                      <p className="font-display text-[10.5px] leading-[1.3] font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 lg:pr-4">
              <Link
                href={resolveHref(caseStudy.href, caseStudy.projectType)}
                className="px-5 py-2.5 rounded-md text-[12px] font-semibold text-red-500 inline-flex items-center justify-center gap-2 transition-colors border border-red-600/80 hover:bg-red-600 hover:text-white"
              >
                View Case Study <ArrowRight size={13} strokeWidth={1.7} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Need expert electrical & electronic engineering support?"
        subtitle="Our engineers are ready to diagnose, test and deliver reliable solutions."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
