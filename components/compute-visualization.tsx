"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ComputeVisualization() {
  const [activeWarp, setActiveWarp] = useState(0)

  // Create compute cores grid (32x16 = 512 cores, typical GPU configuration)
  const cores = Array.from({ length: 512 }, (_, i) => ({
    id: i,
    x: i % 32,
    y: Math.floor(i / 32),
    warp: Math.floor(i / 32), // 32 threads per warp
    active: false,
  }))

  // Simulate warp execution cycles
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWarp((prev) => (prev + 1) % 16)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // Data flow vectors
  const dataVectors = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
  }))

  return (
    <section id="compute-section" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Parallel Computing Architecture</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Leveraging massively parallel processing, vectorized operations, and distributed computing to accelerate
            machine learning workloads at scale.
          </p>
        </motion.div>

        {/* Main compute grid visualization */}
        <div className="relative">
          {/* Compute cores grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-32 gap-1 max-w-4xl mx-auto mb-12"
            style={{ gridTemplateColumns: "repeat(32, 1fr)" }}
          >
            {cores.map((core) => (
              <motion.div
                key={core.id}
                className={`aspect-square rounded-sm transition-all duration-300 ${
                  core.warp === activeWarp
                    ? "bg-amber-400 shadow-lg shadow-amber-400/20"
                    : "bg-gray-200 border border-gray-300"
                }`}
                animate={{
                  scale: core.warp === activeWarp ? 1.1 : 1,
                  opacity: core.warp === activeWarp ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {/* Warp execution indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-mono text-gray-600 mb-2">
              WARP {activeWarp.toString().padStart(2, "0")} EXECUTING
            </p>
            <div className="flex justify-center">
              <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400"
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
          </motion.div>

          {/* Data flow vectors */}
          <div className="absolute inset-0 pointer-events-none">
            {dataVectors.map((vector) => (
              <motion.div
                key={vector.id}
                className="absolute left-0 top-1/2 w-full h-px"
                style={{ top: `${20 + vector.id * 10}%` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: vector.delay }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 3,
                    delay: vector.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Matrix transformation visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Input matrix */}
          <div className="text-center">
            <h3 className="text-lg font-light text-black mb-4">Input Data</h3>
            <div className="grid grid-cols-4 gap-2 max-w-32 mx-auto">
              {Array.from({ length: 16 }, (_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-gray-300 border border-gray-400 rounded"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Transformation arrow */}
          <div className="flex items-center justify-center">
            <motion.div
              className="text-4xl text-gray-600"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.div>
          </div>

          {/* Output matrix */}
          <div className="text-center">
            <h3 className="text-lg font-light text-black mb-4">Processed Output</h3>
            <div className="grid grid-cols-4 gap-2 max-w-32 mx-auto">
              {Array.from({ length: 16 }, (_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-black rounded shadow-sm"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: "Compute Cores", value: "512", unit: "cores" },
            { label: "Memory Bandwidth", value: "1.5", unit: "TB/s" },
            { label: "Parallel Threads", value: "16K", unit: "threads" },
            { label: "Processing Speed", value: "10x", unit: "faster" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="text-3xl font-light text-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
              >
                {metric.value}
                <span className="text-lg text-gray-500 ml-1">{metric.unit}</span>
              </motion.div>
              <p className="text-gray-600 font-light">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(180deg, #000 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </section>
  )
}
