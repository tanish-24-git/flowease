import Image from 'next/image';

export default function LogoSection() {
  return (
    <div className="py-8 text-center">
      <Image
        src="/logo.png"
        alt="FLOWEASE Logo"
        width={150}
        height={150}
        className="mx-auto"
      />
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Your Monthly Flow, Perfected
      </p>
    </div>
  );
}