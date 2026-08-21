import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTASection from "../components/shared/CTASection";

const fabricTypes = [
  {
    num: "01",
    title: "Sheeting",
    desc: "Lightweight cotton fabrics ideal for bed linens, upholstery, and apparel applications. Available in plain weave with smooth finish.",
    tags: ["Cotton", "Plain Weave", "Soft Finish", "Versatile"]
  },
  {
    num: "02",
    title: "Canvas",
    desc: "Heavy-duty woven fabrics suitable for workwear, bags, and industrial applications. Highly durable and resistant to wear.",
    tags: ["Heavy-Duty", "Durable", "Work-Ready", "Industrial"]
  },
  {
    num: "03",
    title: "Satin",
    desc: "Smooth, lustrous fabrics with excellent drape, perfect for formal wear, evening gowns, and premium applications.",
    tags: ["Lustrous", "Premium", "Drape", "Formal"]
  },
  {
    num: "04",
    title: "Drill",
    desc: "Twill-woven fabrics with diagonal pattern, known for strength and durability. Ideal for trousers and workwear.",
    tags: ["Diagonal Weave", "Strong", "Trousers", "Workwear"]
  },
  {
    num: "05",
    title: "Twill",
    desc: "Fabrics with diagonal ribbed pattern offering durability and versatility. Suitable for casual and formal wear.",
    tags: ["Diagonal Pattern", "Versatile", "Durable", "Comfortable"]
  },
  {
    num: "06",
    title: "Gabardine",
    desc: "Tightly woven twill fabric with prominent diagonal lines. Excellent for suits, trousers, and professional attire.",
    tags: ["Tightly Woven", "Professional", "Structured", "Premium"]
  },
];

const fabricSpecs = [
  { spec: "Width Range", value: "160–360 cm" },
  { spec: "Monthly Capacity", value: "380K+ meters" },
  { spec: "Weave Types", value: "8+ types" },
  { spec: "Finishes Available", value: "Bleached, Dyed, Printed" },
];

export default function Fabric() {
  return (
    <div>
      <HeroSection
        image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=600&fit=crop"
        title1="PREMIUM"
        title2="FABRICS"
        subtitle="Diverse Woven Solutions for Every Need"
        description="We manufacture a comprehensive range of high-quality woven fabrics suitable for textile, apparel, and industrial applications."
      />

      {/* Fabric Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {fabricTypes.map((fabric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-border/30 py-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  <span className="text-muted-foreground text-sm font-mono flex-shrink-0">-{fabric.num}-</span>
                  <div className="flex-1">
                    <h3 className="text-foreground text-2xl font-medium mb-4">{fabric.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-6">{fabric.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {fabric.tags.map((tag, j) => (
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

      {/* Fabric Specifications */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground text-center">Manufacturing Specifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fabricSpecs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background rounded-lg border border-border/30 text-center"
              >
                <p className="text-muted-foreground text-sm font-medium mb-2">{item.spec}</p>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">Custom Fabric Solutions</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Beyond our standard fabric offerings, we specialize in custom solutions tailored to your specific requirements. Whether you need unique weave patterns, specialized finishes, or custom dimensions, our technical team can work with you to develop the perfect fabric for your application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Custom Weave", "Custom Width", "Custom Finish"].map((option, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-secondary/50 rounded-lg border border-border/30"
                >
                  <p className="text-foreground font-medium">{option}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
