import { Outfit, Ovo} from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Syntrad",
  description: "",
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
