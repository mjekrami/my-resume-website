"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ComputeVisualization() {
  const [activeWarp, setActiveWarp] = useState(0)
  const [mpiRank, setMpiRank] = useState(0)
  const [sparkJob, setSparkJob] = useState(0)

  // Create smaller compute cores grid (16x8 = 128 cores)
  const cores = Array.from({ length: 128 }, (_, i) => ({
    id: i,
    x: i % 16,
    y: Math.floor(i / 16),
    warp: Math.floor(i / 16),
    active: false,
  }))

  // Simulate warp execution, MPI rank cycling, and Spark job processing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWarp((prev) => (prev + 1) % 8)
      setMpiRank((prev) => (prev + 1) % 4)
      setSparkJob((prev) => (prev + 1) % 3)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="compute-section" className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">Distributed Computing & Data Engineering</h2>
          <div className="w-12 h-px bg-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-light leading-relaxed">
            High-performance computing with OpenMPI, Apache Spark, GPU acceleration, and cloud-native DevOps pipelines
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left side - GPU Compute Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* GPU Cores Grid */}
            <div className="text-center">
              <h3 className="text-lg font-light text-black mb-4">GPU Compute Cores</h3>
              <div className="grid gap-1 max-w-sm mx-auto mb-4" style={{ gridTemplateColumns: "repeat(16, 1fr)" }}>
                {cores.map((core) => (
                  <motion.div
                    key={core.id}
                    className={`aspect-square rounded-sm transition-all duration-300 ${
                      core.warp === activeWarp ? "bg-amber-400 shadow-sm" : "bg-gray-200 border border-gray-300"
                    }`}
                    animate={{
                      scale: core.warp === activeWarp ? 1.1 : 1,
                      opacity: core.warp === activeWarp ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <p className="text-xs font-mono text-gray-600">WARP {activeWarp} EXECUTING • 128 CORES</p>
            </div>

            {/* MPI Cluster Visualization */}
            <div className="text-center">
              <h3 className="text-lg font-light text-black mb-4">OpenMPI Cluster</h3>
              <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
                {Array.from({ length: 4 }, (_, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded border text-center ${
                      i === mpiRank
                        ? "bg-amber-400 border-amber-500 text-black"
                        : "bg-gray-100 border-gray-300 text-gray-600"
                    }`}
                    animate={{
                      scale: i === mpiRank ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs font-mono">RANK {i}</div>
                    <div className="text-xs mt-1">{i === mpiRank ? "ACTIVE" : "IDLE"}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs font-mono text-gray-600 mt-2">MPI_COMM_WORLD • 4 PROCESSES</p>
            </div>
          </motion.div>

          {/* Middle - Spark Data Processing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Spark Jobs */}
            <div className="text-center">
              <h3 className="text-lg font-light text-black mb-4">Apache Spark Jobs</h3>
              <div className="space-y-3">
                {["ETL Pipeline", "ML Training", "Stream Processing"].map((job, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded border text-center ${
                      i === sparkJob
                        ? "bg-amber-400 border-amber-500 text-black"
                        : "bg-gray-100 border-gray-300 text-gray-600"
                    }`}
                    animate={{
                      scale: i === sparkJob ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm font-mono">{job}</div>
                    <div className="text-xs mt-1">{i === sparkJob ? "RUNNING" : "QUEUED"}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs font-mono text-gray-600 mt-2">SPARK CLUSTER • 8 EXECUTORS</p>
            </div>

            {/* Data Flow Pipeline */}
            <div className="text-center">
              <h3 className="text-lg font-light text-black mb-4">Data Pipeline</h3>
              <div className="flex justify-center items-center space-x-2">
                {["Ingest", "Transform", "Load"].map((stage, i) => (
                  <div key={i} className="flex items-center">
                    <motion.div
                      className="w-16 h-8 bg-gray-200 border border-gray-300 rounded flex items-center justify-center"
                      animate={{
                        backgroundColor: i <= sparkJob ? "#fbbf24" : "#e5e7eb",
                        borderColor: i <= sparkJob ? "#f59e0b" : "#d1d5db",
                      }}
                    >
                      <span className="text-xs font-mono">{stage}</span>
                    </motion.div>
                    {i < 2 && <div className="w-4 h-px bg-gray-300 mx-1"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - DevOps & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Throughput", value: "2.1", unit: "GB/s" },
                { label: "Latency", value: "15", unit: "ms" },
                { label: "Uptime", value: "99.9", unit: "%" },
                { label: "Nodes", value: "256", unit: "active" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 border border-gray-200 rounded-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                >
                  <div className="text-lg font-light text-black mb-1">
                    {metric.value}
                    <span className="text-xs text-gray-500 ml-1">{metric.unit}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-light text-black">Tech Stack</h3>
              <div className="space-y-2">
                {[
                  { name: "Apache Spark", desc: "Distributed Data Processing", category: "data" },
                  { name: "Kubernetes", desc: "Container Orchestration", category: "devops" },
                  { name: "CUDA", desc: "GPU Computing Platform", category: "hpc" },
                  { name: "Kafka", desc: "Stream Processing", category: "data" },
                  { name: "Terraform", desc: "Infrastructure as Code", category: "devops" },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center p-2 border border-gray-200 rounded"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div>
                      <div className="font-mono text-sm text-black">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.desc}</div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        tech.category === "data"
                          ? "bg-blue-400"
                          : tech.category === "devops"
                            ? "bg-green-400"
                            : "bg-amber-400"
                      }`}
                    ></div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center space-x-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600">Data Eng</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-600">DevOps</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-600">HPC</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data Flow Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center items-center space-x-4">
            <span className="text-xs font-mono text-gray-600">CI/CD PIPELINE</span>
            <div className="w-32 h-px bg-gray-300 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <span className="text-xs font-mono text-gray-600">DATA PROCESSING</span>
            <div className="w-32 h-px bg-gray-300 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <span className="text-xs font-mono text-gray-600">GPU COMPUTE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
