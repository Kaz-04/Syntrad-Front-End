import CommercialIndustrialClient from "./CommercialIndustrialClient.jsx";

export const metadata = {
  title: "Commercial & Industrial Engineering Solutions | Syntrad Ltd",
  description:
    "Syntrad delivers integrated electrical, automation and specialist engineering systems that keep commercial and industrial operations running safely, efficiently and in full compliance.",
  keywords: [
    "Commercial and industrial engineering",
    "Electrical power distribution",
    "Industrial automation and control",
    "HVAC and building services",
    "Standby power systems",
    "Preventive maintenance",
    "Syntrad sectors",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Commercial & Industrial Engineering Solutions | Syntrad Ltd",
    description:
      "Integrated electrical, automation and specialist engineering systems built for performance and designed for uptime across commercial and industrial sites.",
    url: "https://www.syntradltd.co.uk/sectors/commercial-industrial",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/sectors/commercial-industrial/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Syntrad Commercial & Industrial Engineering Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial & Industrial Engineering Solutions | Syntrad Ltd",
    description:
      "Integrated electrical, automation and specialist engineering systems built for performance and designed for uptime across commercial and industrial sites.",
    images: ["https://syntradltd.co.uk/assets/sectors/commercial-industrial/hero.jpg"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <CommercialIndustrialClient />;
}