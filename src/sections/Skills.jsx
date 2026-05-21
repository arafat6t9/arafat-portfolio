import { motion } from "framer-motion"

import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaPhp,
  FaJs,
  FaGithub,
} from "react-icons/fa"

import { DiPhotoshop } from "react-icons/di";

import {
  SiTailwindcss,
} from "react-icons/si"

const skills = [
  {
    icon: <FaReact />,
    name: "React",
  },

  {
    icon: <FaLaravel />,
    name: "Laravel",
  },

  {
    icon: <FaWordpress />,
    name: "WordPress",
  },

  {
    icon: <FaPhp />,
    name: "PHP",
  },

  {
    icon: <FaJs />,
    name: "JavaScript",
  },

  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },

  {
    icon: <FaGithub />,
    name: "GitHub",
  },

  {
    icon: <DiPhotoshop />,
    name: "Photoshop",
  },

]

export default function Skills() {

  return (
    <section
      id="skills"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Technologies & Creative Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {skills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="floating-card bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400/40 transition"
              >

                <div className="text-6xl text-cyan-400 mb-6">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}