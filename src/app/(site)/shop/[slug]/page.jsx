import { invitationCards, envelopes } from "@/data/shop/products";
import { notFound } from "next/navigation";
import CheckoutForm from "@/components/ui/shop/checkout-form";
import Image from "next/image";
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const allProducts = [...invitationCards, ...envelopes];
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="flex flex-col justify-center items-center  mx-auto p-4 pt-5 mt-2">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <div className="flex items-center ">
        <Image
          width={300}
          height={300}
          src={product.image}
          alt={product.name}
          className="mt-3 ml-4 w-64 h-64 object-cover rounded-2xl "
        />
        <p className="ml-7 text-lg font-bold">{product.description}</p>
      </div>
      <p className="text-2xl font-semibold">₹ {product.price}</p>
      <div className="flex justify-center mt-4">
        <CheckoutForm price={product.price} />
      </div>
    </div>
  );
}
