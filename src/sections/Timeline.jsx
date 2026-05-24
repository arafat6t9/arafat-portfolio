import { motion } from "framer-motion"

const timeline = [

  {
    year: "2014 - Feb 2017",
    title: "Full-Time Professional Photographer",
    description:
      "Worked professionally in wedding, fashion, and street photography, building strong creative storytelling, visual direction, and client management experience. Photography continues today as a part-time passion and creative pursuit.",
  },

  {
    year: "Mar 2017 - Nov 2021",
    title: "Assistant Engineer — BECC",
    description:
      "Started engineering career at BECC as an Assistant Engineer, working on electrical engineering projects, technical coordination, and field/site operations.",
  },

  {
    year: "Dec 2021",
    title: "Joined Controlware Engineering Ltd",
    description:
      "Joined Controlware Engineering Ltd as Assistant Engineer (Project & Site Management), working on project execution, coordination, technical management, and engineering operations.",
  },

  {
    year: "Jan 2024",
    title: "Assistant Engineer (Project)",
    description:
      "Promoted within Controlware Engineering Ltd, focusing more deeply on project coordination, management, execution strategy, and engineering operations.",
  },

  {
    year: "Jan 2025 - Present",
    title: "Senior Engineer (Tender Sales)",
    description:
      "Currently working as Senior Engineer (Tender Sales), managing tendering, business development, project coordination, client communication, technical proposals, and engineering project strategy.",
  },

  {
    year: "Development Journey",
    title: "Developer & Creative Technologist",
    description:
      "Continuously building websites, automation systems, ERP tools, branding materials, and modern digital experiences alongside engineering and creative work.",
  },

]

export default function Timeline() {

  return (
    <section
      id="timeline"
      className="py-32 px-6"
    >

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Journey
          </p>

          <h2 className="text-5xl font-bold mb-20">
            Professional Timeline
          </h2>

          <div className="relative border-l border-cyan-400/30 pl-10 space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative group"
              >

                <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-125 transition"></div>

                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition">

                  <p className="text-cyan-400 text-sm tracking-widest mb-3">
                    {item.year}
                  </p>

                  <h3 className="text-3xl font-bold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}