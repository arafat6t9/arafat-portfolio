import { motion } from "framer-motion"

export default function About() {
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
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Multi-Disciplinary Creative Engineer
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Engineering
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Senior Electrical Engineer experienced in substation projects,
                project management, tendering, automation systems, and technical coordination.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Creative & Development
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Photographer, designer, and web developer passionate about building
                modern digital experiences with creativity and technical precision.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}