import Link from "next/link";
const NavLinks = ({ onClick, className="",link,route}) => (
    <Link
    href={route}
    onClick={onClick}
    className={`tracking-0.2em text-[rgba(173,163,150,1)] hover:text-black ${className}`}>
        {link}
    </Link>
  );
  export default NavLinks;