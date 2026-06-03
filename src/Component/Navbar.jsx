import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    mega: true,
    dropdown: {
      main: [
        { label: "Startup Funding", href: "/startup-funding" },
        { label: "Investments Criteria", href: "/investments-criteria" },
        { label: "Portfolio Companies", href: "/portfolio-companies" },
      ],
      secondary: [
        { label: "Success Stories", href: "/success-stories" },
        { label: "Blog", href: "/blog" },
        { label: "Newsletter", href: "/newsletter" },
      ],
      legal: [
        { label: "Privacy Notice", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
  },
  { label: "Blog", href: "/blog" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (label) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <nav className="mt-8 rounded-full max-w-[90%] mx-auto relative z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-900">
          <span className="text-2xl">≡</span> Kodanda<span className="text-indigo-500">°</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => toggle(link.label)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded hover:text-indigo-700 transition-colors ${
                    openMenu === link.label
                      ? "text-indigo-700 underline underline-offset-4"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openMenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu */}
                {link.mega && openMenu === link.label && (
                  <div className="fixed left-1/2 -translate-x-1/2 mt-2 w-[780px] bg-gray-100 rounded-2xl shadow-2xl p-8 flex gap-6">
                    {/* Col 1 */}
                    <div className="flex flex-col gap-3 min-w-[180px]">
                      {link.dropdown.main.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className="text-indigo-700 font-medium hover:underline text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    {/* Col 2 */}
                    <div className="flex flex-col gap-3 min-w-[180px]">
                      {link.dropdown.secondary.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className="text-indigo-700 font-medium hover:underline text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Spacer + legal + socials */}
                    <div className="flex flex-col justify-end gap-2 flex-1">
                      <div className="flex gap-3 mb-2">
                        {["in", "▶", "gh"].map((icon) => (
                          <button
                            key={icon}
                            className="w-8 h-8 rounded-full border-2 border-indigo-800 text-indigo-800 flex items-center justify-center text-xs font-bold hover:bg-indigo-800 hover:text-white transition"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                      {link.dropdown.legal.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="text-indigo-700 text-xs hover:underline"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Promo Card */}
                    <div className="ml-auto w-52 bg-gray-900 rounded-xl overflow-hidden flex flex-col items-center justify-between p-5 text-white shrink-0">
                      <p className="text-2xl font-bold text-center leading-tight">
                        Active<br />Traders
                      </p>
                      <button className="mt-4 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
                        Register now
                      </button>
                      <div className="mt-4 w-full h-16 bg-gray-800 rounded-lg flex items-end px-2 pb-1">
                        <svg viewBox="0 0 80 30" className="w-full text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <polyline points="0,25 15,20 25,22 35,10 45,15 55,5 70,8 80,3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular Dropdown */}
                {!link.mega && openMenu === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg py-2 min-w-[180px] z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="block px-4 py-2 text-sm text-indigo-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-indigo-700 underline underline-offset-4" : "text-gray-700 hover:text-indigo-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold bg-indigo-700 text-white rounded-full hover:bg-indigo-800 transition">
            Get in touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggle(link.label)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 w-full"
                  >
                    {link.label} <ChevronDown size={14} />
                  </button>
                  {openMenu === link.label && (
                    <div className="mt-1 pl-3 flex flex-col gap-1">
                      {(link.mega
                        ? [
                            ...link.dropdown.main,
                            ...link.dropdown.secondary,
                          ]
                        : link.dropdown
                      ).map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-indigo-700 hover:underline"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? "text-indigo-700" : "text-gray-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
          <button className="mt-2 w-full py-2 bg-indigo-700 text-white rounded-full text-sm font-semibold">
            Get in touch
          </button>
        </div>
      )}

      {/* Overlay to close menus */}
      {openMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenMenu(null)}
        />
      )}
    </nav>
  );
}
