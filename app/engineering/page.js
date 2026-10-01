import EngineeringClient from "./EngineeringClient";

export const metadata = {
  title: "Engineering | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
  description:
    "Syntrad delivers integrated electrical, electronic, automation and specialist equipment engineering for commercial, industrial and premium residential clients across London and the UK.",
  keywords: [
    "Automation & control systems",
    "Electrical engineering London",
    "Electromechanical systems",
    "Specialist equipment engineering",
    "Connected infrastructure IoT",
    "Energy & EV infrastructure",
    "Syntrad engineering",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Engineering | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's engineering capabilities — automation, electrical & electronic engineering, electromechanical systems, specialist equipment, IoT and EV infrastructure.",
    url: "https://www.syntradltd.co.uk/engineering",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/homeMain.png",
        width: 1200,
        height: 630,
        alt: "Syntrad Engineering Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineering | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's engineering capabilities — automation, electrical & electronic engineering, electromechanical systems, specialist equipment, IoT and EV infrastructure.",
    images: ["https://syntradltd.co.uk/assets/homeMain.png"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <EngineeringClient />;
}