"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior MLOps Engineer",
      company: "TechInnovate AI",
      location: "San Francisco, CA",
      period: "2021 - Present",
      teamSize: "8 people",
      description:
        "Lead the MLOps team in designing and implementing scalable ML pipelines. Reduced model deployment time from days to hours and improved model performance monitoring.",
      achievements: [
        "Reduced deployment time by 85%",
        "Implemented automated model monitoring",
        "Led team of 8 engineers",
      ],
    },
    {
      id: 2,
      role: "DevOps Engineer",
      company: "CloudScale Solutions",
      location: "Seattle, WA",
      period: "2019 - 2021",
      teamSize: "12 people",
      description:
        "Managed Kubernetes clusters across multiple cloud providers. Implemented GitOps workflows and automated infrastructure provisioning using Terraform and Ansible.",
      achievements: [
        "Managed 50+ Kubernetes clusters",
        "Implemented GitOps workflows",
        "Reduced infrastructure costs by 40%",
      ],
    },
    {
      id: 3,
      role: "Cloud Infrastructure Engineer",
      company: "DataDriven Tech",
      location: "Austin, TX",
      period: "2017 - 2019",
      teamSize: "6 people",
      description:
        "Designed and maintained cloud infrastructure on AWS. Implemented CI/CD pipelines using Jenkins and AWS CodePipeline for microservices architecture.",
      achievements: ["Built CI/CD for 20+ microservices", "Achieved 99.9% uptime", "Automated deployment processes"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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

  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line - centered */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative">
                {/* Timeline dot */}
                <motion.div
                  className={`absolute top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-900 z-10 ${
                    index % 2 === 0
                      ? "left-1 md:left-1/2 md:-translate-x-1/2"
                      : "left-1 md:left-1/2 md:-translate-x-1/2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                />

                {/* Content card */}
                <div className={`flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <motion.div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl">
                      {/* Period badge */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm mb-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </motion.div>

                      {/* Role and company */}
                      <motion.h3
                        className="text-xl md:text-2xl font-bold mb-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {exp.role}
                      </motion.h3>

                      <motion.h4
                        className="text-cyan-400 font-semibold mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {exp.company}
                      </motion.h4>

                      {/* Location and team size */}
                      <motion.div
                        className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
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
                        className="text-gray-300 mb-4 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        {exp.description}
                      </motion.p>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h5 className="font-semibold mb-2 text-cyan-400">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="text-gray-300 text-sm flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.9 + i * 0.1 }}
                            >
                              <span className="text-cyan-400 mt-1">•</span>
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
        </div>
      </motion.div>
    </section>
  )
}
