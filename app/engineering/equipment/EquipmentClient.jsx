'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headphones, Wrench, Search, Users, ShieldCheck,
  ConciergeBell, ClipboardList, Clock,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ProjectCardGrid from "../../components/ProjectCardGrid";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const ICON_DIR = "/assets/icons/";

function Glyph({ png, icon: Icon, size = 48, scale = 1, className = "" }) {
  if (png) {
    return (
      <div className={`shrink-0 flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <img
          src={`${ICON_DIR}${png}`}
          alt=""
          className="w-full h-full object-contain object-center"
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
        />
      </div>
    );
  }
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Icon
        size={Math.round(size * 0.7)}
        strokeWidth={1.5}
        className="text-red-500"
        style={{ filter: 'drop-shadow(0 0 5px rgba(239,68,68,0.8))' }}
      />
    </div>
  );
}

const EQUIPMENT_TYPE = "Other Specialist Equipment";
const contactLink = (type) => `/contact?type=${encodeURIComponent(type)}`;

const heroFeatures = [
  { icon: Wrench, title: "Bespoke Engineering", desc: "Tailored solutions for unique challenges." },
  { icon: Search, title: "Advanced Diagnostics", desc: "Identify issues early and prevent downtime." },
  { icon: Users, title: "Expert Support", desc: "Skilled engineers across multiple disciplines." },
  { icon: ShieldCheck, title: "Built for Reliability", desc: "Engineered for safety, compliance and uptime." },
];

const sectors = [
  { png: "icon_gym_transparent.png", title: "Leisure, Wellness & Fitness", image: "/assets/images/gym-equipment-floor.jpg", href: "/repair-and-service/sauna&cold-plunge" },
  { icon: ConciergeBell, title: "Hospitality & Catering", image: "/assets/images/cc.png", href: "/sectors/hospitality-catering" },
  { png: "icon_transformer.png", title: "Commercial & Industrial", image: "/assets/images/warehouse-interior.jpg", href: "/sectors/commercial-industrial" },
  { png: "01_Smart_Home.png", title: "Premium Residential", image: "/assets/images/modern-house-exterior.jpg", href: "/sectors/premium-residential" },
  { png: "06_Safety_Security.png", title: "Specialist Technical Environments", image: "/assets/images/data-center-racks.jpg", href: "/sectors/specialist-technical-environments" },
];

const equipmentTypes = [
  { png: "icon_building_automation_transparent.png", title: "Control Systems & Panels", desc: "Custom control panels, PLCs, HMIs and SCADA system design, build and optimisation.", href: contactLink("Automation & Control Systems") },
  { png: "icon_robot_arm.png", title: "Specialist Machinery & Automation", desc: "Bespoke machines and automation solutions designed for precision and reliability.", href: contactLink("Bespoke Engineering") },
  { png: "04_Specialist_Diagnostics.png", title: "Test, Measurement & Diagnostics", desc: "Advanced test rigs and diagnostic equipment for performance and fault analysis.", href: contactLink("PCB & Electronic Diagnostics") },
  { png: "icon_transformer.png", title: "Pumps, Drives & Motion Systems", desc: "Installation, repair and upgrades for pumps, drives and motion assemblies.", href: contactLink("Pumps, Motors & Drives") },
  { png: "icon_maintenance_transparent.png", title: "Fabricated & Process Equipment", desc: "Custom fabricated equipment for industrial, process and specialist applications.", href: contactLink("Other Specialist Equipment") },
  { png: "icon_gears.png", title: "Upgrades, Retrofits & Integrations", desc: "Modernise, integrate and extend equipment life with engineered upgrade solutions.", href: contactLink("Heritage & Precision Equipment") },
];

const capabilities = [
  { png: "05_Bespoke_Engineering.png", title: "Bespoke Design", desc: "Tailored engineering solutions for unique operational needs.", href: contactLink("Bespoke Engineering") },
  { png: "icon_gears.png", title: "Mechanical Engineering", desc: "Precision design and manufacture for complex systems and assemblies.", href: contactLink("Electromechanical Systems") },
  { png: "icon_electrical_transparent.png", title: "Electrical Engineering", desc: "Control system design, cabling, panel build and commissioning.", href: contactLink("Electrical & Electronic Engineering") },
  { png: "15_Smart_Home_Control.png", title: "Software & Control", desc: "PLC, HMI and SCADA programming with seamless integration.", href: contactLink("Automation & Control Systems") },
  { png: "23_Sensor_Control.png", title: "Integration Services", desc: "System integration, upgrades and third-party equipment interfaces.", href: contactLink("Connected Infrastructure & IoT") },
  { png: "icon_shield.png", title: "Documentation & Compliance", desc: "Technical documentation, certification and regulatory compliance support.", href: contactLink("Electrical & Electronic Engineering") },
];

const workflow = [
  { icon: ClipboardList, title: "Assess", desc: "We assess the equipment, review history and identify key challenges." },
  { png: "04_Specialist_Diagnostics.png", title: "Diagnose", desc: "Advanced diagnostics to pinpoint faults and performance bottlenecks." },
  { png: "07_Lighting_Control.png", title: "Solution", desc: "We design the optimal solution, from repair to upgrade or full redesign." },
  { png: "icon_maintenance_transparent.png", title: "Implement", desc: "Expert engineering and integration with minimal disruption to operations." },
  { png: "icon_chart.png", title: "Test & Validate", desc: "Rigorous testing and validation to ensure safety, reliability and compliance." },
  { png: "icon_headset.png", title: "Support", desc: "Ongoing support and maintenance to keep your systems performing." },
];

const applications = [
  { title: "Gym HVAC & Automation Upgrade", desc: "Design and integration of control systems to improve efficiency and reliability.", image: "/assets/images/gym-equipment-floor.jpg", href: contactLink("Automation & Control Systems") },
  { title: "Commercial Kitchen Control System", desc: "Bespoke control panel and automation solution for high-performance kitchen equipment.", image: "/assets/images/commercial-kitchen.jpg", href: contactLink("Automation & Control Systems") },
  { title: "Industrial Plant Modernisation", desc: "Upgrade of legacy controls with modern controls and safety compliance.", image: "/assets/images/factory-production-line.jpg", href: contactLink("Automation & Control Systems") },
  { title: "Test & Diagnostic Equipment", desc: "Custom-built test rigs for component validation and system diagnostics.", image: "/assets/images/circuit-board-testing.jpg", href: contactLink("PCB & Electronic Diagnostics") },
];

const featuredCaseStudy = {
  title: "Industrial Cooling System Upgrade",
  desc: "We designed and integrated a new control system for an industrial cooling plant, improving efficiency by 28% and reducing unplanned downtime through advanced monitoring and predictive diagnostics.",
  image: "/assets/images/industrial-pumps-piping.jpg",
  href: contactLink("Automation & Control Systems"),
};

const caseStudyStats = [
  { png: "icon_chart.png", value: "28%", label: "Efficiency Increase" },
  { icon: Clock, value: "35%", label: "Downtime Reduction" },
  { png: "icon_shield.png", value: "100%", label: "System Reliability" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function EquipmentClient() {
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
          pageLabel="Specialist Equipment Engineering"
          heading={["Specialist Equipment", "Engineering. Tailored", "Support for Critical Systems."]}
          headingAccentIndex={-1}
          description="We design, support and enhance specialist equipment with deep technical expertise, advanced diagnostics and precision engineering. From bespoke machinery and control systems to complex integrations and upgrades, we keep your equipment performing at its best."
          buttons={[
            { label: "Request a Project", href: contactLink(EQUIPMENT_TYPE), icon: ArrowRight },
            { label: "Request Technical Support", href: "#technical-advice", icon: Headphones, variant: "outline" },
          ]}
          features={heroFeatures}
          visual={
            <img
              src="/assets/hero/SEE.png"
              alt="Specialist equipment engineering: bespoke control machinery"
              className="absolute inset-0 w-full h-full object-cover object-right origin-right scale-[1.08] translate-x-[6%]"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Sectors We Support" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {sectors.map(({ icon, png, scale, title, image, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative rounded-md overflow-hidden h-[135px] border border-white/10 hover:border-red-700/50 transition-colors"
              >
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/85" />

                <div className="relative z-10 h-full flex flex-col items-center justify-between px-3 py-3 text-center">
                  <Glyph png={png} icon={icon} scale={scale} size={46} className="mt-1" />
                  <h3 className="font-display font-medium text-[15px] leading-[1.3] text-white">{title}</h3>
                  <span className="inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                    Explore sector <ArrowRight size={11} />
                  </span>
                </div>

                <Link
                  href={href}
                  aria-label={`${title}: explore sector`}
                  className="absolute inset-0 z-20 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Equipment Types We Support" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {equipmentTypes.map(({ icon, png, scale, title, desc, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex flex-col bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-3.5 min-h-[168px] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Glyph png={png} icon={icon} scale={scale} size={52} />
                  <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] text-gray-100 transition-colors group-hover:text-red-400">{title}</h3>
                </div>
                <p className="text-[#8a8a8a] text-[11px] leading-[1.45] mt-3">{desc}</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                  Learn more <ArrowRight size={11} />
                </span>

                <Link
                  href={href}
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
          <SectionHeading title="Our Engineering Capabilities" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(({ icon, png, scale, title, desc, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex items-start gap-2.5 bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-3 min-h-[84px] transition-colors"
              >
                <Glyph png={png} icon={icon} scale={scale} size={46} />
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-[11px] leading-[1.25] mb-1 text-gray-100 transition-colors group-hover:text-red-400">{title}</h3>
                  <p className="text-[#8a8a8a] text-[10px] leading-[1.4]">{desc}</p>
                </div>

                <Link
                  href={href}
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
          <SectionHeading title="Our Diagnostic & Support Workflow" />

          <motion.div
            className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {workflow.map(({ icon, png, scale, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} className="flex items-center flex-1 min-w-0">
                <div className="relative flex-1 min-w-0 flex items-center gap-3 rounded-[34px] border border-white/10 bg-gradient-to-r from-[#161616] to-[#0a0a0a] pl-5 pr-4 py-4 h-full">

                  <div className="absolute -top-2 -left-1 w-6 h-6 rounded-full border border-red-600 bg-black flex items-center justify-center">
                    <span className="font-display font-bold text-[11px] text-red-500">{i + 1}</span>
                  </div>

                  <Glyph png={png} icon={icon} scale={scale} size={46} />
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                    <p className="text-[#8a8a8a] text-[9.5px] leading-[1.4]">{desc}</p>
                  </div>
                </div>

                {i < workflow.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-7 shrink-0">
                    <ArrowRight className="w-4 h-4 text-white/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Featured Applications" action={{ label: "View all applications", href: "/projects" }} />
          <div className="mt-6">
            <ProjectCardGrid
              items={applications}
              layout="left"
              linkLabel="Enquire Now"
              cols="sm:grid-cols-2 lg:grid-cols-4"
            />
          </div>

          <motion.div
            className="mt-4 flex flex-col lg:flex-row lg:items-center gap-5 rounded-lg border border-red-700/60 bg-gradient-to-r from-[#1c0909] via-[#100606] to-[#1c0909] p-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={featuredCaseStudy.image}
              alt={featuredCaseStudy.title}
              className="w-full lg:w-[190px] h-[110px] shrink-0 rounded-md object-cover"
            />

            <div className="flex-1 min-w-0">
              <p className="text-red-500 text-[10px] font-semibold mb-1">Featured Case Study</p>
              <h3 className="font-display font-semibold text-[16px] leading-[1.25] mb-1.5 text-white">{featuredCaseStudy.title}</h3>
              <p className="text-[#999] text-[11px] leading-[1.5] max-w-[520px]">{featuredCaseStudy.desc}</p>
              <Link
                href={featuredCaseStudy.href}
                className="mt-2 inline-flex items-center gap-1 text-red-500 text-[11px] font-semibold hover:text-red-400 transition-colors"
              >
                Enquire Now <ArrowRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 lg:pr-6 shrink-0">
              {caseStudyStats.map(({ icon, png, scale, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Glyph png={png} icon={icon} scale={scale} size={38} />
                  <div>
                    <p className="font-display text-[22px] leading-none font-bold text-white">{value}</p>
                    <p className="text-[#999] text-[11px] leading-[1.3] mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Need expert support for your equipment?"
        subtitle="Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}