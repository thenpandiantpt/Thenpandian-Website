import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sheetinImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Sheetin.png";
import canvasImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Canvas.png";
import satinImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Satin.png";
import drillImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Drill.png";
import twillImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Twill.png";
import gabardineImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Gabardine.png";
import herringboneImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Herringbone.png";
import oxfordImg from "@/assests/Home/Versatile_Woven_Fabric_Solutions/Oxford.png";

const industries = [
  { name: "Sheeting", img: sheetinImg },
  { name: "Canvas", img: canvasImg },
  { name: "Satin", img: satinImg },
  { name: "Drill", img: drillImg },
  { name: "Twill", img: twillImg },
  { name: "Gabardine", img: gabardineImg },
  { name: "Herringbone", img: herringboneImg },
  { name: "Oxford", img: oxfordImg },
];

export default function HomeIndustries() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-medium text-foreground leading-tight">
            Versatile Woven<br /><span className="italic">Fabric Solutions</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-xl leading-relaxed">
            Designed to cater to the needs of both textile and garment industries with flexibility in customization across weave, width and finishing.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 lg:px-8 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 w-64 lg:w-72"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-foreground font-medium text-lg">{item.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6 flex gap-4">
          <button
            onClick={() => scroll(-1)}
            className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
