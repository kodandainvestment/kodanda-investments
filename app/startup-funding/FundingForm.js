"use client";
import { useState } from "react";

export default function FundingForm() {
  const [form, setForm] = useState({ name: "", email: "", startup: "", stage: "", amount: "", pitch: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = {
    width: "100%",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "10px 16px",
    fontSize: 14,
    outline: "none",
  };

  const focusStyle = (e) => (e.currentTarget.style.borderColor = "#32E1FC");
  const blurStyle = (e) => (e.currentTarget.style.borderColor = "#e5e7eb");

  return (
    <section className="py-20" style={{ background: "rgba(50,225,252,0.06)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3" style={{ color: "#2D2754" }}>Funding Application</h2>
        <p className="text-gray-500 text-center mb-10">Ready to take the next step? Apply for funding below.</p>
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#2D2754" }}>Application Submitted!</h3>
            <p className="text-gray-500">We'll review your application and reach out within 5–7 business days.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input name="name" required value={form.name} onChange={handle} placeholder="Jane Doe"
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@startup.com"
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Startup Name</label>
              <input name="startup" required value={form.startup} onChange={handle} placeholder="Acme Inc."
                style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Funding Stage</label>
                <select name="stage" required value={form.stage} onChange={handle}
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="">Select stage</option>
                  {["Pre-Seed", "Seed", "Series A", "Series B+"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Seeking</label>
                <input name="amount" required value={form.amount} onChange={handle} placeholder="e.g. $500,000"
                  style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pitch / Business Summary</label>
              <textarea name="pitch" required rows={4} value={form.pitch} onChange={handle}
                placeholder="Tell us about your startup, problem you're solving, and traction so far..."
                style={{ ...inputStyle, resize: "none" }} onFocus={focusStyle} onBlur={blurStyle} />
            </div>
            <button type="submit" className="w-full py-3 text-white font-semibold rounded-xl transition"
              style={{ background: "#2E2C77" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2D2754")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2E2C77")}
            >
              Submit Application →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
