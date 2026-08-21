import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/shared/HeroSection";
import CTASection from "../components/shared/CTASection";

import heroImg from "@/assests/Infrastructure/Hero/Hero.png";
import machineImg from "@/assests/Infrastructure/Manufacturing Setup/Manufacturing setup.png";
import qualityImg from "@/assests/Infrastructure/Quality at every stage/Quality at every stage.png";

const machinery = [
  { model: "Sulzer Model P7100", qty: "32 looms", type: "Sulzer Looms" },
  { model: "Picanol Omni Plus Airjet", qty: "32 looms", type: "Airjet Looms" },
];

const qcSteps = [
  { num: "01", title: "Raw Material Inspection", desc: "Careful evaluation of incoming raw materials to ensure quality from the initial stage." },
  { num: "02", title: "Fit Sample Approval", desc: "Samples are reviewed and approved against client specifications before production begins." },
  { num: "03", title: "Pre-production Validation", desc: "All parameters are validated prior to full-scale production to prevent deviations." },
  { num: "04", title: "Final Product Quality Checks", desc: "Comprehensive inspection of finished products to confirm adherence to required standards." },
];

export default function Infrastructure() {
  return (
    <div>
      <HeroSection
        titleClassName="relative -top-32"
        image={heroImg}
        title1="ADVANCED"
        title2="INFRASTRUCTURE"
        description="Our infrastructure is powered by advanced machinery and a well-established production setup, enabling efficient and large-scale manufacturing. With modern looms and streamlined processes, we ensure precision, consistency and quality in every product."
      />

      {/* Manufacturing Setup */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="text-primary text-xs tracking-widest font-medium mb-3">MANUFACTURING SETUP</p>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
                64 Modern<br /><span className="italic">Looms in Operation</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                A combination of Sulzer and Airjet looms, enabling efficient and large-scale manufacturing with consistent quality output.
              </p>

              <div className="space-y-4">
                {machinery.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-border/30 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-foreground font-medium text-sm">{m.model}</p>
                        <p className="text-muted-foreground text-xs mt-1">{m.type}</p>
                      </div>
                      <span className="text-primary text-sm font-medium flex-shrink-0">{m.qty}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={machineImg} alt="Manufacturing machinery" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-8 sm:py-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            className="text-4xl lg:text-5xl font-medium text-foreground mb-8 sm:mb-12"
          >
            Production<br /><span className="italic">Capacity</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16 ">
            {[
              {
                number: "380,000",
                unit: "Meters / Month",
                desc: "Up to 380,000 meters of fabric produced per month, enabling large-scale order fulfillment on schedule."
              },
              {
                number: "160–360",
                unit: "cm Width Range",
                desc: "Fabric width ranging from 160 cm to 360 cm, supporting diverse client specifications and applications."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-border/30 rounded-xl p-10"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-medium text-foreground">{item.number}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{item.unit}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 sm:py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <p className="text-primary text-xs tracking-widest font-medium mb-3">OUR COMMITMENT TO QUALITY</p>
                <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
                  Quality<br /><span className="italic">at Every Stage</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                  Quality is maintained through a structured approach at every stage, ensuring consistency in output and adherence to required standards.
                </p>
              </motion.div>

              <div className="space-y-0">
                {qcSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-t border-border/30 py-6"
                  >
                    <div className="flex gap-6 items-start">
                      <span className="text-muted-foreground text-xs font-mono flex-shrink-0 mt-1">-{step.num}-</span>
                      <div>
                        <h4 className="text-foreground font-medium text-sm mb-2">{step.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={qualityImg} alt="Quality control" className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover lg:min-h-[400px]" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
