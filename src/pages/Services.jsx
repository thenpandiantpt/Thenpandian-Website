import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTASection from "../components/shared/CTASection";

import heroImg from "@/assests/Service/Hero/hero.png";
import fabricImg from "@/assests/Service/Section 2/image 1.png";
import garmentImg from "@/assests/Service/Section 2/Image 2.png";

const services = [
  {
    num: "01",
    title: "Fabric Manufacturing",
    desc: "We manufacture high-quality woven fabrics in a wide range of weaves including sheeting, canvas, satin, drill, twill, gabardine, herringbone and oxford, suitable for diverse textile and garment applications.",
    tags: ["Sheeting", "Canvas", "Satin", "Drill", "Twill", "Gabardine", "Herringbone", "Oxford"]
  },
  {
    num: "02",
    title: "Fabric Processing",
    desc: "Our fabrics are available in bleached, dyed, and printed forms, prepared based on specific order requirements to ensure flexibility and timely delivery.",
    tags: ["Bleached", "Dyed", "Printed"]
  },
  {
    num: "03",
    title: "Custom Fabric Solutions",
    desc: "We offer customization in fabric width, weave, and finish and also facilitate sourcing and importing fabrics based on buyer requirements.",
    tags: ["Custom Width", "Custom Weave", "Custom Finish", "Sourcing & Import"]
  },
  {
    num: "04",
    title: "Garment Manufacturing",
    desc: "We produce woven garments including shirts, trousers, dresses and ethnic wear, catering to international markets with a focus on quality and consistency.",
    tags: ["Shirts", "Trousers", "Dresses", "Ethnic Wear"]
  },
  {
    num: "05",
    title: "Export Support",
    desc: "With established capabilities, we support export requirements with reliable supply and adherence to quality and compliance standards.",
    tags: ["Reliable Supply", "Quality Compliance", "Established Capabilities"]
  },
];

export default function Services() {
  return (
    <div>
      <HeroSection
        image={heroImg}
        title1="COMPREHENSIVE"
        title2="SOLUTIONS"
        subtitle="Textile & Garment Solutions for Global Markets"
        description="We offer a complete range of textile and garment solutions supported by strong manufacturing capabilities and structured processes."
      />

      {/* Services List */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-border/30 py-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  <span className="text-muted-foreground text-sm font-mono flex-shrink-0">-{s.num}-</span>
                  <div className="flex-1">
                    <h3 className="text-foreground text-2xl font-medium mb-4">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-6">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1.5 bg-secondary rounded-full text-foreground/70 text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two image cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-64 lg:h-80"
            >
              <img src={fabricImg} alt="Fabric manufacturing" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-64 lg:h-80"
            >
              <img src={garmentImg} alt="Garment manufacturing" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
