// import { Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

// const cormorantGaramond = Cormorant_Garamond({
//   variable: "--font-cormorant-garamond",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata = {
  title: "Paperie",
  description: "Wedding Card Website",
  icons: {
    icon: "/crs.ico",
    shortcut: "/crs.ico",
    apple: "/crs.ico",
  },
};

export default function SiteLayout({ children }) {
  return (
    // <div className={`${cormorantGaramond.variable} antialiased`}>
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
