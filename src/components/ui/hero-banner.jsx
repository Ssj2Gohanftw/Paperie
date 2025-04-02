"use client";
import Image from "next/image";

const HeroBanner = ({ title, imageurl, description }) => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image src={imageurl} alt={title} fill className="object-cover" />
      {/* Transparent overlay with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>
      {/* Text Content */}
      <div className="relative text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
