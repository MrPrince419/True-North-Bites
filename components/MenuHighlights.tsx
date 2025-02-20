import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    name: "Poutine Supreme",
    description: "Classic fries topped with cheese curds and savory gravy",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1586805608485-add336722759?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Maple Syrup Burger",
    description: "Juicy beef patty with a hint of sweet maple syrup",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Butter Tart Delight",
    description: "A rich and buttery treat that's purely Canadian",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&h=400&q=80",
  },
]

export default function MenuHighlights() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-red-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/menu"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

