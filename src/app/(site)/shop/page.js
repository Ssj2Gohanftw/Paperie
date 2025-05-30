"use client";
import { Separator } from "@/components/ui/separator";
import ShoppingItem from "@/components/ui/shop/shopping-item";
import { invitationCards, envelopes } from "@/data/shop/products";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/auth-context";
import { Loader } from "lucide-react";

const ShopPage = () => {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      console.log("Shop page: No user, redirecting to login");
      router.push("/account/login");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null; // Middleware should redirect, but this prevents rendering
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
