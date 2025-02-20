import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1470&q=80"
              alt="True North Bites interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              True North Bites is dedicated to bringing the best of Canadian fast food to our community. Using fresh,
              local ingredients, we create delicious dishes that celebrate our culinary heritage.
            </p>
            <Link
              href="/menu"
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
            >
              View Menu
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}