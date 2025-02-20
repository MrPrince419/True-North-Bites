import Header from "../components/Header"
import { MapPin, Phone, Clock } from "lucide-react"

const locations = [
  {
    name: "Downtown Sault Ste. Marie",
    address: "123 Maple Avenue, Sault Ste. Marie, ON",
    phone: "(705) 123-4567",
    hours: "Mon-Fri: 10am - 10pm, Sat-Sun: 11am - 11pm",
  },
  {
    name: "Waterfront",
    address: "456 Lakeshore Drive, Sault Ste. Marie, ON",
    phone: "(705) 987-6543",
    hours: "Mon-Sun: 11am - 9pm",
  },
  {
    name: "Algoma University",
    address: "789 Queen Street East, Sault Ste. Marie, ON",
    phone: "(705) 246-8101",
    hours: "Mon-Fri: 8am - 8pm, Sat: 10am - 6pm, Sun: Closed",
  },
]

export default function Locations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
              <div className="flex items-start mb-2">
                <MapPin className="text-red-600 mr-2 mt-1" />
                <p>{location.address}</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="text-red-600 mr-2" />
                <p>{location.phone}</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-red-600 mr-2 mt-1" />
                <p>{location.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

