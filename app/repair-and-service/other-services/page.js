import OtherServicesClient from "./OtherServicesClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Other Specialist Services | Syntrad",
  description:
    "Medical equipment servicing, clock repair and restoration, network services and smart home systems — expert support for specialist equipment across the UK.",
  path: "/repair-and-service/other-services",
  keywords: [
    "Specialist services",
    "Medical equipment servicing",
    "Clock repair",
    "Network services",
    "Smart home systems",
    "Bespoke support solutions",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function OtherServicesPage() {
  return <OtherServicesClient />;
}