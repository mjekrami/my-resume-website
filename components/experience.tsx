"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Users, Cpu, Network, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeNode, setActiveNode] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"],
  })

  const experiences = [
    {
      id: 1,
      role: "Senior Data/MLOps Engineer",
      company: "Snapp",
      location: "Istanbul, Turkey",
      period: "2024 - Present",
      teamSize: "N/A",
      nodeStatus: "ACTIVE",
      computeLoad: "87%",
      description:
        "Redesigned data infrastructure with Medalion Architecture, optimized processing with Scala/Spark, and deployed scalable data warehouse and stream processing systems.",
      achievements: [
        "Improved Spark job performance by 50% with Scala refactor",
        "Implemented Kafka CDC with Debezium",
        "Set up Clickhouse for high-throughput enquiry services",
      ],
    },
    {
      id: 2,
      role: "DevOps Engineer",
      company: "VoxSolutions",
      location: "Bucharest (Remote)",
      period: "2022 - 2024",
      teamSize: "N/A",
      nodeStatus: "IDLE",
      computeLoad: "23%",
      description:
        "Led cloud-native migration to Kubernetes, CI/CD with ArgoCD, infrastructure automation, and performance monitoring in a multi-cloud, multi-cluster environment.",
      achievements: [
        "Migrated from Docker Swarm to Kubernetes",
        "Reduced delivery time by 5x with CI/CD pipelines",
        "Improved MySQL query time by 10x and MongoDB analytics by 54x",
      ],
    },
    {
      id: 3,
      role: "DevOps Engineer",
      company: "Driverly-Insurance",
      location: "Cardiff (Remote)",
      period: "2022",
      teamSize: "N/A",
      nodeStatus: "COMPLETED",
      computeLoad: "0%",
      description:
        "Implemented secure Azure integrations, simplified deployment with IaC (Bicep, ARM), and centralized logging.",
      achievements: [
        "Integrated Azure AD with Postgres server",
        "Reduced deployment complexity with Bicep/ARM",
        "Centralized logging via Azure Workspace",
      ],
    },
    {
      id: 4,
      role: "DevOps Engineer",
      company: "UID",
      location: "N/A",
      period: "2021 - 2022",
      teamSize: "N/A",
      nodeStatus: "COMPLETED",
      computeLoad: "0%",
      description:
        "Delivered resilient infrastructure for Java/Python applications, enhanced DB security, and transitioned to microservices architecture.",
      achievements: [
        "Maintained 99% uptime for core applications",
        "Migrated monolith to microservices",
        "Secured Oracle DB operations",
      ],
    },
    {
      id: 5,
      role: "DevOps Engineer",
      company: "Nordic Defender",
      location: "Stockholm (Remote)",
      period: "2019 - 2021",
      teamSize: "N/A",
      nodeStatus: "COMPLETED",
      computeLoad: "0%",
      description:
        "Implemented unified monitoring with Grafana/Cloudflare, automated infra with Ansible/Terraform, and conducted VM security hardening.",
      achievements: [
        "Provisioned 30+ secure VMs",
        "Deployed unified observability with Grafana/Cloudflare",
        "Automated Docker infrastructure for CTF with 98% uptime",
      ],
    },
  ]

  // Update active node based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalNodes = experiences.length
      const nodeIndex = Math.min(Math.floor(latest * totalNodes), totalNodes - 1)
      setActiveNode(nodeIndex)
    })
    return unsubscribe
  }, [scrollYProgress, experiences.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Generate complete zigzag path that spans the entire section
  const generateZigzagPath = () => {
    const totalHeight = experiences.length * 400 + 200 // Extra padding
    const centerX = 400
    const amplitude = 150
    const segmentHeight = totalHeight / (experiences.length + 1)

    let path = `M ${centerX} 50` // Start from top

    // Create zigzag pattern through all nodes
    for (let i = 0; i <= experiences.length; i++) {
      const y = 50 + (i + 1) * segmentHeight
      const x = centerX + (i % 2 === 0 ? amplitude : -amplitude)

      // Use smooth curves for the zigzag
      const controlY = 50 + i * segmentHeight + segmentHeight / 2
      path += ` Q ${centerX} ${controlY} ${x} ${y}`
    }

    return path
  }

  // Calculate node positions along the zigzag
  const getNodePosition = (index: number) => {
    const totalHeight = experiences.length * 400 + 200
    const centerX = 400
    const amplitude = 150
    const segmentHeight = totalHeight / (experiences.length + 1)

    const y = 50 + (index + 1) * segmentHeight
    const x = centerX + (index % 2 === 0 ? amplitude : -amplitude)

    return { x, y }
  }

  const getNodeStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "text-amber-400 bg-amber-400/20"
      case "IDLE":
        return "text-blue-400 bg-blue-400/20"
      case "COMPLETED":
        return "text-green-400 bg-green-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  return (
    <section ref={containerRef} id="experience" className="py-24 px-4 bg-black relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">HPC Career Network</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono text-sm">
              Distributed Computing Experience • {experiences.length} Nodes • Active Cluster
            </p>
          </motion.div>

          {/* Complete SVG Zigzag Path */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <svg
              width="800"
              height={experiences.length * 400 + 400}
              className="absolute top-0"
              viewBox={`0 0 800 ${experiences.length * 400 + 400}`}
            >
              {/* Background zigzag path */}
              <path
                d={generateZigzagPath()}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8,4"
              />

              {/* Animated progress path */}
              <motion.path
                d={generateZigzagPath()}
                stroke="rgb(251, 191, 36)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                pathLength="1"
                style={{
                  pathLength: useTransform(scrollYProgress, [0, 1], [0, 1]),
                }}
                initial={{ pathLength: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Node circles on the path */}
              {experiences.map((exp, index) => {
                const { x, y } = getNodePosition(index)
                return (
                  <motion.circle
                    key={exp.id}
                    cx={x}
                    cy={y}
                    r="8"
                    fill={activeNode >= index ? "rgb(251, 191, 36)" : "rgba(255,255,255,0.2)"}
                    stroke="rgb(0,0,0)"
                    strokeWidth="3"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: activeNode === index ? 1.5 : 1,
                      fill: activeNode >= index ? "rgb(251, 191, 36)" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )
              })}

              {/* Connection pulses for active node */}
              {experiences.map((exp, index) => {
                if (activeNode !== index) return null
                const { x, y } = getNodePosition(index)
                return (
                  <motion.circle
                    key={`pulse-${exp.id}`}
                    cx={x}
                    cy={y}
                    r="20"
                    fill="none"
                    stroke="rgba(251, 191, 36, 0.3)"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )
              })}
            </svg>
          </div>

          {/* Experience cards positioned relative to zigzag */}
          <div className="relative space-y-32 mt-20">
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative">
                {/* Content card positioned based on zigzag */}
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <motion.div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                    animate={{
                      scale: activeNode === index ? 1.05 : 1,
                      boxShadow:
                        activeNode === index
                          ? "0 20px 40px rgba(251, 191, 36, 0.2)"
                          : "0 10px 20px rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`backdrop-blur-sm p-6 rounded-xl border shadow-xl ${
                        activeNode === index ? "bg-white/10 border-amber-400/30" : "bg-white/5 border-white/10"
                      }`}
                    >
                      {/* Node header with HPC styling */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ${getNodeStatusColor(exp.nodeStatus)}`}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Cpu size={12} />
                          <span>NODE-{String(index + 1).padStart(2, "0")}</span>
                          <span className="text-white/60">•</span>
                          <span>{exp.nodeStatus}</span>
                        </motion.div>

                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                          <Network size={12} />
                          <span>Load: {exp.computeLoad}</span>
                        </div>
                      </div>

                      {/* Period badge */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </motion.div>

                      {/* Role and company */}
                      <motion.h3
                        className="text-xl md:text-2xl font-light mb-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {exp.role}
                      </motion.h3>

                      <motion.h4
                        className="text-gray-300 font-light mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {exp.company}
                      </motion.h4>

                      {/* Location and team size */}
                      <motion.div
                        className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{exp.teamSize}</span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-400 mb-4 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Zap size={16} className="text-amber-400" />
                          <h5 className="font-light text-white">Performance Optimizations:</h5>
                        </div>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-gray-400 text-sm flex items-start gap-2 font-light"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.0 + i * 0.1 }}
                            >
                              <span className="text-amber-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
