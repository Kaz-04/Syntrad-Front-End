import ElectronicsPcbRepairClient from "./ElectronicsPcbRepairClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Electronics & PCB Repair | Syntrad",
  description:
    "Expert electronics and PCB repair, from component-level fault finding to legacy and specialist device support. London based, serving the UK.",
  path: "/repair-and-service/electronics-pcb-repair",
  keywords: [
    "PCB repair",
    "Electronics repair",
    "Component-level repair",
    "Legacy equipment support",
    "Bespoke electronics servicing",
    "London electronics repair",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function ElectronicsPcbRepairPage() {
  return <ElectronicsPcbRepairClient />;
}