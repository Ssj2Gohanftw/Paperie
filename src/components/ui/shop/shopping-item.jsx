import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
const ShoppingItem = ({ products }) => {
  return (
    <section className="w-full p-4">
      <Carousel>
        <CarouselContent className="flex gap-4 p-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Card className="shadow-md p-4 m-2">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 w-full mb-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                  <p className="mt-2 font-semibold">{product.price}</p>
                  <Link href={`/shop/${product.slug}`}>
                    <Button variant="outline">Buy Now</Button>
                  </Link>
                </CardContent>
              </Card>
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

export default ShoppingItem;
