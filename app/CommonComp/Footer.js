import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const pages1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio Companies", href: "/portfolio-companies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const pages2 = [
  { label: "Financial Advisory", href: "/startup-funding" },
  { label: "Retirement Planning", href: "/investments-criteria" },
  { label: "Financial Analysis", href: "/success-stories" },
  { label: "Financial Reporting", href: "/newsletter" },
  { label: "Financial Planning", href: "/startup-funding" },
];

const pages3 = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ background: "#2E2C77" }}>
      <div className="absolute top-0 right-48 w-50 h-46 rounded-b-full opacity-70 pointer-events-none" style={{ background: "#32E1FC" }} />
      <div className="absolute top-0 right-32 w-44 h-30 bg-white rounded-b-full opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-72 shrink-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">≡</span>
            <span>Kodanda<span style={{ color: "#32E1FC" }}>°</span></span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Kodanda Investments Pvt. Ltd. is a trusted investment firm focused on
            funding and nurturing innovative startups across diverse sectors,
            helping them grow into sustainable businesses.
          </p>
        </div>

        <div className="flex-1" />

        <div className="min-w-[150px]">
          <h4 className="font-semibold text-white mb-4">Pages</h4>
          <ul className="flex flex-col gap-2">
            {pages1.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[180px]">
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="flex flex-col gap-2">
            {pages2.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h4 className="font-semibold text-white mb-4">Follow us on:</h4>
          <ul className="flex flex-col gap-2">
            {pages3.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/20" style={{ background: "#2D2754" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="ml-2">© {new Date().getFullYear()} – All rights reserved by Kodanda Investments</span>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Help & Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
