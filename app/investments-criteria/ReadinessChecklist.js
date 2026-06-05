"use client";
import { useState } from "react";

const checklist = [
  { id: 1, item: "I have a registered legal entity (Pvt. Ltd. or LLP)." },
  { id: 2, item: "My founding team has at least 2 members with complementary skills." },
  { id: 3, item: "I have a working MVP or proof-of-concept." },
  { id: 4, item: "I have at least 1 paying customer or signed LOI." },
  { id: 5, item: "I have a clear understanding of my TAM, SAM, and SOM." },
  { id: 6, item: "I have a financial model covering the next 24 months." },
  { id: 7, item: "I know exactly how I will use the investment capital." },
  { id: 8, item: "My co-founder equity split is agreed and documented." },
  { id: 9, item: "I have a pitch deck that is under 15 slides." },
  { id: 10, item: "I can articulate my unfair advantage in one sentence." },
];

export default function ReadinessChecklist() {
  const [checked, setChecked] = useState([]);

  const toggle = (id) =>
    setChecked((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const score = checked.length;
  const pct = Math.round((score / checklist.length) * 100);

  const { label, color, bg } =
    score >= 8 ? { label: "You're ready — apply now!", color: "text-green-700", bg: "bg-green-50 border-green-200" }
    : score >= 5 ? { label: "Getting there — a few gaps to address.", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" }
    : { label: "Keep building — come back when you're ready.", color: "text-red-700", bg: "bg-red-50 border-red-200" };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Self-Assessment</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-indigo-950">Startup Readiness Checklist</h2>
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
            Tick every item that applies to your startup right now. Be honest — this is for your benefit.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-100">
          {checklist.map(({ id, item }) => {
            const done = checked.includes(id);
            return (
              <label key={id} className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-indigo-50 transition-colors">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(id)}
                  className="w-5 h-5 accent-indigo-600 flex-shrink-0"
                />
                <span className={`text-sm ${done ? "line-through text-gray-400" : "text-gray-700"}`}>{item}</span>
              </label>
            );
          })}
        </div>

        {/* Score bar */}
        <div className={`mt-8 border rounded-2xl p-6 ${bg}`}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-600">Your Score</span>
            <span className="text-sm font-bold text-indigo-700">{score} / {checklist.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className={`mt-4 text-sm font-semibold ${color}`}>{label}</p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/startup-funding"
            className="inline-block px-8 py-3 bg-indigo-700 text-white rounded-full text-sm font-semibold hover:bg-indigo-800 transition-colors"
          >
            Apply for Funding →
          </a>
        </div>
      </div>
    </section>
  );
}
