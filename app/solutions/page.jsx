import SolutionsClient from "./SolutionsClient";

export const metadata = {
  title: "Solutions | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
  description:
    "Syntrad delivers integrated electrical, electronic, automation and specialist equipment solutions for commercial, industrial and premium residential clients across London and the UK.",
  keywords: [
    "Automation & control systems",
    "Electrical engineering London",
    "Electromechanical systems",
    "Specialist equipment engineering",
    "Connected infrastructure IoT",
    "Energy & EV infrastructure",
    "Syntrad solutions",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Solutions | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's engineering solutions — automation, electrical & electronic engineering, electromechanical systems, specialist equipment, IoT and EV infrastructure.",
    url: "https://www.syntradltd.co.uk/solutions",
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
    title: "Solutions | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's engineering solutions — automation, electrical & electronic engineering, electromechanical systems, specialist equipment, IoT and EV infrastructure.",
    images: ["https://syntradltd.co.uk/assets/homeMain.png"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <SolutionsClient />;
}