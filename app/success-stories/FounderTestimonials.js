const testimonials = [
  {
    quote: "Kodanda didn't just write a cheque — they rewrote our GTM, made three key intros, and stayed calm when we almost ran out of runway. That's what real partnership looks like.",
    name: "Aditya Nair",
    role: "CEO, CloudStack",
    initials: "AN",
  },
  {
    quote: "Most VCs disappear after the wire hits. Kodanda's partner was on our board calls every month, pushed back when we needed it, and celebrated every win like it was theirs.",
    name: "Sneha Kulkarni",
    role: "Founder, CartNinja",
    initials: "SK",
  },
  {
    quote: "They told us our product was wrong — politely but firmly — in our first meeting. That honesty is rare. We rebuilt it, and now we're at ₹200 Cr TPV. I'm grateful they didn't just validate us.",
    name: "Karan Mehta",
    role: "Co-founder, PayEase",
    initials: "KM",
  },
  {
    quote: "Being from Indore, we expected institutional VCs to overlook us. Kodanda bet on us early and used their network to connect us with our first three enterprise clients.",
    name: "Riya Joshi",
    role: "CEO, MedLoop",
    initials: "RJ",
  },
];

export default function FounderTestimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">In Their Words</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Founder Testimonials</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div key={name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6">
              <span className="text-indigo-300 text-5xl leading-none">"</span>
              <p className="text-gray-600 text-sm leading-relaxed -mt-4">{quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-indigo-950 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
