import { motion } from "framer-motion"

const stats = [

  {
    number: "10+",
    label: "Years Creative Journey",
  },

  {
    number: "8+",
    label: "Years Engineering Experience",
  },

  {
    number: "10+",
    label: "Websites & Systems Built",
  },

  {
    number: "1000+",
    label: "Photographs Captured",
  },

]

export default function Stats() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Highlights
            </p>

            <h2 className="text-5xl font-black mb-6">
              Experience & Achievements
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              A journey combining engineering, technology, development,
              photography, and creative problem solving across multiple industries.
            </p>

          </div> 

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 text-center hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition"
              >

                <h2 className="text-5xl font-black text-cyan-400 mb-4">
                  {item.number}
                </h2>

                <p className="text-gray-400">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}