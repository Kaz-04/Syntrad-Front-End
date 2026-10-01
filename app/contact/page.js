import Contact from "./ContactClient";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact Syntrad | Request a Repair or Engineering Quote",
  description:
    "Contact Syntrad for repair, maintenance, engineering, automation and specialist equipment enquiries across London and the UK.",
  path: "/contact",
  keywords: [
    "Contact Syntrad",
    "Repair quote",
    "Engineering enquiry",
    "Electrical service contact",
    "Commercial equipment support",
    "London engineering contact",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function ContactPage() {
  return <Contact />;
}