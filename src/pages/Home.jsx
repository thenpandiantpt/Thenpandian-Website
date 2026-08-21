import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeBreaking from "../components/home/HomeBreaking";
import HomeServices from "../components/home/HomeServices";
import OverviewSections from "../components/home/OverviewSections";
import HomeStats from "../components/home/HomeStats";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeMaterialProgress from "../components/home/HomeMaterialProgress";
import HomePartners from "../components/home/HomePartners";
import CTASection from "../components/shared/CTASection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeBreaking />
      <HomeServices />
      <OverviewSections />
      <HomeStats />
      <HomeIndustries />
      <HomeMaterialProgress />
      <HomePartners />
      <CTASection />
    </div>
  );
}
