import dynamic from "next/dynamic";

export const DynamicCarousel = dynamic(
  () =>
    import("@/components/ui/carousel").then((mod) => ({
      default: mod.Carousel,
      CarouselContent: mod.CarouselContent,
      CarouselItem: mod.CarouselItem,
      CarouselNext: mod.CarouselNext,
      CarouselPrevious: mod.CarouselPrevious,
    })),
  { ssr: false }
);

export const DynamicInstagramSection = dynamic(
  () => import("@/components/ui/instagram-section"),
  {
    ssr: false,
    loading: () => <div className="min-h-[300px] bg-gray-100 animate-pulse" />,
  }
);
