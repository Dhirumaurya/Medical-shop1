"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Product Type
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

// Product Data
const products: Product[] = [
  // Tablets
  { id: 1, name: "Ashwagandha Capsules", price: 24.99, category: "Tablet", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3", description: "Boosts energy and reduces stress" },
  { id: 2, name: "Giloy Tablets", price: 19.99, category: "Tablet", image: "https://images.unsplash.com/photo-1612197527746-6d4ff3f29e16", description: "Enhances immunity and detoxifies body" },
  { id: 3, name: "Turmeric Curcumin Tablets", price: 29.99, category: "Tablet", image: "https://images.unsplash.com/photo-1595433707802-1637f3d5c6e4", description: "Anti-inflammatory and antioxidant" },
  { id: 4, name: "Spirulina Tablets", price: 22.99, category: "Tablet", image: "https://images.unsplash.com/photo-1614852209585-739eb4b1fd4f", description: "Rich source of protein and vitamins" },

  // Powder
  { id: 5, name: "Triphala Powder", price: 19.99, category: "Powder", image: "https://images.unsplash.com/photo-1576092768118-3df29a8a1569", description: "Supports digestive health" },
  { id: 11, name: "Amla Powder", price: 15.99, category: "Powder", image: "https://images.unsplash.com/photo-1610384061559-7ce60b3f6c26", description: "Rich in Vitamin C and antioxidants" },
  { id: 12, name: "Brahmi Powder", price: 18.99, category: "Powder", image: "https://images.unsplash.com/photo-1613068432156-920c4f63c6e1", description: "Supports brain function and memory" },
  { id: 13, name: "Shatavari Powder", price: 20.99, category: "Powder", image: "https://images.unsplash.com/photo-1620712943530-122c56c5b789", description: "Balances hormones" },

  // Oil
  { id: 9, name: "Brahmi Oil", price: 29.99, category: "Oil", image: "https://images.unsplash.com/photo-1584302179602-95966ae3dc9b", description: "Promotes hair growth" },
  { id: 14, name: "Coconut Oil", price: 12.99, category: "Oil", image: "https://images.unsplash.com/photo-1583337130417-3346a1f0388e", description: "Nourishes hair and skin" },
  { id: 15, name: "Almond Oil", price: 14.99, category: "Oil", image: "https://images.unsplash.com/photo-1632764485204-d66179c1c5be", description: "Moisturizes skin deeply" },
  { id: 16, name: "Neem Oil", price: 16.99, category: "Oil", image: "https://images.unsplash.com/photo-1619024889979-3b177fd9fef0", description: "Great for scalp and acne" },

  // Facewash
  { id: 7, name: "Neem Facewash", price: 12.99, category: "Facewash", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c", description: "Cleanses and purifies skin" },
  { id: 17, name: "Charcoal Facewash", price: 13.99, category: "Facewash", image: "https://images.unsplash.com/photo-1596079890746-1c0d6f1e8c0d", description: "Deep cleans pores" },
  { id: 18, name: "Papaya Facewash", price: 10.99, category: "Facewash", image: "https://images.unsplash.com/photo-1590080875859-1fddc60fdcf6", description: "Brightens complexion" },
  { id: 19, name: "Turmeric Facewash", price: 11.99, category: "Facewash", image: "https://images.unsplash.com/photo-1626775738581-6f10d2a3dcbc", description: "Reduces acne" },

  // Cream
  { id: 10, name: "Shilajit Cream", price: 34.99, category: "Cream", image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0", description: "Rejuvenates skin" },
  { id: 20, name: "Saffron Cream", price: 27.99, category: "Cream", image: "https://images.unsplash.com/photo-1620840433512-7359a9837cde", description: "Improves skin tone" },
  { id: 21, name: "Sandalwood Cream", price: 23.99, category: "Cream", image: "https://images.unsplash.com/photo-1576086213369-97a306d36512", description: "Soothes skin" },
  { id: 22, name: "Aloe Night Cream", price: 26.99, category: "Cream", image: "https://images.unsplash.com/photo-1595613259868-3f706d4749fc", description: "Hydrates overnight" },
];

export default function HerbalProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "priceLow") return a.price - b.price;
      if (sortOption === "priceHigh") return b.price - a.price;
      return 0;
    });

  const renderCategory = (title: string, category: string) => {
    const categoryProducts = filteredProducts.filter((p) => p.category === category);
    if (categoryProducts.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setModalProduct(product)} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-700 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Herbal Products</h1>
        <p className="text-lg mt-2">Natural wellness remedies</p>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border border-green-300 rounded w-full sm:w-1/2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 border border-green-300 rounded"
          >
            <option value="default">Sort: Default</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

        {/* Render filtered categories only */}
        {renderCategory("Tablets", "Tablet")}
        {renderCategory("Powder", "Powder")}
        {renderCategory("Oil", "Oil")}
        {renderCategory("Facewash", "Facewash")}
        {renderCategory("Cream", "Cream")}

        {/* Modal */}
        {modalProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-green-700">{modalProduct.name}</h3>
                <button onClick={() => setModalProduct(null)} className="text-2xl">&times;</button>
              </div>
              <Image src={modalProduct.image} alt={modalProduct.name} width={500} height={300} className="mb-4 w-full object-cover" />
              <p>{modalProduct.description}</p>
              <p className="mt-2 font-bold text-green-700">${modalProduct.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ProductCard Component
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Image src={product.image} alt={product.name} width={400} height={200} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-green-700">${product.price}</span>
          <button
            onClick={onClick}
            className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}
