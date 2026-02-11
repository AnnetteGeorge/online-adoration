import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#1a1208] border-b border-amber-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif text-amber-400 hover:text-amber-300 transition mb-3 sm:mb-0"
        >
          OnlineAdoration
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-amber-200 text-lg">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/adoration" className="hover:text-amber-400 transition">
            Adoration
          </Link>
          <Link
            to="/prayer-request"
            className="px-4 py-2 border border-amber-500 rounded-md hover:bg-amber-500 hover:text-black transition text-center"
          >
            Prayer Request
          </Link>
        </nav>
      </div>
    </header>
  );
}
