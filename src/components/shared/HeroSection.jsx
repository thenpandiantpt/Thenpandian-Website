import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({ image, title1, title2, subtitle, description, topAlign, titleClassName }) {
  return (
    <section className={`relative min-h-screen flex overflow-hidden ${topAlign ? "items-start" : "items-end"}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${topAlign ? "bg-gradient-to-b from-background via-background/60 to-background/30" : "bg-gradient-to-t from-background via-background/60 to-background/30"}`} />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full ${topAlign ? "pt-28 sm:pt-40 pb-16" : "pb-24 pt-40"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${topAlign ? "items-start" : "items-end"}`}>
          <div className={titleClassName}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-foreground leading-none font-manrope"
            >
              {title1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-foreground leading-none italic font-manrope"
            >
              {title2}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-foreground/80 text-sm md:text-base font-medium mt-8 tracking-wide"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:text-right"
            >
              <div className="w-16 h-px bg-foreground/30 mb-6 lg:ml-auto" />
              <p className="text-foreground/70 text-sm leading-relaxed max-w-md lg:ml-auto">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
