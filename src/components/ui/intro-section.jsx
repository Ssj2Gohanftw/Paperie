import Image from "next/image";

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <Image
        src="/images/logo/paperie-logo.png"
        alt="Paperie Logo"
        width={200}
        height={200}
        className="mb-4"
      />

      {/* Welcome Text */}
      <p className="tracking-[0.3em] text-[rgba(173,163,150,1)] font-normal uppercase text-xs sm:text-sm mb-4">
        Welcome to <br /> Paperie Goa
      </p>

      {/* Headline */}
      <div className="w-full text-center mb-4">
        <h1 className="font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] font-[Magnolia] text-[rgba(173,163,150,1)] leading-[1.1] max-w-4xl mx-auto">
          ONE-OF-A-KIND WEDDING STATIONERY DESIGN in Curchorem, Goa
        </h1>
      </div>

      {/* Description */}
      <div className="w-full text-center">
        <p className="text-[rgba(173,163,150,1)] text-base sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Paperie Goa is all about using bespoke design to create fully custom
          invitation cards with hand crafted details for couples for any event
          be it - tying the knot or celebrating a B&apos;day.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
