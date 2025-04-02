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
    { link: "Follow Us", route: "/" },
    { link: "FAQs", route: "/faqs" },
  ];

  return (
    <nav className="flex items-center justify-between p-8 pb-20 bg-white relative h-32 md:h-36 z-50">
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

      {/* Center Logo/Title */}
      <div className="flex flex-1 justify-center">
        <Link href="/">
          <div className="relative w-24 sm:w-32 md:w-40 lg:w-48 aspect-[640/664] flex items-center justify-center p-2">
            <Image
              src="/images/logo/paperie-logo.png"
              alt="Paperie Logo"
              // width={200}
              // height={208}
              fill
              className="object-contain pt-15 mt-2 "
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900 text-white md:hidden z-50">
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
