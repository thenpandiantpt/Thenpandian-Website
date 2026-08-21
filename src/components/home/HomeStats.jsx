import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "64", suffix: "Looms", desc: "modern looms in operation — Sulzer and Airjet — powering high-capacity production." },
  { number: "380K", suffix: "m/mo", desc: "meters of fabric produced per month with precision and consistency." },
  { number: "160–360", suffix: "cm", desc: "fabric width range, offering versatile solutions for diverse client needs." },
  { number: "100%", suffix: "QC", desc: "multi-stage quality checks at every production stage ensuring consistent output." },
];

export default function HomeStats() {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl lg:text-6xl font-medium text-foreground">{stat.number}</span>
                <span className="text-lg text-primary font-medium">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
