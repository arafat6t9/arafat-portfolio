import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPhp,
  FaJs,
  FaGithub,
} from "react-icons/fa"

import { SiTailwindcss } from "react-icons/si"

const icons = [
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPhp,
  FaJs,
  FaGithub,
  SiTailwindcss,
]

export default function FloatingLogos() {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {icons.map((Icon, index) => (

        <div
          key={index}
          className="absolute text-cyan-400/10 animate-floatLogo"
          style={{
            top: `${10 + index * 12}%`,
            left: `${5 + index * 13}%`,
            fontSize: `${40 + index * 6}px`,
            animationDelay: `${index * 1.5}s`,
          }}
        >

          <Icon />

        </div>

      ))}

    </div>
  )
}