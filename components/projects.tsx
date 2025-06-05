"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "ML Pipeline Automation",
      description:
        "Built an end-to-end ML pipeline using Kubeflow on GCP, automating the training, validation, and deployment of recommendation models.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mlops",
      tags: ["Kubeflow", "TensorFlow", "GCP", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Kubernetes Cluster Optimization",
      description:
        "Designed and implemented a cost-effective Kubernetes cluster for a fintech company, reducing cloud costs by 40% while improving performance.",
      image: "/placeholder.svg?height=400&width=600",
      category: "devops",
      tags: ["Kubernetes", "Terraform", "AWS", "Prometheus"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Real-time ML Model Serving",
      description:
        "Created a scalable real-time ML model serving platform using KServe and Redis, handling 10k+ requests per second with low latency.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mlops",
      tags: ["KServe", "Redis", "Python", "Kubernetes"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "GitOps CI/CD Pipeline",
      description:
        "Implemented a GitOps workflow using ArgoCD and GitHub Actions, enabling automated deployments with rollback capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "devops",
      tags: ["ArgoCD", "GitHub Actions", "Helm", "Kubernetes"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

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
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={activeTab === "devops" ? "default" : "outline"}
              onClick={() => setActiveTab("devops")}
              className={activeTab === "devops" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
            >
              DevOps
            </Button>
            <Button
              variant={activeTab === "mlops" ? "default" : "outline"}
              onClick={() => setActiveTab("mlops")}
              className={activeTab === "mlops" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
            >
              MLOps
            </Button>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -5 }} className="overflow-hidden">
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="inline-block bg-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
