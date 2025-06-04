"use client";
import { Separator } from "@/components/ui/separator";
import ShoppingItem from "@/components/ui/shop/shopping-item";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/auth-context";
import { Loader } from "lucide-react";
import PageSkeleton from "@/components/ui/shop/page-skeleton";

const ShopPage = () => {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  const [invitationCards, setInvitationCards] = useState([]);
  const [envelopes, setEnvelopes] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      console.log("Shop page: No user, redirecting to login");
      router.push("/account/login");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    if (user) {
      const fetchProducts = async () => {
        setProductsLoading(true);
        try {
          const [cardRes, envelopeRes] = await Promise.all([
            fetch("/api/products?category=invitationCards"),
            fetch("/api/products?category=envelopes"),
          ]);
          if (!cardRes.ok || !envelopeRes.ok) {
            throw new Error("Failed to fetch products");
          }
          const cardsData = await cardRes.json();
          const envelopesData = await envelopeRes.json();
          setInvitationCards(cardsData);
          setEnvelopes(envelopesData);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setProductsLoading(false);
        }
      };
      fetchProducts();
    }
  }, [user]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (!user) {
    return null;
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
