
import Features from "./components/Mamamind";
import AboutUs from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Homepage from "./components/Introduction";


export default function Home() {
  return (

    <main>
      <Navbar />
      <Homepage/>
      <Features />
      <AboutUs />
    </main>

  );
}