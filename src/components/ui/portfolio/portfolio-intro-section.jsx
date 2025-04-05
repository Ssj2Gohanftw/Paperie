import { weddings } from "@/data/portfolio/events";
import Link from "next/link";
import Image from "next/image";

const PortfolioIntroSection = () => {
  return (
    <>
      <h1 className="text-4xl mb-4 ">
        Browse Our <span className="italic">Favorite</span> Weddings
      </h1>
      <p className="text-lg  mb-8 max-w-2xl mx-auto">
        Explore how we have worked with couples to bring their signature wedding
        branding to life throughout their wedding stationery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {weddings.map((wedding, index) => (
          <div
            key={wedding.id}
            className={`text-center mx-auto w-full max-w-[350px] ${
              index % 2 !== 0 ? "mt-24" : ""
            }`}
          >
            <Image
              src={wedding.image}
              alt={wedding.name}
              width={350}
              height={450}
              className="mx-auto mb-4"
            />
            <h2 className="text-[20px] leading-tight font-serif  uppercase tracking-wide max-w-[280px] mx-auto">
              {wedding.name}
            </h2>
            <Link
              href={`gallery/${wedding.slug}`}
              className="text-[12px] font-semibold tracking-widest  uppercase inline-block mt-2 border-b border-gray-400 pb-1 hover:text-black"
            >
              View The Gallery
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default PortfolioIntroSection;
