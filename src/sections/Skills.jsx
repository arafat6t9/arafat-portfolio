import { motion } from "framer-motion"

const skillGroups = [

  {
    title: "Engineering",
    skills: [
      "Substation Projects",
      "Tender Management",
      "Project Coordination",
      "Technical Documentation",
      "Solar Systems",
      "Business Development",
    ],
  },

  {
    title: "Development",
    skills: [
      "React",
      "Laravel",
      "WordPress",
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "GitHub",
      "ERP Systems",
      "VBA Automation",
    ],
  },

  {
    title: "Creative",
    skills: [
      "Photography",
      "Photoshop",
      "Lightroom",
      "Premiere Pro",
      "After Effects",
      "Branding",
      "UI/UX Design",
    ],
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

          <div className="grid lg:grid-cols-3 gap-8">

            {skillGroups.map((group, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-cyan-400/30 transition"
              >

                <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {group.skills.map((skill, idx) => (

                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm hover:bg-cyan-400/20 transition"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}