import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "A vertically integrated textile manufacturer specializing in premium loom-woven fabrics and performance apparel.",
  "We combine heritage textile expertise with state-of-the-art automated production systems.",
  "We deliver engineered textiles and athleisure formal wear that seamlessly blend technical innovation with refined craftsmanship.",
  "Our commitment to innovation has transformed traditional textile craftsmanship into precision-engineered solutions that meet the rigorous demands of global brands.",
];

const clientSegments = [
  {
    title: "International Apparel Brands",
    desc: "We supply premium woven fabrics and finished garments to leading global fashion labels, specializing in athleisure, performance wear, and premium formal attire.",
  },
  {
    title: "Institutional & Workwear Buyers",
    desc: "Our durable sheeting, canvas, and twill fabrics are the preferred choice for heavy-duty corporate uniforms, medical apparel, and industrial workwear worldwide.",
  },
  {
    title: "Global Fabric Importers & Sourcing Agencies",
    desc: "We act as a reliable production base for international sourcing agents who demand adherence to strict compliance parameters and high-capacity manufacturing outputs.",
  }
];

export function CompanyOverviewSection() {
  return (
    <section id="company-overview" className="scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
        <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 01</p>
        <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-8">Company Overview</h2>
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            Founded in 2005, Thenpandiyan Textile India (P) Ltd. has established itself as a vertically integrated textile manufacturer specializing in premium loom-woven fabrics and performance apparel. We deliver engineered textiles and athleisure formal wear that seamlessly blend technical innovation with refined craftsmanship, serving leading global brands and discerning institutional buyers.
          </p>
          <p>
            What began as a vision in 2005 has evolved into a comprehensive textile ecosystem. Thenpandiyan Textile India has grown from a skilled weaving operation into a fully vertically integrated manufacturer—seamlessly connecting fiber to finished garment. Our commitment to innovation has transformed traditional textile craftsmanship into precision-engineered solutions that meet the rigorous demands of global brands.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export function KeyHighlightsSection() {
  return (
    <section id="key-highlights" className="pt-16 border-t border-border/30 scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 02</p>
        <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-12">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((point, index) => (
            <div key={index} className="border border-border/30 rounded-xl p-8 bg-secondary/10 hover:border-border/60 transition-colors">
              <span className="text-primary text-sm font-mono font-bold block mb-3">0{index + 1}</span>
              <p className="text-foreground/80 text-base leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function ClienteleSection() {
  return (
    <section id="clientele" className="pt-16 border-t border-border/30 scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-primary text-xs tracking-widest font-medium mb-3">SECTION 03</p>
        <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">Clientele</h2>
        <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mb-12">
          We serve leading global brands and discerning institutional buyers, delivering premium fabrics and performance apparel to international markets. Our clients rely on our operational transparency, ethical manufacturing base, and scalable output capacity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientSegments.map((segment, i) => (
            <div key={i} className="border border-border/30 rounded-xl p-8 bg-secondary/10 hover:border-border/60 transition-colors">
              <span className="text-primary text-xs font-mono tracking-widest font-semibold block mb-3">SEGMENT 0{i + 1}</span>
              <h3 className="text-foreground text-xl font-medium mb-3">{segment.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{segment.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function OverviewSections() {
  return (
    <div className="py-8 space-y-24 max-w-7xl mx-auto px-6 lg:px-8">
      <CompanyOverviewSection />
      <KeyHighlightsSection />
      <ClienteleSection />
    </div>
  );
}
