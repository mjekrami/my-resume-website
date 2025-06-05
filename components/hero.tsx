"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("DevOps & MLOps Engineer")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 80)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-black">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 max-w-4xl"
      >
        {/* Clean greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg mb-6 font-light"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Alex Chen
        </motion.h1>

        {/* Role with typing effect */}
        <motion.div
          className="text-2xl md:text-3xl mb-12 h-12 flex items-center justify-center font-light text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span>{text}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="text-amber-400 ml-1"
          >
            |
          </motion.span>
        </motion.div>

        {/* Minimal description */}
        <motion.p
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Specializing in scalable infrastructure, ML operations, and high-performance computing systems. Building the
          future of distributed computing with precision and elegance.
        </motion.p>

        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-3 text-base font-light rounded-full transition-all duration-300"
            onClick={() => {
              document.getElementById("compute-section")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer text-gray-500"
          onClick={() => {
            document.getElementById("compute-section")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
