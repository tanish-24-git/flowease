"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import LogoSection from "@/app/components/LogoSection"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="pt-16">
      <LogoSection />

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-green-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">MEET FLOWEASE</h2>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Your new Period Bestie!</h3>
              <p className="mb-6">
                At FlowEase, we believe that menstrual care should be natural, effective, and actually make you feel
                good. Our expertly crafted drink mixes are packed with nourishing ingredients like hibiscus, ginger, and
                chamomile to help balance hormones, ease cramps, and keep you energized throughout your cycle.
              </p>
              <p className="mb-6">
                No more dreading that time of the month—just sip, relax, and let FlowEase take care of the rest. Because
                your period deserves better!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products" className="btn-primary inline-block bg-green-500 hover:bg-green-600">
                  Explore Our Products
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image src="/images/flowease-drink.png" alt="FLOWEASE Drink" fill className="object-cover" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why FlowEase Section */}
      <section className="py-16 bg-gradient-to-b from-green-100 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">WHY FLOWEASE?</h2>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Science-Backed Care for Your Cycle</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Your period deserves better than just painkillers and heating pads. FlowEase is a revolutionary drink
                mix crafted with nature's most powerful ingredients—hibiscus for hormonal balance, ginger to ease
                cramps, and chamomile to calm your body and mind.
              </p>
              <p className="text-gray-600">
                Backed by science and inspired by traditional remedies, our formula is designed to help you flow through
                your cycle with ease. No artificial additives, no harsh chemicals—just pure, effective, and delicious
                support for your body. Because self-care shouldn't stop when your period starts!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <div className="relative mx-auto max-w-md">
              <Image
                src="/images/flowease-ingredients.png"
                alt="FlowEase Ingredients"
                width={500}
                height={500}
                className="rounded-lg shadow-lg mx-auto"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-pink-100 rounded-full z-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Make Video Section - Instagram Reel Style */}
      <section className="py-16 bg-green-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ready to Transform</h2>
            <p className="text-gray-600">Watch how easy it is to prepare your FlowEase drink</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[400px] h-[70vh] bg-black rounded-3xl overflow-hidden shadow-2xl"
              style={{
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/flowease-preparation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Instagram-like UI elements */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-black/20 via-transparent to-black/40">
                <div className="flex justify-between items-center">
                  <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-1 text-white text-sm font-medium">
                    FlowEase
                  </div>
                  <div className="bg-black/30 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white text-xs">15s</span>
                  </div>
                </div>

                <div>
                  <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 mb-2">
                    <p className="text-white text-sm font-medium">How to prepare your FlowEase drink in seconds</p>
                  </div>
                  <motion.div
                    className="flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ChevronDown className="text-white h-6 w-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">OUR PRODUCTS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Herbal Support Drink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Herbal Support Drink</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Key Ingredients:</h4>
                    <p className="text-gray-600">
                      Ginger, turmeric, cinnamon, and peppermint. These ingredients can help with cramps, bloating, and
                      discomfort during menstruation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Flavor Profile:</h4>
                    <p className="text-gray-600">A calming blend of chamomile and lemon with a touch of honey.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Benefit Focus:</h4>
                    <p className="text-gray-600">Pain relief, bloating reduction, and overall menstrual comfort.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Detox and Cleanse Drink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Hormonal Balance Drink</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Key Ingredients:</h4>
                    <p className="text-gray-600">
                      Maca root, raspberry leaf, and chaste tree berry. These ingredients are known for balancing
                      hormones and easing PMS symptoms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Flavor Profile:</h4>
                    <p className="text-gray-600">A mildly sweet berry and hibiscus flavor with a touch of vanilla.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Benefit Focus:</h4>
                    <p className="text-gray-600">
                      Hormonal balance and easing mood swings, irritability, and emotional stress.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Calming Sleep Drink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🌙</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Calming Sleep Drink</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Key Ingredients:</h4>
                    <p className="text-gray-600">
                      Valerian root, magnesium, and melatonin, to help with restful sleep, especially for those who
                      experience sleep disturbances during their period.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Flavor Profile:</h4>
                    <p className="text-gray-600">
                      A soothing lavender and chamomile blend with honey for a relaxing bedtime drink.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Benefit Focus:</h4>
                    <p className="text-gray-600">Improved sleep quality and relaxation during menstruation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caffeine-free Energy Drink */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Caffeine-free Energy Drink</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Key Ingredients:</h4>
                    <p className="text-gray-600">
                      Ashwagandha, B vitamins, and ginseng to naturally boost energy without caffeine.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Flavor Profile:</h4>
                    <p className="text-gray-600">
                      Lightly flavored with ginger, mint, and green tea for a refreshing experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Benefit Focus:</h4>
                    <p className="text-gray-600">
                      Energy boost and mental clarity, without the crash or jitters that caffeine might cause.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">WHAT WE PROVIDE</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Flowease, we're dedicated to supporting women through their monthly cycles with our specially crafted
              nutritional drink mixes. Here's what we offer:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.2)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                    "0 0 0 0 rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <span className="text-2xl">🌿</span>
              </motion.div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Natural Relief</h3>
              <p className="text-gray-600">
                Our drink mixes are made with all-natural ingredients designed to ease period pain, reduce bloating, and
                improve overall comfort during your cycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.2)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                    "0 0 0 0 rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.7 }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Convenience</h3>
              <p className="text-gray-600">
                With easy-to-use, on-the-go packets, Flowease makes it simple to get the relief you need, anytime,
                anywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(74, 222, 128, 0.2)",
                    "0 0 0 10px rgba(74, 222, 128, 0)",
                    "0 0 0 0 rgba(74, 222, 128, 0)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.4 }}
              >
                <span className="text-2xl">💪</span>
              </motion.div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Wellness Support</h3>
              <p className="text-gray-600">
                Beyond period relief, our formulas promote overall feminine wellness, helping to balance hormones and
                boost energy throughout the month.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">OUR TRACK RECORD</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about FlowEase.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shweta",
                text: "I've always struggled with intense period cramps, but Flowease has been a game-changer for me. The drink mix is so easy to prepare, and within minutes I start feeling relief. It's now a must-have in my routine every month!",
                delay: 0,
              },
              {
                name: "Ketki",
                text: "I love how natural and soothing Flowease is! Not only does it help with the cramps, but I feel more energized and less bloated during my period. It's honestly like a little self-care ritual for me now.",
                delay: 0.1,
              },
              {
                name: "Shrushti",
                text: "I've tried so many remedies over the years, but Flowease is by far the most effective. It's gentle, tastes great, and works quickly. My period pains are significantly more manageable now, and I feel so much better throughout the week!",
                delay: 0.2,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: review.delay }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-2xl shadow-lg p-8 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-200 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-200 rounded-full"></div>
                <div className="text-4xl text-green-300 mb-4">"</div>
                <p className="text-gray-600 mb-6">{review.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">{review.name.charAt(0)}</span>
                  </div>
                  <p className="font-medium text-green-700">-{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Ready to Transform Your Period Experience?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of women who have discovered the natural way to period comfort with FLOWEASE.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products" className="btn-primary inline-block bg-green-500 hover:bg-green-600">
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

