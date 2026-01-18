import ServicesClient from "./ServiceClient";

export const metadata = {
  title: "Professional Repair & Maintenance Services | Syntrad UK",
  description:
    "Syntrad UK offers expert repair and maintenance services across a wide range of equipment: electrical, electronics, coffee machines, gym equipment, medical devices, smart home systems, networking solutions, and more. Fast, reliable, and professional services for homes, clinics, gyms, and businesses across the UK.",
  keywords: [
    "Syntrad services",
    "electrical repair",
    "electronics repair",
    "coffee machine repair",
    "coffee machine servicing",
    "medical equipment repair",
    "dental equipment service",
    "optometry equipment maintenance",
    "gym equipment repair",
    "fitness equipment servicing",
    "smart home automation",
    "smart home installation",
    "network services",
    "Wi-Fi setup",
    "firewall security",
    "VPN configuration",
    "cloud access",
    "IT support services",
    "home automation repair",
    "commercial equipment servicing",
    "professional maintenance services"
  ],
  openGraph: {
    title: "Syntrad Services – Expert Repair & Maintenance",
    description:
      "Explore Syntrad UK's full range of professional services, including electrical, electronics, coffee machines, gym equipment, medical devices, smart home, and network solutions. Reliable, fast, and trusted by homes and businesses across the UK.",
    url: "https://syntradltd.co.uk/services",
    type: "website",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/og-services.jpg",
        alt: "Syntrad repair and maintenance services",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
