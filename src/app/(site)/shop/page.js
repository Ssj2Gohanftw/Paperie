"use client";
import { Separator } from "@/components/ui/separator";
import ShoppingItem from "@/components/ui/shop/shopping-item";
import { invitationCards, envelopes } from "@/data/shop/products";
import useUser from "@/hooks/useUser";
const ShopPage = () => {
  const { user, loading } = useUser({
    redirectTo: "/account/login",
    redirectIfFound: false,
  });

  if (loading) {
    return <p className="text-center text-2xl">Loading the Shop...</p>;
  }
  return (
    <div className=" pt-5">
      <h1 className="flex flex-col justify-center text-center font-bold text-4xl md:text-5xl ml-8 ">
        Check out our collection!
      </h1>
      <div>
        <div>
          <ShoppingItem products={invitationCards} />
          <Separator className="w-full" />
          <h1 className="text-center text-4xl md:text-5xl font-bold  ">
            Envelopes for any occasion
          </h1>
          <ShoppingItem products={envelopes} />
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
