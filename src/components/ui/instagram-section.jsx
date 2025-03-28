import Image from "next/image";
import Link from "next/link";

const InstagramSection = () => {
  // Replace these sample images with data fetched from Instagram, if needed.
  const images = [
    { id: 1, src: "/images/Frieza.jpeg", alt: "Instagram Image 1" },
    { id: 2, src: "/images/Gohan.jpeg", alt: "Instagram Image 2" },
    { id: 3, src: "/images/Goku.png", alt: "Instagram Image 3" },
    { id: 4, src: "/images/Goten.jpeg", alt: "Instagram Image 4" },
    { id: 5, src: "/images/Trunks.jpeg", alt: "Instagram Image 5" },
    { id: 6, src: "/images/Cell.jpeg", alt: "Instagram Image 6" },
  ];

  return (
    <section className="w-full p-4">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[rgba(173,163,150,1)]">
        Our Instagram Content
      </h2>
      {/* Responsive grid: 1 column on xs, 2 on sm, 3 on md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image) => (
          <div key={image.id} className="w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* Center the link on small screens, align right on md+ */}
      <div className="flex justify-center md:justify-end w-full mt-4">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/paperiegoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <p className="text-blue-500 hover:text-blue-700 text-2xl">
            Join us on Instagram!
          </p>
        </Link>
      </div>
    </section>
  );
};

export default InstagramSection;
