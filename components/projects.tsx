"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Zap, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "GPU-Accelerated ML Pipeline",
      description:
        "Built an end-to-end ML pipeline using Kubeflow on GCP with NVIDIA GPU clusters, automating the training, validation, and deployment of recommendation models with 10x performance improvement.",
      category: "mlops",
      tags: ["Kubeflow", "CUDA", "GCP", "GPU Clusters"],
      github: "#",
      demo: "#",
      isGpuProject: true,
    },
    {
      id: 2,
      title: "Parallel Kubernetes Optimization",
      description:
        "Designed and implemented a cost-effective Kubernetes cluster with parallel processing capabilities for a fintech company, reducing cloud costs by 40% while improving performance through distributed computing.",
      category: "devops",
      tags: ["Kubernetes", "Terraform", "AWS", "Parallel Processing"],
      github: "#",
      demo: "#",
      isGpuProject: true,
    },
    {
      id: 3,
      title: "Real-time GPU Model Serving",
      description:
        "Created a scalable real-time ML model serving platform using NVIDIA Triton and Redis, handling 10k+ requests per second with GPU acceleration and low latency parallel inference.",
      category: "mlops",
      tags: ["Triton", "GPU", "Redis", "Parallel Inference"],
      github: "#",
      demo: "#",
      isGpuProject: true,
    },
    {
      id: 4,
      title: "Distributed GitOps Pipeline",
      description:
        "Implemented a GitOps workflow using ArgoCD and GitHub Actions with parallel deployment strategies, enabling automated deployments across multiple GPU clusters with rollback capabilities.",
      category: "devops",
      tags: ["ArgoCD", "GitHub Actions", "Helm", "Distributed Systems"],
      github: "#",
      demo: "#",
      isGpuProject: false,
    },
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
    <section id="projects" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Projects</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -5 }} className="overflow-hidden">
                <Card className="bg-white border-gray-200 overflow-hidden h-full flex flex-col relative hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* GPU Project Indicator */}
                  {project.isGpuProject && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-amber-400/20 px-2 py-1 rounded-full">
                      <Zap className="text-amber-600" size={12} />
                      <span className="text-amber-600 text-xs font-mono">GPU</span>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-xl text-black flex items-center gap-2">
                      {project.title}
                      {project.isGpuProject && <Grid3X3 className="text-amber-600" size={16} />}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`inline-block text-xs px-2 py-1 rounded mr-2 mb-2 ${tag.includes("GPU") ||
                            tag.includes("CUDA") ||
                            tag.includes("Parallel") ||
                            tag.includes("Triton")
                            ? "bg-amber-100 text-amber-700 border border-amber-200"
                            : "bg-gray-100 text-gray-700 border border-gray-200"
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 font-light">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-black/20 text-black hover:bg-black/5 bg-transparent"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-black/20 text-black hover:bg-black/5 bg-transparent"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

