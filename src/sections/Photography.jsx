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

          <p className="text-cyan-400 uppercase tracking-widest mb-4">
            Photography
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Capturing Stories Through Lens
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {photos.map((photo, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(photo.image)}
                className="relative overflow-hidden rounded-3xl group cursor-pointer"
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

      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-6"
        >

          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-full rounded-2xl"
          />

        </div>

      )}

    </section>
  )
}