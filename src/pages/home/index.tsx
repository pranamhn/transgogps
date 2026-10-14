import React from "react";
import HeroSection from "./components/HeroSection";
import ShowcaseBoard from "./components/ShowcaseBoard";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import DevicesPreviewSection from "./components/DevicesPreviewSection";
import IndustriesSection from "./components/IndustriesSection";
import WorkflowSection from "./components/WorkflowSection";
import PricingPreviewSection from "./components/PricingPreviewSection";
import { CtaBanner } from "../../components/ui";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <ShowcaseBoard />
      <CoreFeaturesSection />
      <DevicesPreviewSection />
      <IndustriesSection />
      <WorkflowSection />
      <PricingPreviewSection />
      <CtaBanner />
    </div>
  );
}
