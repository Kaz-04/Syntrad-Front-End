import RepairServiceClient from "./RepairServiceClient";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Repair & Service | Syntrad",
  description:
    "Specialist diagnostics, repair and servicing for domestic, commercial and industrial equipment across London and the UK.",
  path: "/repair-and-service",
  keywords: [
    "Repair and service",
    "Equipment maintenance",
    "Electrical servicing",
    "Commercial repair",
    "Industrial diagnostics",
    "Syntrad repair services",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function RepairServicePage() {
  return <RepairServiceClient />;
}