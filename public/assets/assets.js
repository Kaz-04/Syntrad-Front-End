import Owner from './owner2.jpeg';
import { FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export const assets = {
  Owner,
};

export const EVCharger = [
  {
    title: "white",
    bgImage: "/One_Layer.png",
  },
  {
    title: "yellow",
    bgImage: "/Two_Layer.png",
  },
  {
    title: "green",
    bgImage: "/Three_Layer.png",
  },
  {
    title: "blue",
    bgImage: "/Four_Layer.png",
  },
  {
    title: "red",
    bgImage: "/Five_Layer.png",
  },
  {
    title: "pink",
    bgImage: "/Six_Layer.png",
  }
]

export const LogoImage = [
  {
    title: "syntrad",
    bgImage: "/Logo.png",
  },
  {
    title: "turkey",
    bgImage:"/Turkey.png",
  },
  {
    title: "octopus",
    bgImage:"/Octopus.png",
  },
  {
    title: "uk",
    bgImage:"/Unnamed.png",
  },
  {
    title: "zero",
    bgImage:"/Zero.png",
  },
]

export const footerData = {
  brand: {
    logo: "/assets/Logo/syntrad_logo.png",
    tagline: "Precision. Power. Reliability.",
    description: "Advanced engineering, electronics and specialist equipment solutions. Built for performance. Designed for reliability.",
    copyright: "© 2027 Syntrad Ltd. All rights reserved.",
  },

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Repair & Service", href: "/repair-and-service" },
    { label: "Engineering", href: "/engineering" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    { label: "Automation & Control Systems", href: "/engineering/automation" },
    { label: "Electrical & Electronic Engineering", href: "/engineering/electrical" },
    { label: "Electromechanical Systems", href: "/engineering/electromechanical" },
    { label: "Specialist Equipment Engineering", href: "/services" },
    { label: "Connected Infrastructure & IoT", href: "/engineering/iot" },
    { label: "Energy & EV Infrastructure", href: "/engineering/ev-charging" },
  ],

  contact: {
    email: "hello@syntradltd.co.uk",
    phone: "+44 20 7112 5377",
    address:
      "11 Old Bond Street, Mayfair, London, W1S 4PN",
    locationUrl:
      "https://www.google.com/maps/search/?api=1&query=11+Old+Bond+Street,+Mayfair,+London,+W1S+4PN",
    hours: "Monday – Friday: 8:00 AM – 9:00 PM, Saturday – Sunday: Closed.",
  },

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaz-moorjani/",
      icon: <FaLinkedinIn size={16} />,
    },
    {
      label: "Email",
      href: "mailto:hello@syntradltd.co.uk",
      icon: <Mail size={16} />,
    },
    {
      label: "Phone",
      href: "tel:+442071125377",
      icon: <Phone size={16} />,
    },
  ],
};

import { FaSuitcase, FaPoundSign, FaHardHat } from "react-icons/fa";

export const aboutCards = [
  {
    title: "Who We Are",
    description:
      "At Syntrad Ltd, we’re a team of certified electricians committed to delivering safe, reliable, and high-quality electrical solutions for homes and businesses across the region.",
    icon: FaSuitcase,
    variant: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    },
  },
  {
    title: "What We Do",
    description:
      "From full installations and rewiring to maintenance and emergency repairs, Syntrad Ltd provides expert electrical services tailored to your needs—on time and on budget.",
    icon: FaPoundSign,
    variant: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    },
  },
  {
    title: "Why Choose Us",
    description:
      "With a reputation built on trust, professionalism, and technical excellence, Syntrad Ltd is your go-to partner for electrical work done right the first time.",
    icon: FaHardHat,
    variant: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    },
  },
];

export const serviceCards = [
  {
    title: "Electrical Engineering",
    id: "electrical",
    description: "Electrical Engineering Services offer safe and efficient electrical system design, installation, and maintenance.",
    image: "/assets/electricalM.png",
    link: "/electrical",
  },
  {
    title: "Electronics",
    id: "electronics",
    description:
      "Electronics Services include the design, repair, and maintenance of electronic devices and systems.",
    image: "/assets/electronicsM.png",
    link: "/electronic",
  },
  {
    title: "Coffee Machine Service",
    id: "coffee",
    description:
      "Coffee Machine Service includes cleaning, repair, and maintenance to ensure smooth and efficient machine performance.",
    image: "/assets/coffeeM.png",
    link: "/coffee",
  },
  {
    title: "Gym Equipment Repair",
    id: "gym",
    description:
      "Gym Equipment Repair Service involves diagnosing, fixing, and maintaining fitness machines to ensure safe and optimal performance.",
    image: "/assets/gymM.png",
    link: "/gym",
  },
  {
    title: "Catering Equipment Service",
    id: "catering",
    description:
      "Catering Equipment Service includes maintenance and repair of kitchen appliances to ensure efficient and reliable food service operations.",
    image: "/assets/cateringM.png",
    link: "/catering",
  },
  {
    title: "Medical Equipment Service",
    id: "medical",
    description:
      "Medical Equipment Service involves the maintenance, calibration, and repair of medical devices to ensure accuracy, safety, and compliance.",
    image: "/assets/medicalM.png",
    link: "/medical",
  },
  {
    title: "Electromechanical",
    id: "electromechanical",
    description:
      "Electromechanical Services involve the maintenance and repair of systems combining electrical and mechanical components.",
    image: "/assets/electromachenicalM.png",
    link: "/electromechanical",
  },
  {
    title: "Clocks",
    id: "clock",
    description:
      "Clock Services include the repair, maintenance, and restoration of clocks.",
    image: "/assets/clockM.png",
    link: "/clock",
  },
  {
    title: "Network Service",
    id: "network",
    description:
      "Network Service involves setup, maintenance, and troubleshooting of networks.",
    image: "/assets/networkM.png",
    link: "/network",
  },
  {
    title: "Smart Home System",
    id: "smarthome",
    description:
      "Smart Home System service includes installation and maintenance of connected devices.",
    image: "/assets/homeM.png",
    link: "/smarthome",
  },
];

export const directorData = {
  name: "Kaz Moorjani",
  title: "Director Of Syntrad Ltd",
  image: "/assets/owner2.jpeg",
  airtasker:
    "https://www.airtasker.com/users/228a70407caf-p-30688846/",
  intro:
    "Kaz Moorjani leads SyntraD Ltd with a hands-on, customer-first approach to technical services and product support. With a strong background in engineering and practical repair expertise, Kaz has built SyntraD into a reliable name for high-quality appliance servicing and repair across a range of premium consumer products.",
  leadership:
    "Under Kaz’s leadership, SyntraD Ltd operates as an authorised agent for SAGE coffee machines, as well as a trusted specialist in treadmill and gym equipment repairs. Whether working with individual clients or commercial contracts, Kaz ensures every job is completed with precision, transparency, and professionalism.",
  beyond:
    "Beyond the Business: Kaz also works independently through platforms like Airtasker, offering technical services, small repairs, and custom installations. His freelance work keeps him directly engaged with customers and their everyday needs — ensuring SyntraD remains practical, responsive, and rooted in real-world service."
};

export const offerData = {
  titleHighlight: "20% OFF",
  titleMain: "ON YOUR FIRST APPOINTMENT",
  note: "** Conditions apply",
  buttonText: "Request Quote",
  image: "/assets/homeMain.png"
};

export const amplinkProduct = {
  name: "AmpLink Elite",
  subtitle:
    "Supports 7.4 kW (single-phase), 11 kW & 22 kW (three-phase) charging options",
  basePrice: "Starting At Just £475.00",
  subdes: "Installation requirements may apply.",

  images: [
    "/assets/1Layer.png",
    "/assets/4Layer.png",
    "/assets/5Layer.png",
    "/assets/3Layer.png",
    "/assets/2Layer.png",
    "/assets/6Layer.png",
  ],

  colors: [
    { id: "white", class: "bg-white", imageIndex: 0 },
    { id: "black", class: "bg-black", imageIndex: 4 },
    { id: "red", class: "bg-red-700", imageIndex: 2 },
  ],

  shortDescription:
    "A premium smart EV charger with app control, optional WIFI, 4G & RFID control.",

  technical: [
    "Up to 7.4kW single-phase / 22kW three-phase",
    "WiFi & Ethernet standard · 4G & RFID optional",
    "OCPP 1.6 with OTA firmware updates",
    "Dynamic load balancing",
    "No earth rod required",
  ],
};

export const reviews = [
  {
    id: 1,
    name: "Wayne W.",
    title: "Surround sound speakers buzzing",
    review:
      "He knows his stuff as he is taking my old one away and bringing me a refurb at a good price.",
    stars: 5,
    image:
      "https://i.pinimg.com/736x/99/d0/7f/99d07f72ea74f29fe21833964704cdc9.jpg",
  },
  {
    id: 2,
    name: "Karen B.",
    title: "Treadmill service",
    review:
      "Carried out a service. Fixed the sound and belt. Great communication and price. Good advice given for future maintenance.",
    stars: 5,
    image:
      "https://i.pinimg.com/736x/99/d0/7f/99d07f72ea74f29fe21833964704cdc9.jpg",
  },
  {
    id: 3,
    name: "Netsai R.",
    title: "Electrician",
    review:
      "He has done a good job. He explained everything he was going to do. Happy customer. Will recommend.",
    stars: 5,
    image:
      "https://i.pinimg.com/736x/99/d0/7f/99d07f72ea74f29fe21833964704cdc9.jpg",
  },
  {
    id: 4,
    name: "Marnela C.",
    title: "Blocked grinder – Delonghi Eletta",
    review:
      "Our issue was resolved within minutes and the machine was serviced in the remaining time. Very professional and communicative.",
    stars: 5,
    image:
      "https://i.pinimg.com/736x/99/d0/7f/99d07f72ea74f29fe21833964704cdc9.jpg",
  },
];

export const models = [
  "Commercial Oven Repair",
  "Grill Maintenance & Repairs",
  "Deep Fryer Servicing",
  "Commercial Dishwasher Repair",
  "Industrial Toaster Service",
  "Commercial Microwave Repair",
  "Hot Plate Repair & Servicing",
];

export const cateringImages = [
  "/assets/oven.webp",
  "/assets/grill.jpg",
  "/assets/Gas-Fryer.jpg",
  "/assets/Glass-washer.webp",
  "/assets/toaster.jpg",
  "/assets/microwave.jpg",
  "/assets/hotplate.webp",
];

export const serviceAreas = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Liverpool",
];