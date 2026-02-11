import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Adoration from "./pages/Adoration";
import PrayerRequest from "./pages/PrayerRequest";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-amber-100">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoration" element={<Adoration />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
