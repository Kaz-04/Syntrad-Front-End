import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteMetadata } from "./seo";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: siteMetadata.metadataBase,
  title: {
    default: siteMetadata.title,
    template: "%s | Syntrad",
  },
  description: siteMetadata.description,
  keywords: [
    "Syntrad",
    "Electrical repair",
    "Electronics repair",
    "Engineering services",
    "Automation systems",
    "EV charging",
    "Commercial engineering",
    "London repair services",
  ],
  authors: [{ name: "Syntrad Ltd" }],
  applicationName: "Syntrad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: "Syntrad",
    locale: "en_GB",
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Syntrad electrical, electronic and engineering services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
       <Header />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
