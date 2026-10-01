'use client';

import { useState } from "react";
import {
  ArrowRight, Headphones, BatteryCharging, Gauge, ShieldCheck, MapPin,
  ClipboardList, Ruler, Plug, BadgeCheck,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import FeatureCardGrid from "../../components/FeatureCardGrid";
import ProcessSteps from "../../components/ProcessSteps";
import ProjectCardGrid from "../../components/ProjectCardGrid";
import UrgentCall from "../../components/UrgentCall";
import Container from "../../components/container";
import ContactPopup from "../../components/ContactPopup";

const HERO_DIR = "/assets/hero/";
const IMG_DIR = "/assets/images/";
const ICON_DIR = "/assets/icons/";

const ic = (file) => `${ICON_DIR}${file}`;

const DEFAULT_TYPE = "Energy & EV Infrastructure";

const resolveHref = (href, projectType = DEFAULT_TYPE) =>
  href ?? `/contact?type=${encodeURIComponent(projectType)}`;

const heroFeatures = [
  { icon: BatteryCharging, title: "Future-Ready Charging", desc: "Smart, scalable EV solutions for every site" },
  { icon: Gauge, title: "Intelligent Load Management", desc: "Charge more vehicles without a supply upgrade" },
  { icon: ShieldCheck, title: "Safe & Compliant", desc: "Installed and tested to UK regulations" },
  { icon: MapPin, title: "London Based", desc: "Serving homes and businesses across the UK" },
];

const evSolutions = [
  { icon: ic("15_Smart_Home_Control.png"), title: "Domestic EV Charging", desc: "Smart home chargers, supplied, installed, tested and configured for your property.", href: resolveHref() },
  { icon: ic("icon_building_automation_transparent.png"), title: "Commercial EV Infrastructure", desc: "Scalable charging for workplaces, fleets, car parks and public sites.", href: resolveHref() },
  { icon: ic("23_Sensor_Control.png"), title: "Smart Charging", desc: "Schedule charging around cheaper tariffs, track usage and cut running costs.", href: resolveHref() },
  { icon: ic("03_Energy_Management.png"), title: "Solar Integration", desc: "Pair EV charging with solar PV to use more of your own clean energy.", href: resolveHref("/solutions/energy") },
  { icon: ic("icon_transformer.png"), title: "Load Management", desc: "Balance power demand across chargers and the building to protect your supply.", href: resolveHref("/solutions/energy") },
  { icon: ic("icon_electrical_transparent.png"), title: "Multi-Charger Setups", desc: "Design and install multiple chargers for homes, businesses and fleets.", href: resolveHref() },
];

const evServices = [
  { icon: ic("05_Bespoke_Engineering.png"), title: "Site Survey & Design", desc: "Supply assessment, cable routes, charger positions and a clear quote." },
  { icon: ic("icon_electrical_transparent.png"), title: "Charger Installation", desc: "Wallbox and pedestal installs, from single-phase homes to three-phase sites." },
  { icon: ic("icon_transformer.png"), title: "Supply & Distribution Upgrades", desc: "Consumer unit, distribution board and cabling upgrades to support charging." },
  { icon: ic("icon_building_automation_transparent.png"), title: "Network & Backend Setup", desc: "Charger networking, user access, tariffs and remote monitoring." },
  { icon: ic("03_Energy_Management.png"), title: "Solar & Battery Pairing", desc: "Connecting chargers to solar PV and battery storage where suitable." },
  { icon: ic("icon_maintenance_transparent.png"), title: "Servicing & Maintenance", desc: "Scheduled inspections, firmware updates, repairs and ongoing support." },
];

const commonFaults = [
  { icon: ic("icon_electrical_transparent.png"), title: "Charger Won't Start", desc: "Trace supply, communication and contactor faults that stop a session starting." },
  { icon: ic("06_Safety_Security.png"), title: "RCD & Breaker Tripping", desc: "Find earth leakage, wiring and protection faults causing repeated trips." },
  { icon: ic("09_Temperature_Control.png"), title: "Slow or Reduced Charging", desc: "Check for thermal derating, voltage drop and limits set by load management." },
  { icon: ic("22_Audio_Visual.png"), title: "App & Connectivity Issues", desc: "Restore Wi-Fi, 4G and backend links, and fix app pairing problems." },
  { icon: ic("23_Sensor_Control.png"), title: "Load Balancing Faults", desc: "Correct CT clamp, meter and controller issues in load management systems." },
  { icon: ic("04_Specialist_Diagnostics.png"), title: "Error Codes & Lock-Outs", desc: "Diagnose fault codes, cable lock problems and communication errors." },
];

const complianceCards = [
  { icon: ic("icon_shield.png"), title: "BS 7671 Compliance", desc: "Installed to the current wiring regulations and IET EV charging guidance." },
  { icon: ic("06_Safety_Security.png"), title: "Earthing & Protection", desc: "Earthing arrangement checks, RCD protection and surge protection." },
  { icon: ic("04_Specialist_Diagnostics.png"), title: "Testing & Certification", desc: "Full inspection and testing with electrical certification on completion." },
  { icon: ic("icon_transformer.png"), title: "Supply & DNO Notification", desc: "Supply capacity checks and network operator notifications where required." },
  { icon: ic("23_Sensor_Control.png"), title: "Smart Charge Regulations", desc: "Smart-capable chargers configured to meet UK smart charge point rules." },
  { icon: ic("icon_chart.png"), title: "Documentation & Handover", desc: "Test results, commissioning records and clear user handover." },
];

const processSteps = [
  { icon: ClipboardList, title: "Survey", desc: "We assess your supply, site layout, vehicles and charging needs." },
  { icon: Ruler, title: "Design", desc: "We specify chargers, cabling and load management for your site." },
  { icon: Plug, title: "Install", desc: "Safe, tidy installation with minimal disruption." },
  { icon: Gauge, title: "Test", desc: "Full inspection and testing, with load management checked under load." },
  { icon: BadgeCheck, title: "Commission", desc: "We commission, certify and hand over with a clear walkthrough." },
  { icon: Headphones, title: "Support", desc: "Servicing, monitoring and fast fault response." },
];

const featuredSystems = [
  { title: "Home Wallboxes", desc: "Smart 7kW single-phase chargers for driveways and garages.", image: `${IMG_DIR}modern-house-exterior.jpg`, href: resolveHref() },
  { title: "Workplace Chargers", desc: "Shared charging for staff, visitors and company vehicles.", image: `${IMG_DIR}ev-charging-row.jpg`, href: resolveHref() },
  { title: "Fleet & Depot Charging", desc: "Multi-bay 22kW charging with managed overnight loads.", image: `${IMG_DIR}warehouse-interior.jpg`, href: resolveHref() },
  { title: "Solar & Battery Storage", desc: "Solar PV and storage paired with EV charging.", image: `${IMG_DIR}solar-panels-rooftop.jpg`, href: resolveHref("/solutions/energy") },
  { title: "Load Management Controllers", desc: "Dynamic load balancing hardware and CT monitoring.", image: `${IMG_DIR}plc-control-panel.jpg`, href: resolveHref("/solutions/energy") },
  { title: "Distribution Upgrades", desc: "Boards and supply upgrades to make room for charging.", image: `${IMG_DIR}electrical-switchboard.jpg`, href: resolveHref() },
];

const featuredProjects = [
  { title: "Residential EV Installation", desc: "7kW smart charger with solar integration.", image: `${IMG_DIR}modern-house-exterior.png`, href: "/projects" },
  { title: "Commercial EV Infrastructure", desc: "Multiple 22kW chargers with load management.", image: `${IMG_DIR}ev-charging-station.jpg`, href: "/projects" },
  { title: "Three-Phase Supply Upgrade", desc: "Full distribution upgrade for a commercial charging site.", image: `${IMG_DIR}switchgear-panel-row.jpg`, href: "/projects" },
];

export default function EvClient() {
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
          pageLabel="EV Charging & Load Management"
          heading={["EV Charging &", "Load Management.", "Smart. Safe. Future-Ready."]}
          description="Syntrad designs, installs and maintains EV charging for homes, businesses and fleets. From a single smart home charger to multi-bay commercial sites with solar integration and load management, we deliver safe, compliant charging that works with the power you already have."
          buttons={[
            { label: "Book an EV Site Survey", href: resolveHref(), icon: ArrowRight },
            { label: "Request Technical Support", href: "#technical-advice", icon: Headphones, variant: "outline" },
          ]}
          features={heroFeatures}
          visual={
            <>
              <img
                src={`${HERO_DIR}contact.png`}
                alt="Syntrad engineering illustration"
                className="absolute inset-0 w-full h-full object-contain object-right md:scale-[1.1] md:origin-right md:translate-x-[8%]"
              />
              <div
                className="absolute inset-y-0 right-0 w-[14%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(127,29,29,0.55) 0%, rgba(69,10,10,0.25) 45%, rgba(0,0,0,0) 100%)",
                }}
              />
            </>
          }
        />
      </div>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="EV Charging Solutions" />
          <div className="mt-6">
            <FeatureCardGrid
              items={evSolutions}
              variant="primary"
              iconSize={84}
              cardHeight={280}
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:divide-x lg:divide-white/10">

            <div className="lg:pr-8">
              <SectionHeading title="EV Installation & Support Services" />
              <div className="mt-6">
                <FeatureCardGrid
                  items={evServices}
                  variant="row"
                  cols="grid-cols-1 sm:grid-cols-2"
                  rowIconSize={20}
                  rowIconBoxSize={40}
                  cardPadding="p-3"
                />
              </div>
            </div>

            <div className="lg:pl-8">
              <SectionHeading title="Common Charger Faults & Investigations" />
              <div className="mt-6">
                <FeatureCardGrid
                  items={commonFaults}
                  variant="row"
                  cols="grid-cols-1 sm:grid-cols-2"
                  rowIconSize={20}
                  rowIconBoxSize={40}
                  cardPadding="p-3"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Compliance, Testing & Standards" />
          <div className="mt-6">
            <FeatureCardGrid
              items={complianceCards}
              variant="row"
              cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              rowIconSize={20}
              rowIconBoxSize={40}
              cardPadding="p-3"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Our Process: From Site Survey to Handover" />
          <div className="mt-6">
            <ProcessSteps steps={processSteps} />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Featured EV Systems & Equipment" />
          <div className="mt-6">
            <ProjectCardGrid
              items={featuredSystems}
              layout="top"
              cols="sm:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading
            title="Featured Projects"
            action={{ label: "View all projects", href: "/projects" }}
          />
          <div className="mt-6">
            <ProjectCardGrid
              items={featuredProjects}
              layout="left"
              decorative
              linkLabel="View case study"
              cols="sm:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </Container>
      </section>

      <UrgentCall
        title="Ready to discuss your EV charging project?"
        subtitle="Our engineers are here to help. Get expert advice, a tailored solution and a no-obligation quote."
        buttonLabel="Book an EV Site Survey"
        buttonHref={resolveHref()}
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

    </main>
  );
}