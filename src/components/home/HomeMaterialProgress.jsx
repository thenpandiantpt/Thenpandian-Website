import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import surgeryImg from "@/assests/Home/Achieving_Textile_Excellence/Achieving_Textile_Excellence.png";
import drawingImg from "@/assests/Home/Advanced_Weaving_Infrastructure/Advanced_Weaving_Infrastructure.png";

export default function HomeMaterialProgress() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card - Sustainability Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[500px]"
          >
            <img src={surgeryImg} alt="Sustainability and clean energy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12">
              <p className="text-primary text-xs tracking-widest font-medium mb-3">OUR RESPONSIBILITY</p>
              <h2 className="text-3xl lg:text-5xl font-medium text-foreground leading-tight">
                Sustainability<br /><span className="italic">& Green Energy</span>
              </h2>
              <p className="text-foreground/75 text-sm mt-4 max-w-md leading-relaxed">
                We integrate clean wind and solar energy into our manufacturing, prioritizing OEKO-TEX certified and organic fabric sourcing with water conservation.
              </p>
              <div className="mt-6">
                <CTAButton to="/sustainability">Discover Our Initiatives</CTAButton>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Why choose us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[500px]"
          >
            <img src={drawingImg} alt="Technical drawing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <p className="text-muted-foreground text-xs tracking-widest mb-2">What Sets Us Apart:</p>
              <p className="text-primary text-xs tracking-wider mb-4">01/06</p>
              <h3 className="text-3xl font-medium text-foreground">
                Advanced Weaving Infrastructure<br /><span className="italic">with Modern Looms</span>
              </h3>
              <ul className="text-foreground/70 text-sm mt-4 space-y-2 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Consistent quality backed by multi-stage quality checks
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  High production capacity ensuring timely delivery
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Customization based on client requirements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Strong presence in export operations with consistent delivery standards
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Focused on efficiency, consistency and adaptability across all operations
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
