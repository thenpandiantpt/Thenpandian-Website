import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "../components/shared/HeroSection";

import heroImg from "@/assests/Contact Us/Hero/Hero.png";

const subjects = [
  "Fabric Enquiry",
  "Garment Manufacturing",
  "Custom Fabric Solutions",
  "Export & Business Collaboration",
  "Quality & Certifications",
  "Other"
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
      formData.append("from_name", "Thenpandian Textile Website");
      formData.append("subject", form.subject ? `Website Enquiry: ${form.subject}` : "New Website Enquiry");
      formData.append("title", "Contact Form Submission");
      
      formData.append("name", form.name);
      formData.append("email", form.email);
      if (form.phone) formData.append("phone", form.phone);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <HeroSection
        image={heroImg}
        title1="GET IN"
        title2="TOUCH"
        description="Connect with us for enquiries, business collaborations, or product-related information. We're ready to support your textile and garment requirements."
      />

      {/* Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground text-lg font-medium mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {submitted ? (
                <div className="border border-primary/30 rounded-xl p-10 text-center">
                  <h4 className="text-foreground text-xl font-medium mb-3">Thank you!</h4>
                  <p className="text-muted-foreground text-sm mb-6">We'll get back to you shortly.</p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-border/30 text-foreground"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 text-sm p-4 rounded-xl">
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label className="text-foreground/80 text-xs">Name *</Label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-secondary border-border/30 text-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-foreground/80 text-xs">Email *</Label>
                      <Input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-secondary border-border/30 text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground/80 text-xs">Phone Number</Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bg-secondary border-border/30 text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground/80 text-xs">Subject</Label>
                    <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                      <SelectTrigger className="bg-secondary border-border/30 text-foreground">
                        <SelectValue placeholder="Select Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground/80 text-xs">Message *</Label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-secondary border-border/30 text-foreground min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h4 className="text-foreground text-sm font-medium mb-6">Contact Information</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Thenpandian Textile India Pvt Ltd
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">thenpandiyantextile@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">+91 4286 286 259</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">+91 9442 228 659</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-foreground text-sm font-medium mb-6">Our Location</h4>
                <div className="space-y-8">
                  <div>
                    <p className="text-foreground/80 text-sm font-medium mb-2">Registered Office & Manufacturing Base</p>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        <p>1/185 Paramathy Road, Near SIDCO</p>
                        <p>Namakkal – 637001</p>
                        <p>Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden h-48 border border-border/30">
                    <iframe
                      src="https://maps.google.com/maps?q=1/185+Paramathy+Road,+Near+SIDCO,+Namakkal+-+637001,+Tamil+Nadu,+India&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Thenpandian Textile Location"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
