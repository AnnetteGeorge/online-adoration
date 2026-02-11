import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#1a1208] to-black text-center px-6">
      <div className="max-w-3xl animate-fadeIn">
        <p className="tracking-widest text-sm text-amber-500">WELCOME TO THE</p>

        <h1 className="text-5xl md:text-6xl font-serif text-amber-300 mt-6">
          Live Adoration Chapel
        </h1>

        <p className="mt-4 text-amber-200 text-lg">
          Global Catholic Intercession & Prayer
        </p>

        <button
          onClick={() => navigate("/adoration")}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-md shadow-lg hover:scale-105 transition duration-300"
        >
          Enter Adoration Chapel
        </button>
      </div>
    </section>
  );
}
