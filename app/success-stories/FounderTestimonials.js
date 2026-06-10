
"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const testimonials = [
  {
    quote:
      "Kodanda didn't just write a cheque — they rewrote our GTM, made three key intros, and stayed calm when we almost ran out of runway. That's what real partnership looks like.",
    name: "Aditya Nair",
    role: "CEO, CloudStack",
    initials: "AN",
  },
  {
    quote:
      "Most VCs disappear after the wire hits. Kodanda's partner was on our board calls every month, pushed back when we needed it, and celebrated every win like it was theirs.",
    name: "Sneha Kulkarni",
    role: "Founder, CartNinja",
    initials: "SK",
  },
  {
    quote:
      "They told us our product was wrong — politely but firmly — in our first meeting. That honesty is rare. We rebuilt it, and now we're at ₹200 Cr TPV. I'm grateful they didn't just validate us.",
    name: "Karan Mehta",
    role: "Co-founder, PayEase",
    initials: "KM",
  },
  {
    quote:
      "Being from Indore, we expected institutional VCs to overlook us. Kodanda bet on us early and used their network to connect us with our first three enterprise clients.",
    name: "Riya Joshi",
    role: "CEO, MedLoop",
    initials: "RJ",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  index,
}) {
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 350,
    damping: 22,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 350,
    damping: 22,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 8);
    rotateX.set(-((y - centerY) / centerY) * 8);

    setGlow({ x, y });
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-100
        bg-white/70
        backdrop-blur-xl
        p-8
        shadow-sm
        hover:shadow-[0_30px_80px_rgba(79,70,229,0.15)]
        transition-all
        duration-500
      "
    >
      {/* Cursor Glow */}

      <motion.div
        className="absolute pointer-events-none w-72 h-72 rounded-full blur-3xl"
        animate={{
          x: glow.x - 140,
          y: glow.y - 140,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,.18), transparent 70%)",
        }}
      />

      {/* Floating Orb */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-16
          -right-16
          w-44
          h-44
          rounded-full
          bg-indigo-100/50
          blur-3xl
        "
      />

      {/* Quote Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.1,
        }}
        className="
          relative
          z-10
          text-7xl
          text-indigo-200
          leading-none
        "
        style={{
          transform: "translateZ(40px)",
        }}
      >
        "
      </motion.div>

      {/* Quote */}

      <p
        className="
          relative
          z-10
          text-gray-600
          leading-relaxed
          text-sm
          -mt-5
        "
        style={{
          transform: "translateZ(60px)",
        }}
      >
        {quote}
      </p>

      {/* Founder */}

      <div
        className="flex items-center gap-4 mt-8 relative z-10"
        style={{
          transform: "translateZ(80px)",
        }}
      >
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.08,
          }}
          className="
            w-12
            h-12
            rounded-full
            bg-indigo-100
            flex
            items-center
            justify-center
            text-indigo-700
            font-bold
            text-sm
            shadow-lg
          "
        >
          {initials}
        </motion.div>

        <div>
          <p className="font-bold text-indigo-950 text-sm">
            {name}
          </p>

          <p className="text-gray-400 text-xs">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FounderTestimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-6">
      {/* Background blobs */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-0
          w-96
          h-96
          rounded-full
          bg-indigo-100
          blur-3xl
          opacity-40
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-[30rem]
          h-[30rem]
          rounded-full
          bg-purple-100
          blur-3xl
          opacity-30
        "
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">
            In Their Words
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-indigo-950">
            Founder Testimonials
          </h2>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 gap-8"
          style={{
            perspective: "1800px",
          }}
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.name}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}