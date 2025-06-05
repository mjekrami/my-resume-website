"use client"

import { motion } from "framer-motion"
import { Code, GitBranch, Database, Cloud, Cpu, LineChart } from "lucide-react"

export default function About() {
  const skills = [
    { name: "CI/CD Pipelines", icon: <GitBranch className="text-cyan-400" size={24} /> },
    { name: "Kubernetes", icon: <Cloud className="text-cyan-400" size={24} /> },
    { name: "Docker", icon: <Code className="text-cyan-400" size={24} /> },
    { name: "ML Pipelines", icon: <LineChart className="text-cyan-400" size={24} /> },
    { name: "Data Engineering", icon: <Database className="text-cyan-400" size={24} /> },
    { name: "MLOps", icon: <Cpu className="text-cyan-400" size={24} /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a DevOps and MLOps engineer with over 5 years of experience building and optimizing infrastructure for
              machine learning applications. I specialize in creating robust CI/CD pipelines, containerization, and
              automating ML workflows.
            </p>
            <p className="text-gray-300">
              My passion lies in bridging the gap between data science and operations, ensuring that ML models can be
              deployed efficiently and reliably at scale.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Expertise</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Designing and implementing CI/CD pipelines for ML applications</li>
              <li>• Kubernetes cluster management and optimization</li>
              <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>• ML model deployment and monitoring</li>
              <li>• Data pipeline automation</li>
              <li>• Cloud infrastructure (AWS, GCP, Azure)</li>
            </ul>
          </div>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-center mt-12 mb-8">
          My Skills
        </motion.h3>

        <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{skill.icon}</div>
              <h4 className="font-medium">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
