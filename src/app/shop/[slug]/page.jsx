import { invitationCards, envelopes } from "@/data/shop/products";
import { notFound } from "next/navigation";
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const allProducts = [...invitationCards, ...envelopes];
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
    return <h1 className="text-4xl font-bold">Product not found</h1>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-2xl font-semibold">{product.price}</p>
    </div>
  );
}
