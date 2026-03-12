import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VideoSection from './components/VideoSection'
import Method from './components/Method'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-cubic'
    })
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <VideoSection />
      <Method />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
