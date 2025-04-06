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
              With a passion for sophisticated design and love for beautiful
              paper, Ratisha started Paperie-Goa in the year 2017. From
              conducting consultations to understanding trends to memorising
              etiquette, she says she learned so much in these years. Her
              attention to detail and commitment to quality have helped her
              build a strong reputation. Ratisha believes that a wedding
              invitation is more than just paper—it reflects the couple&apos;s
              style and sets the tone for their wedding. Her dedication has made
              her a well-known name in Goa&apos;s wedding industry.
            </p>
            <p className="text-gray-700">
              Ratisha's design process ensures each wedding invitation is both
              perfect and personal. It starts with a consultation to gather
              details like the date, quantity, and the couple&apos;s
              vision—including colors and design preferences. She prefers
              in-person meetings to better understand their style. While Ratisha
              handles design, printing, and coordination, her sisters and mother
              help assemble the invitations, creating beautiful pieces that
              reflect each couple&apos;s unique story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StorySection;
