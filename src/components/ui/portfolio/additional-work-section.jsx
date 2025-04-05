import Image from "next/image";
import { additionalWork } from "@/data/portfolio/events";
import Link from "next/link";
const AdditionalWorkSection = () => {
  return (
    <div className="w-screen bg-[#EDE6DF] mt-32 py-16 relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-[36px]  uppercase tracking-widest font-serif">
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
              <h4 className="text-[18px] leading-tight font-serif  uppercase tracking-wide">
                {work.name}
              </h4>
              <Link
                href={work.link}
                className="text-[12px] font-semibold tracking-widest  uppercase inline-block mt-2 border-b border-gray-400 pb-1 hover:text-black"
              >
                View The Gallery
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdditionalWorkSection;
