import { motion } from "framer-motion"

export default function Loader() {
  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]"
    >

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-transparent bg-clip-text"
        >
          Arafat
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5 }}
          className="h-[3px] bg-cyan-400 mx-auto mt-8 rounded-full"
        />

      </div>

    </motion.div>
  )
}