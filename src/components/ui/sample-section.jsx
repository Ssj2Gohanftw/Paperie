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

const SampleCards = () => {
  const imagePaths = [
    "/images/Goten.jpeg",
    "/images/Beerus.jpeg",
    "/images/Gohan.jpeg",
    "/images/Goku.png",
    "/images/Piccolo.jpeg",
    "/images/Broly.jpeg",
  ];
  return (
    <Carousel>
      <CarouselContent className="p-4 sm:p-8 md:p-20">
        {imagePaths.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/3"
          >
            <Card className="shadow-lg rounded-md overflow-hidden">
              <CardContent className="cursor-grab active:cursor-grabbing">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SampleCards;
