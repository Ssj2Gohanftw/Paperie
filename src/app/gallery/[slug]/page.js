"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { galleryData } from "@/data/portfolio/gallery/gallery-info";
const GalleryPage = () => {
  const { slug } = useParams();
  const wedding = galleryData[slug];

  if (!wedding) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Gallery Not Found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16 text-center">
      <h1 className="text-4xl font-bold">{wedding.title}</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        {wedding.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {wedding.images.map((img, index) => (
          <div key={index} className="relative w-full h-[300px]">
            <Image
              src={img}
              alt={wedding.title}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
