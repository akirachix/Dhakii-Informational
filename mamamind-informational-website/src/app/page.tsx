import Features from "./components/Mamamind";
import AboutUs from "./components/Aboutus";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Features />
      <AboutUs />
    </main>
  );
}
