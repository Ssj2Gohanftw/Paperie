import { Skeleton } from "../skeleton";

const ProductSkeleton = () => {
  return (
    <div className="border p-4 rounded-lg">
      <Skeleton className="w-full h-48 mb-2" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  );
};
export default ProductSkeleton;
