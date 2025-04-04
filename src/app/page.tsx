"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import LogoSection from "@/app/components/LogoSection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="pt-16">
      <LogoSection />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Embrace Your Cycle</h2>
              <p className="text-gray-600 mb-6">
                FLOWEASE is dedicated to transforming your period experience with our innovative, natural drink sachets
                designed specifically for menstrual wellness.
              </p>
              <p className="text-gray-600 mb-6">
                Our carefully formulated blends combine traditional herbal wisdom with modern nutritional science to
                provide relief, balance, and comfort during your monthly cycle.
              </p>
              <Link href="/products" className="btn-primary inline-block">
                Explore Our Products
              </Link>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="FLOWEASE Product Sachets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Why Choose FLOWEASE?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our period care drinks are formulated to address the specific challenges of your menstrual cycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Relief",
                description:
                  "Our formulas use natural ingredients known for their anti-inflammatory and pain-relieving properties.",
                icon: "🌿",
              },
              {
                title: "Hormone Balance",
                description:
                  "Support your body's natural hormonal fluctuations with adaptogens and hormone-balancing herbs.",
                icon: "⚖️",
              },
              {
                title: "Mood Support",
                description: "Ingredients selected to help stabilize mood swings and reduce stress during your cycle.",
                icon: "😌",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Understanding Your Cycle</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Knowledge is power. Learn about your menstrual cycle and how our products can support you through each
              phase.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-4">The Four Phases of Your Cycle</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-pink-600">Menstrual Phase (Days 1-5)</h4>
                    <p className="text-gray-600">
                      When your period begins. Our Comfort Blend helps ease cramps and provides iron support.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-pink-600">Follicular Phase (Days 6-14)</h4>
                    <p className="text-gray-600">
                      Estrogen rises. Our Energy Blend supports increased energy and mental clarity.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-pink-600">Ovulatory Phase (Day 14)</h4>
                    <p className="text-gray-600">Peak fertility. Our Balance Blend supports optimal hormone balance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-pink-600">Luteal Phase (Days 15-28)</h4>
                    <p className="text-gray-600">
                      PMS symptoms may appear. Our Calm Blend helps reduce bloating and mood swings.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-purple-700 mb-4">Common Menstrual Symptoms & Support</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-bold text-pink-600">Cramps & Pain</h4>
                  <p className="text-gray-600">
                    Our drinks contain ginger and turmeric, natural anti-inflammatories that help reduce prostaglandins
                    responsible for cramps.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-bold text-pink-600">Bloating</h4>
                  <p className="text-gray-600">
                    Dandelion root and peppermint in our formulas help reduce water retention and soothe digestive
                    discomfort.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-bold text-pink-600">Mood Swings</h4>
                  <p className="text-gray-600">
                    Adaptogens like ashwagandha and mood-supporting herbs like lemon balm help stabilize emotions.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-bold text-pink-600">Fatigue</h4>
                  <p className="text-gray-600">
                    B vitamins and iron-rich herbs help combat period-related fatigue and boost energy levels naturally.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
              Ready to Transform Your Period Experience?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of women who have discovered the natural way to period comfort with FLOWEASE.
            </p>
            <Link href="/products" className="btn-primary inline-block">
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

