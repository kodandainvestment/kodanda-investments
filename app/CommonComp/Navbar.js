"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "Financial Advisory", href: "/service/financial-advisory" },
  { label: "Retirement Planning", href: "/service/retirement-planning" },
  { label: "Financial Analysis", href: "/service/financial-analysis" },
  { label: "Financial Reporting", href: "/service/financial-reporting" },
  { label: "Financial Planning", href: "/service/financial-planning" },
  { label: "Budgeting", href: "/service/budgeting" },
  { label: "Financial Accounting", href: "/service/financial-accounting" },
  { label: "Business Consulting", href: "/service/business-consulting" },
  { label: "Financial Consulting", href: "/service/financial-consulting" },
];

const col1 = serviceLinks.slice(0, 5);
const col2 = serviceLinks.slice(5);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio-companies" },
  { label: "Funding", href: "/startup-funding" },
  { label: "Contact", href: "/contact" },
];

function MobileServicesMenu({ pathname, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center gap-1 text-sm font-medium w-full text-left"
        style={{ color: pathname.startsWith("/service") ? "#2E2C77" : "#374151" }}
        onClick={() => setOpen((p) => !p)}
      >
        Services <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 mt-2 flex flex-col gap-2">
          {serviceLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              onClick={onClose}
              className="text-sm"
              style={{ color: pathname === s.href ? "#2E2C77" : "#6b7280" }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  // Close on route change
  useEffect(() => { setDropdownOpen(false); }, [pathname]);

  return (
    // Outer wrapper: relative + z-50 so dropdown can overflow below
    <div className="relative z-50" ref={navRef}>
      {/* Navbar pill */}
      <nav className="mt-8 rounded-full max-w-[70%] mx-auto bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl ml-4 text-blue-600 ">
             Kodanda
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? "underline underline-offset-4" : "text-gray-700"
                }`}
                style={pathname === link.href ? { color: "#2E2C77" } : {}}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2E2C77")}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#2E2C77" : "#374151")}
              >
                {link.label}
              </Link>
            ))}

            {/* Services trigger */}
            <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <Link
                href="/service"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith("/service") ? "underline underline-offset-4" : "text-gray-700"
                }`}
                style={pathname.startsWith("/service") ? { color: "#2E2C77" } : {}}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2E2C77")}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname.startsWith("/service") ? "#2E2C77" : "#374151")}
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact">
              <button
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600  rounded-full transition"
                // style={{ background: "#2E2C77" }}
                // onMouseEnter={(e) => (e.currentTarget.style.background = "#2D2754")}
                // onMouseLeave={(e) => (e.currentTarget.style.background = "#2E2C77")}
              >
                Get in touch
              </button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileOpen((p) => !p)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 rounded-b-3xl">
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
            <MobileServicesMenu pathname={pathname} onClose={() => setMobileOpen(false)} />
            <button
              className="mt-2 w-full py-2 text-white rounded-full text-sm font-semibold"
              style={{ background: "#2E2C77" }}
            >
              Get in touch
            </button>
          </div>
        )}
      </nav>

      {/* Mega dropdown — slides from behind the navbar */}
      <div
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className="absolute left-1/2 -translate-x-1/2 w-[70%] overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          top: dropdownOpen ? "calc(100% - 48px)" : "calc(100% - 76px)",
          opacity: dropdownOpen ? 1 : 0,
          pointerEvents: dropdownOpen ? "auto" : "none",
          zIndex: 40,
          borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
          background: "rgba(240,240,255,0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(46,44,119,0.13)",
          paddingTop: "40px",
        }}
      >
        {/* White bridge strip that blends with navbar pill top */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "40px", background: "white", borderRadius: "1.5rem 1.5rem 0 0" }}
        />
        <div className="px-10 py-8 flex gap-10">
          {/* Col 1 */}
          <div className="flex flex-col gap-4 flex-1">
            {col1.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-base font-medium transition-colors"
                style={{ color: "#2E2C77" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#32E1FC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2E2C77")}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4 flex-1">
            {col2.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-base font-medium transition-colors"
                style={{ color: "#2E2C77" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#32E1FC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2E2C77")}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* CTA card */}
          <div
            className="w-56 shrink-0 rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg,#2D2754,#2E2C77)" }}
          >
            <div>
              <p className="text-white text-xl font-bold leading-snug">Expert Financial<br />Services</p>
              <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                Tailored strategies for startups, investors, and enterprises.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block text-center px-4 py-2 rounded-full text-sm font-semibold transition"
              style={{ background: "#32E1FC", color: "#2D2754" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
