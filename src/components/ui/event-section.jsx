"use client";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";

const eventpics = [
  {
    src: "/images/Shenon-3.jpeg",
    alt: "Featured Image 1",
  },
  {
    src: "/images/Shenon-8.jpeg",
    alt: "Featured Image 2",
  },
  {
    src: "/images/Shenon-22.jpeg",
    alt: "Featured Image 3",
  },
];

const EventSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="min-h-[300px] bg-gray-100 animate-pulse" />;
  }

  return (
    <section className="w-full p-4">
      <h1 className="text-4xl md:text-6xl px-6 text-center mb-4">
        Some of Our Favourite Cards
      </h1>
      <Carousel className="relative">
        <CarouselContent className="relative w-full max-w-4xl mx-auto">
          {eventpics.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full flex justify-center">
                <OptimizedImage
                  src={slide.src}
                  alt={slide.alt}
                  width={500}
                  height={200}
                  priority={index === 0}
                  className="w-100 h-100 object-cover transition duration-500 ease-in-out rounded-2xl"
                />
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
