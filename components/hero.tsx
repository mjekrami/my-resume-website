"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Terminal, Database, Server, Code, Cloud, Cpu } from "lucide-react"
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
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }))

  const floatingIcons = [
    { icon: Terminal, delay: 0.5 },
    { icon: Database, delay: 1 },
    { icon: Server, delay: 1.5 },
    { icon: Code, delay: 2 },
    { icon: Cloud, delay: 2.5 },
    { icon: Cpu, delay: 3 },
  ]

  return (
    <section className="h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              className="absolute text-cyan-400/20"
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + (index % 2) * 60}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + index * 0.5,
                delay: item.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon size={40} />
            </motion.div>
          )
        })}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Greeting with wave animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-lg md:text-xl text-gray-300">
            Hello there!
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              👋
            </motion.span>
          </span>
        </motion.div>

        {/* Name with gradient animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          I'm{" "}
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Alex
          </motion.span>
        </motion.h1>

        {/* Typing animation for role */}
        <motion.h2
          className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="text-white">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="text-cyan-400 ml-1"
          >
            |
          </motion.span>
        </motion.h2>

        {/* Animated skill badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { icon: Terminal, text: "CI/CD", delay: 0 },
            { icon: Database, text: "ML Pipelines", delay: 0.1 },
            { icon: Server, text: "Infrastructure", delay: 0.2 },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5 + item.delay, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)",
                  borderColor: "rgba(34, 211, 238, 0.3)",
                }}
              >
                <Icon className="text-cyan-400" size={20} />
                <span>{item.text}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button with pulse effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="relative border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg overflow-hidden group"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <motion.div
                className="absolute inset-0 bg-cyan-400/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">View My Work</span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <ArrowDown className="text-cyan-400" size={24} />
        </motion.div>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20 pointer-events-none" />
    </section>
  )
}
