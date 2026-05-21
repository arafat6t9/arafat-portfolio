import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-md text-center"
        >

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Whether it’s engineering, development, design, or creative collaboration —
            I’m always open to meaningful projects and innovative ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:arafat.dip.ee@gmail.com"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-full text-black font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.flickr.com/photos/100247052@N07/"
              target="_blank"
              className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-full"
            >
              Flickr
            </a>

            <a
              href="https://www.facebook.com/arafat.dip.eee/"
              target="_blank"
              className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-full"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/in/arafatdipee/"
              target="_blank"
              className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-full"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  )
}