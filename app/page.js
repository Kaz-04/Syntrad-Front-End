import HomePage from "./HomeClient";


export const metadata = {
  title: "Syntrad | Expert Electrical & Electronic Repair Solutions in London",
  description:
    "Discover Syntrad – London's trusted source for innovative electrical and electronic repair services.",
  keywords: [
    "Electrical Repair",
    "Electronic Services",
    "London Electronics",
    "Syntrad",
  ],
  authors: [{ name: "Syntrad" }],
  robots: "index, follow",

  openGraph: {
    title:
      "Syntrad | Expert Electrical & Electronic Repair Solutions in London",
    description:
      "Welcome to Syntrad – your top destination for electrical and electronic repair services in London.",
    url: "https://syntradltd.co.uk/",
    siteName: "Syntrad",
    images: [
      {
        url: "https://syntradltd.co.uk/assets/homeMain.png",
        width: 1200,
        height: 630,
        alt: "Syntrad Electrical & Electronic Services",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <HomePage/>
}
