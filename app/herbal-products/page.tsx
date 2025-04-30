"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Product Type
interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

// Product Data
const products: Product[] = [
  {
    id: 1,
    name: "Ashwagandha Capsules",
    price: 24.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Boosts energy and reduces stress",
  },
  {
    id: 2,
    name: "Giloy Tablets",
    price: 19.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Enhances immunity and detoxifies body",
  },
  {
    id: 3,
    name: "Turmeric Curcumin Tablets",
    price: 29.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Anti-inflammatory and antioxidant",
  },
  {
    id: 4,
    name: "Spirulina Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 23,
    name: "Brahmi Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 24,
    name: "giloy Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 25,
    name: "jestimath Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 26,
    name: "shatvari Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 27,
    name: "maka Tablets",
    price: 22.99,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Rich source of protein and vitamins",
  },
  {
    id: 5,
    name: "Triphala Powder",
    price: 19.99,
    category: "Powder",
    image: "https://images.unsplash.com/photo-1576092768118-3df29a8a1569",
    description: "Supports digestive health",
  },
  {
    id: 11,
    name: "Amla Powder",
    price: 15.99,
    category: "Powder",
    image: "https://images.unsplash.com/photo-1610384061559-7ce60b3f6c26",
    description: "Rich in Vitamin C and antioxidants",
  },
  {
    id: 12,
    name: "Brahmi Powder",
    price: 18.99,
    category: "Powder",
    image: "https://images.unsplash.com/photo-1613068432156-920c4f63c6e1",
    description: "Supports brain function and memory",
  },
  {
    id: 13,
    name: "Shatavari Powder",
    price: 20.99,
    category: "Powder",
    image: "https://images.unsplash.com/photo-1620712943530-122c56c5b789",
    description: "Balances hormones",
  },
  {
    id: 9,
    name: "Brahmi Oil",
    price: 29.99,
    category: "Oil",
    image: "https://images.unsplash.com/photo-1584302179602-95966ae3dc9b",
    description: "Promotes hair growth",
  },
  {
    id: 14,
    name: "Coconut Oil",
    price: 12.99,
    category: "Oil",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1f0388e",
    description: "Nourishes hair and skin",
  },
  {
    id: 15,
    name: "Almond Oil",
    price: 14.99,
    category: "Oil",
    image: "https://images.unsplash.com/photo-1632764485204-d66179c1c5be",
    description: "Moisturizes skin deeply",
  },
  {
    id: 16,
    name: "Neem Oil",
    price: 16.99,
    category: "Oil",
    image: "https://images.unsplash.com/photo-1619024889979-3b177fd9fef0",
    description: "Great for scalp and acne",
  },
  {
    id: 7,
    name: "Neem Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 17,
    name: "Charcoal Facewash",
    price: 13.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Deep cleans pores",
  },
  {
    id: 18,
    name: "Papaya Facewash",
    price: 10.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Brightens complexion",
  },
  {
    id: 19,
    name: "Turmeric Facewash",
    price: 11.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Reduces acne",
  },
  {
    id: 28,
    name: "Haldi Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 29,
    name: "allovera Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 30,
    name: "dot circle Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 31,
    name: "pimple Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 32,
    name: "charcoal Facewash",
    price: 12.99,
    category: "Facewash",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Cleanses and purifies skin",
  },
  {
    id: 10,
    name: "Shilajit Cream",
    price: 34.99,
    category: "Cream",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0",
    description: "Rejuvenates skin",
  },
  {
    id: 20,
    name: "Saffron Cream",
    price: 27.99,
    category: "Cream",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0",
    description: "Improves skin tone",
  },
  {
    id: 21,
    name: "Sandalwood Cream",
    price: 23.99,
    category: "Cream",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0",
    description: "Soothes skin",
  },
  {
    id: 22,
    name: "Aloe Night Cream",
    price: 26.99,
    category: "Cream",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0",
    description: "Hydrates overnight",
  },
]

export default function HerbalProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState("default")
  const [cart, setCart] = useState<Product[]>([])

  // Function to handle adding product to cart
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product])
    console.log(`${product.name} added to cart! Cart now has ${cart.length + 1} items.`)
  }

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "priceLow") return a.price - b.price
      if (sortOption === "priceHigh") return b.price - a.price
      return 0
    })

  const renderCategory = (title: string, category: string) => {
    const categoryProducts = filteredProducts.filter((p) => p.category === category)
    if (categoryProducts.length === 0) return null

    return (
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-800">{title}</h2>
        </div>
        <CategorySlider products={categoryProducts} onAddToCart={handleAddToCart} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20 text-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
            alt="Herbal background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-green-700 bg-opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Discover Natural Wellness</h1>
          <p className="text-xl mb-6">Explore our range of herbal products crafted for your health and beauty</p>
          <button className="bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-green-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      <header className="bg-green-100 text-clip py-8 text-center bg-opacity-60">
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
      </div>
    </div>
  )
}

// CategorySlider Component
function CategorySlider({
  products,
  onAddToCart,
}: {
  products: Product[]
  onAddToCart: (product: Product) => void
}) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 text-white rounded-full p-2 shadow-lg hover:bg-green-700"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[250px]">
            <ProductCard product={product} onAddToCart={() => onAddToCart(product)} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 text-white rounded-full p-2 shadow-lg hover:bg-green-700"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

// ProductCard Component
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-full">
      <div className="h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-800 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 h-10">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-green-700">${product.price}</span>
          <button
            onClick={onAddToCart}
            className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}