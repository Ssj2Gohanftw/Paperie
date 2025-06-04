"use client";
import { useState, useContext } from "react";
import { Loader, Menu, X } from "lucide-react";
import NavLinks from "./navlinks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/auth-context";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import AvatarSkeleton from "./avatar-skeleton";
import PaperieLogo from "./paperie-logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const { user, isLoading, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      router.push("/account/login");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const leftNavItems = [
    { link: "Home", route: "/" },
    { link: "About", route: "/about" },
    { link: "Contact", route: "/contact" },
  ];

  const rightNavItems = [
    { link: "Shop", route: "/shop" },
    { link: "Portfolio", route: "/portfolio" },
    { link: "FAQs", route: "/faqs" },
    { link: "Login", route: "/account/login" },
    { link: "Sign Up", route: "/account/register" },
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
          <div className="relative w-50 left-2 sm:w-40 md:w-48 lg:w-56 aspect-[640/664] flex items-center justify-center">
            <PaperieLogo
              width={120}
              height={40}
              className="object-contain pt-15 mt-2 py-2"
            />
          </div>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        {rightNavItems
          .filter((item) => item.link !== "Login" && item.link !== "Sign Up")
          .map((item, index) => (
            <NavLinks
              key={index}
              route={item.route}
              link={item.link}
              className="text-lg"
            />
          ))}
        {isLoading || isLoggingOut ? (
          // <Loader className="animate-spin" />
          <AvatarSkeleton className="rounded-full h-10 w-10" />
        ) : user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback className="bg-blue-500 text-white">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <NavLinks route="/account/login" link="Login" className="text-lg" />
            <NavLinks
              route="/account/register"
              link="Sign Up"
              className="text-lg"
            />
          </>
        )}
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
            {leftNavItems.map((item, index) => (
              <li key={index}>
                <NavLinks
                  route={item.route}
                  link={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg"
                />
              </li>
            ))}
            {rightNavItems
              .filter(
                (item) => item.link !== "Login" && item.link !== "Sign Up"
              )
              .map((item, index) => (
                <li key={index}>
                  <NavLinks
                    route={item.route}
                    link={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg"
                  />
                </li>
              ))}
            {isLoading || isLoggingOut ? (
              <li>
                <Loader className="animate-spin mx-auto" />
              </li>
            ) : user ? (
              <>
                <li>
                  <div className="flex items-center justify-center gap-2">
                    <Avatar>
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLinks
                    route="/account/login"
                    link="Login"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg"
                  />
                </li>
                <li>
                  <NavLinks
                    route="/account/register"
                    link="Sign Up"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg"
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
