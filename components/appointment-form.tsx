"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function AppointmentForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="(123) 456-7890" required />
        </div>
        <div className="space-y-2">
          <Label>Consultation Type</Label>
          <Select defaultValue="initial">
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="initial">Initial Consultation (60 min)</SelectItem>
              <SelectItem value="followup">Follow-up Session (30 min)</SelectItem>
              <SelectItem value="panchakarma">Panchakarma Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Preferred Consultation Method</Label>
        <RadioGroup defaultValue="in-person" className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <Label htmlFor="in-person" className="font-normal">
              In-person at clinic
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="video" id="video" />
            <Label htmlFor="video" className="font-normal">
              Video consultation
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Preferred Time</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9am">9:00 AM</SelectItem>
              <SelectItem value="10am">10:00 AM</SelectItem>
              <SelectItem value="11am">11:00 AM</SelectItem>
              <SelectItem value="1pm">1:00 PM</SelectItem>
              <SelectItem value="2pm">2:00 PM</SelectItem>
              <SelectItem value="3pm">3:00 PM</SelectItem>
              <SelectItem value="4pm">4:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="concerns">Health Concerns & Questions</Label>
        <Textarea
          id="concerns"
          placeholder="Please briefly describe your health concerns or questions for the doctor."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Any available doctor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any available doctor</SelectItem>
            <SelectItem value="dr-sharma">Dr. Arjun Sharma</SelectItem>
            <SelectItem value="dr-patel">Dr. Priya Patel</SelectItem>
            <SelectItem value="dr-verma">Dr. Rahul Verma</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Request Appointment
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Our team will confirm your appointment within 24 hours via email or phone.
      </p>
    </form>
  )
}

