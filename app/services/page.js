import ServicesClient from "./ServiceClient";



export const metadata = {
  title: "Our Services | Syntrad",
  description:
    "Explore Syntrad's professional services including Electrical, Electronics, Coffee Machine Repair, Medical Equipment Servicing, and more.",
  keywords:
    "Syntrad services, electrical engineering, electronics repair, coffee machine maintenance, medical equipment service",
  openGraph: {
    title: "Syntrad Services",
    description:
      "Expert repair and maintenance services for electronics, fitness, coffee machines, and more.",
    url: "https://syntradltd.co.uk/services",
    type: "website",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/og-services.jpg",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient/>
}
