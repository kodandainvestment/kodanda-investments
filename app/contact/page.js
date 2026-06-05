"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const contactInfo = [
  { icon: <Phone size={22} />, title: "Call Us", detail: "+91 98765 43210", sub: "Mon – Fri, 9am – 6pm" },
  { icon: <Mail size={22} />, title: "Email Us", detail: "hello@kodandainvestments.com", sub: "We reply within 24 hours" },
  { icon: <MapPin size={22} />, title: "Visit Us", detail: "Indore, MP", sub: "India – 500081" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-indigo-900 overflow-hidden">
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-30" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Let's Start a <br /><span className="text-indigo-300">Conversation</span></h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">Whether you're a startup seeking funding or a partner looking to collaborate — we'd love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contactInfo.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-gray-100 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-indigo-700 font-medium text-sm">{item.detail}</p>
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
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4"><Send size={28} className="text-indigo-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} className="mt-6 text-sm text-indigo-600 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm transition" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input required type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm transition" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input required type="text" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea required rows={5} placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm transition resize-none" />
              </div>
              <button type="submit" className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300">Send Message <ArrowRight size={18} /></button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-700 rounded-full opacity-40" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-3">Why Connect With Us?</h3>
              <ul className="flex flex-col gap-3 text-indigo-200 text-sm">
                {["Access to early-stage startup funding", "Expert mentorship & strategic guidance", "Strong network of industry partners", "Transparent & founder-friendly process"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center shrink-0"><span className="w-1.5 h-1.5 bg-white rounded-full" /></span>
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
