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
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Get In Touch</h2>
            <div className="w-16 h-px bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-lg mx-auto font-light">
              Have a project in mind or want to discuss DevOps/MLOps solutions? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light text-black mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1 text-black">Email</h4>
                    <p className="text-gray-600">alex@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1 text-black">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-light mb-1 text-black">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-light text-black mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="bg-gray-100 border border-gray-200 p-3 rounded-full hover:border-gray-300 transition-colors"
                  >
                    <Linkedin className="text-black" size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="bg-gray-100 border border-gray-200 p-3 rounded-full hover:border-gray-300 transition-colors"
                  >
                    <Github className="text-black" size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="bg-gray-100 border border-gray-200 p-3 rounded-full hover:border-gray-300 transition-colors"
                  >
                    <Twitter className="text-black" size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-light text-black mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-light text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-light text-gray-700">
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
                    className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-light text-gray-700">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    required
                    className="bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-400 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white w-full flex items-center gap-2 font-light"
                >
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
