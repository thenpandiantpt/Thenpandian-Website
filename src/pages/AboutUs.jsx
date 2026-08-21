import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTASection from "../components/shared/CTASection";

import aboutHeroImg from "@/assests/About Us/Hero/Hero.png";

const managementDepartments = [
  { role: "Founder", desc: "Strategic Vision & Legacy" },
  { role: "Chief Executive Officer / Managing Director", desc: "Overall Operations & Growth" },
  { role: "Production Head", desc: "Manufacturing Operations & Efficiency" },
  { role: "Fabric Division Head", desc: "Weaving & Textile Innovation" },
  { role: "Garment Division Head", desc: "Apparel Manufacturing & Product Development" },
  { role: "Quality Control Head", desc: "Quality Assurance & Standards Compliance" },
  { role: "Sales & Export Head", desc: "Business Development & International Markets" },
  { role: "HR & Administration", desc: "People Development & Operations Support" },
  { role: "Finance", desc: "Financial Management & Strategic Planning" }
];

const leadershipPrinciples = [
  { title: "Integrity", desc: "Conducting business with total honesty, transparency, and ethical responsibility." },
  { title: "Innovation", desc: "Continuously improving textile engineering, weaving automation, and garment production." },
  { title: "Excellence", desc: "Striving for uncompromised manufacturing precision and high-grade product finish." },
  { title: "Responsibility", desc: "Empowering our workforce and integrating clean renewable energy into operations." }
];

export default function AboutUs() {
  return (
    <div>
      <HeroSection
        image={aboutHeroImg}
        title1="ABOUT"
        title2="THE COMPANY"
        subtitle="Where Heritage Meets Performance"
        description="Bridging traditional craftsmanship with state-of-the-art production to create world-class woven fabrics and performance apparel."
      />

      <div className="py-24 space-y-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section 1: About the Company */}
        <section id="about-the-company" className="scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl space-y-8">
            <div>
              <p className="text-primary text-xs tracking-widest font-medium mb-3">WHO WE ARE</p>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">About the Company</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Thenpandiyan Textile India (P) Ltd. is a fully integrated textile and apparel manufacturing enterprise. We combine heritage textile expertise with state-of-the-art automated production systems to deliver premium woven fabrics and performance garments to the world's most demanding brands.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-medium text-foreground mb-4">Our Journey</h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                What began as a vision in 2005 has evolved into a comprehensive textile ecosystem. Thenpandiyan Textile India has grown from a skilled weaving operation into a fully vertically integrated manufacturer—seamlessly connecting fiber to finished garment. Our commitment to innovation has transformed traditional textile craftsmanship into precision-engineered solutions that meet the rigorous demands of global brands.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Today, with manufacturing excellence at our core and a steadfast dedication to quality, we export premium fabrics and performance apparel to international markets, proving that heritage expertise and cutting-edge technology can coexist.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Vision & Mission */}
        <section id="vision-mission" className="pt-16 border-t border-border/30 scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs tracking-widest font-medium mb-3">OUR PURPOSE</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-12">Vision & Mission</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border/30 rounded-2xl p-8 lg:p-10 bg-secondary/10 hover:border-border/60 transition-colors">
                <span className="text-primary text-xs tracking-widest font-semibold block mb-3">VISION</span>
                <h3 className="text-2xl font-medium text-foreground mb-4">Our Vision</h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  To be the trusted global partner of choice in performance-driven apparel manufacturing, redefining modern formalwear through engineered fabrics, innovative textile solutions, and uncompromising quality. We strive to deliver excellence across men's, women's, and kids' fashion while ensuring consistent quality, reliability, and timely delivery for both domestic and international brands.
                </p>
              </div>

              <div className="border border-border/30 rounded-2xl p-8 lg:p-10 bg-secondary/10 hover:border-border/60 transition-colors">
                <span className="text-primary text-xs tracking-widest font-semibold block mb-3">MISSION</span>
                <h3 className="text-2xl font-medium text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  To create high-performance fabrics and premium garments by combining advanced textile engineering, efficient manufacturing, skilled talent, and modern technology. We are committed to exceeding customer expectations through innovation, precision craftsmanship, prompt delivery, and continuous improvement, enabling global brands to deliver exceptional apparel to the modern world.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Leadership Team */}
        <section id="leadership-team" className="pt-16 border-t border-border/30 scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs tracking-widest font-medium mb-3">EXECUTIVE GUIDANCE</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-12">Leadership Team</h2>

            {/* Bios */}
            <div className="space-y-12 max-w-4xl mb-16">
              <div className="border border-border/30 rounded-2xl p-8 lg:p-10 bg-secondary/10">
                <span className="text-primary text-xs tracking-widest font-semibold block mb-2">FOUNDER & VISIONARY</span>
                <h3 className="text-3xl font-medium text-foreground mb-4">Pandiyan</h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  Pandiyan established Thenpandiyan Textile India on a foundational belief: that India's textile heritage, combined with modern manufacturing discipline, could create exceptional products for the world. With deep roots in textile industry expertise, he envisioned a vertically integrated model that would give the company complete control over quality and innovation—from loom to finished garment.
                </p>
              </div>

              <div className="border border-border/30 rounded-2xl p-8 lg:p-10 bg-secondary/10">
                <span className="text-primary text-xs tracking-widest font-semibold block mb-2">MANAGING DIRECTOR & CEO</span>
                <h3 className="text-3xl font-medium text-foreground mb-4">Cibi Pandiyan</h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  As Chief Executive, Cibi Pandiyan leads the company's expansion into global markets while strengthening its operational foundation. With a focus on technology integration and process optimization, Cibi has positioned Thenpandiyan Textile India as a forward-thinking manufacturing partner capable of meeting the complex demands of international brands.
                </p>
              </div>
            </div>

            {/* Leadership Principles */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium text-foreground mb-8">Leadership Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadershipPrinciples.map((item, i) => (
                  <div key={i} className="border border-border/30 rounded-xl p-6 bg-background">
                    <h4 className="text-foreground font-semibold text-base mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Structure */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Management Structure</h3>
              <p className="text-muted-foreground text-sm mb-8">Our company structure is organized into specialized departments ensuring vertical efficiency:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {managementDepartments.map((dept, index) => (
                  <div key={index} className="border border-border/30 rounded-xl p-4 bg-secondary/10 flex flex-col justify-center">
                    <h4 className="text-foreground font-semibold text-sm">{dept.role}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{dept.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <CTASection />
    </div>
  );
}
