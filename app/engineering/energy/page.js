import EnergyClient from "./EnergyClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Energy & EV Infrastructure | Syntrad",
  description:
    "Intelligent EV charging, energy distribution and load management systems that are efficient, scalable and future-ready for homes, workplaces and public infrastructure.",
  path: "/engineering/energy",
  keywords: [
    "EV infrastructure",
    "Energy management",
    "Load balancing",
    "Commercial charging",
    "Future-ready power systems",
    "Sustainable energy engineering",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function EnergySectorPage() {
  return <EnergyClient />;
}