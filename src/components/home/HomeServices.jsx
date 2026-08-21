import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Fabric Manufacturing",
    desc: "We manufacture high-quality woven fabrics in a wide range of weaves including sheeting, canvas, satin, drill, twill, gabardine, herringbone and oxford, suitable for diverse textile and garment applications.",
    to: "/services"
  },
  {
    num: "02",
    title: "Fabric Processing",
    desc: "Our fabrics are available in bleached, dyed, and printed forms, prepared based on specific order requirements to ensure flexibility and timely delivery.",
    to: "/services"
  },
  {
    num: "03",
    title: "Custom Fabric Solutions",
    desc: "We offer customization in fabric width, weave, and finish and also facilitate sourcing and importing fabrics based on buyer requirements.",
    to: "/services"
  },
  {
    num: "04",
    title: "Garment Manufacturing",
    desc: "We produce woven garments including shirts, trousers, dresses and ethnic wear, catering to international markets with a focus on quality and consistency.",
    to: "/garments"
  },
  {
    num: "05",
    title: "Export Support",
    desc: "With established capabilities, we support export requirements with reliable supply and adherence to quality and compliance standards.",
    to: "/contact"
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-medium text-foreground mb-16"
        >
          What<br /><span className="italic">We Offer</span>
        </motion.h2>

        <div className="space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={s.to}
                className="group block border-t border-border/30 py-8 hover:bg-secondary/30 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                  <span className="text-muted-foreground text-sm font-mono">- {s.num} -</span>
                  <h3 className="text-foreground text-xl font-medium flex-shrink-0 lg:w-72">{s.title}</h3>

                </div>
                <p className="text-muted-foreground text-sm mt-3 lg:ml-[calc(theme(spacing.14)+theme(spacing.72))] leading-relaxed max-w-xl">
                  {s.desc}
                  <br />
                  <div className="flex items-center gap-2 mt-3 text-primary text-sm">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
