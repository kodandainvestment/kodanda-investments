"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedList from "../Animations/AnimatedList";

const faqs = [
  {
    q: "What stages do you invest in?",
    a: "We invest from Pre-Seed through Series B and beyond, depending on the opportunity.",
  },
  {
    q: "Do you invest outside India?",
    a: "Yes, we invest globally with a focus on emerging markets and high-growth regions.",
  },
  {
    q: "How long does the process take?",
    a: "From application to term sheet typically takes 3–6 weeks depending on due diligence.",
  },
  {
    q: "What equity stake do you take?",
    a: "We typically take 5–15% equity, negotiated based on stage and valuation.",
  },
  {
    q: "Do you lead rounds?",
    a: "We can lead or co-invest depending on the deal structure and existing cap table.",
  },
  {
    q: "What do you look for in a founder?",
    a: "Resilience, domain expertise, coachability, and a clear vision for the problem being solved.",
  },
  {
    q: "What stages do you invest in?",
    a: "We invest from Pre-Seed through Series B and beyond, depending on the opportunity.",
  },
  {
    q: "Do you invest outside India?",
    a: "Yes, we invest globally with a focus on emerging markets and high-growth regions.",
  },
  {
    q: "How long does the process take?",
    a: "From application to term sheet typically takes 3–6 weeks depending on due diligence.",
  },
  {
    q: "What equity stake do you take?",
    a: "We typically take 5–15% equity, negotiated based on stage and valuation.",
  },
  {
    q: "Do you lead rounds?",
    a: "We can lead or co-invest depending on the deal structure and existing cap table.",
  },
  {
    q: "What do you look for in a founder?",
    a: "Resilience, domain expertise, coachability, and a clear vision for the problem being solved.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full"
      style={{ border: "1px solid rgba(50,225,252,0.2)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold transition"
        style={{ color: "#2D2754" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(50,225,252,0.05)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {faq.q}
        <ChevronDown
          size={18}
          className="transition-transform flex-shrink-0 ml-3"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "#2E2C77",
          }}
        />
      </button>
      {isOpen && <p className="px-6 pb-4 text-gray-500 text-sm">{faq.a}</p>}
    </div>
  );
}

export default function FAQs() {
  const [open, setOpen] = useState(null);

  const items = faqs.map((faq, i) => (
    <FAQItem
      key={i}
      faq={faq}
      isOpen={open === i}
      onToggle={() => setOpen(open === i ? null : i)}
    />
  ));

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2
        className="text-3xl font-bold text-center mb-3"
        style={{ color: "#2D2754" }}
      >
        FAQs
      </h2>
      <p className="text-gray-500 text-center mb-12">
        Answers to the questions founders ask most.
      </p>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => setOpen(open === index ? null : index)}
        showGradients
        enableArrowNavigation
        displayScrollbar
        className="!w-full"
        itemClassName="!bg-transparent !p-0"
      />
    </section>
  );
}
