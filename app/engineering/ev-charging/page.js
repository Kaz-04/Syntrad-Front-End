import EvClient from "./EvClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "EV Charging & Load Management | Syntrad London",
  description:
    "Syntrad designs, installs and maintains EV charging for homes, businesses and fleets, including smart charging, solar integration and load management across London and the UK.",
  path: "/engineering/ev-charging",
  keywords: [
    "EV charging solutions",
    "Load management",
    "Smart charging",
    "Commercial EV infrastructure",
    "Solar integration",
    "Fleet charging",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function Page() {
  return <EvClient />;
}