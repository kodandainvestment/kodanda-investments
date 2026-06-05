import Navbar from "../components/Navbar";

export const metadata = { title: "About – Kodanda Investments" };

export default function AboutPage() {
  return (
    <div>
      <div className="bg-indigo-900">
        <Navbar />
      </div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-indigo-900">About Us</h1>
      </div>
    </div>
  );
}
