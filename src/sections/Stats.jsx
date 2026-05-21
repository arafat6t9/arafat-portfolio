import { motion } from "framer-motion"

const stats = [
  {
    number: "10+",
    label: "Years Creative Experience",
  },

  {
    number: "50+",
    label: "Projects Completed",
  },

  {
    number: "7+",
    label: "Websites Built",
  },

  {
    number: "100+",
    label: "Happy Clients",
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

          <div className="grid md:grid-cols-4 gap-8">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 text-center hover:border-cyan-400/40 transition"
              >

                <h2 className="text-5xl font-black text-cyan-400 mb-4">
                  {item.number}
                </h2>

                <p className="text-gray-400">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}