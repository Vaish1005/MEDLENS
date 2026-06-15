import Navbar from "../components/common/Navbar";

import HeroSection from "../components/landing/HeroSection";
import MetricsSection from "../components/landing/MetricsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import SourcesSection from "../components/landing/SourcesSection";
import CTASection from "../components/landing/CTASection";
import WorkbenchPreview from "../components/landing/WorkbenchPreview";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />

      <HeroSection />

      <MetricsSection />

      <FeaturesSection />


      <WorkbenchPreview />

      <SourcesSection />

      <CTASection />

    </div>
  );
}