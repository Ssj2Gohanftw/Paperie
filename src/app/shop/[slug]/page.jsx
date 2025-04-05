import { invitationCards, envelopes } from "@/data/shop/products";
import { notFound } from "next/navigation";
import CheckoutForm from "@/components/ui/shop/checkout-form";
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
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover"
      />
      <p className="text-lg font-bold">{product.description}</p>
      <p className="text-2xl font-semibold">{product.price}</p>
      <div className="flex justify-center mt-4">
        <CheckoutForm />
      </div>
    </div>
  );
}
