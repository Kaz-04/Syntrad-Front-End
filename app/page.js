import HomePage from "./HomeClient";

export const metadata = {
  title: "Syntrad London | Expert Electrical & Electronic Repairs for Homes & Businesses",
  description:
    "Syntrad London provides professional repair services for electrical and electronic equipment, including coffee machines, gym equipment, appliances, gadgets, and commercial systems. Fast, reliable, and certified solutions across London.",
  keywords: [
    "Electrical repair",
    "Electronic repair",
    "Appliance repair",
    "Gadget repair",
    "Coffee machine repair",
    "Gym equipment repair",
    "Commercial electrical services",
    "Home electronics repair",
    "Office equipment repair",
    "Industrial electronics repair",
    "Refrigerator repair",
    "Washing machine repair",
    "Dishwasher repair",
    "Microwave repair",
    "Espresso machine repair",
    "Treadmill repair",
    "Fitness equipment repair",
    "POS machine repair",
    "CCTV repair",
    "Security system repair",
    "Audio-visual equipment repair",
    "Fast electrical repair",
    "Emergency electrical repair",
    "Certified electronics repair",
    "Affordable electrical repair",
    "Professional repair service",
    "Reliable electronics service",
    "Same-day repair",
    "Coffee machine repair service",
    "Gym equipment servicing",
    "Appliance repair experts",
    "Electronics repair company",
    "Home electrical services",
    "Commercial electronics maintenance",
    "Gadget repair solutions"
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Syntrad London | Expert Electrical & Electronic Repairs for Homes & Businesses",
    description:
      "Looking for professional repair services in London? Syntrad specializes in coffee machines, gym equipment, appliances, gadgets, and commercial systems. Reliable, fast, and certified solutions.",
    url: "https://www.syntradltd.co.uk/",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/homeMain.png",
        width: 1200,
        height: 630,
        alt: "Syntrad Electrical & Electronic Repair Services in London",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Syntrad London | Expert Electrical & Electronic Repairs for Homes & Businesses",
    description:
      "Syntrad provides certified repair services for coffee machines, gym equipment, appliances, gadgets, and commercial systems in London. Fast and reliable solutions.",
    images: ["https://syntradltd.co.uk/assets/homeMain.png"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <HomePage />;
}
