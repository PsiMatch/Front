import HeroSection from "@/components/heroSection";
import FeaturesSection from "@/components/featuresSection";
import HowItWorks from "@/components/howItWorks";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/ctaSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </div>
  );
}