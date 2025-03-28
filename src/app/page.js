import Image from "next/image";
import EventSection from "@/components/ui/event-section";
import AboutSection from "@/components/ui/about-section";
import Testimonials from "@/components/ui/client-testimonials";
import InstagramSection from "@/components/ui/instagram-section";
import SampleCards from "@/components/ui/sample-section";
import IntroSection from "@/components/ui/intro-section";
import { Separator } from "@/components/ui/separator";
const Home = () => {
  return (
    <div>
      <SampleCards />
      <div className="flex items-center justify-center flex-col">
        <IntroSection />
        <Separator />
        <AboutSection />
        <Separator />
        <Testimonials />
        <Separator />
        <EventSection />
        <Separator />
        <InstagramSection />
      </div>
    </div>
  );
};
export default Home;
