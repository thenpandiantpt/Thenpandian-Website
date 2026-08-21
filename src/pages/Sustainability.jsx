import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTASection from "../components/shared/CTASection";

const sustainabilityInitiatives = [
  {
    title: "Green Energy & Wind Power Integration",
    desc: "To reduce our carbon footprint, a significant portion of our manufacturing operations is powered by clean, renewable wind and solar energy.",
  },
  {
    title: "Eco-Friendly & Organic Sourcing",
    desc: "We prioritize raw materials certified by GOTS (Global Organic Textile Standard) and OEKO-TEX, ensuring products are free from toxic chemicals.",
  },
  {
    title: "Water Conservation & Waste Reduction",
    desc: "Our facility employs modern water recycling and waste management systems, minimizing water wastage and maximizing fabric cutting efficiencies.",
  }
];

const qualityProcesses = [
  { num: "01", title: "Raw Material Inspection", desc: "Rigorous inspection of incoming yarns and raw fibers prior to weaving." },
  { num: "02", title: "Manufacturing Quality Control", desc: "In-line monitoring during weaving and processing to maintain consistency." },
  { num: "03", title: "Fabric Testing & Validation", desc: "Comprehensive testing for strength, color fastness, shrinkage, and durability." },
  { num: "04", title: "Final Product Audit", desc: "Thorough 100% inspection before packaging to ensure global compliance." }
];

const complianceCertifications = [
  { name: "ISO 9001:2015", category: "Quality Management System" },
  { name: "OEKO-TEX Standard 100", category: "Eco & Product Safety" },
  { name: "GOTS Certification", category: "Global Organic Standards" },
  { name: "Fair Trade Practices", category: "Social & Ethical Labor" }
];

export default function Sustainability() {
  return (
    <div>
      <HeroSection
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop"
        title1="SUSTAINABILITY"
        title2="& QUALITY"
        subtitle="Responsible Manufacturing for a Better Future"
        description="At Thenpandiyan Textile India, our commitment to responsible business practices, quality excellence, and compliance shapes every decision."
      />

      <div className="py-24 space-y-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section 1: Sustainability */}
        <section id="sustainability" className="scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 01</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">Sustainability Initiatives</h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mb-12">
              We are committed to responsible business practices, empowering our workforce, investing in sustainable technologies, and creating a positive impact for our communities and the global textile industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sustainabilityInitiatives.map((item, i) => (
                <div key={i} className="border border-border/30 rounded-xl p-8 bg-secondary/10 hover:border-border/60 transition-colors">
                  <span className="text-primary text-sm font-mono font-bold block mb-3">0{i + 1}</span>
                  <h3 className="text-foreground text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 2: Quality */}
        <section id="quality" className="pt-16 border-t border-border/30 scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 02</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">Quality Standards</h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mb-12">
              We are uncompromising in our pursuit of manufacturing excellence, embedding quality into every process through continuous innovation and meticulous attention to detail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityProcesses.map((proc, i) => (
                <div key={i} className="border border-border/30 rounded-xl p-6 bg-secondary/10 hover:border-border/60 transition-colors">
                  <span className="text-primary text-xs font-mono tracking-widest font-bold block mb-2">-{proc.num}-</span>
                  <h4 className="text-foreground font-semibold text-base mb-2">{proc.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Compliance */}
        <section id="compliance" className="pt-16 border-t border-border/30 scroll-mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 03</p>
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">Compliance & Certifications</h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mb-12">
              Thenpandiyan maintains full adherence to international labor standards, environmental codes, product safety regulations, and export procedures for global markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceCertifications.map((cert, i) => (
                <div key={i} className="border border-border/30 rounded-xl p-6 bg-secondary/10 flex flex-col justify-between hover:border-border/60 transition-colors">
                  <div>
                    <div className="w-8 h-8 bg-foreground/10 rounded-full mb-4 flex items-center justify-center text-foreground font-bold text-xs">✓</div>
                    <h4 className="text-foreground font-semibold text-base mb-1">{cert.name}</h4>
                    <p className="text-muted-foreground text-xs">{cert.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      <CTASection />
    </div>
  );
}
