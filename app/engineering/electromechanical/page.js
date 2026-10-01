import ElectromechanicalClient from "./ElectromechanicalClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Electromechanical Systems | Syntrad",
  description:
    "Design, integration and support of motors, pumps, actuators, contactors and drives. Precision-engineered electromechanical systems for performance-critical environments.",
  path: "/engineering/electromechanical",
  keywords: [
    "Electromechanical systems",
    "Motors and drives",
    "Pump systems",
    "Actuators",
    "Industrial machinery support",
    "Electrical integration",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function ElectromechanicalPage() {
  return <ElectromechanicalClient />;
}