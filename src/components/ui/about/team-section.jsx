import Image from "next/image";
import { teamMembers } from "@/data/about/org-data";

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Founder
        </h2>

        {/* 
        Original grid: used for multiple members
        <div className="grid md:grid-cols-3 gap-8">
        */}

        {/* Modified grid: centers single member (e.g. Ratisha) */}
        <div
          className={`grid gap-8 ${
            teamMembers.length === 1 ? "justify-center" : "md:grid-cols-3"
          }`}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* 
              Original image container:
              <div className="relative w-48 h-48 mx-auto mb-4">
              */}

              {/* Modified image container: same, just clearer for centering */}
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
