"use client";
import { useState } from "react";

export default function FundingForm() {
  const [form, setForm] = useState({ name: "", email: "", startup: "", stage: "", amount: "", pitch: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="bg-indigo-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-900 text-center mb-3">Funding Application</h2>
        <p className="text-gray-500 text-center mb-10">Ready to take the next step? Apply for funding below.</p>
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-500">We'll review your application and reach out within 5–7 business days.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input name="name" required value={form.name} onChange={handle} placeholder="Jane Doe"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@startup.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Startup Name</label>
              <input name="startup" required value={form.startup} onChange={handle} placeholder="Acme Inc."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Funding Stage</label>
                <select name="stage" required value={form.stage} onChange={handle}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <option value="">Select stage</option>
                  {["Pre-Seed", "Seed", "Series A", "Series B+"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Seeking</label>
                <input name="amount" required value={form.amount} onChange={handle} placeholder="e.g. $500,000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pitch / Business Summary</label>
              <textarea name="pitch" required rows={4} value={form.pitch} onChange={handle} placeholder="Tell us about your startup, problem you're solving, and traction so far..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition">
              Submit Application →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
