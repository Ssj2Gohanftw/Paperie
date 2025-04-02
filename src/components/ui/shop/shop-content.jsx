import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Invitation Card A",
    description: "Elegant design for weddings.",
    image: "",
    price: "$2.50",
  },
  {
    id: 2,
    name: "Invitation Card B",
    description: "Modern and minimalistic.",
    image: "",
    price: "$3.00",
  },
  {
    id: 3,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "",
    price: "$2.75",
  },
];
const ShopContent = () => {
  return (
    <div className="">
      {products.map((product) => (
        <Card key={product.id} className="shadow-md">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className=""
              />
            </div>
            <CardDescription>{product.description}</CardDescription>
            <p className="">{product.price}</p>
            <Link href={`/shop/${product.id}`} className="">
              <Button variant="link">View More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ShopContent;
