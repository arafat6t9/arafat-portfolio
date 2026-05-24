import { motion } from "framer-motion"

export default function About() {

  return (
    <section
      id="about"
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
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-16 leading-tight">
            Engineer, Creative Technologist & Visual Storyteller
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}

            <div className="space-y-6">

              <p className="text-gray-300 text-lg leading-relaxed">
                I started my professional journey as a full-time photographer,
                working in wedding, fashion, and street photography before
                transitioning into electrical engineering and project management.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Over the years, I expanded my expertise into automation systems,
                web development, branding, UI design, business development, and
                digital experiences while continuing photography as a creative
                passion.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Currently working as a Senior Engineer at Controlware Engineering Ltd,
                I combine engineering precision with creative problem solving to build
                systems, software, websites, and visual experiences that merge
                technology with creativity.
              </p>

            </div>

            {/* RIGHT SIDE */}

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400/30 transition">

                <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                  Engineering
                </h3>

                <ul className="space-y-3 text-gray-400">

                  <li>• Substation Projects</li>
                  <li>• Tender Management</li>
                  <li>• Project Coordination</li>
                  <li>• Technical Documentation</li>
                  <li>• Business Development</li>

                </ul>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400/30 transition">

                <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                  Development
                </h3>

                <ul className="space-y-3 text-gray-400">

                  <li>• React & Laravel</li>
                  <li>• WordPress Development</li>
                  <li>• VBA Automation</li>
                  <li>• ERP Systems</li>
                  <li>• UI/UX Design</li>

                </ul>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400/30 transition">

                <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                  Creative
                </h3>

                <ul className="space-y-3 text-gray-400">

                  <li>• Photography</li>
                  <li>• Photoshop</li>
                  <li>• Lightroom</li>
                  <li>• Premiere Pro</li>
                  <li>• After Effects</li>

                </ul>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-cyan-400/30 transition">

                <h3 className="text-cyan-400 text-xl font-semibold mb-4">
                  Focus
                </h3>

                <ul className="space-y-3 text-gray-400">

                  <li>• Digital Experiences</li>
                  <li>• Creative Technology</li>
                  <li>• Automation Systems</li>
                  <li>• Branding</li>
                  <li>• Modern Web Solutions</li>

                </ul>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}