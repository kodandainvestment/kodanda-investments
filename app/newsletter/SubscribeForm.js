"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) { setError("Please fill in all fields."); return; }
    if (!/\S+@\S+\.\S+/.test(form.email)) { setError("Enter a valid email address."); return; }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="bg-indigo-950 py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Join 2,400+ Readers</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Stay in the Loop</h2>
          <p className="mt-4 text-white/50 text-sm">
            Bi-weekly. Free. Unsubscribe anytime. No spam — ever.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="text-white font-bold text-xl">You're subscribed!</h3>
            <p className="text-white/60 text-sm mt-2">Check your inbox for a confirmation. First issue lands in your next fortnightly cycle.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium">Full Name</label>
              <input
                name="name" value={form.name} onChange={handle} placeholder="Rahul Sharma"
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium">Email Address</label>
              <input
                name="email" type="email" value={form.email} onChange={handle} placeholder="rahul@startup.in"
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium">I am a…</label>
              <select
                name="role" value={form.role} onChange={handle}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-400 transition-colors appearance-none"
              >
                <option value="" disabled className="text-gray-900">Select your role</option>
                {["Founder", "Angel Investor", "VC / Fund Manager", "Corporate / CXO", "Student / Researcher", "Other"].map((r) => (
                  <option key={r} value={r} className="text-gray-900">{r}</option>
                ))}
              </select>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors text-sm">
              Subscribe — It's Free →
            </button>
            <p className="text-center text-white/30 text-xs">We respect your privacy. No spam, no sharing of your data.</p>
          </form>
        )}
      </div>
    </section>
  );
}
