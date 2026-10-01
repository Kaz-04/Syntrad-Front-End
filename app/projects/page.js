import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
  description:
    "Syntrad delivers bespoke engineering, automation and specialist equipment projects that solve real-world challenges and deliver practical, measurable results. Explore our case studies.",
  keywords: [
    "Engineering projects London",
    "Automation case studies",
    "EV infrastructure projects",
    "IoT infrastructure engineering",
    "Specialist equipment diagnostics",
    "Commercial automation projects",
    "Residential automation projects",
    "Syntrad case studies",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Projects | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's project portfolio — automation, specialist equipment, EV infrastructure, IoT and residential engineering delivered across London and the UK.",
    url: "https://www.syntradltd.co.uk/projects",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/homeMain.png",
        width: 1200,
        height: 630,
        alt: "Syntrad Engineering Projects",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Syntrad Ltd — Engineering, Automation & Specialist Equipment",
    description:
      "Explore Syntrad's project portfolio — automation, specialist equipment, EV infrastructure, IoT and residential engineering delivered across London and the UK.",
    images: ["https://syntradltd.co.uk/assets/homeMain.png"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <ProjectsClient />;
}