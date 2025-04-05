import Image from "next/image";
import Link from "next/link";
const LearnMoreSection = () => {
  const items = [
    {
      src: "/images/D6F51DB1-C069-4332-A9F0-B8E02FABA746.jpeg",
      alt: "Image 1",
      title: "Check out our Story",
      description: "See Our Latest Designs",
      link: "/about",
    },
    {
      src: "/images/Shenon-22.jpeg",
      alt: "Image 2",
      title: "Our Past Works",
      description: "Creative Works for all Events",
      link: "/portfolio",
    },
    {
      src: "/images/CA209F3D-9478-4D62-B705-2D01E19F9120.jpeg",
      alt: "Image 3",
      title: "Check out our latest designs",
      description: "Innovative Concepts",
      link: "/shop",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Link href={item.link}>
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />
          </Link>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            {item.title}
          </h2>
          <p className="mt-2 max-w-xs text-center text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LearnMoreSection;
