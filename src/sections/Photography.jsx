import { useState } from "react"
import { motion } from "framer-motion"

import photos from "../data/photos"

export default function Photography() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section
      id="photography"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Photography
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Visual Stories
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
              Capturing cinematic moments, emotions, street life,
              portraits, and timeless visual stories through photography.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {photos.map((photo, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(photo.image)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
              >

                <img
                  src={photo.image}
                  alt={photo.category}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110 hover:brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>

                <div className="absolute bottom-0 left-0 p-6 z-10">

                  <p className="text-cyan-400 text-sm uppercase tracking-[0.2em] mb-2">
                    {photo.category}
                  </p>

                  <h3 className="text-white text-2xl font-bold">
                    Visual Story
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-6"
        >

          <img
            src={selectedImage}
            alt={photo.category}
            className="max-w-full max-h-full rounded-2xl"
          />

        </div>

      )}

    </section>
  )
}