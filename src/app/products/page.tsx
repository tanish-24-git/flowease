"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingBag, ShoppingCart, X } from "lucide-react"

// Product data
const products = [
  {
    id: 1,
    name: "Herbal Support Drink",
    description: "Natural relief for period pain and discomfort",
    color: "green",
    bgGradient: "from-green-50 to-green-100",
    accentColor: "bg-green-500",
    textColor: "text-green-800",
    icon: "🌿",
    ingredients:
      "Ginger, turmeric, cinnamon, and peppermint. These ingredients can help with cramps, bloating, and discomfort during menstruation.",
    flavor: "A calming blend of chamomile and lemon with a touch of honey.",
    benefits: "Pain relief, bloating reduction, and overall menstrual comfort.",
    image: "/images/balance.jpg",
  },
  {
    id: 2,
    name: "Detox and Cleanse",
    description: "Purify and refresh your body naturally",
    color: "teal",
    bgGradient: "from-teal-50 to-teal-100",
    accentColor: "bg-teal-500",
    textColor: "text-teal-800",
    icon: "🍃",
    ingredients:
      "Dandelion root, milk thistle, and activated charcoal. These ingredients help remove toxins and support liver function.",
    flavor: "A refreshing blend of cucumber and mint with a hint of lemon.",
    benefits: "Toxin elimination, improved digestion, and enhanced natural cleansing processes.",
    image: "/images/calm.jpg",
  },
  {
    id: 3,
    name: "Hormonal Balance",
    description: "Restore harmony to your hormonal cycle",
    color: "pink",
    bgGradient: "from-pink-50 to-pink-100",
    accentColor: "bg-pink-500",
    textColor: "text-pink-800",
    icon: "🌸",
    ingredients:
      "Maca root, raspberry leaf, and chaste tree berry. These ingredients are known for balancing hormones and easing PMS symptoms.",
    flavor: "A mildly sweet berry and hibiscus flavor with a touch of vanilla.",
    benefits: "Hormonal balance and easing mood swings, irritability, and emotional stress.",
    image: "/images/comfort.jpg",
  },
  {
    id: 4,
    name: "Calming Sleep Drink",
    description: "Drift into peaceful, restorative sleep",
    color: "purple",
    bgGradient: "from-purple-50 to-purple-100",
    accentColor: "bg-purple-500",
    textColor: "text-purple-800",
    icon: "🌙",
    ingredients:
      "Valerian root, magnesium, and melatonin, to help with restful sleep, especially for those who experience sleep disturbances during their period.",
    flavor: "A soothing lavender and chamomile blend with honey for a relaxing bedtime drink.",
    benefits: "Improved sleep quality and relaxation during menstruation.",
    image: "/images/energy.jpg",
  },
  {
    id: 5,
    name: "Caffeine-free Energy Drink",
    description: "Natural energy without the crash",
    color: "amber",
    bgGradient: "from-amber-50 to-amber-100",
    accentColor: "bg-amber-500",
    textColor: "text-amber-800",
    icon: "⚡",
    ingredients: "Ashwagandha, B vitamins, and ginseng to naturally boost energy without caffeine.",
    flavor: "Lightly flavored with ginger, mint, and green tea for a refreshing experience.",
    benefits: "Energy boost and mental clarity, without the crash or jitters that caffeine might cause.",
    image: "/images/vitality.jpg",
  },
]

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [showCartToast, setShowCartToast] = useState(false)

  // Handle scroll navigation - now horizontal
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 1000)

      if (e.deltaX > 0 && activeProduct < products.length - 1) {
        setDirection(1)
        setActiveProduct((prev) => prev + 1)
      } else if (e.deltaX < 0 && activeProduct > 0) {
        setDirection(-1)
        setActiveProduct((prev) => prev - 1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel)
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [activeProduct, isScrolling])

  // Handle keyboard navigation - now left/right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      if (e.key === "ArrowRight" && activeProduct < products.length - 1) {
        setDirection(1)
        setActiveProduct((prev) => prev + 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
      } else if (e.key === "ArrowLeft" && activeProduct > 0) {
        setDirection(-1)
        setActiveProduct((prev) => prev - 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeProduct, isScrolling])

  const navigateToProduct = (index: number) => {
    setDirection(index > activeProduct ? 1 : -1)
    setActiveProduct(index)
  }

  const handleAddToCart = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleCartClick = () => {
    setShowCartToast(true)
    setTimeout(() => setShowCartToast(false), 3000)
  }

  const product = products[activeProduct]

  return (
    <div ref={containerRef} className="min-h-screen pt-16 overflow-hidden">
      {/* Navigation dots - now horizontal at bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
        {products.map((p, index) => (
          <motion.button
            key={p.id}
            onClick={() => navigateToProduct(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeProduct ? `${product.accentColor} scale-125` : "bg-gray-300 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${p.name}`}
          />
        ))}
      </div>

      {/* Navigation arrows - now left/right */}
      <div className="fixed top-1/2 transform -translate-y-1/2 z-50 flex justify-between w-full px-4">
        <motion.button
          onClick={() => {
            if (activeProduct > 0) {
              setDirection(-1)
              setActiveProduct((prev) => prev - 1)
            }
          }}
          className={`p-2 rounded-full ${
            activeProduct > 0 ? "bg-white/80 hover:bg-white shadow-md" : "opacity-0 cursor-default"
          } transition-all duration-300`}
          whileHover={{ x: -5 }}
          animate={{ opacity: activeProduct > 0 ? 1 : 0 }}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </motion.button>

        <motion.button
          onClick={() => {
            if (activeProduct < products.length - 1) {
              setDirection(1)
              setActiveProduct((prev) => prev + 1)
            }
          }}
          className={`p-2 rounded-full ${
            activeProduct < products.length - 1 ? "bg-white/80 hover:bg-white shadow-md" : "opacity-0 cursor-default"
          } transition-all duration-300`}
          whileHover={{ x: 5 }}
          animate={{
            opacity: activeProduct < products.length - 1 ? 1 : 0,
            x: [0, 5, 0],
          }}
          transition={{
            x: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
          }}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </motion.button>
      </div>

      {/* Cart Button */}
      <motion.div className="fixed top-24 right-8 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={handleCartClick}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ShoppingCart className="h-6 w-6 text-green-600" />
        </button>
      </motion.div>

      {/* Cart Toast Message */}
      <AnimatePresence>
        {showCartToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-36 right-8 z-50 bg-white p-4 rounded-lg shadow-lg max-w-xs"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-bold text-green-600 mb-1">Coming Soon!</h3>
                <p className="text-gray-600 text-sm">Our shopping cart is under development. Check back soon!</p>
              </div>
              <button onClick={() => setShowCartToast(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add to Cart Toast Message */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className={`${product.accentColor} p-2 rounded-full`}>
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Coming Soon!</h3>
                <p className="text-gray-600">Our shop is under development. Check back soon!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product display */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={product.id}
          initial={{
            opacity: 0,
            x: direction > 0 ? 100 : -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction > 0 ? -100 : 100,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ${product.bgGradient} px-4 py-16`}
        >
          <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Product image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0"
                style={{ backgroundColor: `rgba(var(--${product.color}-100), 0.8)` }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full z-0"
                style={{ backgroundColor: `rgba(var(--${product.color}-200), 0.8)` }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 8,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-2">
                <span
                  className={`inline-block ${product.accentColor} text-white text-sm font-medium px-3 py-1 rounded-full`}
                >
                  {product.icon} FlowEase
                </span>
              </div>

              <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${product.textColor}`}>{product.name}</h1>

              <p className="text-xl text-gray-600 mb-8">{product.description}</p>

              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md"
                >
                  <h3 className={`font-semibold ${product.textColor} mb-2`}>Key Ingredients:</h3>
                  <p className="text-gray-600">{product.ingredients}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md"
                >
                  <h3 className={`font-semibold ${product.textColor} mb-2`}>Flavor Profile:</h3>
                  <p className="text-gray-600">{product.flavor}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md"
                >
                  <h3 className={`font-semibold ${product.textColor} mb-2`}>Benefit Focus:</h3>
                  <p className="text-gray-600">{product.benefits}</p>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                <button
                  onClick={handleAddToCart}
                  className={`${product.accentColor} text-white flex items-center justify-center gap-2 py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

