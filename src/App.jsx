import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Clients_review from "./Components/Clients_review";
import Eyes2 from "./Components/Eyes2";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    // Check if the page has already been reloaded during this session
    const hasReloaded = sessionStorage.getItem('hasReloaded');

    if (!hasReloaded) {
      // Set a flag to prevent further reloads in this session
      sessionStorage.setItem('hasReloaded', 'true');
      
      // Reload the page
      window.location.reload();
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Clients_review />
        <Eyes2 />
        <Footer />
      </div>
    </>
  );
}

export default App;
