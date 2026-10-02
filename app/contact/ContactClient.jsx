"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  Clock,
  Users,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import UrgentCall from "../components/UrgentCall";
import Container from "../components/container";
import FeatureCardGrid from "../components/FeatureCardGrid";
import TypeDropdown, { projectTypeOptions } from "../components/TypeDropdown";
import ContactPopup from "../components/ContactPopup";

const contactCards = [
  {
    icon: MapPin,
    title: "Our Address",
    desc: (
      <>
        <span className="block">Syntrad Ltd</span>
        <span className="block">11 Old Bond Street</span>
        <span className="block">Mayfair, London, W1S 4PN</span>
      </>
    ),
  },
  {
    icon: "/assets/icons/icon_headset.png",
    title: "Telephone",
    desc: "+44 20 7112 5377",
  },
  { icon: Mail, title: "Email", desc: "hello@syntradltd.co.uk" },
  {
    icon: Clock,
    title: "Business Hours",
    desc: (
      <>
        <span className="block">Monday – Friday: 8:30 AM – 5:00 PM</span>
        <span className="block">Saturday – Sunday: Closed</span>
      </>
    ),
  },
  {
    icon: Users,
    title: "Serving London & the UK",
    desc: "Based in London, delivering engineering excellence across the Home Counties and selected locations throughout the UK.",
  },
];

const projectCategories = [
  {
    icon: "/assets/icons/icon_robot_arm.png",
    title: "Automation & Controls",
    desc: "Control systems, PLC programming, SCADA, HMI and process automation.",
    href: "/engineering/automation",
  },
  {
    icon: "/assets/icons/icon_electrical_transparent.png",
    title: "Electrical Engineering",
    desc: "Power distribution, panel design, wiring, testing and electrical installations.",
    href: "/repair-and-service/electronics-pcb-repair",
  },
  {
    icon: "/assets/icons/04_Specialist_Diagnostics.png",
    title: "Specialist Equipment",
    desc: "Design, build and support for bespoke and specialist engineering solutions.",
    href: "/repair-and-service/other-services",
  },
  {
    icon: "/assets/icons/02_EV_Charging.png",
    title: "EV & Energy",
    desc: "EV charging infrastructure, power systems and energy efficiency solutions.",
    href: "/engineering/ev-charging",
  },
  {
    icon: "/assets/icons/23_Sensor_Control.png",
    title: "IoT & Networks",
    desc: "Connected systems, sensor networks, data integration and remote monitoring.",
    href: "/engineering/iot",
  },
  {
    icon: "/assets/icons/01_Smart_Home.png",
    title: "Premium Residential",
    desc: "Smart home systems, luxury automation and bespoke residential solutions.",
    href: "/repair-and-service/other-services",
  },
];

const includeItems = [
  "System or equipment type and location",
  "Detailed description of the project or issue",
  "Any error messages or symptoms",
  "Photos, diagrams or relevant documents",
  "Preferred timeline or urgency",
  "Desired outcome or deliverables",
];

const urgencyGroups = [
  [
    { value: "Standard", label: "Standard — no immediate rush" },
    { value: "Priority", label: "Priority — within a few days" },
    { value: "Emergency", label: "Emergency — immediate attention needed" },
  ],
];

const emptyForm = {
  name: "",
  email: "",
  telephone: "",
  postcode: "",
  projectType: "",
  equipment: "",
  description: "",
  urgency: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const inputClass =
  "w-[95%] px-3.5 py-1.5 bg-[#111111] border border-white/10 rounded-lg text-[13px] text-white placeholder:text-gray-600 focus:outline-none focus:border-red-600/60 transition-colors";
const labelClass = "text-[12.5px] font-medium text-gray-300 mb-1 block";

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type && projectTypeOptions.includes(type)) {
      setFormData((p) => ({ ...p, projectType: type }));
      setTimeout(() => {
        document
          .getElementById("enquiry-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Enquiry submitted successfully!");
      setFormData(emptyForm);
    } catch (err) {
      toast.error("Failed to submit enquiry");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-black text-white font-body pt-16 sm:pt-20">
      <Toaster />

      <PageHero
        pageLabel="Contact"
        heading={["Start a Project or", "Request Technical Support"]}
        description="Syntrad welcomes project enquiries, fault investigations and specialist technical support requests."
        visual={
          <>
            <img
              src="/assets/Hero/contact.png"
              alt="Syntrad engineering illustration"
              className="absolute inset-0 w-full h-full object-contain object-right md:scale-[1.2] md:origin-right"
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

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading title="Get in Touch" />

              <FeatureCardGrid
                variant="row"
                cols="grid-cols-1"
                rowIconSize={22}
                rowIconBoxSize={44}
                cardHeight={92}
                cardPadding="p-3"
                items={contactCards}
              />
            </motion.div>

            <motion.div
              id="enquiry-form"
              className="flex flex-col scroll-mt-24"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading title="Send Us an Enquiry" />

              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col gap-3 bg-[#0d0d0d] border border-white/10 rounded-lg p-4 sm:p-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className={labelClass}>
                      Telephone <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          telephone: e.target.value.replace(/[^0-9+ ]/g, ""),
                        }))
                      }
                      placeholder="+44 20 7112 5377"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className={labelClass}>
                      Site Postcode <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. W1S 4PN"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Project Type <span className="text-red-600">*</span>
                    </label>
                    <TypeDropdown
                      name="projectType"
                      value={formData.projectType}
                      onChange={(v) =>
                        setFormData((p) => ({ ...p, projectType: v }))
                      }
                      placeholder="Select project type"
                      required
                      className="w-[95%]"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Urgency <span className="text-red-600">*</span>
                    </label>
                    <TypeDropdown
                      name="urgency"
                      value={formData.urgency}
                      onChange={(v) =>
                        setFormData((p) => ({ ...p, urgency: v }))
                      }
                      groups={urgencyGroups}
                      placeholder="Select urgency"
                      required
                      className="w-[95%]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="equipment" className={labelClass}>
                    System or Equipment <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    placeholder="e.g. Control Panel, BMS, EV Charger, etc."
                    className={inputClass}
                    required
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <label htmlFor="description" className={labelClass}>
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please provide details about your project, system or issue..."
                    className={`${inputClass} min-h-[88px] flex-1 resize-none`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 py-2.5 rounded-md text-[13px] text-white font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  {isLoading ? "Submitting..." : "Submit Enquiry"}{" "}
                  <ArrowRight size={16} />
                </button>

                <p className="mt-1 text-gray-500 text-[12px] flex items-center justify-center gap-2">
                  <Lock size={12} /> Your information is secure and will only be
                  used to respond to your enquiry.
                </p>
              </motion.form>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <SectionHeading title="Project Categories" />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projectCategories.map(({ icon, title, desc, href, scale }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative bg-[#0e0e0e] border border-white/10 hover:border-red-700/50 rounded-lg p-4 transition-colors w-full min-h-[240px] flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-3 shrink-0 flex items-center justify-center">
                  <img
                    src={icon}
                    alt=""
                    className="w-full h-full object-contain object-center"
                    style={scale ? { transform: `scale(${scale})` } : undefined}
                  />
                </div>
                <h3 className="font-display font-semibold text-[13.5px] leading-[1.25] mb-2">
                  {title}
                </h3>
                <p className="text-[#8a8a8a] text-[11px] leading-[1.45] flex-1">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="text-red-500 group-hover:text-red-400 text-[11.5px] font-medium inline-flex items-center gap-1 mt-3 transition-colors after:absolute after:inset-0 after:rounded-lg"
                >
                  Learn more
                  <ArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="pt-2 pb-9">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-10 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl font-bold mb-5"
              >
                What to Include
              </motion.h2>
              <motion.ul variants={fadeUp} className="space-y-3.5">
                {includeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.7}
                      className="text-red-500 mt-0.5 shrink-0"
                    />
                    <span className="text-gray-300 text-[13px] leading-[1.4]">
                      {item}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative min-w-0 overflow-hidden bg-[#0d0d0d] border border-red-600/70 rounded-xl"
            >
              <div className="relative z-10 p-5 sm:p-6 md:absolute md:inset-0 md:max-w-[40%] md:flex md:flex-col md:justify-center md:items-start">
                <p className="font-display text-[15px] font-semibold mb-1">
                  Our Service Area
                </p>
                <p className="text-red-500 font-display text-lg leading-[1.2] font-bold mb-2">
                  London, Home Counties &amp; Selected UK Support
                </p>
                <p className="text-[#999] text-[12.5px] leading-[1.5] mb-4">
                  We deliver projects and technical support across London, the
                  Home Counties and selected locations throughout the UK.
                </p>
              </div>

              <div className="relative md:aspect-[7/2] md:min-h-[250px]">
                <img
                  src="/assets/images/map.png"
                  alt="Map of Syntrad's service area across London and the Home Counties"
                  className="block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:scale-[1.015]"
                />
                <div className="hidden md:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <div
        onClickCapture={(e) => {
          if (e.target.closest("a, button")) {
            e.preventDefault();
            e.stopPropagation();
            setPopupOpen(true);
          }
        }}
      >
        <UrgentCall
          title="Ready to elevate your engineering project?"
          subtitle="Our engineers are ready to listen, understand and deliver."
          buttonLabel="Call Us Now"
          buttonHref="tel:+442071125377"
        />
      </div>

      <ContactPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
