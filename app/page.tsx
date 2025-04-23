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
  ChevronRight,
  ArrowLeft,
} from "lucide-react"
import { DoctorCard } from "@/components/doctor-card"
import { AppointmentForm } from "@/components/appointment-form"
import { useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  // Handle search item click
  const handleClick = (item: string) => {
    setSearchQuery(item)
    // You can add additional logic here, like redirecting to search results
    console.log(`Searching for: ${item}`)
  }

  // Custom Next Arrow for the slider
  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 -top-12 bg-green-700 text-white rounded-full p-2 hover:bg-green-800 transition-colors z-10"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    )
  }

  // Custom Prev Arrow for the slider
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-12 -top-12 bg-green-700 text-white rounded-full p-2 hover:bg-green-800 transition-colors z-10"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
    )
  }

  const searchItems = [
    { rank: "#1", label: "Ghee" },
    { rank: "#2", label: "Amla" },
    { rank: "#3", label: "Giloy" },
    { rank: "#4", label: "Honey" },
    { rank: "#5", label: "Atta" },
    { rank: "#6", label: "Cooking Oil" },
    { rank: "#7", label: "Eye Care" },
    { rank: "#8", label: "Ashwagandha" },
    { rank: "#9", label: "Brahmi" },
    { rank: "#10", label: "Hair oil" },
    { rank: "#11", label: "Maka" },
    { rank: "#12", label: "jestimath" },
    { rank: "#13", label: "Allovera" },
    { rank: "#14", label: "Pith" },
    { rank: "#15", label: "aawala" },
    { rank: "#16", label: "creame" },
  ]

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Ayurveda Haven</span> */}
            <Image src="/logo.png" alt="Ayurveda Haven Logo" width={150} height={150} className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6 font-serif text-lg">
            <Link href="#" className="font-medium hover:text-green-700 transition-colors">
              Home
            </Link>

            <Link href="/herbal-products" className="font-medium hover:text-green-700 transition-colors">
              Herbal Products
            </Link>
            <Link href="#consultation" className="font-medium hover:text-green-700 transition-colors">
              Book Consultation
            </Link>
            <Link href="#doctors" className="font-medium hover:text-green-700 transition-colors">
              Our Experts
            </Link>
            <Link href="#wellness" className="font-medium hover:text-green-700 transition-colors">
              Wellness Programs
            </Link>

            <Link href="#contact" className="font-medium hover:text-green-700 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button className="rounded-full bg-green-600 hover:bg-green-700">Shop Now</Button>
          </div>
        </div>
      </header>
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
              Discover the power of Ayurveda with our premium selection of authentic herbs, supplements, and
              personalized consultations.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="rounded-full bg-green-600 hover:bg-green-700">
                Shop Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-blue-500 border border-blue-500 hover:bg-white/10"
              >
                Book Consultation
              </Button>
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
              <Link href="#" className="text-green-600 hover:text-green-700 flex items-center gap-2 font-medium">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Slider {...settings} className="mb-8">
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
                          <Button size="sm" variant="outline" className="rounded-full">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Slider>

              {/* Add buttons for Featured Products slider */}
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" className="rounded-full border-green-600 text-green-700 hover:bg-green-50">
                  View All Products
                </Button>
                <Button className="rounded-full bg-green-600 hover:bg-green-700">Shop Now</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search section with Slider */}
        <section className="py-12 bg-white">
          <div className="container p-4 max-w-6xl mx-auto relative">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-green-900">Most Searched</h2>
            </div>

            <Slider {...settings} className="mb-8">
              {searchItems.slice(0, 8).map((item, index) => (
                <div key={index} className="px-2">
                  <button
                    onClick={() => handleClick(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-green-100 text-gray-800 rounded-full hover:bg-green-200 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {item.rank}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              ))}
            </Slider>

            {/* Add "View All" and "Shop Now" buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                className="rounded-full border-green-600 text-green-700 hover:bg-green-50 px-6 py-2 font-medium"
              >
                View All Items
              </Button>
              <Button className="rounded-full bg-green-600 hover:bg-green-700 px-6 py-2 font-medium">Shop Now</Button>
            </div>
          </div>
        </section>

        {/* Doctor Consultation Section */}
        <section id="doctors" className="py-16 bg-green-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-green-900">Expert Ayurvedic Consultations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Schedule a personalized consultation with our certified Ayurvedic doctors to receive tailored wellness
                recommendations.
              </p>
            </div>

            <Tabs defaultValue="doctors" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="doctors">Our Doctors</TabsTrigger>
                <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
              </TabsList>

              <TabsContent value="doctors" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Dr. Arjun Sharma",
                      specialty: "Ayurvedic Medicine",
                      experience: "15+ years experience",
                      image: "/team-1.jpg",
                      bio: "Dr. Sharma specializes in traditional Ayurvedic treatments for chronic conditions and stress management.",
                    },
                    {
                      name: "Dr. Priya Patel",
                      specialty: "Panchakarma Specialist",
                      experience: "12+ years experience",
                      image: "/team-2.jpg",
                      bio: "Dr. Patel is an expert in detoxification therapies and rejuvenation treatments based on Ayurvedic principles.",
                    },
                    {
                      name: "Dr. Rahul Verma",
                      specialty: "Ayurvedic Nutrition",
                      experience: "10+ years experience",
                      image: "/team-3.jpg",
                      bio: "Dr. Verma focuses on dietary interventions and herbal supplements to address digestive and metabolic issues.",
                    },
                  ].map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="rounded-full bg-green-600 hover:bg-green-700">View All Practitioners</Button>
                </div>
              </TabsContent>

              <TabsContent value="appointment">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="grid md:grid-cols-5">
                    <div className="bg-green-800 text-white p-6 md:col-span-2">
                      <h3 className="text-xl font-bold mb-4">Consultation Benefits</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <User className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span>Personalized dosha assessment and wellness plan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Leaf className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span>Custom herbal recommendations for your specific needs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span>Follow-up consultations to track your progress</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Video className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                          <span>Available in-person or via secure video call</span>
                        </li>
                      </ul>

                      <div className="mt-8 pt-6 border-t border-green-700">
                        <h4 className="font-medium mb-2">Consultation Types:</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Initial Consultation (60 min)</span>
                            <span>$95</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Follow-up Session (30 min)</span>
                            <span>$55</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Panchakarma Consultation</span>
                            <span>$120</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:col-span-3">
                      <h3 className="text-xl font-bold text-green-900 mb-6">Book Your Consultation</h3>
                      <AppointmentForm />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
                    <Button className="mt-4 bg-white text-green-900 hover:bg-gray-100 w-fit">Explore</Button>
                  </div>
                </div>
              ))}
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
                  Ayurveda, which translates to "knowledge of life," is one of the world's oldest holistic healing
                  systems. Developed more than 5,000 years ago in India, it's based on the belief that health and
                  wellness depend on a delicate balance between the mind, body, and spirit.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  At Ayurveda Haven, we honor this ancient tradition by offering authentic products made according to
                  traditional methods, using ingredients sourced from their native regions.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button className="rounded-full bg-green-600 hover:bg-green-700">Our Philosophy</Button>
                  <Button variant="outline" className="rounded-full">
                    Learn More
                  </Button>
                </div>
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

        {/* Newsletter */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Ayurvedic Journey</h2>
              <p className="mt-4 text-lg text-gray-200">
                Subscribe to receive Ayurvedic wellness tips, exclusive offers, and updates on new products and
                consultations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Button className="bg-white text-green-900 hover:bg-gray-100">Subscribe</Button>
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
                Authentic Ayurvedic products and expert consultations for modern wellness, sourced directly from trusted
                suppliers.
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
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Ayurveda Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
