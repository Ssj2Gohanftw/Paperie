import Image from "next/image";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "/images/878ea1de-812c-4fa2-8c45-b5249ae97c68.jpeg",
    alt: "Instagram Image 1",
  },
  {
    id: 2,
    src: "/images/5ff0dde5-055f-4c2e-8341-60d06eeb4f89.jpeg",
    alt: "Instagram Image 2",
  },
  {
    id: 3,
    src: "/images/29f66ef9-f1c5-4f34-9df4-1cc6250ef38d.jpeg",
    alt: "Instagram Image 3",
  },
  {
    id: 4,
    src: "/images/08cf49e6-0d9e-4035-8887-7ef44eac7d71.jpeg",
    alt: "Instagram Image 4",
  },
  {
    id: 5,
    src: "/images/785fcf1e-32ba-49d4-a439-7d862718026f.jpeg",
    alt: "Instagram Image 5",
  },
  {
    id: 6,
    src: "/images/A4575548-F10E-4EF1-A139-4853CE7249AA.jpeg",
    alt: "Instagram Image 6",
  },
];

const InstagramSection = () => {
  return (
    <section className="w-full p-4">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[rgba(173,163,150,1)]">
        Our Instagram Content
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((image) => (
          <div key={image.id} className="w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
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
