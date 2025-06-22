"use client"

import { motion } from "framer-motion"
import { Code, GitBranch, Database, Cloud, Cpu, LineChart } from "lucide-react"

export default function About() {
  const skills = [
    { name: "Infrastructure as Code", icon: <Code className="text-slate-50" size={24} /> },
    { name: "CI/CD Pipelines", icon: <GitBranch className="text-slate-100 bg-black" size={24} /> },
    { name: "Container Orchestration", icon: <Cloud className="" size={24} /> },
    { name: "ML Operations", icon: <LineChart className="text-slate-100" size={24} /> },
    { name: "Data Engineering", icon: <Database className="text-slate-100" size={24} /> },
    { name: "High-Performance Computing", icon: <Cpu className="text-slate-100" size={24} /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">About</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white">Philosophy</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                I believe in building systems that scale effortlessly and operate reliably. My approach combines deep
                technical expertise with a focus on elegant, maintainable solutions that empower teams to move faster.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                Specializing in the intersection of DevOps and machine learning, I architect infrastructure that can
                handle the unique demands of AI workloads while maintaining operational excellence.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white">Expertise</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>• Kubernetes cluster design and optimization</li>
                <li>• GPU-accelerated ML pipeline architecture</li>
                <li>• Multi-cloud infrastructure automation</li>
                <li>• Distributed system performance tuning</li>
                <li>• Real-time data processing at scale</li>
                <li>• Security-first DevOps practices</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h4 className="font-light text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
