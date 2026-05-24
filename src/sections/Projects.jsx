import { motion } from "framer-motion"

import projects from "../data/projects"

export default function Projects() {

  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Selected Projects & Works
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">

                    <a
                      href={project.live}
                      target="_blank"
                      className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold"
                    >
                      Live Preview
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="border border-white/20 px-5 py-2 rounded-full"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

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
                      target="_blank"
                      className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-full text-black font-semibold"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
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