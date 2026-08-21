import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assests/logo/Actual logo.svg";
import CTAButton from "../shared/CTAButton";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },


  { 
    label: "Services", 
    path: "/services",
    children: [
      { label: "Infrastructure", path: "/infrastructure" },
      { label: "Garment Manufacturing", path: "/garments" },
      { label: "Fabric Manufacturing", path: "/fabric" },
    ]
  },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMobileSubmenu(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/30" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Thenpandiyan Logo" className="h-[60px] lg:h-[80px] mt-3 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((link, idx) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive = location.pathname === link.path || (hasChildren && link.children.some(c => location.pathname === c.path));
            return (
              <div
                key={link.label}
                className="relative py-6"
                onMouseEnter={() => hasChildren && setHoveredIndex(idx)}
                onMouseLeave={() => hasChildren && setHoveredIndex(null)}
              >
                <Link
                  to={link.path}
                  className={`text-xs tracking-wider font-medium transition-colors hover:text-foreground flex items-center gap-1 ${
                    isActive ? "text-foreground font-semibold" : "text-foreground/60"
                  }`}
                >
                  {link.label}
                  {hasChildren && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredIndex === idx ? "rotate-180" : ""}`} />}
                </Link>

                {hasChildren && (
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-background/95 backdrop-blur-md border border-border/30 rounded-xl shadow-xl overflow-hidden py-2 z-50"
                      >
                        {link.children.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.path}
                            className={`block px-4 py-2.5 text-[10px] tracking-wider text-left transition-colors hover:bg-secondary/60 hover:text-foreground ${
                              location.pathname === subLink.path || (location.hash && subLink.path.includes(location.hash)) ? "text-foreground font-semibold" : "text-foreground/70"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        <CTAButton to="tel:+914286286259" className="hidden lg:flex">Call Us</CTAButton>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/30 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((link, idx) => {
                const hasChildren = link.children && link.children.length > 0;
                const isSubmenuOpen = activeMobileSubmenu === idx;
                const isActive = location.pathname === link.path || (hasChildren && link.children.some(c => location.pathname === c.path));
                return (
                  <div key={link.label} className="w-full">
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => setActiveMobileSubmenu(isSubmenuOpen ? null : idx)}
                          className={`w-full flex items-center justify-between py-2 text-sm tracking-wider font-medium transition-colors text-left ${
                            isActive ? "text-foreground font-semibold" : "text-foreground/60"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSubmenuOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 flex flex-col gap-2 overflow-hidden mt-1 border-l border-border/20"
                            >
                              {link.children.map((subLink) => (
                                <Link
                                  key={subLink.label}
                                  to={subLink.path}
                                  className={`py-2 text-xs tracking-wider transition-colors ${
                                    location.pathname === subLink.path ? "text-foreground font-semibold" : "text-foreground/50"
                                  }`}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block py-2 text-sm tracking-wider font-medium transition-colors ${
                          location.pathname === link.path ? "text-foreground font-semibold" : "text-foreground/60"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


