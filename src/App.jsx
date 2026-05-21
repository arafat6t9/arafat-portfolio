import { useEffect, useState } from "react"

import CursorGlow from "./components/CursorGlow"
import Loader from "./components/Loader"

import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Timeline from "./sections/Timeline"
import Stats from "./sections/Stats"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Photography from "./sections/Photography"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import ScrollProgress from "./components/ScrollProgress"
import FloatingLogos from "./components/FloatingLogos"
import MouseTrail from "./components/MouseTrail"


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  return (
    <>

      {loading && <Loader />}

      <ScrollProgress />

      <CursorGlow />

      <MouseTrail />

      <FloatingLogos />

      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Stats />

      <Skills />

      <Projects />

      <Photography />

      <Contact />

      <Footer />

    </>
  )
}

export default App