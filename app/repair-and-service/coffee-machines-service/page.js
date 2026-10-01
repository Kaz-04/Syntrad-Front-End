import CoffeeMachinesService from "./CoffeeMachinesService";

export const metadata = {
  title: "Coffee Machines | Syntrad Repair & Service",
  description:
    "Expert coffee machine repairs, servicing and diagnostics for domestic and commercial espresso machines, bean-to-cup equipment and coffee systems across London and the UK.",
  keywords: [
    "Coffee machine repair",
    "Espresso machine repair",
    "Bean-to-cup servicing",
    "Commercial coffee equipment repair",
    "Sage repair",
    "DeLonghi repair",
    "Jura service",
    "Coffee machine diagnostics",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  robots: "index, follow",

  openGraph: {
    title: "Coffee Machines | Syntrad Repair & Service",
    description:
      "Fast, reliable coffee machine repairs and servicing for homes, cafés and businesses. Trusted support for domestic and commercial equipment.",
    url: "https://www.syntradltd.co.uk/repair-and-service/coffee-machines-service",
    siteName: "Syntrad",
    images: [
      {
        url: "https://www.syntradltd.co.uk/assets/homeMain.png",
        width: 1200,
        height: 630,
        alt: "Syntrad Coffee Machine Repair & Service",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Coffee Machines | Syntrad Repair & Service",
    description:
      "Fast, reliable coffee machine repairs and servicing for homes, cafés and businesses. Trusted support for domestic and commercial equipment.",
    images: ["https://www.syntradltd.co.uk/assets/homeMain.png"],
    site: "@SyntradLtd",
    creator: "@SyntradLtd",
  },
};

export default function Page() {
  return <CoffeeMachinesService />;
}