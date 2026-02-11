export default function Adoration() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-2xl w-full bg-[#1a1208] p-10 rounded-2xl border border-amber-700 text-center shadow-2xl animate-fadeIn">
        <h2 className="text-4xl font-serif text-amber-300 mb-6">
          Live Eucharistic Adoration
        </h2>

        <div className="w-full h-64 bg-black/40 border border-amber-600 rounded-lg flex items-center justify-center animate-pulse">
          <span className="text-amber-400">Live Stream Placeholder</span>
        </div>

        <p className="mt-8 italic text-amber-300">
          “Be still, and know that I am God.” – Psalm 46:10
        </p>
      </div>
    </section>
  );
}
