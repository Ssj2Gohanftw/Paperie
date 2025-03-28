import Image from "next/image";

const AboutSection = () => {
  const items = [
    {
      src: "/images/Trunks.jpeg",
      alt: "Image 1",
      title: "Portfolio 1",
      description: "See Our Latest Designs",
    },
    {
      src: "/images/Gohan.jpeg",
      alt: "Image 2",
      title: "Portfolio 2",
      description: "Our Creative Work",
    },
    {
      src: "/images/Goku.png",
      alt: "Image 3",
      title: "Portfolio 3",
      description: "Innovative Concepts",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={item.src}
            alt={item.alt}
            width={150}
            height={150}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            {item.title}
          </h2>
          <p className="text-[rgba(173,163,150,1)] mt-2 max-w-xs text-center text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutSection;
