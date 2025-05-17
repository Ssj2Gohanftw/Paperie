"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const imagePaths = [
  "/images/c065d61c-64d4-4e3e-ae00-c0e98b9df094.jpeg",
  "/images/IMG_5778.jpeg",
  "/images/471e88b3-d486-4e4c-88f7-686290c5f766.jpeg",
  "/images/785fcf1e-32ba-49d4-a439-7d862718026f.jpeg",
  "/images/IMG_5781.jpeg",
];
const SampleCards = () => {
  return (
    <Carousel>
      <CarouselContent className="p-4 sm:p-8 md:p-20">
        {imagePaths.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center  basis-full sm:basis-1/2 md:basis-1/3"
          >
            <Card className="shadow-lg rounded-md overflow-hidden w-90 sm:w-full md:w-full">
              <CardContent className="cursor-grab active:cursor-grabbing">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                  quality={85}
                  className="w-90 h-110 object-cover sm:h-auto md:h-auto"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-[black] px-3 py-1 rounded" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-[black] px-3 py-1 rounded" />
    </Carousel>
  );
};

export default SampleCards;
