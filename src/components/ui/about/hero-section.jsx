import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/01.jpg"
          alt="Paperie About Us Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl">
          Discover our passion for exquisite design and unmatched quality.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
