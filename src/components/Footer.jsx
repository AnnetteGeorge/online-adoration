export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1208] to-black border-t border-amber-700 text-amber-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-serif text-amber-400 mb-4 tracking-wide">
            Online Adoration
          </h2>
          <p className="text-sm leading-relaxed text-amber-300">
            A sacred space for prayer, reflection, and quiet time before the
            Lord. May this place bring peace to your heart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-amber-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#adoration"
                className="hover:text-amber-400 transition duration-300"
              >
                Adoration
              </a>
            </li>
            <li>
              <a
                href="#prayers"
                className="hover:text-amber-400 transition duration-300"
              >
                Prayers
              </a>
            </li>
            <li>
              <a
                href="#prayer-request"
                className="hover:text-amber-400 transition duration-300"
              >
                Prayer Request
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact</h3>
          <p className="text-sm mb-2">Email: info@onlineadoration.com</p>
          <p className="text-sm text-amber-300">
            “Be still, and know that I am God.” — Psalm 46:10
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800 text-center py-6 text-sm text-amber-400">
        © {new Date().getFullYear()} Online Adoration. All rights reserved.
      </div>
    </footer>
  );
}
