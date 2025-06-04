// components/ui/page-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import ProductSkeleton from "@/components/ui/shop/product-skeleton";

const PageSkeleton = () => {
  return (
    <div className="container mx-auto p-8">
      <Skeleton className="h-10 w-1/3 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
export default PageSkeleton;
