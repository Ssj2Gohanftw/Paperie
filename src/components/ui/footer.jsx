import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PaperieLogo from "./paperie-logo";
const Footer = () => {
  return (
    <footer className="bg-white text-black pb-4 w-auto">
      <Separator className="mb-4" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center w-full">
            <div className="w-auto flex justify-center py-1 mb-2 ml-6">
              <PaperieLogo
                width={120}
                height={40}
                className="object-contain pt-15 mt-2 py-2"
              />
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Paperie. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/paperiegoa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/paperiegoa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
