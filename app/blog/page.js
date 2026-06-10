"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Navbar from "../CommonComp/Navbar";

const ITEM_WIDTH = 420;
const GAP = 28;

const tags = ["All", "Startup", "Funding", "Investment", "Growth", "Strategy", "Market"];

const blogs = [
  { id: 1, tag: "Funding", title: "How Seed Funding Can Make or Break Your Startup", excerpt: "Seed funding is more than capital — it's validation. We explore how early-stage investments shape the trajectory of a startup's journey.", author: "Ravi Kumar", date: "June 12, 2025", readTime: "5 min read", featured: true, color: "from-[#2E2C77] to-[#32E1FC]" },
  { id: 2, tag: "Startup", title: "10 Signs Your Startup is Ready for Series A", excerpt: "Investors look for more than revenue. Discover the traction metrics and team signals that unlock the next funding round.", author: "Priya Sharma", date: "May 28, 2025", readTime: "4 min read", featured: false, color: "from-[#2D2754] to-[#2E2C77]" },
  { id: 3, tag: "Investment", title: "The Kodanda Investment Thesis: What We Look For", excerpt: "Our investment philosophy is rooted in people, market timing, and scalability. Here's how we evaluate every opportunity.", author: "Kodanda Team", date: "May 15, 2025", readTime: "6 min read", featured: false, color: "from-[#2E2C77] to-[#32E1FC]" },
  { id: 4, tag: "Growth", title: "Scaling from 0 to 1M Users: Lessons from Our Portfolio", excerpt: "We sat down with founders across our portfolio to uncover the growth tactics that actually moved the needle.", author: "Arjun Mehta", date: "April 30, 2025", readTime: "7 min read", featured: false, color: "from-[#2D2754] to-[#32E1FC]" },
  { id: 5, tag: "Strategy", title: "Why Founder-Market Fit Matters More Than Product-Market Fit", excerpt: "Before a product finds its market, the founder must find their calling. A deep dive into what truly drives startup success.", author: "Sneha Rao", date: "April 10, 2025", readTime: "5 min read", featured: false, color: "from-[#2E2C77] to-[#2D2754]" },
  { id: 6, tag: "Market", title: "India's Startup Ecosystem in 2025: What's Changing", excerpt: "From Tier-2 city founders to deep-tech breakthroughs — India's startup landscape is evolving faster than ever.", author: "Kodanda Team", date: "March 22, 2025", readTime: "6 min read", featured: false, color: "from-[#2D2754] to-[#2E2C77]" },
];

function HorizontalScrollGrid({ filtered, activeTag }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const totalDistance = (filtered.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg font-medium">No posts found for "{activeTag}"</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height: `${filtered.length * 40}vh` }} className="relative">
      <div className="sticky top-0 h-[90vh] flex items-center overflow-visible" style={{ width: ITEM_WIDTH, margin: "0 auto" }}>
        <motion.div className="flex" style={{ x, gap: GAP }}>
          {filtered.map((blog, i) => (
            <div key={blog.id} style={{ width: ITEM_WIDTH, flexShrink: 0 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className={`h-2 bg-gradient-to-r ${blog.color}`} />
              <div className="h-64 relative overflow-hidden">
                <Image src="/about-us.png" alt="blog cover" fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#2E2C77" }}>{blog.tag}</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">{blog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{blog.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><User size={11} /> {blog.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {blog.readTime}</span>
                  </div>
                  <button className="flex items-center gap-1 font-medium hover:gap-2 transition-all" style={{ color: "#2E2C77" }}>Read <ArrowRight size={12} /></button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const featured = blogs.find((b) => b.featured);
  const filtered = blogs.filter((b) => !b.featured).filter((b) => activeTag === "All" || b.tag === activeTag);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden" style={{ background: "#2D2754" }}>
        <Navbar />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30" style={{ background: "#2E2C77" }} />
        <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full opacity-20" style={{ background: "#32E1FC" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(50,225,252,0.15)", color: "#32E1FC" }}>Insights & Stories</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">The Kodanda <span style={{ color: "#32E1FC" }}>Blog</span></h1>
          <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>Ideas, insights, and inspiration for founders, investors, and the curious minds shaping tomorrow.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {featured && (
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#2E2C77" }}>Featured Post</p>
            <div className={`relative rounded-3xl bg-gradient-to-br ${featured.color} p-0.5 shadow-2xl`}>
              <div className="rounded-3xl overflow-hidden" style={{ background: "#2D2754" }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-10 flex flex-col justify-between text-white">
                    <div>
                      <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{featured.tag}</span>
                      <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">{featured.title}</h2>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{featured.excerpt}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs" style={{ color: "#32E1FC" }}>
                        <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                      </div>
                      <button className="flex items-center gap-2 bg-white text-sm font-semibold px-5 py-2.5 rounded-full transition" style={{ color: "#2D2754" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#e0f9fe")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                      >Read More <ArrowRight size={14} /></button>
                    </div>
                  </div>
                  <div className={`hidden md:flex items-center justify-center bg-gradient-to-br ${featured.color} opacity-80 min-h-[280px]`}>
                    <div className="text-white/20 text-[120px] font-black select-none leading-none">₹</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={activeTag === tag ? { background: "#2E2C77", color: "#fff" } : { background: "#fff", color: "#4b5563", border: "1px solid #e5e7eb" }}
              onMouseEnter={(e) => { if (activeTag !== tag) { e.currentTarget.style.borderColor = "#32E1FC"; e.currentTarget.style.color = "#2E2C77"; } }}
              onMouseLeave={(e) => { if (activeTag !== tag) { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#4b5563"; } }}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mb-2">↓ Scroll to explore articles</p>

      <HorizontalScrollGrid filtered={filtered} activeTag={activeTag} />
      </div>
    </div>
  );
}
