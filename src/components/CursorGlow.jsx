import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  return (
    <div
      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] transition duration-300"
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  )
}