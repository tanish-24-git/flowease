"use client"
import Image from "next/image"
import { motion } from "framer-motion"

type Product = {
  id: number
  name: string
  ingredients: string
  flavor: string
  benefit: string
  image: string
}

export default function ProductCard({ id, name, ingredients, flavor, benefit, image }: Product) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      whileHover={{ y: -5 }}
      className="card flex flex-col h-full"
    >
      <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
        <Image src={image || "/placeholder.svg?height=200&width=300"} alt={name} fill className="object-contain p-4" />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-purple-700 mb-3">{name}</h3>
        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-medium text-pink-600">Key Ingredients:</span> {ingredients}
          </p>
          <p>
            <span className="font-medium text-pink-600">Flavor:</span> {flavor}
          </p>
          <p>
            <span className="font-medium text-pink-600">Benefits:</span> {benefit}
          </p>
        </div>
      </div>
      <div className="p-4 border-t border-purple-100">
        <button className="w-full py-2 px-4 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors">
          Learn More
        </button>
      </div>
    </motion.div>
  )
}

