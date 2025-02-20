import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Header from "./components/Header"
import MenuHighlights from "./components/MenuHighlights"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1470&q=80"
          alt="Canadian fast food with rustic landscape"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the True Taste of Canada</h1>
          <p className="text-xl md:text-2xl mb-8">Indulge in our authentic, locally-sourced fast food</p>
          <Link
            href="/menu"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 active:scale-95"
          >
            View Menu
          </Link>
        </div>
      </section>

      <MenuHighlights />

      {/* About Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
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
                href="/about"
                className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.0583670046396!2d-84.33124218444431!3d46.521419079127424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d36311d78397345%3A0x7376d2d15e93c665!2s123%20Maple%20Ave%2C%20Sault%20Ste.%20Marie%2C%20ON%20P6A%206S5%2C%20Canada!5e0!3m2!1sen!2sus!4v1645564257658!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="flex items-center mb-4">
                <MapPin className="text-red-600 mr-2" />
                <p>123 Maple Avenue, Sault Ste. Marie, ON</p>
              </div>
              <div className="flex items-center">
                <Clock className="text-red-600 mr-2" />
                <p>Mon-Fri: 10am - 10pm, Sat-Sun: 11am - 11pm</p>
              </div>
              <Link
                href="/locations"
                className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
              >
                All Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <ContactForm />
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="flex space-x-6">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition duration-300 transform hover:scale-110"
                >
                  <Facebook size={32} />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition duration-300 transform hover:scale-110"
                >
                  <Instagram size={32} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition duration-300 transform hover:scale-110"
                >
                  <Twitter size={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/privacy-policy" className="mr-4 hover:text-red-400">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-red-400">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm">© 2025 True North Bites. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

