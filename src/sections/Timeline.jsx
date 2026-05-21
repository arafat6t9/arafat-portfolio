import { motion } from "framer-motion"

const timeline = [

  {
    year: "2014 - 2017",
    title: "Professional Photographer",
    description:
      "Worked in wedding, fashion, and street photography while developing creative storytelling skills.",
  },

  {
    year: "2018 - Present",
    title: "Electrical Engineer",
    description:
      "Working on substation projects, tendering, project coordination, and engineering management.",
  },

  {
    year: "2020 - Present",
    title: "Web Developer & Designer",
    description:
      "Building modern websites, automation systems, branding materials, and creative digital experiences.",
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
            Experience Timeline
          </h2>

          <div className="relative border-l border-cyan-400/30 pl-10 space-y-16">

            {timeline.map((item, index) => (

              <div
                key={index}
                className="relative"
              >

                <div className="absolute -left-[49px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>

                <p className="text-cyan-400 text-sm tracking-widest mb-2">
                  {item.year}
                </p>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}