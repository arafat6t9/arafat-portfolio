import { useEffect, useState } from "react"

export default function MouseTrail() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener("mousemove", move)

    return () =>
      window.removeEventListener("mousemove", move)

  }, [])

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border border-cyan-400/40 backdrop-blur-md transition-transform duration-75"
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  )
}