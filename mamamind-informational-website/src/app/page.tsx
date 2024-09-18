
// pages/index.tsx
import Landingpage from "./components/landingpage"
import Features from "./components/Mamamind";
import AboutUs from "./components/Aboutus";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Landingpage/>
      <Navbar />
      <Features />
      <AboutUs />
    </main>
  )
}
