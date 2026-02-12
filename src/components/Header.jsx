import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1a1208] border-b border-amber-700 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-2xl font-serif text-amber-400 hover:text-amber-300 transition"
          >
            OnlineAdoration
          </a>

          <nav className="hidden md:flex gap-6 text-amber-200 text-lg">
            <a href="#home" className="hover:text-amber-400">
              Home
            </a>
            <a href="#adoration" className="hover:text-amber-400">
              Adoration
            </a>
            <a href="#prayer-request" className="hover:text-amber-400">
              Prayer Request
            </a>
          </nav>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-400 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1208] px-4 pb-4 flex flex-col gap-4 text-amber-200 text-lg">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#adoration" onClick={() => setIsOpen(false)}>
            Adoration
          </a>
          <a href="#prayer-request" onClick={() => setIsOpen(false)}>
            Prayer Request
          </a>
        </div>
      )}
    </header>
  );
}
