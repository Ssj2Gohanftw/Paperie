import Image from "next/image";
const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Paperie, we are obsessed with great designs and impeccable
            quality to create the best experience for our customers. Our journey
            began with a simple idea: to transform everyday paper products into
            extraordinary works of art that bring joy and elegance to
            life&apos;s special moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <Image
              src="/images/about/02.jpg"
              alt="Paperie workshop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Crafted with Love</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2018, Paperie has grown from a small home studio to a
              beloved brand known for its attention to detail and commitment to
              quality. Every product that leaves our workshop is crafted with
              care, using only the finest materials sourced from sustainable
              suppliers.
            </p>
            <p className="text-gray-700">
              Our design team draws inspiration from nature, architecture, and
              timeless elegance to create stationery that stands out. We believe
              that paper products should not only be functional but also serve
              as keepsakes that capture memories for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StorySection;
