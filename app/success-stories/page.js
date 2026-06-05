import Navbar from "../CommonComp/Navbar";
import FeaturedStories from "./FeaturedStories";
import FounderTestimonials from "./FounderTestimonials";
import ExitHighlights from "./ExitHighlights";
import ImpactNumbers from "./ImpactNumbers";

export const metadata = { title: "Success Stories – Kodanda Investments" };

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-indigo-950 overflow-hidden">
        <Navbar />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-700 rounded-full opacity-20" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-indigo-500 rounded-full opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="inline-block bg-indigo-800 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Founders Who <br />
            <span className="text-indigo-400">Changed the Game</span>
          </h1>
          <p className="mt-5 text-indigo-200 text-lg max-w-xl mx-auto">
            Real stories of capital, mentorship, and conviction turning bold ideas into market-defining companies.
          </p>
        </div>
      </div>

      <ImpactNumbers />
      <FeaturedStories />
      <FounderTestimonials />
      <ExitHighlights />
    </div>
  );
}
