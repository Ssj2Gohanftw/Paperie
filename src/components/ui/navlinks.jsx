import Link from "next/link";
const NavLinks = ({ onClick, className = "", link, route }) => (
  <Link
    href={route}
    onClick={onClick}
    className={`tracking-0.2em  hover:text-black ${className}`}
  >
    {link}
  </Link>
);
export default NavLinks;
