import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import Navbar from "../../Component/Navbar";

const ITEM_WIDTH = 380;
const GAP = 28;

const tags = ["All", "Startup", "Funding", "Investment", "Growth", "Strategy", "Market"];

const blogs = [
  {
    id: 1,
    tag: "Funding",
    title: "How Seed Funding Can Make or Break Your Startup",
    excerpt: "Seed funding is more than capital — it's validation. We explore how early-stage investments shape the trajectory of a startup's journey.",
    author: "Ravi Kumar",
    date: "June 12, 2025",
    readTime: "5 min read",
    featured: true,
    color: "from-indigo-600 to-blue-500",
  },
  {
    id: 2,
    tag: "Startup",
    title: "10 Signs Your Startup is Ready for Series A",
    excerpt: "Investors look for more than revenue. Discover the traction metrics and team signals that unlock the next funding round.",
    author: "Priya Sharma",
    date: "May 28, 2025",
    readTime: "4 min read",
    featured: false,
    color: "from-violet-600 to-indigo-500",
  },
  {
    id: 3,
    tag: "Investment",
    title: "The Kodanda Investment Thesis: What We Look For",
    excerpt: "Our investment philosophy is rooted in people, market timing, and scalability. Here's how we evaluate every opportunity.",
    author: "Kodanda Team",
    date: "May 15, 2025",
    readTime: "6 min read",
    featured: false,
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 4,
    tag: "Growth",
    title: "Scaling from 0 to 1M Users: Lessons from Our Portfolio",
    excerpt: "We sat down with founders across our portfolio to uncover the growth tactics that actually moved the needle.",
    author: "Arjun Mehta",
    date: "April 30, 2025",
    readTime: "7 min read",
    featured: false,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    tag: "Strategy",
    title: "Why Founder-Market Fit Matters More Than Product-Market Fit",
    excerpt: "Before a product finds its market, the founder must find their calling. A deep dive into what truly drives startup success.",
    author: "Sneha Rao",
    date: "April 10, 2025",
    readTime: "5 min read",
    featured: false,
    color: "from-sky-600 to-blue-400",
  },
  {
    id: 6,
    tag: "Market",
    title: "India's Startup Ecosystem in 2025: What's Changing",
    excerpt: "From Tier-2 city founders to deep-tech breakthroughs — India's startup landscape is evolving faster than ever.",
    author: "Kodanda Team",
    date: "March 22, 2025",
    readTime: "6 min read",
    featured: false,
    color: "from-indigo-700 to-blue-600",
  },
];

function HorizontalScrollGrid({ filtered, activeTag }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
    <div ref={containerRef} style={{ height: `${filtered.length * 100}vh` }} className="relative">
      <div
        className="sticky top-0 h-screen flex items-center overflow-visible"
        style={{ width: ITEM_WIDTH, margin: "0 auto" }}
      >
        <motion.div className="flex" style={{ x, gap: GAP }}>
          {filtered.map((blog, i) => (
            <div
              key={blog.id}
              style={{ width: ITEM_WIDTH, flexShrink: 0 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${blog.color}`} />
              <div className={`h-44 bg-gradient-to-br ${blog.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white/10 text-8xl font-black select-none">0{i + 1}</span>
                <Tag size={36} className="text-white/20 absolute" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">{blog.tag}</span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-indigo-700 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{blog.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><User size={11} /> {blog.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {blog.readTime}</span>
                  </div>
                  <button className="flex items-center gap-1 text-indigo-600 font-medium hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function BlogHero() {
  const [activeTag, setActiveTag] = useState("All");

  const featured = blogs.find((b) => b.featured);
  const filtered = blogs
    .filter((b) => !b.featured)
    .filter((b) => activeTag === "All" || b.tag === activeTag);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative bg-indigo-900 overflow-hidden">
        <Navbar/>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-700 rounded-full opacity-30" />
        <div className="absolute -bottom-20 right-0 w-72 h-72 bg-blue-500 rounded-full opacity-20" />
        <div className="absolute top-8 right-1/4 w-40 h-40 bg-indigo-400 rounded-full opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Insights & Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Kodanda <span className="text-indigo-300">Blog</span>
          </h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">
            Ideas, insights, and inspiration for founders, investors, and the curious minds shaping tomorrow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4">Featured Post</p>
            <div className={`relative rounded-3xl bg-gradient-to-br ${featured.color} p-0.5 shadow-2xl`}>
              <div className="bg-indigo-900 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-10 flex flex-col justify-between text-white">
                    <div>
                      <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {featured.tag}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">{featured.title}</h2>
                      <p className="text-indigo-200 text-sm leading-relaxed">{featured.excerpt}</p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-indigo-300 text-xs">
                        <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                      </div>
                      <button className="flex items-center gap-2 bg-white text-indigo-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-100 transition">
                        Read More <ArrowRight size={14} />
                      </button>
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

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-indigo-700 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-400 hover:text-indigo-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-400 mb-2">↓ Scroll to explore articles</p>
      </div>

      {/* Horizontal Scroll Grid */}
      <HorizontalScrollGrid filtered={filtered} activeTag={activeTag} />

    </div>
  );
}
