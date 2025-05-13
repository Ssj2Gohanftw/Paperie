// import ContactSection from "@/components/ui/about/contact-cta-section";
import HeroSection from "@/components/ui/about/hero-section";
import OurValuesSection from "@/components/ui/about/our-values-section";
import StorySection from "@/components/ui/about/story-section";
import TeamSection from "@/components/ui/about/team-section";

const AboutPage = () => {
  return (
    <div className="about-page">
      <HeroSection />
      <StorySection />
      <OurValuesSection />
      <TeamSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default AboutPage;
