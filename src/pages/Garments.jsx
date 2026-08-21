import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTAButton from "../components/shared/CTAButton";

import heroImg from "@/assests/Garments/Hero/Hero.png";
import garmentImg1 from "@/assests/Garments/What we offer/What we offer.png";
import garmentImg2 from "@/assests/Garments/Manufacturing Excellence/Manufacturing Excellence.png";
import globalImg from "@/assests/Garments/Global Presence_/Global Presence.png";

const offerings = [
  "Men's Wear",
  "Women's Wear",
  "Woven Shirts",
  "Trousers & Bottom Wear",
  "Dresses & Ethnic Wear",
];

const strengths = [
  { title: "Strong Backward Integration", desc: "From fabric to garment — seamless integration across the entire production chain." },
  { title: "Skilled Workforce", desc: "Industry expertise with a focus on design, fit and finish at every stage." },
  { title: "Bulk Export Capability", desc: "Ability to handle large-volume export orders with consistent quality and timely delivery." },
  { title: "Competitive Pricing", desc: "Global quality standards at competitive pricing, making us a preferred export partner." },
];

const excellence = [
  { num: "01", title: "Pattern Making & Fit Engineering", desc: "Developing precise CAD patterns to ensure optimum fit, grading, and fabric consumption efficiency." },
  { num: "02", title: "Precision Layering & Cutting", desc: "Automated fabric spreading and cutting to ensure dimensionally accurate panels ready for assembly." },
  { num: "03", title: "Skilled Line Assembly & Sewing", desc: "Experienced tailors executing fine stitching, seam reinforcements, and consistent assembly of components." },
  { num: "04", title: "Detailing & Trim Checking", desc: "Inspection of zippers, buttons, and labels to ensure correct placement and robust attachment." },
  { num: "05", title: "High-Pressure Steam Pressing", desc: "Final steam pressing and conditioning of garments to give them a premium, wrinkle-free finish." },
  { num: "06", title: "In-line & End-of-line AQL Audits", desc: "Rigorous measurement and appearance checks throughout the stitching lines to prevent any defect escapes." },
];

export default function Garments() {
  return (
    <div>
      <HeroSection
        image={heroImg}
        title1="EXCELLENCE WOVEN"
        title2="INTO EVERY GARMENT"
        description="Our garment division builds on a strong textile foundation, transforming quality fabrics into well-finished apparel. With a focus on consistency and product standards, we cater to diverse requirements across the textile and apparel industry."
      />

      {/* Overview + What We Offer */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-xs tracking-widest font-medium mb-4">OVERVIEW</p>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
                What We<br /><span className="italic">Offer</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                Our garment division builds on our strong textile foundation, transforming premium fabrics into high-quality finished apparel. With a focus on global standards, we cater to diverse markets with precision and consistency.
              </p>
              <div className="space-y-3">
                {offerings.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 border-b border-border/20 pb-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={garmentImg1} alt="Garments" className="w-full h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-medium text-foreground mb-16"
          >
            Our<br /><span className="italic">Strengths</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border/30 rounded-xl p-8"
              >
                <h4 className="text-foreground font-medium text-sm mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 space-y-6"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={garmentImg2}
                  alt="Manufacturing excellence"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[340px] object-cover"
                />
              </div>
              {/* <div className="rounded-2xl overflow-hidden hidden sm:block">
                <img
                  src={garmentImg1}
                  alt="Garment production"
                  className="w-full h-[220px] sm:h-[260px] lg:h-[240px] object-cover"
                />
              </div> */}
            </motion.div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-medium text-foreground mb-12"
              >
                Manufacturing<br /><span className="italic">Excellence</span>
              </motion.h2>

              <div className="space-y-0">
                {excellence.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-t border-border/30 py-6"
                  >
                    <div className="flex gap-6 items-start">
                      <span className="text-muted-foreground text-xs font-mono mt-1 flex-shrink-0">-{item.num}-</span>
                      <div>
                        <h4 className="text-foreground font-medium text-sm mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={globalImg} alt="Global presence" className="w-full h-[400px] lg:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent flex items-center">
              <div className="p-8 lg:p-16 max-w-xl">
                <p className="text-primary text-xs tracking-widest font-medium mb-4">GLOBAL PRESENCE</p>
                <p className="text-foreground/90 text-base lg:text-lg leading-relaxed font-medium mb-8">
                  We cater to international markets with a strong export network, delivering garments that meet diverse style preferences and compliance standards across regions.
                </p>
                <div className="flex gap-3 flex-wrap mb-8">
                  {["Woven Shirts", "Men's Wear", "Women's Wear", "Ethnic Wear"].map((m) => (
                    <span key={m} className="px-3 py-1.5 bg-secondary/80 rounded-full text-foreground/70 text-xs">{m}</span>
                  ))}
                </div>
                <CTAButton to="/contact">Get in Touch</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/30 bg-secondary/30 overflow-hidden"
          >
            <div className="px-8 py-12 lg:px-16 lg:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-primary text-xs tracking-widest font-medium mb-4">MARKET REACH</p>
                  <h2 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                    Market<br /><span className="italic">Reach</span>
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mt-6 max-w-xl">
                    We cater to a range of market requirements with a reliable supply approach, delivering garments that meet varying style and quality expectations.
                  </p>
                </div>

                <div className="lg:pt-2">
                  <div className="rounded-xl border border-border/30 bg-background/40 px-6 py-6">
                    <p className="text-foreground text-base lg:text-lg font-medium leading-relaxed">
                      Looking for a reliable garment manufacturing partner?
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <CTAButton to="/contact">Get in Touch</CTAButton>
                      <span className="text-muted-foreground text-sm"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
