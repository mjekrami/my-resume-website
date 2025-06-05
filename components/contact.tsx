"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

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
    <section id="contact" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-lg mx-auto">
            Have a project in mind or want to discuss DevOps/MLOps solutions? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/20 p-3 rounded-full">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">alex@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/20 p-3 rounded-full">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/20 p-3 rounded-full">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                  <Linkedin className="text-cyan-400" size={20} />
                </motion.a>
                <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                  <Github className="text-cyan-400" size={20} />
                </motion.a>
                <motion.a href="#" whileHover={{ y: -3, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                  <Twitter className="text-cyan-400" size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss a project..."
                  required
                  className="bg-gray-800/50 border-gray-700 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 w-full flex items-center gap-2">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
