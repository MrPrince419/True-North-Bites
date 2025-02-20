import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"

const promotions = [
  {
    title: "Canada Day Special",
    description: "Get a free maple syrup milkshake with any burger purchase!",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1470&q=80",
    expirationDate: "July 1, 2025",
  },
  {
    title: "Winter Warmer Deal",
    description: "Buy one poutine, get a second 50% off!",
    image: "https://images.unsplash.com/photo-1583967891045-3e86f5770358?auto=format&fit=crop&w=1470&q=80",
    expirationDate: "February 28, 2025",
  },
  {
    title: "Student Discount",
    description: "Show your student ID and get 15% off your entire order!",
    image: "https://images.unsplash.com/photo-1527690789675-4ea7d8da9fe1?auto=format&fit=crop&w=1470&q=80",
    expirationDate: "Ongoing",
  },
]

export default function Promotions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80"
            alt="Current promotions banner"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Special Offers</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={promo.image || "/placeholder.svg"} alt={promo.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Expires: {promo.expirationDate}</p>
                  <Link
                    href="/menu"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Claim Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

