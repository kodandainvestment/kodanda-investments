"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio-companies" },
  { label: "Funding", href: "/startup-funding" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Investments", href: "/investments-criteria" },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="mt-8 rounded-full max-w-[95%] mx-auto relative z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: "#2E2C77" }}>
          <span className="text-2xl">≡</span> Kodanda<span style={{ color: "#32E1FC" }}>°</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "underline underline-offset-4"
                  : "text-gray-700"
              }`}
              style={pathname === link.href ? { color: "#2E2C77" } : {}}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2E2C77")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#2E2C77" : "#374151")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            className="px-4 py-2 text-sm font-semibold text-white rounded-full transition"
            style={{ background: "#2E2C77" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2D2754")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2E2C77")}
          >
            Get in touch
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium"
              style={{ color: pathname === link.href ? "#2E2C77" : "#374151" }}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="mt-2 w-full py-2 text-white rounded-full text-sm font-semibold"
            style={{ background: "#2E2C77" }}
          >
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
}
