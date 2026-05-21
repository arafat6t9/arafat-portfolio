import { useEffect, useState } from "react"

import CursorGlow from "./components/CursorGlow"
import Loader from "./components/Loader"

import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Stats from "./sections/Stats"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Photography from "./sections/Photography"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

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

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

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