import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import futuristicImg from "@/assests/Home/Contact section/Contact.png";


export default function CTASection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
          {/* Left Side */}
          <div className="relative bg-card p-10 lg:p-16 flex flex-col justify-between min-h-[500px]">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-medium text-foreground leading-tight"
              >
                Looking for a<br />
                <span className="italic">Reliable</span><br />
                Textile Partner?
              </motion.h2>
            </div>
      
          </div>

          {/* Right Side */}
          <div className="relative">
            <img src={futuristicImg} alt="Future" className="w-full h-full object-cover min-h-[400px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-10 lg:p-16">
              <p className="text-foreground/80 text-sm leading-relaxed mb-8 max-w-sm">
                We deliver quality fabrics and garments backed by strong infrastructure and consistent processes. Contact us to explore how we can support your requirements.
              </p>
              <CTAButton to="/contact">Contact Us</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
