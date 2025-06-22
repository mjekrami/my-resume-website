"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
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

          <div className="flex justify-center">
            <div className="max-w-md">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-light text-black mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-light mb-1 text-black">Email</h4>
                      <p className="text-gray-600">ekrami.devops@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-light mb-1 text-black">Location</h4>
                      <p className="text-gray-600">Istanbul</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-light mb-1 text-black">Phone</h4>
                      <p className="text-gray-600">+989120241686</p>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
