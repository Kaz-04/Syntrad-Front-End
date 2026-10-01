import HospitalityCateringClient from "./HospitalityCateringClient";

export const metadata = {
  title: "Hospitality & Catering Engineering Solutions | Syntrad Ltd",
  description:
    "Syntrad delivers engineered solutions for hospitality and catering operations — from coffee machines to commercial kitchens — keeping equipment performing and customers satisfied.",
  keywords: [
    "Hospitality engineering",
    "Commercial kitchen equipment repair",
    "Coffee machine maintenance",
    "Catering equipment servicing",
    "Kitchen controls automation",
    "Refrigeration and cold storage",
    "Syntrad sectors",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Hospitality & Catering Engineering Solutions | Syntrad Ltd",
    description:
      "Engineered solutions that keep hospitality and catering operations running — commercial coffee equipment, kitchen systems, refrigeration and more.",
    url: "https://www.syntradltd.co.uk/sectors/hospitality-catering",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/sectors/hospitality-catering/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Syntrad Hospitality & Catering Engineering Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hospitality & Catering Engineering Solutions | Syntrad Ltd",
    description:
      "Engineered solutions that keep hospitality and catering operations running — commercial coffee equipment, kitchen systems, refrigeration and more.",
    images: ["https://syntradltd.co.uk/assets/sectors/hospitality-catering/hero.jpg"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <HospitalityCateringClient />;
}