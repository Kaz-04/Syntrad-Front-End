import LeisureWellnessFitnessClient from "./Sauna&ColdPlunge.jsx";

export const metadata = {
  title: "Leisure, Wellness & Fitness | Electrical, Automation & Wellness Engineering | Syntrad",
  description:
    "Syntrad engineers integrated electrical, automation and specialist equipment solutions for gyms, wellness centres, spas, saunas, cold plunges and performance facilities across the UK.",
  keywords: [
    "wellness facility electrical engineering",
    "gym automation systems",
    "sauna control systems",
    "cold plunge automation",
    "spa electrical installation",
    "leisure sector building automation",
    "fitness facility engineering UK",
    "Syntrad wellness sector",
  ],
  authors: [{ name: "Syntrad" }],
  robots: "index, follow",
  openGraph: {
    title: "Leisure, Wellness & Fitness | Syntrad",
    description:
      "Integrated electrical, automation and specialist equipment solutions for gyms, wellness centres, spas, saunas, cold plunges and performance facilities.",
    url: "https://syntradltd.co.uk/sectors/leisure-wellness-fitness",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/images/og/leisure-wellness-fitness.jpg",
        width: 1200,
        height: 630,
        alt: "Syntrad — Leisure, Wellness & Fitness sector engineering",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leisure, Wellness & Fitness | Syntrad",
    description:
      "Integrated electrical, automation and specialist equipment solutions for gyms, wellness centres, spas, saunas, cold plunges and performance facilities.",
    images: ["https://syntradltd.co.uk/images/og/leisure-wellness-fitness.jpg"],
  },
};

export default function LeisureWellnessFitnessPage() {
  return <LeisureWellnessFitnessClient />;
}