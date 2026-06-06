import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Who We Are</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Company Overview</h2>
        <p className="mt-5 text-gray-600 leading-relaxed">
          Kodanda Investments is a Indore-headquartered venture capital firm managing ₹20+ crores in
          corporate funds. We partner with early-to-growth-stage startups solving real problems across
          fintech, edtech, healthtech, and deep-tech sectors.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Founded with a conviction that India's Tier-2 cities harbour untapped entrepreneurial potential,
          we bridge capital, mentorship, and networks to transform bold ideas into enduring businesses.
        </p>
        <div className="mt-8 flex gap-10">
          {[["₹20Cr+", "AUM"], ["30+", "Portfolio Cos."], ["2018", "Founded"]].map(([val, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold" style={{ color: "#2E2C77" }}>{val}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <Image src="/about-us.png" alt="About Kodanda" width={600} height={420} className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
