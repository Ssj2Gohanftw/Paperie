"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./navlinks";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const leftNavItems = [
    { link: "Home", route: "/" },
    { link: "About", route: "/about" },
    { link: "Contact", route: "/contact" },
  ];

  const rightNavItems = [
    { link: "Shop", route: "/shop" },
    { link: "Portfolio", route: "/portfolio" },
    { link: "FAQs", route: "/faqs" },
  ];

  return (
    <nav className="flex items-center justify-between p-8 pb-35 mt-10 bg-white relative h-60 md:h-36 z-50">
      <div className="hidden md:flex flex-1 gap-8">
        {leftNavItems.map((item, index) => (
          <NavLinks
            key={index}
            route={item.route}
            link={item.link}
            className="text-lg"
          />
        ))}
      </div>

      <div className="flex flex-1 justify-center">
        <Link href="/">
          <div className="relative w-50 left-2 sm:w-40 md:w-48 lg:w-56 aspect-[640/664] flex items-center justify-center ">
            <Image
              src="/images/logo/paperie-logo.png"
              alt="Paperie Logo"
              fill
              sizes="20%"
              className="object-contain pt-15 mt-2 py-2"
            />
          </div>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        {rightNavItems.map((item, index) => (
          <NavLinks
            key={index}
            route={item.route}
            link={item.link}
            className="text-lg"
          />
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="p-2 text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-sm md:hidden z-50">
          <ul className="flex flex-col justify-center text-center space-y-4 p-6">
            {[...leftNavItems, ...rightNavItems].map((item, index) => (
              <li key={index}>
                <NavLinks
                  route={item.route}
                  link={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
