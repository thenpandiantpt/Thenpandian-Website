import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";

import heroImg from "../../assests/Home/Hero/Hero.png";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Advanced materials" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl lg:text-[7rem] font-normal tracking-tight text-foreground leading-none font-manrope"
        >
          Textile Excellence
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-[5rem] font-normal tracking-tight text-foreground leading-none italic font-manrope"
        >
          Reimagined for Global Markets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-foreground/70 text-sm md:text-base max-w-2xl leading-relaxed text-center"
        >
          Delivering premium loom-woven fabrics and engineered textiles that seamlessly blend technical innovation with refined craftsmanship for global markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <CTAButton to="/contact">Get in Touch</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
