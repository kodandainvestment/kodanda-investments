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
    <section className="py-20 px-6" style={{ background: "#f8f8ff" }}>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2E2C77" }}>Join 2,400+ Readers</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ color: "#2D2754" }}>Stay in the Loop</h2>
          <p className="mt-4 text-sm text-gray-500">
            Bi-weekly. Free. Unsubscribe anytime. No spam — ever.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl p-10 text-center" style={{ background: "rgba(50,225,252,0.08)", border: "1px solid rgba(46,44,119,0.2)" }}>
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="font-bold text-xl" style={{ color: "#2D2754" }}>You're subscribed!</h3>
            <p className="text-sm mt-2 text-gray-500">Check your inbox for a confirmation. First issue lands in your next fortnightly cycle.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-2xl p-8 flex flex-col gap-5 bg-white" style={{ border: "1px solid rgba(46,44,119,0.12)", boxShadow: "0 2px 24px rgba(46,44,119,0.07)" }}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name" value={form.name} onChange={handle} placeholder="Rahul Sharma"
                className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.15)", color: "#2D2754" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#32E1FC")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(46,44,119,0.15)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                name="email" type="email" value={form.email} onChange={handle} placeholder="rahul@startup.in"
                className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.15)", color: "#2D2754" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#32E1FC")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(46,44,119,0.15)")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">I am a…</label>
              <select
                name="role" value={form.role} onChange={handle}
                className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                style={{ background: "#f8f8ff", border: "1px solid rgba(46,44,119,0.15)", color: form.role ? "#2D2754" : "#9ca3af" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#32E1FC")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(46,44,119,0.15)")}
              >
                <option value="" disabled className="text-gray-400">Select your role</option>
                {["Founder", "Angel Investor", "VC / Fund Manager", "Corporate / CXO", "Student / Researcher", "Other"].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button type="submit" className="w-full py-3 font-semibold rounded-xl text-sm transition-opacity" style={{ background: "#2E2C77", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Subscribe — It's Free →
            </button>
            <p className="text-center text-xs text-gray-400">We respect your privacy. No spam, no sharing of your data.</p>
          </form>
        )}
      </div>
    </section>
  );
}
