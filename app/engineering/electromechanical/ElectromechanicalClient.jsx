"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Wrench,
  MapPin,
  ArrowRight,
  Headphones,
  AlertTriangle,
  CheckCircle2,
  Factory,
  Fan,
  Droplets,
  FlaskConical,
  Utensils,
  Activity,
  PoundSterling,
  Timer,
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

const DEFAULT_TYPE = "Electromechanical Systems";

const resolveHref = (href, projectType = DEFAULT_TYPE) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Engineering Excellence",
    desc: "Certified, experienced and solution-driven",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    desc: "Fast turnarounds and minimal downtime",
  },
  {
    icon: Wrench,
    title: "End-to-End Delivery",
    desc: "Design, build, integrate and support",
  },
  {
    icon: MapPin,
    title: "London Based",
    desc: "Serving clients across the UK",
  },
];

const capabilities = [
  {
    png: "icon_gears.png",
    title: "System Design & Integration",
    desc: "Mechanical and electrical co-design for seamless performance and efficiency.",
  },
  {
    png: "icon_motor.png",
    title: "Motors, Drives & Control",
    desc: "Selection, integration and programming of motors, VFDs and motion control systems.",
  },
  {
    png: "icon_pump.png",
    title: "Pumps & Fluid Systems",
    desc: "Centrifugal, positive displacement and process pumps with smart monitoring.",
  },
  {
    png: "icon_actuator.png",
    title: "Actuation & Motion Systems",
    desc: "Electric, hydraulic and pneumatic actuation engineered for precision and reliability.",
  },
  {
    png: "icon_contactor.png",
    title: "Switching & Power Distribution",
    desc: "Contactors, breakers and protection systems for safe, reliable power management.",
  },
  {
    png: "icon_maintenance_transparent.png",
    title: "Lifecycle Support & Optimisation",
    desc: "Maintenance, retrofits and upgrades to extend asset life and improve performance.",
  },
];

const components = [
  {
    png: "icon_motor.png",
    title: (
      <>
        Induction &<br />
        Servo Motors
      </>
    ),
  },
  {
    png: "icon_vfd.png",
    title: (
      <>
        Variable Frequency
        <br />
        Drives (VFDs)
      </>
    ),
  },
  {
    png: "icon_gearbox.png",
    title: (
      <>
        Gearboxes &<br />
        Couplings
      </>
    ),
  },
  {
    png: "icon_pump.png",
    title: (
      <>
        Pumps &<br />
        Compressors
      </>
    ),
  },
  {
    png: "icon_actuator.png",
    title: (
      <>
        Actuators (Electric,
        <br />
        Hydraulic, Pneumatic)
      </>
    ),
  },
  {
    png: "icon_contactor.png",
    title: (
      <>
        Contactors, Relays
        <br />& Protection Devices
      </>
    ),
  },
  {
    png: "icon_control_panel.png",
    title: (
      <>
        Control Panels
        <br />& MCCs
      </>
    ),
  },
  {
    png: "icon_sensor.png",
    title: (
      <>
        Sensors &<br />
        Instrumentation
      </>
    ),
  },
];

const faults = [
  "Motor overheating and insulation breakdown",
  "Bearing wear, misalignment and vibrations",
  "Pump cavitation and seal failures",
  "Contactor arcing and control circuit faults",
  "Drive faults, harmonics and overcurrent trips",
  "Actuator sticking, leakage or incomplete stroke",
].map((label) => ({ label }));

const maintenance = [
  "Preventive & predictive maintenance programmes",
  "Condition monitoring (vibration, current, temperature)",
  "System assessments and performance audits",
  "Drive tuning, energy optimisation & retrofits",
  "Panel upgrades, rewiring & component replacement",
  "Obsolescence management & modernisation",
].map((label) => ({ label }));

const projectApplications = [
  { icon: Factory, label: "Industrial Automation & Manufacturing" },
  { icon: Fan, label: "HVAC & Building Services" },
  { icon: Droplets, label: "Water & Wastewater Treatment" },
  { icon: FlaskConical, label: "Process & Chemical Plants" },
  { icon: Utensils, label: "Food & Beverage Processing" },
  { icon: Zap, label: "Energy & Power Generation" },
];

const caseStudy = {
  sector: "Water & Wastewater Treatment",
  title: "Pump Station Reliability Upgrade",
  desc: "We delivered a full electromechanical upgrade at a critical water pumping station, replacing ageing motors, drives and control panels with high-efficiency equipment and smart monitoring.",
  image: `${IMG_DIR}pump-station.jpg`,

  projectType: DEFAULT_TYPE,
};

const caseStudyStats = [
  { icon: Zap, value: "40%", label: "Energy Savings" },
  { icon: Activity, value: "98%", label: "Uptime Achieved" },
  { icon: PoundSterling, value: "£62k", label: "Annual Savings" },
  { icon: Timer, value: "6 Weeks", label: "Project Delivery" },
];

const scopeOfWork = [
  "Replaced motors, VFDs and control system",
  "Installed condition monitoring and remote alerts",
  "Optimised pump control for demand-based operation",
  "Trained client team and ongoing support",
].map((label) => ({ label }));

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function ListPanel({ title, items, Icon, footer, children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col rounded-lg border border-white/10 bg-[#0a0a0a] p-4 min-w-0"
    >
      <SectionHeading title={title} />

      {items && (
        <ul className="mt-4 space-y-2.5">
          {items.map(({ icon: ItemIcon, label }) => {
            const I = ItemIcon || Icon;
            return (
              <li
                key={label}
                className="flex items-center gap-2.5 text-[#b5b5b5] text-[10.5px] leading-[1.35]"
              >
                <I
                  size={13}
                  strokeWidth={1.6}
                  className="text-red-500 shrink-0"
                />
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      )}

      {children}

      {footer && (
        <div className="mt-auto pt-4">
          <p className="pt-3 border-t border-white/10 text-gray-200 text-[10.5px] leading-[1.4]">
            {footer}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function ElectromechanicalClient() {
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
          pageLabel="Electromechanical Systems"
          heading={["Electromechanical Systems", "Power. Motion. Reliability."]}
          description="Syntrad designs, integrates and supports electromechanical systems that power the world around us. From motors and pumps to actuators, contactors and drives, we deliver precision-engineered solutions with seamless mechanical and electrical integration for performance-critical environments."
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
              src={`${HERO_DIR}contact.png`}
              alt="Electromechanical systems: motors, pumps, drives and contactors"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Our Capabilities" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {capabilities.map(
              ({ png, scale, title, desc, href, projectType }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group relative flex flex-col items-start text-left bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg px-3.5 pt-3.5 pb-4 min-h-[200px] transition-colors"
                >
                  <Glyph png={png} scale={scale} size={64} className="mb-3" />
                  <h3 className="font-display font-semibold text-[12.5px] leading-[1.3] mb-2 text-gray-100 transition-colors group-hover:text-red-400">
                    {title}
                  </h3>
                  <p className="text-[#8a8a8a] text-[10.5px] leading-[1.5]">
                    {desc}
                  </p>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold">
                    Learn more <ArrowRight size={11} />
                  </span>

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
          <SectionHeading title="Systems & Components We Work With" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-6 lg:divide-x lg:divide-white/10 mt-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {components.map(({ png, scale, title }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="px-2 flex flex-col items-center text-center"
              >
                <Glyph png={png} scale={scale} size={56} className="mb-2" />
                <h3 className="font-display font-medium text-[10.5px] leading-[1.3] text-gray-100">
                  {title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ListPanel
              title="Typical Faults & Reliability Issues"
              items={faults}
              Icon={AlertTriangle}
              footer="We diagnose root causes and prevent recurrence."
            />
            <ListPanel
              title="Maintenance & System Upgrades"
              items={maintenance}
              Icon={CheckCircle2}
              footer="Maximise uptime. Reduce risk. Extend asset life."
            />
            <ListPanel
              title="Project Applications"
              items={projectApplications}
              footer="Engineered for demanding environments."
            />
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[30fr_38fr_32fr] gap-6 items-start"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="min-w-0">
              <SectionHeading title="Featured Case Study" />
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="mt-3 w-full h-[145px] rounded-md object-cover border border-white/10"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="min-w-0 lg:pt-10">
              <p className="text-red-500 text-[8.5px] font-semibold tracking-[0.08em] uppercase mb-1">
                {caseStudy.sector}
              </p>
              <h3 className="font-display font-semibold text-[17px] leading-[1.25] mb-2 text-white">
                {caseStudy.title}
              </h3>
              <p className="text-[#999] text-[10.5px] leading-[1.5]">
                {caseStudy.desc}
              </p>

              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:divide-x sm:divide-white/10">
                {caseStudyStats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="sm:px-2 first:pl-0">
                    <p className="flex items-center gap-1 font-display text-[13px] leading-none font-semibold text-white">
                      <Icon
                        size={11}
                        strokeWidth={1.8}
                        className="text-red-500 shrink-0"
                      />
                      {value}
                    </p>
                    <p className="text-[#999] text-[8.5px] leading-[1.3] mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={resolveHref(undefined, caseStudy.projectType)}
                className="mt-3 inline-flex items-center gap-1 text-red-500 text-[10.5px] font-semibold hover:text-red-400 transition-colors"
              >
                View case study <ArrowRight size={11} />
              </Link>
            </motion.div>

            <ListPanel
              title="Scope of Work"
              items={scopeOfWork}
              Icon={CheckCircle2}
            >
              <Link
                href="/projects"
                className="mt-4 self-start px-3.5 py-1.5 rounded-md text-[10.5px] font-semibold text-white inline-flex items-center gap-2 border border-red-600/80 hover:bg-red-600 transition-colors"
              >
                View all projects <ArrowRight size={11} strokeWidth={1.7} />
              </Link>
            </ListPanel>
          </motion.div>
        </Container>
      </section>

      <UrgentCall
        title="Need expert support for your electromechanical system?"
        subtitle="Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime."
        buttonLabel="Get in Touch Today"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
