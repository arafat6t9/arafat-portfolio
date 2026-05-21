import { motion } from "framer-motion"

const projects = [
  {
    title: "Controlware Engineering",
    description:
      "Corporate company profile website with modern responsive design and project showcase.",
    tech: ["WordPress", "Elementor", "CSS"],
    live: "#",
    github: "#",
  },

  {
    title: "Invoice Automation System",
    description:
      "Excel + VBA based automated billing and project management solution.",
    tech: ["Excel VBA", "Automation", "Reporting"],
    live: "#",
    github: "#",
  },

  {
    title: "Photography Portfolio",
    description:
      "Creative gallery system for showcasing street, wedding, and fashion photography.",
    tech: ["React", "Tailwind", "Gallery"],
    live: "#",
    github: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:border-cyan-400/40 transition duration-300"
              >

                <div className="h-52 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">

                    <a
                      href={project.live}
                      className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-full text-black font-semibold"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      className="border border-white/20 hover:border-cyan-400 transition px-5 py-2 rounded-full"
                    >
                      GitHub
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  )
}