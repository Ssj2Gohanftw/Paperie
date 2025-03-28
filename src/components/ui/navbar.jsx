"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./navlinks"; 
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const leftNavItems = [
    { link: "Home", route: "/" },
    { link: "About", route: "/about" },
    { link: "Contact", route: "/contact" },
  ];
  const rightNavItems = [
    { link: "Follow Us", route: "/" },
    { link: "FAQs", route: "/faqs" },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-white relative h-20 md:h-24">
      {/* Left Navigation for Desktop */}
      <div className="hidden md:flex flex-1 gap-8">
        {leftNavItems.map((item, index) => (
          <NavLinks key={index} route={item.route} link={item.link} className="text-lg" />
        ))}
      </div>

      {/* Center Logo/Title */}
      <div className="flex flex-1 justify-center">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold">Paperie</h1>
        </Link>
      </div>

      {/* Right Navigation for Desktop */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        {rightNavItems.map((item, index) => (
          <NavLinks key={index} route={item.route} link={item.link} className="text-lg" />
        ))}
      </div>

      {/* Hamburger Button for Mobile */}
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
