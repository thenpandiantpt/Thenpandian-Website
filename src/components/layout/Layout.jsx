import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  useEffect(() => {
    const measurementId = "G-LVWJLVWW4R";

    // Prevent duplicate Google Analytics script
    if (!document.getElementById("google-analytics")) {
      const script = document.createElement("script");
      script.id = "google-analytics";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];

    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
