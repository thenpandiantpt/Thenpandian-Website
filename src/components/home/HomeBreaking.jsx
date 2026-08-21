import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import solarImg from "@/assests/Home/Breaking/Image 1.png";
import ceramicImg from "@/assests/Home/Breaking/Image 2.png";

export default function HomeBreaking() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[500px]"
          >
            <img src={solarImg} alt="Scientist and solar panels" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                What began as a vision in 2005 has evolved into a comprehensive textile ecosystem.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                Thenpandiyan Textile India has grown from a skilled weaving operation into a fully vertically integrated manufacturer—seamlessly connecting fiber to finished garment.
              </p>
              <div className="mt-6">
                <CTAButton to="/about">Discover Our Story</CTAButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[500px]" 
          >
            <img src={ceramicImg} alt="Ceramic components" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                Led by visionary founder Pandiyan, who pioneered the company’s vertical integration model.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                Today, under the expanded leadership team, we remain steadfast in our mission to empower global brands with sustainable, high-performance textile solutions while pursuing a vision of becoming the preferred manufacturing partner for premium apparel worldwide.
              </p>
              <div className="mt-6">
                <CTAButton to="/about" variant="outline">Meet the Leadership</CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
