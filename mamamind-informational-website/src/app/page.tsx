
// pages/index.tsx
import Landingpage from "./components/landingpage"
import Features from "./components/Mamamind";
import AboutUs from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Homepage from "./components/Introduction";



export default function Home() {
  return (

    <main>
      <Landingpage/>
      <Navbar />
      <Homepage/>
      <Features />
      <AboutUs />
    </main>

  )
}


