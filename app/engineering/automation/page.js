import AutomationClient from "./AutomationClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Automation & Control Systems | Syntrad",
  description:
    "Advanced automation and control systems using PLCs, HMIs, sensors, instrumentation and process control solutions for reliable industrial performance.",
  path: "/engineering/automation",
  keywords: [
    "Automation systems",
    "PLC programming",
    "HMI solutions",
    "Industrial process control",
    "Sensors and instrumentation",
    "Machine automation",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function AutomationPage() {
  return <AutomationClient />;
}