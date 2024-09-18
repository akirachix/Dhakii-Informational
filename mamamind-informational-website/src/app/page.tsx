import "./globals.css";
import Footer from "./components/Footer/footer";

import Landingpage from "./components/landingpage"
import Features from "./components/Features";
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
      <Footer/>
    </main>

  )
}


