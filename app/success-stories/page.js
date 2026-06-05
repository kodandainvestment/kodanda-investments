import Navbar from "../CommonComp/Navbar";

export const metadata = { title: "Success Stories – Kodanda Investments" };

export default function SuccessStoriesPage() {
  return (
    <div>
      <div className="bg-indigo-900"><Navbar /></div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-indigo-900">Success Stories</h1>
      </div>
    </div>
  );
}
