"use client";

import { useState } from "react";
import {
  Settings2,
  Zap,
  ShieldCheck,
  Users,
  ArrowRight,
  Headphones,
  Thermometer,
  Radio,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProjectCardGrid from "../components/ProjectCardGrid";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import UrgentCall from "../components/UrgentCall";
import Container from "../components/container";
import ContactPopup from "../components/ContactPopup";

const heroFeatures = [
  {
    icon: Settings2,
    title: "Real Projects",
    desc: "Proven results, measurable impact",
  },
  {
    icon: Zap,
    title: "Technical Expertise",
    desc: "Complex challenges, reliable solutions",
  },
  {
    icon: ShieldCheck,
    title: "Across Multiple Sectors",
    desc: "From homes to commercial facilities",
  },
  {
    icon: Users,
    title: "Trusted by Clients",
    desc: "Ongoing partnerships across the UK",
  },
];

const featuredProject = {
  category: "AUTOMATION & CONTROL SYSTEMS",
  title: "Cold Plunge Automation",
  desc: "Full automation solution for temperature control, filtration and lighting with remote monitoring and user interface.",
  image: "/assets/images/cold_plunge_image_extracted.png",
  href: "/repair-and-service/sauna&cold-plunge",
};

const featuredStats = [
  { icon: Thermometer, label: "Precise", value: "Temperature Control" },
  { icon: Radio, label: "Remote", value: "Monitoring" },
  { icon: Settings2, label: "Custom", value: "Control Interface" },
];

const projects = [
  {
    category: "AUTOMATION & CONTROL SYSTEMS",
    title: "Sauna Control Systems",
    desc: "Custom control system with precise temperature regulation, safety interlocks and energy optimisation.",
    image: "/assets/images/sauna-interior.jpg",
    href: "/repair-and-service/sauna&cold-plunge",
  },
  {
    category: "SPECIALIST EQUIPMENT",
    title: "Commercial Coffee Equipment Diagnostics",
    desc: "Advanced fault-finding and repair for high-value commercial coffee equipment, minimising downtime.",
    image: "/assets/images/cc.png",
    href: "/repair-and-service/hospitality-catering",
  },
  {
    category: "ENERGY & EV INFRASTRUCTURE",
    title: "EV Infrastructure",
    desc: "Design, installation and commissioning of reliable EV charging systems for homes and businesses.",
    image: "/assets/images/ev-charging-row.jpg",
    href: "/engineering/ev-charging",
  },
  {
    category: "ELECTRONICS & PCB REPAIRS",
    title: "Electronics & PCB Fault Recovery",
    desc: "Component level diagnostics and repairs for complex electronic systems.",
    image: "/assets/images/circuit-board-testing.jpg",
    href: "/repair-and-service/electronics-pcb-repair",
  },
  {
    category: "CONNECTED SYSTEMS",
    title: "Remote Monitoring / IoT Upgrades",
    desc: "Intelligent monitoring solutions for critical equipment with real-time alerts and data insights.",
    image: "/assets/images/telecom-tower-dusk.jpg",
    href: "/engineering/iot",
  },
];

export default function ProjectsClient() {
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
          pageLabel="Our Projects"
          heading={["Projects.", "Real Work.", "Real Solutions."]}
          description="Real Syntrad work across specialist repairs, automation, electrical systems and integrated technical projects. See how we solve complex technical challenges for homes and commercial facilities across the UK."
          buttons={[
            { label: "Start a Project", href: "/contact", icon: ArrowRight },
            {
              label: "Request Technical Support",
              href: "#technical-advice",
              icon: Headphones,
              variant: "outline",
            },
          ]}
          features={heroFeatures}
          visual={
            <>
              <img
                src="/assets/Hero/contact.png"
                alt="Syntrad project delivery illustration"
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
          <SectionHeading title="Featured Case Study" />
          <div className="mt-6">
            <FeaturedProjectCard
              project={featuredProject}
              stats={featuredStats}
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading
            title="Recent Projects"
            action={{ label: "View all projects", href: "/projects" }}
          />
          <div className="mt-6">
            <ProjectCardGrid
              items={projects}
              layout="top"
              cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </Container>
      </section>

      <UrgentCall
        title="Have a project in mind?"
        subtitle="Let's discuss how we can help you design, repair or automate your systems."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
