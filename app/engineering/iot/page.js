import IotClient from "./IotClient";
import { createPageMetadata } from "../../seo";

export const metadata = createPageMetadata({
  title: "Connected Infrastructure & IoT Solutions | Syntrad Ltd",
  description:
    "Syntrad delivers connected infrastructure and IoT solutions that intelligently monitor, control and optimise operations — from sensor networks and edge devices to cloud dashboards and secure connectivity.",
  path: "/engineering/iot",
  keywords: [
    "IoT solutions",
    "Connected infrastructure",
    "Sensor networks",
    "Edge devices",
    "Industrial monitoring",
    "Smart operations",
  ],
  image: "https://www.syntradltd.co.uk/assets/homeMain.png",
});

export default function Page() {
  return <IotClient />;
}