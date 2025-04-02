import HeroBanner from "@/components/ui/hero-banner";

const AboutPage = () => {
  return (
    <div>
      <HeroBanner
        title="About Us"
        imageurl="/images/about/invitation.jpeg"
        description="Discover our passion for exquisite design and unmatched quality."
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg">
          At Paperie we are obsessed with great designs with impeccable quality
          to create the best experience for our customers
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
