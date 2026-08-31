"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Lock,
  ArrowRight,
  Headphones,
  Bot,
  Cpu,
  PackageSearch,
  BatteryCharging,
  CloudCog,
  Home as HomeIcon,
  CheckCircle2,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["Syntrad Ltd", "10 Old Bond Street", "Mayfair, London, W1S 4PN"],
  },
  {
    icon: Phone,
    title: "Telephone",
    lines: ["+44 20 7125 2397"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@syntradltd.co.uk"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday: 8:30 AM – 5:00 PM", "Saturday – Sunday: Closed"],
  },
  {
    icon: Users,
    title: "Serving London & the UK",
    lines: [
      "Based in London, delivering engineering excellence across the Home Counties and selected locations throughout the UK.",
    ],
  },
];

const projectCategories = [
  { icon: Bot, title: "Automation & Controls", desc: "Control systems, PLC programming, SCADA, HMI and process automation." },
  { icon: Cpu, title: "Electrical Engineering", desc: "Power distribution, panel design, wiring, testing and electrical installations." },
  { icon: PackageSearch, title: "Specialist Equipment", desc: "Design, build and support for bespoke and specialist engineering solutions." },
  { icon: BatteryCharging, title: "EV & Energy", desc: "EV charging infrastructure, power systems and energy efficiency solutions." },
  { icon: CloudCog, title: "IoT & Networks", desc: "Connected systems, sensor networks, data integration and remote monitoring." },
  { icon: HomeIcon, title: "Premium Residential", desc: "Smart home systems, luxury automation and bespoke residential solutions." },
];

const includeItems = [
  "System or equipment type and location",
  "Detailed description of the project or issue",
  "Any error messages or symptoms",
  "Photos, diagrams or relevant documents",
  "Preferred timeline or urgency",
  "Desired outcome or deliverables",
];

const serviceCities = [
  { name: "Oxford", top: "12%", left: "18%" },
  { name: "Luton", top: "6%", left: "52%" },
  { name: "Chelmsford", top: "14%", left: "82%" },
  { name: "Reading", top: "48%", left: "14%" },
  { name: "London", top: "50%", left: "50%", primary: true },
  { name: "Croydon", top: "70%", left: "56%" },
  { name: "Maidstone", top: "72%", left: "84%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="coreGlowC" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#7a0000" />
        </linearGradient>
      </defs>

      {[190, 150, 110].map((r, i) => (
        <motion.circle
          key={r}
          cx="250" cy="250" r={r}
          fill="none" stroke="#ffffff14" strokeWidth="1" strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
      ))}

      <circle cx="250" cy="250" r="90" fill="url(#coreGlowC)" />

      <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <polygon points="250,150 320,190 250,230 180,190" fill="url(#edgeC)" opacity="0.95" />
        <polygon points="180,190 250,230 250,320 180,280" fill="#4a0000" opacity="0.9" />
        <polygon points="320,190 250,230 250,320 320,280" fill="#2a0000" opacity="0.9" />
        <polygon points="250,150 320,190 250,230 180,190" fill="none" stroke="#ff8080" strokeWidth="1.5" />
        <line x1="250" y1="230" x2="250" y2="320" stroke="#ff8080" strokeWidth="1" opacity="0.5" />
      </motion.g>

      {[0, 120, 240].map((deg, i) => (
        <motion.circle
          key={deg} r="5" fill="#ff2d2d"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
          style={{ transformOrigin: "250px 250px" }}
          cx={250 + 190 * Math.cos((deg * Math.PI) / 180)}
          cy={250 + 190 * Math.sin((deg * Math.PI) / 180)}
        />
      ))}
    </motion.svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    telephone: "",
    postcode: "",
    projectType: "",
    equipment: "",
    description: "",
    urgency: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_123456",
        "template_s7dq4z9",
        formData,
        "iqQJ7aU0zbtuutWY0"
      );

      toast.success("Enquiry submitted successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        telephone: "",
        postcode: "",
        projectType: "",
        equipment: "",
        description: "",
        urgency: "",
      });
    } catch (err) {
      toast.error("Failed to submit enquiry");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-red-600/60 transition-colors";
  const labelClass = "text-sm font-medium text-gray-300 mb-2 block";

  return (   
    <div className="flex flex-col w-full overflow-hidden bg-black text-white font-body">
      <Toaster />

      {/* HERO */}
      <section className="relative w-full flex items-center mt-10 py-3 md:py-4 border-b border-white/10 overflow-hidden"> 

  <motion.div
    className="absolute top-0 right-0 w-[40vw] h-[70vh] bg-red-700/20 blur-3xl z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />

  <div className="w-full max-w-[1180px] mx-auto px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 z-20">

    {/* HERO TEXT */}
    <motion.div
      className="w-full md:w-[58%]"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={fadeUp}
        className="text-red-600 text-xs md:text-sm font-semibold tracking-wide uppercase mb-2"
      >
        Contact / Start a Project
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-display text-[42px] md:text-[46px] lg:text-[50px] font-bold leading-[1.08] mb-3"
      >
        Start a Project or Request{" "}
        <span className="text-red-600">
          Technical Support
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-gray-400 text-[18px] max-w-2xl leading-relaxed"
      >
        Syntrad welcomes project enquiries, fault investigations and
        specialist technical support requests.
      </motion.p>
    </motion.div>

    {/* HERO IMAGE */}
    <motion.div
      className="w-full md:w-[42%] flex justify-center md:justify-end items-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src="/assets/mainImg.png"
        alt="Main Illustration"
        width={400}
        height={420}
        className="w-full max-w-[380px] md:max-w-[440px] h-auto object-contain mt-10"
      />
    </motion.div>

  </div>
</section>

      {/* GET IN TOUCH + FORM */}
      <section className="py-8 md:py-10 border-b border-white/10">
        <div className="w-full max-w-[1180px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8">

          {/* Get in Touch */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-red-600">
              Get in Touch
            </motion.h2>
            <motion.div variants={fadeUp} className="bg-[#0d0d0d] border border-white/10 rounded-xl divide-y divide-white/10">
              {contactCards.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg border border-red-600/40 flex items-center justify-center shrink-0">
                    <Icon className="text-red-600" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-gray-400 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-red-600">
              Send Us an Enquiry
            </motion.h2>

            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name <span className="text-red-600">*</span></label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Company <span className="text-red-600">*</span></label>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className={inputClass} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email <span className="text-red-600">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Telephone <span className="text-red-600">*</span></label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={(e) => setFormData((p) => ({ ...p, telephone: e.target.value.replace(/[^0-9+ ]/g, "") }))}
                    placeholder="+44 20 1234 5678"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Site Postcode <span className="text-red-600">*</span></label>
                  <input name="postcode" value={formData.postcode} onChange={handleChange} placeholder="e.g. W1S 4PN" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Project Type <span className="text-red-600">*</span></label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className={inputClass} required>
                    <option value="">Select project type</option>
                    {projectCategories.map((c) => (
                      <option key={c.title} value={c.title} className="bg-black">{c.title}</option>
                    ))}
                    <option value="Other" className="bg-black">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>System or Equipment <span className="text-red-600">*</span></label>
                <input name="equipment" value={formData.equipment} onChange={handleChange} placeholder="e.g. Control Panel, BMS, EV Charger, etc." className={inputClass} required />
              </div>

              <div>
                <label className={labelClass}>Description <span className="text-red-600">*</span></label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Please provide details about your project, system or issue..." className={`${inputClass} h-28 resize-none`} required />
              </div>

              <div>
                <label className={labelClass}>Urgency <span className="text-red-600">*</span></label>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className={inputClass} required>
                  <option value="">Select urgency</option>
                  <option value="Standard" className="bg-black">Standard — no immediate rush</option>
                  <option value="Priority" className="bg-black">Priority — within a few days</option>
                  <option value="Emergency" className="bg-black">Emergency — immediate attention needed</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 py-3.5 rounded-lg text-white font-semibold transition inline-flex items-center justify-center gap-2"
              >
                {isLoading ? "Submitting..." : "Submit Enquiry"} <ArrowRight size={18} />
              </button>

              <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
                <Lock size={12} /> Your information is secure and will only be used to respond to your enquiry.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* PROJECT CATEGORIES */}
      <section className="py-8 md:py-10 border-b border-white/10">
        <div className="w-full max-w-[1180px] mx-auto px-4 lg:px-0">
          <h2 className="font-display text-3xl font-bold mb-10">Project Categories</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {projectCategories.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#111111] border border-white/10 rounded-md p-3 hover:border-red-600/50 transition-colors flex flex-col items-center text-center"
              >
                <Icon className="text-red-600 mb-4" size={54} strokeWidth={1.6} />
                <h3 className="font-display font-semibold text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT TO INCLUDE + SERVICE AREA */}
      <section className="py-8 md:py-10 border-b border-white/10">
       <div className="w-full max-w-[1180px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl font-bold mb-5">What to Include</h2>
            <ul className="space-y-3.5">
              {includeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-600 mt-0.5 shrink-0" size={18} />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d0d0d] border border-red-600/30 rounded-2xl p-6 sm:p-8"
          >
            <p className="text-lg font-display font-semibold mb-1">Our Service Area</p>
            <p className="text-red-600 font-display text-xl font-bold mb-3">
              London, Home Counties &amp; Selected UK Support
            </p>
            <p className="text-gray-400 text-sm mb-5 max-w-lg">
              We deliver projects and technical support across London, the Home
              Counties and selected locations throughout the UK.
            </p>

            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 mb-5">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "radial-gradient(circle, #ffffff10 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }} />
              <div className="absolute left-1/2 top-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/25 blur-2xl" />
              {serviceCities.map(({ name, top, left, primary }) => (
                <div key={name} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1" style={{ top, left }}>
                  <span className={`rounded-full ${primary ? "w-3 h-3 bg-red-500" : "w-2 h-2 bg-red-500/70"}`} />
                  <span className={`text-xs whitespace-nowrap ${primary ? "text-red-500 font-semibold" : "text-gray-400"}`}>{name}</span>
                </div>
              ))}
            </div>

            <Link href="/service-area" className="inline-flex items-center gap-2 border border-red-600 hover:bg-red-600 px-5 py-2.5 rounded-lg text-sm font-medium transition">
              View Full Service Coverage <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
              <div className="max-w-[1220px] mx-auto px-4 lg:px-0 py-5">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="relative rounded-md overflow-hidden border border-red-700/50 bg-gradient-to-r from-[#390505] via-[#240303] to-[#110000] px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,40,40,.5),transparent_35%)]" />
      
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-red-600 flex items-center justify-center shrink-0">
                      <Headphones className="text-white" size={22} />
                    </div>
      
                    <div>
                      <h3 className="font-display text-[19px] md:text-[21px] font-bold leading-tight mb-1">
                        Need a fast response on a critical issue?
                      </h3>
      
                      <p className="text-[#999] text-[10px]">
                        Our engineers are ready to help. Fast response. Expert solutions. Minimal downtime.
                      </p>
                    </div>
                  </div>
      
                  <Link
                    href="/contact"
                    className="relative bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-[11px] font-semibold whitespace-nowrap inline-flex items-center gap-2 transition-colors"
                  >
                    Get in Touch Today
                    <ArrowRight size={12} />
                  </Link>
                </motion.div>
              </div>
            </section>

    </div>
  );
}