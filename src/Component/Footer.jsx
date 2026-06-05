import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

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
  // { label: "Budgeting", href: "/investments-criteria" },
  // { label: "Financial Accounting", href: "/success-stories" },
  // { label: "Business Consulting", href: "/newsletter" },
  // { label: "Financial Consulting", href: "/newsletter" },
];

const pages3 = [
  { label: "Instagram", href: "/startup-funding" },
  { label: "Facebook", href: "/investments-criteria" },
  { label: "LinkedIn", href: "/success-stories" },
  { label: "Twitter", href: "/newsletter" },
];

export default function Footer() {
  return (
    <footer className="relative bg-indigo-900 text-white overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-48 w-64 h-40 bg-indigo-500 rounded-b-full opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-32 w-48 h-32 bg-gray-100 rounded-b-full opacity-20 pointer-events-none" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        {/* Left: Logo + description */}
        <div className="md:w-72 shrink-0">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">≡</span>
            <span>Kodanda<span className="text-indigo-300">°</span></span>
          </Link>
          <p className="mt-4 text-sm text-indigo-200 leading-relaxed">
            Kodanda Investments Pvt. Ltd. is a trusted investment firm focused on
            funding and nurturing innovative startups across diverse sectors,
            helping them grow into sustainable businesses.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Pages col 1 */}
        <div className="min-w-[150px]">
          <h4 className="font-semibold text-white mb-4">Pages</h4>
          <ul className="flex flex-col gap-2">
            {pages1.map((p) => (
              <li key={p.label}>
                <Link to={p.href} className="text-sm text-indigo-200 hover:text-white transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages col 2 */}
        <div className="min-w-[180px]">
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="flex flex-col gap-2">
            {pages2.map((p) => (
              <li key={p.label}>
                <Link to={p.href} className="text-sm text-indigo-200 hover:text-white transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages col 3 */}
        <div className="min-w-[150px]">
          <h4 className="font-semibold text-white mb-4">Follow us on:</h4>
          <ul className="flex flex-col gap-2">
            {pages3.map((p) => (
              <li key={p.label}>
                <Link to={p.href} className="text-sm text-indigo-200 hover:text-white transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-indigo-700 bg-indigo-950">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Socials + copyright */}
          <div className="flex items-center gap-3 text-sm text-indigo-300">
            <a href="#" className="hover:text-white transition"><FaTwitter size={16} /></a>
            <a href="#" className="hover:text-white transition"><FaFacebookF size={16} /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn size={16} /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram size={16} /></a>
            <span className="ml-2">© {new Date().getFullYear()} – All rights reserved by Kodanda Investments</span>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-5 text-sm text-indigo-300">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Help & Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
