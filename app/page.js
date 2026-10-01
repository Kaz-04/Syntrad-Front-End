import HomePage from "./HomeClient";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata({
  title: "Syntrad London | Expert Electrical & Electronic Repairs for Homes & Businesses",
  description:
    "Syntrad London provides professional repair services for electrical and electronic equipment, including coffee machines, gym equipment, appliances, gadgets, and commercial systems. Fast, reliable, and certified solutions across London.",
  path: "/",
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
    "Gadget repair solutions",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function Page() {
  return <HomePage />;
}
