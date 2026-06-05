export default function Call() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Call to Action</h2>
        <p className="text-xl mb-8">Ready to take your startup to the next level?</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Apply for Funding
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
}
