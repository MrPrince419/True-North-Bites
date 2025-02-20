import Header from "../components/Header"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About True North Bites</h1>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1470&q=80"
              alt="True North Bites Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              True North Bites was founded in 2020 by a group of passionate Canadian food enthusiasts who wanted to
              bring the best of Canadian cuisine to the fast food scene. Our mission is to celebrate the diverse flavors
              of Canada while using locally-sourced ingredients to create delicious, high-quality meals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our signature Maple Syrup Burger to our classic Poutine Supreme, every item on our menu is crafted
              with care and pride. We're committed to supporting local farmers and producers, ensuring that our
              ingredients are always fresh and of the highest quality.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">
                We never compromise on the quality of our ingredients or our food preparation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-700">
                We're proud to be a part of the local community and support Canadian producers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We're always exploring new flavors and combinations to keep our menu exciting.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

