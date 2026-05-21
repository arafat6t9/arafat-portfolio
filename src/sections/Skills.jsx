import { motion } from "framer-motion"

const skills = {
  Engineering: [
    "Electrical Engineering",
    "Substation Projects",
    "Project Management",
    "Tendering",
  ],

  Development: [
    "React",
    "Laravel",
    "WordPress",
    "JavaScript",
    "PHP",
    "Tailwind CSS",
  ],

  Creative: [
    "Photography",
    "Photoshop",
    "Lightroom",
    "After Effects",
    "Premiere Pro",
    "Graphic Design",
  ],
}

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

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
            Technologies & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-8">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm hover:bg-cyan-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  )
}