"use client"
import { motion } from "framer-motion"
import ProductCard from "@/app/components/ProductCard"

const products = [
  {
    id: 1,
    name: "Herbal Menstrual Support Drink",
    ingredients: "Ginger, turmeric, cinnamon, peppermint",
    flavor: "Chamomile and lemon with a touch of honey",
    benefit: "Pain relief, bloating reduction, menstrual comfort",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Hormonal Balance Period Drink",
    ingredients: "Maca root, raspberry leaf, chaste tree berry",
    flavor: "Mildly sweet berry or hibiscus with vanilla",
    benefit: "Hormonal balance, eases mood swings and stress",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Caffeine-Free Energy Drink",
    ingredients: "Ashwagandha, B vitamins, ginseng",
    flavor: "Ginger, mint, or green tea",
    benefit: "Energy boost and mental clarity without jitters",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Calming Sleep Drink",
    ingredients: "Valerian root, magnesium, melatonin",
    flavor: "Lavender and chamomile with honey",
    benefit: "Improved sleep quality and relaxation",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Detox and Cleanse Period Drink",
    ingredients: "Lemon, ginger, apple cider vinegar, activated charcoal",
    flavor: "Tangy, zesty citrus base",
    benefit: "Detoxification, digestion, reduced bloating",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Products() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Our Period Care Sachets</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each FLOWEASE sachet is carefully formulated to support your body through different phases of your menstrual
            cycle.
          </p>
        </motion.div>

        {/* Product Display - Vertical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              ingredients={product.ingredients}
              flavor={product.flavor}
              benefit={product.benefit}
              image={product.image}
            />
          ))}
        </div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-md"
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-6">How to Use FLOWEASE Sachets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-purple-700 mb-2">Empty Sachet</h3>
              <p className="text-gray-600">Pour one sachet into 8oz of hot or cold water</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-purple-700 mb-2">Stir Well</h3>
              <p className="text-gray-600">Mix thoroughly until completely dissolved</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-purple-700 mb-2">Enjoy</h3>
              <p className="text-gray-600">Drink 1-2 times daily during your period</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

