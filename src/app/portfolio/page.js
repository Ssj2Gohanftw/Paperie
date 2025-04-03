"use client";
import Image from "next/image";
import Link from "next/link";

const weddings = [
  {
    id: 1,
    name: "Paulina & Markus' New York City Wedding",
    image: "/images/wedding.png",
    slug: "paulina-markus", // Use slug instead of hardcoded link
  },
  {
    id: 2,
    name: "Victoria & Ryan’s Sicily Wedding",
    image: "/images/wedding.png",
    slug: "victoria-ryan",
  },
  {
    id: 3,
    name: "Robyn & Brad’s Shadowbrook Wedding",
    image: "/images/wedding.png",
    slug: "robyn-brad",
  },
  {
    id: 4,
    name: "Jamie & Chris’ Cedar Lakes Estate Wedding",
    image: "/images/wedding.png",
    slug: "jamie-chris",
  },
];

const additionalWork = [
  {
    id: 1,
    name: "Custom Design",
    image: "/images/wedding.png",
    link: "#",
  },
  {
    id: 2,
    name: "Fine Art Design",
    image: "/images/wedding.png",
    link: "#",
  },
  {
    id: 3,
    name: "Wedding Day Details",
    image: "/images/wedding.png",
    link: "#",
  },
  {
    id: 4,
    name: "Other Events & Stationery",
    image: "/images/wedding.png",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      {/* Wedding Section */}
      <h1 className="text-4xl font-serif mb-4 text-[#A79C92]">
        Browse Our <span className="italic">Favorite</span> Weddings
      </h1>
      <p className="text-lg text-[#A79C92] mb-8 max-w-2xl mx-auto">
        Explore how we have worked with couples to bring their signature wedding branding to life throughout their wedding stationery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {weddings.map((wedding, index) => (
          <div key={wedding.id} className={`text-center mx-auto w-full max-w-[350px] ${index % 2 !== 0 ? 'mt-24' : ''}`}>
            <Image src={wedding.image} alt={wedding.name} width={350} height={450} className="mx-auto mb-4" />
            <h2 className="text-[20px] leading-tight font-serif text-[#A79C92] uppercase tracking-wide max-w-[280px] mx-auto">
              {wedding.name}
            </h2>
            <Link href={`/gallery/${wedding.slug}`} className="text-[12px] font-semibold tracking-widest text-[#A79C92] uppercase inline-block mt-2 border-b border-gray-400 pb-1 hover:text-black">
              View The Gallery
            </Link>
          </div>
        ))}
      </div>

      {/* Additional Work Section */}
      <div className="w-screen bg-[#EDE6DF] mt-32 py-16 relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-[36px] text-[#A79C92] uppercase tracking-widest font-serif">
            Additional Work
          </h3>
          <div className="border-t border-[#A79C92] w-24 mx-auto mt-2 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {additionalWork.map((work) => (
              <div
                key={work.id}
                className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={work.image}
                  alt={work.name}
                  width={250}
                  height={300}
                  className="mx-auto mb-4"
                />
                <h4 className="text-[18px] leading-tight font-serif text-[#A79C92] uppercase tracking-wide">
                  {work.name}
                </h4>
                <a href={work.link} className="text-[12px] font-semibold tracking-widest text-[#A79C92] uppercase inline-block mt-2 border-b border-gray-400 pb-1 hover:text-black">
                  View The Gallery
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Work Together Section */}
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left - Images */}
        <div className="relative flex justify-center">
          {/* Large Image */}
          <div className="w-[350px] h-[450px] relative">
            <Image 
              src="/images/wedding.png" 
              alt="Working Together"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Small Image - Positioned */}
          <div className="absolute top-[0%] left-[-100px] w-[200px] h-[250px]">
            <Image 
              src="/images/wedding.png" 
              alt="Details"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="text-left">
          <p className="text-sm uppercase tracking-widest text-[#A79C92] mb-2">
            You Love Our Portfolio And You're
          </p>
          <h2 className="text-[42px] text-[#A79C92] font-serif leading-tight">
            Ready to Work <br /> Together?
          </h2>
          <p className="text-lg text-gray-600 mt-4 mb-8 max-w-lg">
            Whether you've been dreaming about this day for years or have no idea where to begin, 
            we'd love to connect and begin the collaborative process of crafting meaningful invitations completely unique to you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block border border-gray-500 text-gray-700 font-semibold text-[14px] uppercase tracking-widest px-6 py-3 rounded-full transition duration-300 hover:bg-[#A79C92] hover:text-white"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
