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
