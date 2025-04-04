'use client';
import { motion } from 'framer-motion';

type Product = {
  name: string;
  ingredients: string;
  flavor: string;
  benefit: string;
};

export default function ProductCard({ name, ingredients, flavor, benefit }: Product) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold text-pastel-purple">{name}</h3>
      <p className="mt-2"><strong>Key Ingredients:</strong> {ingredients}</p>
      <p><strong>Flavor:</strong> {flavor}</p>
      <p><strong>Benefits:</strong> {benefit}</p>
    </motion.div>
  );
}