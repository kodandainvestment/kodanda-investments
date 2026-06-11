"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import Navbar from "../CommonComp/Navbar";
import Lightfall from "../Animations/Lightfall";

const contactInfo = [
  { icon: <Phone size={22} />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon – Fri, 9am – 6pm" },
  { icon: <Mail size={22} />, title: "Email Us", detail: "hello@kodandainvestments.com", sub: "We reply within 24 hours" },
  { icon: <MapPin size={22} />, title: "Visit Us", detail: "Indore, MP", sub: "India – 500081" },
];

const inputStyle = {
  width: "100%",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: "12px 16px",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const focus = (e) => (e.currentTarget.style.borderColor = "#32E1FC");
  const blur = (e) => (e.currentTarget.style.borderColor = "#e5e7eb");

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden" style={{ background: "#000000", minHeight: "600px" }}>
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <Lightfall
            colors={["#A6C8FF", "#ffffff", "#006aff"]}
            backgroundColor="#000814"
            speed={0.5}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={1}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={1}
          />
        </div>
        <Navbar />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(166,200,255,0.15)", color: "#A6C8FF" }}>Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: "#ffffff" }}>Let's Start a <br /><span style={{ color: "#A6C8FF" }}>Conversation</span></h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>Whether you're a startup seeking funding or a partner looking to collaborate — we'd love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfo.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#32E1FC")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#f3f4f6")}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(50,225,252,0.15)", color: "#2E2C77" }}>{item.icon}</div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 font-medium text-sm" style={{ color: "#2E2C77" }}>{item.detail}</p>
              <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-500 mb-8">Fill in the form and our team will get back to you shortly.</p>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(50,225,252,0.15)" }}>
                <Send size={28} style={{ color: "#2E2C77" }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-6 text-sm hover:underline" style={{ color: "#2E2C77" }}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required type="text" placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" placeholder="you@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input required type="text" placeholder="How can we help?" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle} onFocus={focus} onBlur={blur} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea required rows={5} placeholder="Tell us about your project or inquiry..." value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }} onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300"
                style={{ background: "#2E2C77" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2D2754")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2E2C77")}
              >Send Message <ArrowRight size={18} /></button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-2xl p-8 text-white relative overflow-hidden" style={{ background: "#2E2C77" }}>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-40" style={{ background: "#2D2754" }} />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3">Why Connect With Us?</h3>
              <ul className="flex flex-col gap-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                {["Access to early-stage startup funding", "Expert mentorship & strategic guidance", "Strong network of industry partners", "Transparent & founder-friendly process"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: "#32E1FC" }}>
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md h-56">
            <iframe title="Kodanda Location" src="https://maps.google.com/maps?q=Indore,MP,India&z=12&output=embed" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
