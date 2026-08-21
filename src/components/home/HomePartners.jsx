import React from "react";
import { motion } from "framer-motion";
import windSeaImg from "@/assests/Home/A_Partner_you_Can_Rely On/A partner you can rely.png";

export default function HomePartners() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-medium text-foreground leading-tight">
            A Partner you Can<br /><span className="italic">Rely On</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              label: "Mission",
              title: "Empower global brands with sustainable, high-performance textile solutions",
              desc: "To create high-performance fabrics and premium garments by combining advanced textile engineering, efficient manufacturing, skilled talent, and modern technology. We are committed to exceeding customer expectations through innovation, precision craftsmanship, prompt delivery, and continuous improvement, enabling global brands to deliver exceptional apparel to the modern world."
            },
            {
              label: "Vision",
              title: "Become the preferred manufacturing partner for premium apparel worldwide",
              desc: "To be the trusted global partner of choice in performance-driven apparel manufacturing, redefining modern formalwear through engineered fabrics, innovative textile solutions, and uncompromising quality. We strive to deliver excellence across men's, women's, and kids' fashion while ensuring consistent quality, reliability, and timely delivery for both domestic and international brands."
            },
            {
              label: "Core Values",
              title: "Excellence, Trust, Reliability, Sustainability and Innovation",
              desc: "At Thenpandiyan Textile India, our core values define who we are and how we create value for every stakeholder."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-border/30 rounded-xl p-8 hover:border-border/60 transition-colors"
            >
              <p className="text-primary text-xs tracking-widest font-medium mb-3">{item.label}</p>
              <h3 className="text-foreground text-lg font-medium mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src={windSeaImg} alt="Wind towers on sea" className="w-full h-64 lg:h-96 object-cover" />
        </div>
      </div>
    </section>
  );
}
