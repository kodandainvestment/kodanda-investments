import Navbar from "../CommonComp/Navbar";

export const metadata = { title: "Portfolio Companies – Kodanda Investments" };

export default function PortfolioPage() {
  return (
    <div>
      <div className="bg-indigo-900"><Navbar /></div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-indigo-900">Portfolio Companies</h1>
      </div>
    </div>
  );
}
