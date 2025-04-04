"use client"
import { motion } from "framer-motion"
import ProductCard from "@/app/components/ProductCard"

const products = [
  {
    id: 1,
    name: "Comfort Blend",
    ingredients: "Ginger, Turmeric, Cinnamon",
    flavor: "Spiced Chai",
    benefit: "Eases cramps and provides iron support",
    image: "/images/comfort.jpg",
  },
  {
    id: 2,
    name: "Energy Blend",
    ingredients: "Raspberry Leaf, Lemon Balm, B Vitamins",
    flavor: "Citrus Burst",
    benefit: "Boosts energy and mental clarity",
    image: "/images/energy.jpg",
  },
  {
    id: 3,
    name: "Balance Blend",
    ingredients: "Chamomile, Ashwagandha, Peppermint",
    flavor: "Mint Bliss",
    benefit: "Supports hormone balance during ovulation",
    image: "/images/balance.jpg",
  },
  {
    id: 4,
    name: "Calm Blend",
    ingredients: "Dandelion Root, Lavender, Magnesium",
    flavor: "Lavender Honey",
    benefit: "Reduces bloating and mood swings",
    image: "/images/calm.jpg",
  },
  {
    id: 5,
    name: "Vitality Blend",
    ingredients: "Hibiscus, Rosehip, Vitamin C",
    flavor: "Berry Bliss",
    benefit: "Enhances overall wellness and vitality",
    image: "/images/vitality.jpg",
  },
]

export default function Products() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-pink-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of natural drink sachets designed to support you through every phase of your menstrual
            cycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  )
}