"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Data/MLOps Engineer",
      company: "Snapp",
      location: "Istanbul, Turkey",
      period: "2024 - Present",
      teamSize: "N/A",
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
      description:
        "Implemented unified monitoring with Grafana/Cloudflare, automated infra with Ansible/Terraform, and conducted VM security hardening.",
      achievements: [
        "Provisioned 30+ secure VMs",
        "Deployed unified observability with Grafana/Cloudflare",
        "Automated Docker infrastructure for CTF with 98% uptime",
      ],
    },
  ];

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
    <section id="experience" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Experience</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line - centered */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div key={exp.id} variants={itemVariants} className="relative">
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute top-8 w-4 h-4 rounded-full bg-amber-400 border-4 border-black z-10 ${index % 2 === 0
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
                      className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
                        {/* Period badge */}
                        <motion.div
                          className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-4"
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </motion.div>

                        {/* Role and company */}
                        <motion.h3
                          className="text-xl md:text-2xl font-light mb-2 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {exp.role}
                        </motion.h3>

                        <motion.h4
                          className="text-gray-300 font-light mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {exp.company}
                        </motion.h4>

                        {/* Location and team size */}
                        <motion.div
                          className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400"
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
                          className="text-gray-400 mb-4 leading-relaxed font-light"
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
                          <h5 className="font-light mb-2 text-white">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="text-gray-400 text-sm flex items-start gap-2 font-light"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 + i * 0.1 }}
                              >
                                <span className="text-white mt-1">•</span>
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
      </div>
    </section>
  )
}
