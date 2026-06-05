import Navbar from "../components/Navbar";

export const metadata = { title: "Investments Criteria – Kodanda Investments" };

export default function InvestmentsPage() {
  return (
    <div>
      <div className="bg-indigo-900"><Navbar /></div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-indigo-900">Investments Criteria</h1>
      </div>
    </div>
  );
}
