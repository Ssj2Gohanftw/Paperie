"use client";
import { useParams } from "next/navigation";
import Image from "next/image";

const galleryData = {
  "paulina-markus": {
    title: "Paulina & Markus' New York City Wedding",
    images: ["/images/wedding.png", "/images/wedding.png", "/images/wedding.png"],
    description: "A stunning wedding in the heart of New York City, featuring elegant invitations and breathtaking decor.",
  },
  "victoria-ryan": {
    title: "Victoria & Ryan’s Sicily Wedding",
    images: ["/images/wedding.png", "/images/wedding.png", "/images/wedding.png"],
    description: "A beautiful celebration in Sicily, blending traditional charm with modern elegance.",
  },
  "robyn-brad": {
    title: "Robyn & Brad’s Shadowbrook Wedding",
    images: ["/images/wedding.png", "/images/wedding.png", "/images/wedding.png"],
    description: "An intimate and romantic wedding at Shadowbrook, featuring custom stationery and luxurious details.",
  },
  "jamie-chris": {
    title: "Jamie & Chris’ Cedar Lakes Estate Wedding",
    images: ["/images/wedding.png", "/images/wedding.png", "/images/wedding.png"],
    description: "A magical wedding at Cedar Lakes Estate, designed with personalized invitations and artistic details.",
  },
};

const GalleryPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const wedding = galleryData[slug];

  if (!wedding) {
    return <div className="text-center py-20 text-xl text-gray-500">Gallery Not Found</div>;
  }

  return (
    <div className="container mx-auto px-8 py-16 text-center">
      {/* Title */}
      <h1 className="text-4xl font-serif text-[#A79C92]">{wedding.title}</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{wedding.description}</p>

      {/* Gallery Grid */}
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
