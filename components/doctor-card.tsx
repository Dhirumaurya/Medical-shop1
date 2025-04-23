import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Star } from "lucide-react"

interface Doctor {
  name: string
  specialty: string
  experience: string
  image: string
  bio: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover object-top" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-green-900">{doctor.name}</h3>
        <div className="flex items-center gap-2 mt-1 mb-2">
          <span className="text-sm font-medium text-green-700">{doctor.specialty}</span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{doctor.experience}</span>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{doctor.bio}</p>
        <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
          <Calendar className="h-4 w-4 mr-2" /> Book Consultation
        </Button>
      </CardContent>
    </Card>
  )
}

