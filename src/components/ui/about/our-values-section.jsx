import Icons from "./icons";
import { values ,colorClasses} from "@/data/about/org-data";
const OurValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div
                className={`w-16 h-16 ${colorClasses[value.iconColor].bg} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icons
                  className={`h-8 w-8 ${colorClasses[value.iconColor].text}`}
                  data={value.d}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurValuesSection;
