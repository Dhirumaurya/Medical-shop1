import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-green-100">
      <h2 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Phone className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 22 2345 6789</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Mail className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">info@chhedaayurvedic.com</p>
            <p className="text-gray-600">support@chhedaayurvedic.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              123 Ayurvedic Lane, Dadar West,
              <br />
              Mumbai, Maharashtra 400028,
              <br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Business Hours</h3>
            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
              <Instagram className="h-5 w-5 text-green-700" />
            </a>
            <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
              <Facebook className="h-5 w-5 text-green-700" />
            </a>
            <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
              <Twitter className="h-5 w-5 text-green-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
