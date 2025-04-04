import ProductCard from '@/components/ProductCard';

const products = [
  {
    name: 'Herbal Menstrual Support Drink',
    ingredients: 'Ginger, turmeric, cinnamon, peppermint',
    flavor: 'Chamomile and lemon with a touch of honey',
    benefit: 'Pain relief, bloating reduction, menstrual comfort',
  },
  {
    name: 'Hormonal Balance Period Drink',
    ingredients: 'Maca root, raspberry leaf, chaste tree berry',
    flavor: 'Mildly sweet berry or hibiscus with vanilla',
    benefit: 'Hormonal balance, eases mood swings and stress',
  },
  {
    name: 'Caffeine-Free Energy Drink',
    ingredients: 'Ashwagandha, B vitamins, ginseng',
    flavor: 'Ginger, mint, or green tea',
    benefit: 'Energy boost and mental clarity without jitters',
  },
  {
    name: 'Calming Sleep Drink',
    ingredients: 'Valerian root, magnesium, melatonin',
    flavor: 'Lavender and chamomile with honey',
    benefit: 'Improved sleep quality and relaxation',
  },
  {
    name: 'Detox and Cleanse Period Drink',
    ingredients: 'Lemon, ginger, apple cider vinegar, activated charcoal',
    flavor: 'Tangy, zesty citrus base',
    benefit: 'Detoxification, digestion, reduced bloating',
  },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            ingredients={product.ingredients}
            flavor={product.flavor}
            benefit={product.benefit}
          />
        ))}
      </div>
    </div>
  );
}