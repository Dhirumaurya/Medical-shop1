import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import HeroSection from "@/components/hero-section"
import MapSection from "@/components/map-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We're here to help with all your Ayurvedic health needs. Reach out to us with any questions about our
          products, treatments, or to schedule a consultation with our Ayurvedic experts.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <MapSection />
      </div>
    </main>
  )
}
