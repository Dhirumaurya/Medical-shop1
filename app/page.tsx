"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Star,
  Heart,
  Shield,
  ArrowRight,
  ShoppingBag,
  Calendar,
  Video,
  User,
  Menu,
  X,
  Sun,
  Snowflake,
} from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Slider settings for Featured Products
  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Slider settings for Partner Logos (auto-playing)
  const partnerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Partner companies data
  const partners = [
    {
      name: "Dhootpapeshwar",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Sandu",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Baidyanath",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Patanjali",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Dabur",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Herbal Harmony",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Pure Roots",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Nature’s Blend",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Ayur Essence",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
    {
      name: "Green Vitality",
      logo: "https://images.unsplash.com/photo-1509721434275-b92628b9d1d4",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Ayurveda Haven Logo" width={150} height={150} className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6 font-serif text-lg">
            <Link href="#" className="font-medium hover:text-green-700 transition-colors">
              Home
            </Link>
            <Link href="/herbal-products" className="font-medium hover:text-green-700 transition-colors">
              Herbal Products
            </Link>
            <Link href="#doctors" className="font-medium hover:text-green-700 transition-colors">
              Our Experts
            </Link>
            <Link href="#wellness" className="font-medium hover:text-green-700 transition-colors">
              Wellness Programs
            </Link>
            <Link href="/contact-page" className="font-medium hover:text-green-700 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
              <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button className="rounded-full bg-green-600 hover:bg-green-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
              Shop Now
            </Button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white px-6 py-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold">Ayurveda Haven</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 font-serif text-lg">
              <Link
                href="#"
                className="font-medium hover:text-green-700 transition-colors py-2 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                href="/herbal-products"
                className="font-medium hover:text-green-700 transition-colors py-2 border-b border-gray-100"
              >
                Herbal Products
              </Link>
              <Link
                href="#doctors"
                className="font-medium hover:text-green-700 transition-colors py-2 border-b border-gray-100"
              >
                Our Experts
              </Link>
              <Link
                href="#wellness"
                className="font-medium hover:text-green-700 transition-colors py-2 border-b border-gray-100"
              >
                Wellness Programs
              </Link>
              <Link
                href="/contact-page"
                className="font-medium hover:text-green-700 transition-colors py-2 border-b border-gray-100"
              >
                Contact
              </Link>
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button className="w-full rounded-full bg-green-600 hover:bg-green-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      )}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/50 z-10" />
          <div className="relative h-[600px]">
            <Image src="/Hero.jpg" alt="Ayurvedic herbs and ingredients" fill className="object-cover" priority />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center gap-4 text-white">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ancient Wisdom for Modern Wellness
            </h1>
            <p className="max-w-xl text-lg text-gray-200">
              Discover the power of Ayurveda with our premium selection of authentic herbs, supplements, and personalized consultations.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
              <Button className="rounded-full bg-green-600 hover:bg-green-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                Shop Collection
              </Button>
              <Button
                variant="outline"
                className="rounded-full text-yellow-400 border-yellow-400 hover:bg-white/10 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
              >
                Learn About Ayurveda
              </Button>
            </div>
          </div>
        </section>

        {/* Seasonal Feature Section */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                Seasonal Ayurvedic Wellness
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover products specially formulated for each season to maintain your dosha balance and optimal health.
              </p>
            </div>

            <Tabs defaultValue="summer" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="summer" className="flex items-center gap-2 text-sm sm:text-base">
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> Summer Season
                </TabsTrigger>
                <TabsTrigger value="winter" className="flex items-center gap-2 text-sm sm:text-base">
                  <Snowflake className="h-4 w-4 sm:h-5 sm:w-5" /> Winter Season
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summer" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    {
                      name: "Cooling Aloe Vera Gel",
                      price: "$19.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Soothes pitta dosha and provides relief from summer heat",
                      tag: "Bestseller",
                    },
                    {
                      name: "Rose Water Mist",
                      price: "$14.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Refreshing facial mist to balance skin in hot weather",
                      tag: "New",
                    },
                    {
                      name: "Coconut & Mint Cooling Oil",
                      price: "$24.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Cools the body and calms the mind during summer months",
                      tag: "Popular",
                    },
                    {
                      name: "Amla & Neem Juice",
                      price: "$22.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Detoxifying blend to purify blood and boost immunity",
                      tag: "Organic",
                    },
                    {
                      name: "Sandalwood Body Powder",
                      price: "$18.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Natural cooling powder to prevent heat rashes and odor",
                      tag: "Limited",
                    },
                  ].map((product, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-sm h-full">
                      <div className="relative">
                        <div className="relative h-48 bg-gray-100">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        {product.tag && (
                          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.tag}
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="text-sm text-green-600 font-medium mb-1">Summer Essential</div>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-800">{product.price}</span>
                          <Button className="rounded-full bg-green-600 hover:bg-green-700 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="rounded-full bg-amber-600 hover:bg-amber-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                    View All Summer Products
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="winter" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    {
                      name: "Warming Chyawanprash",
                      price: "$27.99",
                      image: "/chawanprash.jpeg",
                      description: "Traditional immunity booster with warming herbs for winter",
                      tag: "Bestseller",
                    },
                    {
                      name: "Tulsi & Ginger Tea",
                      price: "$16.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Herbal tea blend to fight cold and boost respiratory health",
                      tag: "Immunity",
                    },
                    {
                      name: "Sesame Body Oil",
                      price: "$29.99",
                      image: "/placeholder.svg?height=300&width=300",
                      description: "Nourishing oil for abhyanga massage during dry winter months",
                      tag: "Moisturizing",
                    },
                    {
                      name: "Ashwagandha Root Powder",
                      price: "$24.99",
                      image: "/Ashwagandha.jpeg",
                      description: "Adaptogenic herb to combat winter stress and boost energy",
                      tag: "Energy",
                    },
                    {
                      name: "Triphala Formula",
                      price: "$19.99",
                      image: "/Triphala.jpeg",
                      description: "Digestive support for heavier winter foods and metabolism",
                      tag: "Digestion",
                    },
                  ].map((product, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-sm h-full">
                      <div className="relative">
                        <div className="relative h-48 bg-gray-100">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        {product.tag && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.tag}
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="text-sm text-blue-600 font-medium mb-1">Winter Essential</div>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-blue-800">{product.price}</span>
                          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                    View All Winter Products
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Why Seasonal Ayurveda Matters</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                According to Ayurvedic principles, each season affects our doshas differently. Using season-specific products helps maintain balance and prevent seasonal health issues.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4">
                    <Sun className="h-10 w-10 text-amber-500" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Summer (Pitta Season)</h4>
                  <p className="text-sm text-gray-600">
                    Focus on cooling, hydrating products to balance increased pitta dosha and prevent heat-related issues.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4">
                    <Leaf className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Monsoon (Vata-Kapha)</h4>
                  <p className="text-sm text-gray-600">
                    Use products that balance moisture while supporting immunity during changing weather.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4">
                    <Snowflake className="h-10 w-10 text-blue-500" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Winter (Vata Season)</h4>
                  <p className="text-sm text-gray-600">
                    Incorporate warming, nourishing products to pacify vata dosha and maintain moisture balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-green-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-900">The Ayurvedic Difference</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the time-tested benefits of Ayurvedic wellness, backed by thousands of years of tradition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Leaf className="h-10 w-10 text-green-600" />,
                  title: "100% Natural",
                  description: "Pure herbs and ingredients sourced directly from trusted farmers.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-green-600" />,
                  title: "Quality Tested",
                  description: "Every product undergoes rigorous quality and purity testing.",
                },
                {
                  icon: <Heart className="h-10 w-10 text-green-600" />,
                  title: "Holistic Wellness",
                  description: "Formulations that balance mind, body, and spirit.",
                },
                {
                  icon: <User className="h-10 w-10 text-green-600" />,
                  title: "Expert Consultation",
                  description: "Personalized advice from certified Ayurvedic practitioners.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                  {benefit.icon}
                  <h3 className="mt-4 text-xl font-semibold text-green-800">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                  <Button className="mt-4 rounded-full bg-green-600 hover:bg-green-700 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-16">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-green-900">Featured Products</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                  Our bestselling Ayurvedic formulations for your daily wellness routine.
                </p>
              </div>
              <Link
                href="/herbal-products"
                className="text-green-600 hover:text-green-700 flex items-center gap-2 font-medium"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Slider {...productSliderSettings} className="mb-8">
                {[
                  {
                    name: "Ashwagandha Root Powder",
                    price: "$24.99",
                    image: "/Ashwagandha.jpeg",
                    category: "Herbs",
                  },
                  {
                    name: "Triphala Formula",
                    price: "$19.99",
                    image: "/Triphala.jpeg",
                    category: "Supplements",
                  },
                  {
                    name: "Brahmi Hair Oil",
                    price: "$32.99",
                    image: "/BrahmiOil.jpeg",
                    category: "Body Care",
                  },
                  {
                    name: "Chyawanprash",
                    price: "$27.99",
                    image: "/chawanprash.jpeg",
                    category: "Nutrition",
                  },
                  {
                    name: "Organic Turmeric Powder",
                    price: "$18.99",
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Herbs",
                  },
                  {
                    name: "Neem Extract",
                    price: "$22.99",
                    image: "/placeholder.svg?height=300&width=300",
                    category: "Supplements",
                  },
                ].map((product, index) => (
                  <div key={index} className="px-2">
                    <Card className="overflow-hidden border-0 shadow-sm h-full">
                      <div className="relative h-64 bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="text-sm text-green-600 font-medium mb-1">{product.category}</div>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-800">{product.price}</span>
                          <Button variant="outline" className="rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Slider>

              {/* Add buttons for Featured Products slider */}
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-6">
                <Button
                  variant="outline"
                  className="rounded-full border-green-600 text-green-700 hover:bg-green-50 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
                  onClick={() => router.push("/herbal-products")}
                >
                  View All Products
                </Button>
                <Button className="rounded-full bg-green-600 hover:bg-green-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                  Shop Now
                </Button>
                <Button className="rounded-full bg-amber-600 hover:bg-amber-700 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                  Special Offers
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                Explore our wide range of Ayurvedic products for every aspect of your wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Herbs & Powders",
                  image: "/Herb.jpeg",
                  description: "Pure, organic herbs in their most potent form.",
                },
                {
                  title: "Supplements & Formulas",
                  image: "/nutirition.jpeg",
                  description: "Traditional combinations for targeted wellness support.",
                },
                {
                  title: "Body & Skin Care",
                  image: "/bodycare.jpeg",
                  description: "Natural products for radiant skin and healthy body.",
                },
              ].map((category, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors z-10" />
                  <div className="relative h-80">
                    <Image
                      src={category.image || "/ayurvedalife.jpeg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="mt-2 text-gray-200">{category.description}</p>
                    <div className="flex gap-2 sm:gap-3 mt-4">
                      <Button className="bg-white text-green-900 hover:bg-gray-100 w-fit px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                        Explore
                      </Button>
                      <Button className="bg-amber-500 text-white hover:bg-amber-600 w-fit px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                        Best Sellers
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 sm:gap-4 mt-10">
              <Button className="rounded-full bg-white text-green-900 hover:bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                View All Categories
              </Button>
              <Button className="rounded-full bg-amber-500 hover:bg-amber-600 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
                New Arrivals
              </Button>
            </div>
          </div>
        </section>

        {/* About Ayurveda */}
        <section id="about" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-green-900">The Ancient Science of Life</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Ayurveda, which translates to "knowledge of life," is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  At Ayurveda Haven, we honor this ancient tradition by offering authentic products made according to traditional methods, using ingredients sourced from their native regions.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/ayurvedalife.jpeg"
                  alt="Ayurvedic ingredients and preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-green-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-900">What Our Customers Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our Ayurvedic products and consultations have transformed the lives of our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah J.",
                  quote:
                    "The Ashwagandha has been a game-changer for my stress levels. I feel more balanced and energetic throughout the day.",
                  location: "New York, NY",
                  type: "Product",
                },
                {
                  name: "Michael T.",
                  quote:
                    "Dr. Sharma's consultation was incredibly insightful. The personalized diet and lifestyle recommendations have made a huge difference.",
                  location: "Portland, OR",
                  type: "Consultation",
                },
                {
                  name: "Priya K.",
                  quote:
                    "The quality of these products is exceptional. As someone who grew up with Ayurveda, I can attest to their authenticity.",
                  location: "Chicago, IL",
                  type: "Product",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          {testimonial.type}
                        </span>
                      </div>
                      <p className="italic text-gray-600">"{testimonial.quote}"</p>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-900">Our Trusted Partners</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We collaborate with leading Ayurvedic brands to bring you the highest quality products.
              </p>
            </div>
            <Slider {...partnerSliderSettings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-4">
                  <div className="flex justify-center items-center h-24 bg-gray-100 rounded-lg">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} Logo`}
                      width={150}
                      height={60}
                      className="object-contain h-16 w-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Ayurvedic Journey</h2>
              <p className="mt-4 text-lg text-gray-200">
                Subscribe to receive Ayurvedic wellness tips, exclusive offers, and updates on new products and consultations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-10 sm:h-12"
                />
                <Button className="rounded-full bg-white text-green-900 hover:bg-gray-100 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base h-10 sm:h-12">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-300">
                By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-green-950 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">Ayurveda Haven</span>
              </div>
              <p className="text-gray-300 mt-2">
                Authentic Ayurvedic products and expert consultations for modern wellness, sourced directly from trusted suppliers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#doctors" className="text-gray-300 hover:text-white transition-colors">
                    Consultations
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300 space-y-2">
                <p>123 Wellness Way</p>
                <p>Harmony Hills, CA 90210</p>
                <p className="mt-4">info@ayurvedahaven.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
              <div className="mt-4 flex gap-2 sm:gap-3">
                <Button className="rounded-full bg-green-600 hover:bg-green-700 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                  Email Us
                </Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Ayurveda Haven. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4">
              <Button variant="outline" className="rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                Privacy Policy
              </Button>
              <Button variant="outline" className="rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                Terms of Service
              </Button>
              <Button variant="outline" className="rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                Sitemap
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}