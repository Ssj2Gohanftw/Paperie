import Image from "next/image";
import Link from "next/link";

const WorkTogetherSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative flex justify-center">
        <div className="w-[350px] h-[450px] relative">
          <Image
            src="/images/wedding.png"
            alt="Working Together"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="absolute top-[0%] left-[-100px] w-[200px] h-[250px]">
          <Image
            src="/images/wedding.png"
            alt="Details"
            fill
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      <div className="text-left">
        <p className="text-sm uppercase tracking-widest text-[#A79C92] mb-2">
          You Love Our Portfolio And You&apos;re
        </p>
        <h2 className="text-[42px] text-[#A79C92] font-serif leading-tight">
          Ready to Work <br /> Together?
        </h2>
        <p className="text-lg text-gray-600 mt-4 mb-8 max-w-lg">
          Whether you&apos;ve been dreaming about this day for years or have no
          idea where to begin, we&apos;d love to connect and begin the
          collaborative process of crafting meaningful invitations completely
          unique to you.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-gray-500 text-gray-700 font-semibold text-[14px] uppercase tracking-widest px-6 py-3 rounded-full transition duration-300 hover:bg-[#A79C92] hover:text-white"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
};
export default WorkTogetherSection;
