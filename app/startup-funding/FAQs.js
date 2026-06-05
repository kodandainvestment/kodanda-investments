"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What stages do you invest in?", a: "We invest from Pre-Seed through Series B and beyond, depending on the opportunity." },
  { q: "Do you invest outside India?", a: "Yes, we invest globally with a focus on emerging markets and high-growth regions." },
  { q: "How long does the process take?", a: "From application to term sheet typically takes 3–6 weeks depending on due diligence." },
  { q: "What equity stake do you take?", a: "We typically take 5–15% equity, negotiated based on stage and valuation." },
  { q: "Do you lead rounds?", a: "We can lead or co-invest depending on the deal structure and existing cap table." },
  { q: "What do you look for in a founder?", a: "Resilience, domain expertise, coachability, and a clear vision for the problem being solved." },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-indigo-900 text-center mb-3">FAQs</h2>
      <p className="text-gray-500 text-center mb-12">Answers to the questions founders ask most.</p>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-indigo-100 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-indigo-900 hover:bg-indigo-50 transition"
            >
              {faq.q}
              <ChevronDown size={18} className={`transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-6 pb-4 text-gray-500 text-sm">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
