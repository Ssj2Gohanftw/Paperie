import AdditionalWorkSection from "@/components/ui/portfolio/additional-work-section";
import PortfolioIntroSection from "@/components/ui/portfolio/portfolio-intro-section";
import WorkTogetherSection from "@/components/ui/portfolio/ready-to-work-section";
const Portfolio = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <PortfolioIntroSection />
      <AdditionalWorkSection />
      <WorkTogetherSection />
    </div>
  );
};

export default Portfolio;
