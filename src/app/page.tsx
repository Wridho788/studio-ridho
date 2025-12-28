import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import VisualBreak from "@/components/VisualBreak";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <VisualBreak height="medium" />
      <WorkSection />
      <ProcessSection />
      <VisualBreak height="small" />
      <CTASection />
      <Footer />
    </main>
  );
}
