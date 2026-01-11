import AmplinkClient from "./AmplinkClient";



export const metadata = {
  title: "AmpLink Elite EV Charger | Smart Home & Commercial Charging",
  description:
    "AmpLink Elite EV charger supports 7.4kW, 11kW & 22kW charging with smart app control, solar compatibility, and commercial metering.",
  keywords: [
    "EV Charger",
    "AmpLink Elite",
    "Smart EV Charging",
    "Home EV Charger UK",
    "Commercial EV Charging",
  ],
  openGraph: {
    title: "AmpLink Elite EV Charger",
    description:
      "High-speed smart EV charging with solar integration and app control.",
    images: ["/assets/1Layer.png"],
  },
};

export default function AmplinkPage() {
  return <AmplinkClient/>
}
