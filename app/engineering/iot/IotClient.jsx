'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye, Lock, BarChart3, Layers, ArrowRight, Headphones,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const HERO_DIR = "/assets/hero/";
const IMG_DIR = "/assets/images/";
const ICON_DIR = "/assets/icons/";

function Glyph({ png, size = 48, scale = 1, className = "" }) {
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

const resolveHref = (href, projectType) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const DEFAULT_TYPE = "Connected Infrastructure & IoT";

const heroFeatures = [
  { icon: Eye, title: "Real-Time Visibility", desc: "Monitor assets and environments 24/7." },
  { icon: Lock, title: "Secure Connectivity", desc: "Reliable, encrypted and resilient." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Actionable insights for better outcomes." },
  { icon: Layers, title: "Scalable Solutions", desc: "Built to grow with your infrastructure." },
];

const connectivitySolutions = [
  { png: "23_Sensor_Control.png", title: "Remote Connectivity", desc: "Secure VPN, cellular, Wi-Fi and satellite connectivity for reliable remote access.", projectType: DEFAULT_TYPE },
  { png: "15_Smart_Home_Control.png", title: "IoT Gateways", desc: "Industrial-grade gateways that connect, protect and process data at the edge.", projectType: DEFAULT_TYPE },
  { png: "icon_building_automation_transparent.png", title: "Edge Computing", desc: "Local data processing to reduce latency and ensure business continuity.", projectType: DEFAULT_TYPE },
  { png: "01_Smart_Home.png", title: "Cloud Connectivity", desc: "Seamless and secure connections to cloud platforms and services.", projectType: DEFAULT_TYPE },
  { png: "icon_electrical_transparent.png", title: "Network Infrastructure", desc: "Design, implementation and management of robust IT/OT networks.", projectType: DEFAULT_TYPE },
  { png: "03_Energy_Management.png", title: "IoT SIM & Data Plans", desc: "Flexible, global data connectivity for IoT devices and assets.", projectType: DEFAULT_TYPE },
];

const monitoringControl = [
  { png: "04_Specialist_Diagnostics.png", title: "Real-Time Monitoring", desc: "Live dashboards and alerts for assets, systems and environments." },
  { png: "15_Smart_Home_Control.png", title: "Remote Control", desc: "Securely control devices and equipment from anywhere." },
  { png: "06_Safety_Security.png", title: "Alarm & Notification", desc: "Instant alerts via email, SMS or app for critical events." },
  { png: "icon_chart.png", title: "Historical Analytics", desc: "Analyse trends, detect issues early and optimise performance." },
  { png: "22_Audio_Visual.png", title: "Custom Dashboards", desc: "Role-based dashboards tailored to your operations." },
];

const networkSystems = [
  { png: "23_Sensor_Control.png", title: "Sensor Networks", desc: "Deploy wired and wireless sensors for any environment." },
  { png: "icon_building_automation_transparent.png", title: "IoT Control Systems", desc: "PLC, RTU and microcontroller solutions for automation." },
  { png: "01_Smart_Home.png", title: "Wireless Solutions", desc: "LoRaWAN, Zigbee, MQTT and other IoT protocols." },
  { png: "icon_gears.png", title: "Device Management", desc: "Provision, configure and update devices at scale." },
  { png: "icon_shield.png", title: "Cybersecurity", desc: "End-to-end security for devices, networks and data." },
];

const integrationBenefits = [
  { png: "04_Specialist_Diagnostics.png", title: "Unified Data", desc: "Integrate data from multiple sources into one platform." },
  { png: "03_Energy_Management.png", title: "Operational Efficiency", desc: "Automate workflows and reduce manual overhead." },
  { png: "icon_chart.png", title: "Cost Savings", desc: "Optimise resources and reduce downtime." },
  { png: "05_Bespoke_Engineering.png", title: "Scalability", desc: "Flexible solutions that grow with your needs." },
  { png: "06_Safety_Security.png", title: "Compliance Ready", desc: "Secure, traceable and audit-ready by design." },
  { png: "17_Eco_Energy.png", title: "Future-Proof", desc: "Modern technology built for long-term reliability." },
];

const useCases = [
  { title: "Water & Wastewater Monitoring", desc: "Quality, level and flow monitoring in real time.", image: `${IMG_DIR}industrial-pumps-piping.jpg`, href: "/sectors/commercial-industrial" },
  { title: "Energy & Utilities Management", desc: "Monitor assets and optimise energy performance.", image: `${IMG_DIR}solar-panels-rooftop.jpg`, href: "/solutions/energy" },
  { title: "Industrial Asset Monitoring", desc: "Track equipment health and predict maintenance.", image: `${IMG_DIR}factory-production-line.jpg`, href: "/sectors/commercial-industrial" },
  { title: "Smart Building Solutions", desc: "Monitor HVAC, lighting, energy and occupancy.", image: `${IMG_DIR}city-skyline-night.jpg`, href: "/sectors/commercial-industrial" },
  { title: "Smart City Infrastructure", desc: "Connected street lighting, traffic and environmental monitoring.", image: `${IMG_DIR}highway-light-trails.jpg`, projectType: DEFAULT_TYPE },
  { title: "Logistics & Fleet Tracking", desc: "Real-time location, status and condition tracking.", image: `${IMG_DIR}warehouse-interior.jpg`, href: "/sectors/commercial-industrial" },
];

const caseStudy = {
  title: "IoT Monitoring Solution for Industrial Plant",
  desc: "Syntrad implemented a comprehensive IoT solution for a manufacturing plant, integrating 200+ sensors, edge computing and cloud dashboards to deliver real-time visibility, predictive maintenance and 25% reduction in unplanned downtime.",
  image: `${IMG_DIR}refinery-dusk.jpg`,
  href: "/projects",
};

const caseStudyStats = [
  { png: "23_Sensor_Control.png", value: "200+", label: "IoT Sensors Deployed" },
  { png: "icon_chart.png", value: "25%", label: "Reduction in Downtime" },
  { png: "03_Energy_Management.png", value: "30%", label: "Improvement in Efficiency" },
  { png: "icon_headset.png", value: "24/7", label: "Remote Visibility" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function IotClient() {
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
          pageLabel="Connected Infrastructure & IoT"
          heading={["Connected Infrastructure", "& IoT Solutions."]}
          description="Syntrad delivers connected infrastructure and IoT solutions that intelligently monitor, control and optimise operations. From sensor networks and edge devices to cloud dashboards and secure connectivity, we help you turn data into real-time decisions."
          buttons={[
            { label: "Discuss a Project", href: resolveHref(undefined, DEFAULT_TYPE), icon: ArrowRight },
            { label: "Request Technical Support", href: "#technical-advice", icon: Headphones, variant: "outline" },
          ]}
          features={heroFeatures}
          visual={
            <img
              src={`${HERO_DIR}auto.png`}
              alt="Connected infrastructure and IoT: cloud, gateway, sensors and secure connectivity"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Connectivity Solutions" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {connectivitySolutions.map(({ png, scale, title, desc, projectType }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-3 pt-3 pb-3.5 transition-colors"
              >
                <Glyph png={png} scale={scale} size={60} className="mb-2" />
                <h3 className="font-display font-semibold text-[12.5px] leading-[1.25] mb-2 text-gray-100 transition-colors group-hover:text-red-400">{title}</h3>
                <p className="text-[#8a8a8a] text-[10.5px] leading-[1.45]">{desc}</p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                  Enquire Now <ArrowRight size={11} />
                </span>

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
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-10 gap-y-8">

            <div className="min-w-0">
              <SectionHeading title="Monitoring & Control" />

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {monitoringControl.map(({ png, scale, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-3 transition-colors"
                  >
                    <Glyph png={png} scale={scale} size={52} className="mb-2" />
                    <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1.5 text-gray-100">{title}</h3>
                    <p className="text-[#8a8a8a] text-[10px] leading-[1.45]">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8">
                <SectionHeading title="Integration Benefits" />

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 lg:divide-x lg:divide-white/10 rounded-lg border border-white/10 bg-[#0e0e0e] py-3 mt-6"
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {integrationBenefits.map(({ png, scale, title, desc }) => (
                    <motion.div key={title} variants={fadeUp} className="px-2.5 flex flex-col items-center text-center">
                      <Glyph png={png} scale={scale} size={34} className="mb-1.5" />
                      <h3 className="font-display font-semibold text-[10px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                      <p className="text-[#8a8a8a] text-[8.5px] leading-[1.4]">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="min-w-0 flex flex-col">
              <h2 className="font-display font-medium text-[clamp(1.05rem,1.4vw,1.35rem)] leading-tight text-white mt-[2px]">
                Network &amp; IoT Systems
              </h2>

              <motion.div
                className="mt-6 flex-1 rounded-lg border border-white/10 bg-[#0e0e0e] px-4 py-2 divide-y divide-white/10"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {networkSystems.map(({ png, scale, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex items-center gap-3 py-3">
                    <Glyph png={png} scale={scale} size={38} />
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-[11.5px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                      <p className="text-[#8a8a8a] text-[10px] leading-[1.4]">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Featured Use Cases" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {useCases.map(({ title, desc, image, href, projectType }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex flex-col bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg overflow-hidden transition-colors"
              >
                <div className="h-[100px] w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 py-3 text-center">
                  <h3 className="font-display font-semibold text-[12px] leading-[1.25] mb-1 text-gray-100">{title}</h3>
                  <p className="text-[#8a8a8a] text-[10px] leading-[1.4]">{desc}</p>
                </div>

                <Link
                  href={resolveHref(href, projectType)}
                  aria-label={href ? `${title}: view page` : `${title}: start an enquiry`}
                  className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center gap-5 rounded-lg border border-red-700/60 bg-gradient-to-r from-[#1c0909] via-[#100606] to-[#1c0909] p-2.5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full lg:w-[115px] h-[100px] lg:h-[100px] shrink-0 rounded-md object-cover"
            />

            <div className="flex-1 min-w-0 lg:pr-4">
              <p className="text-red-500 text-[9.5px] font-semibold tracking-[0.08em] uppercase mb-1">Case Study</p>
              <h3 className="font-display font-semibold text-[17px] leading-[1.25] mb-1.5 text-white">{caseStudy.title}</h3>
              <p className="text-[#999] text-[10.5px] leading-[1.5] max-w-[520px]">{caseStudy.desc}</p>
              <Link
                href={caseStudy.href}
                className="mt-2 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold hover:text-red-400 transition-colors"
              >
                View case study <ArrowRight size={11} />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:divide-x lg:divide-white/10 shrink-0 lg:w-[440px]">
              {caseStudyStats.map(({ png, scale, value, label }) => (
                <div key={label} className="px-3 flex flex-col items-center text-center">
                  <Glyph png={png} scale={scale} size={34} className="mb-1" />
                  <p className="font-display text-[22px] leading-none font-medium text-white">{value}</p>
                  <p className="text-[#999] text-[9px] leading-[1.3] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Ready to connect and control your infrastructure?"
        subtitle="Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}