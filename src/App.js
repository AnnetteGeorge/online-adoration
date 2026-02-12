import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Adoration from "./pages/Adoration";
import PrayerRequest from "./pages/PrayerRequest";

function App() {
  return (
    <div className="bg-black text-amber-100 scroll-smooth">
      <Header />

      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="adoration" className="min-h-screen">
          <Adoration />
        </section>

        <section id="prayer-request" className="min-h-screen">
          <PrayerRequest />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
