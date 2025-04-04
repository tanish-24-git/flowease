import LogoSection from '@/components/LogoSection';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <LogoSection />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to FLOWEASE
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover our unique period care drinks designed to bring wellness, convenience, and comfort to your monthly flow.
      </p>
      <a
        href="/products"
        className="inline-block bg-pastel-blue text-white py-2 px-6 rounded-full hover:bg-pastel-purple transition-colors"
      >
        Explore Products
      </a>
    </div>
  );
}