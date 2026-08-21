import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="text-foreground font-bold text-xl tracking-widest italic">
              THENPANDIAN
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Thenpandian Textile India Pvt Ltd — trusted manufacturer and exporter of premium woven fabrics and garments for global markets.
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-widest font-medium mb-4">COMPANY</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about-us" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</Link>
              <Link to="/sustainability" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Sustainability</Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-widest font-medium mb-4">SERVICES</h4>
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-muted-foreground text-sm hover:text-foreground transition-colors">All Services</Link>
              <Link to="/infrastructure" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Infrastructure</Link>
              <Link to="/fabric" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Fabric Manufacturing</Link>
              <Link to="/garments" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Garment Manufacturing</Link>
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-xs tracking-widest font-medium mb-4">CONTACT INFO</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <p>1/185 Paramathy Road, Near SIDCO</p>
              <p>Namakkal – 637001, Tamil Nadu, India</p>
              <p>thenpandiyantextile@gmail.com</p>
              <p>+91 4286 286 259</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} Thenpandian Textile India Pvt Ltd. All rights reserved.
            <span className="mx-2">|</span>
            Developed by{" "}
            <a
              href="https://dezprox.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              dezprox
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
