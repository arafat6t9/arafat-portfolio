import { motion } from "framer-motion"

import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"

const photos = [
  {
    image: photo1,
    category: "Street",
  },

  {
    image: photo2,
    category: "Wedding",
  },

  {
    image: photo3,
    category: "Fashion",
  },

  {
    image: photo4,
    category: "Travel",
  },
]

export default function Photography() {
  return (
    <section id="photography" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Photography
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Capturing Stories Through Lens
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {photos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl group"
              >

                <img
                  src={photo.image}
                  alt=""
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <p className="text-cyan-400 uppercase tracking-widest text-sm">
                    {photo.category}
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