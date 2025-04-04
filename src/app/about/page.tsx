"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">About FLOWEASE</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Revolutionizing period care with natural, effective solutions for menstrual wellness.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-600 mb-4">
              FLOWEASE was born from a simple yet powerful idea: periods are not meant be painful or disruptive. Our
              founder, Vrinda,struggled with severe menstrual symptoms for years and found that traditional remedies
              often came with unwanted side effects.
            </p>
            <p className="text-gray-600 mb-4">
              After researching natural alternatives and consulting with herbalists and nutritionists, she developed a
              series of herbal drink blends that dramatically improved her symptoms. Inspired by her own transformation,
              she decided to share these formulations with others.
            </p>
            <p className="text-gray-600">
              Today, FLOWEASE is dedicated to helping women everywhere experience more comfortable, balanced periods
              through our carefully crafted drink sachets that combine ancient wisdom with modern nutritional science.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/founder.jpg"
                alt="FLOWEASE Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
          </motion.div>
        </div>

        {/* Our Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl mb-16"
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            At FLOWEASE, we believe that every woman deserves to experience her period with comfort and ease. Our
            mission is to revolutionize period care by providing natural, effective solutions that address the root
            causes of menstrual discomfort, not just mask the symptoms.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-pink-600 mb-2">Educate</h3>
              <p className="text-gray-600">
                Empower women with knowledge about their menstrual cycles and natural remedies.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-pink-600 mb-2">Innovate</h3>
              <p className="text-gray-600">
                Continuously research and develop new formulations based on scientific evidence.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-pink-600 mb-2">Support</h3>
              <p className="text-gray-600">Create a community where women can share experiences and find support.</p>
            </div>
          </div>
        </motion.div>

        {/* Our Ingredients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Our Ingredients</h2>
          <p className="text-gray-600 mb-8">
            We believe in transparency and quality. All our ingredients are carefully sourced, ethically harvested, and
            rigorously tested for purity and potency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Ginger Root", benefit: "Anti-inflammatory, reduces cramps" },
              { name: "Raspberry Leaf", benefit: "Uterine tonic, hormone balance" },
              { name: "Turmeric", benefit: "Reduces inflammation and pain" },
              { name: "Chamomile", benefit: "Calming, reduces anxiety" },
              { name: "Ashwagandha", benefit: "Adaptogen, stress reduction" },
              { name: "Dandelion Root", benefit: "Reduces bloating, liver support" },
              { name: "Cinnamon", benefit: "Improves circulation, warming" },
              { name: "Lemon Balm", benefit: "Mood support, gentle relaxant" },
            ].map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-pink-50 p-4 rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="font-bold text-purple-700">{ingredient.name}</h3>
                <p className="text-sm text-gray-600">{ingredient.benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-pink-50 p-8 rounded-2xl shadow-md"
        >
          <h2 className="section-title">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            We would love to hear from you! Reach out with questions, feedback, or just to say hello.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:Flowease25@gmail.com"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-pink-100 transition-colors"
            >
              <Mail size={32} className="text-pink-500 mb-4" />
              <h3 className="font-bold text-purple-700 mb-2">Email Us</h3>
              <p className="text-gray-600 text-center">Flowease25@gmail.com</p>
            </a>
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-pink-100 transition-colors"
            >
              <Phone size={32} className="text-pink-500 mb-4" />
              <h3 className="font-bold text-purple-700 mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">+91 9529443859</p>
            </a>
            <a
              href="https://www.instagram.com/flowease._?igsh=MTl6cHc1dmd3NzRhbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl hover:bg-pink-100 transition-colors"
            >
              <Instagram size={32} className="text-pink-500 mb-4" />
              <h3 className="font-bold text-purple-700 mb-2">Follow Us</h3>
              <p className="text-gray-600 text-center">@flowease._</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}