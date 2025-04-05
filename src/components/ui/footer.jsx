import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black ">
      <Separator className="mb-4" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center w-full">
            <div className="w-full flex justify-center py-1 mb-2 ml-6">
              <Image
                width={140}
                height={100}
                alt="Paperie Logo"
                className="w-32"
                src="/images/logo/paperie-logo.png"
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
