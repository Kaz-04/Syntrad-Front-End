import GymFitnessEquipmentClient from "./GymFitnessEquipmentClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Gym & Fitness Equipment Repair | Syntrad",
  description:
    "Specialised repair and maintenance for treadmills, cross trainers and other fitness machines. Fast, reliable service for home and commercial gyms across the UK.",
  path: "/repair-and-service/gym-fitness-equipment",
  keywords: [
    "Gym equipment repair",
    "Treadmill repair",
    "Fitness equipment maintenance",
    "Commercial gym servicing",
    "Cross trainer repair",
    "Exercise equipment support",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function GymFitnessEquipmentPage() {
  return <GymFitnessEquipmentClient />;
}