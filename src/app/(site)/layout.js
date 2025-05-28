import "../globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
// export const metadata = {
//   title: "Paperie",
//   description: "Wedding Card Website",
//   icons: {
//     icon: "/crs.ico",
//     shortcut: "/crs.ico",
//     apple: "/crs.ico",
//   },
// };

export default function SiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
