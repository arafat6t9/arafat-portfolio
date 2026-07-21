import ResumePage from "./pages/ResumePage"
import CreativeResumePage from "./pages/CreativeResumePage"
import { useEffect,useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import CursorGlow from "./components/CursorGlow"
import Loader from "./components/Loader"
import ScrollProgress from "./components/ScrollProgress"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Stats from "./sections/Stats"
import Projects from "./sections/Projects"
import Photography from "./sections/Photography"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App(){
  if(window.location.pathname==="/resume") return <ResumePage/>
  if(window.location.pathname==="/creative-resume") return <CreativeResumePage/>
  const [loading,setLoading]=useState(true)
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),900);return()=>clearTimeout(t)},[])
  return <>{loading&&<Loader/>}<ScrollProgress/><CursorGlow/><Navbar/><Hero/><About/><Stats/><Projects/><Photography/><Contact/><Footer/><Analytics/></>
}
export default App
