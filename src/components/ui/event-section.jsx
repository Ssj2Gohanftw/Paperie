"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const eventpics = [
  {
    src: "/images/Shenon-3.jpeg",
    alt: "Featured Image 1",
    description: "Shenon's Wedding - Slide 1",
  },
  {
    src: "/images/Shenon-8.jpeg",
    alt: "Featured Image 2",
    description: "Shenon's Wedding - Slide 2",
  },
  {
    src: "/images/Shenon-3.jpeg",
    alt: "Featured Image 3",
    description: "Shenon's Wedding - Slide 3",
  },
];
const EventSection = () => {
  return (
    <section className="w-full p-4">
      <h1 className="text-[rgba(173,163,150,1)] text-4xl md:text-6xl px-6 text-center mb-4">
        Some of Our Favourite Cards
      </h1>
      <Carousel className="relative">
        <CarouselContent className="relative w-full max-w-4xl mx-auto">
          {eventpics.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full flex justify-center">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={500}
                  height={200}
                  loading="lazy"
                  className="object-cover transition duration-500 ease-in-out"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-lg md:text-xl text-[rgba(173,163,150,1)]">
                  {slide.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded">
          Next
        </CarouselNext>
      </Carousel>
    </section>
  );
};

export default EventSection;
