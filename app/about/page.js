import AboutClient from "./AboutClient";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Syntrad | Electrical, Repair & Engineering Experts",
  description:
    "Learn more about Syntrad, our mission, engineering expertise, and our customer-first approach to electrical, electronic and specialist repair services.",
  path: "/about",
  keywords: [
    "About Syntrad",
    "Electrical repair company",
    "Engineering experts",
    "Customer reviews",
    "Electronic repair services",
    "London engineering specialists",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function AboutPage() {
  return <AboutClient/>;
}