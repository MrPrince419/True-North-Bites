"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/router"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (router.pathname !== "/") {
      router.push("/#contact")
    } else {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFA000' d='M488 256c0 127.4-103.6 231-231 231S26 383.4 26 256 129.6 25 257 25s231 103.6 231 231'/%3E%3Cpath fill='%23F57C00' d='M391 150c-32-32-74.5-49.5-119.8-49.5-45.3 0-87.8 17.5-119.8 49.5-32 32-49.5 74.5-49.5 119.8 0 45.3 17.5 87.8 49.5 119.8 32 32 74.5 49.5 119.8 49.5 45.3 0 87.8-17.5 119.8-49.5 32-32 49.5-74.5 49.5-119.8 0-45.3-17.5-87.8-49.5-119.8z'/%3E%3Cpath fill='%23FFF3E0' d='M271.2 100.5c-86.3 0-156.3 70-156.3 156.3s70 156.3 156.3 156.3 156.3-70 156.3-156.3-70-156.3-156.3-156.3zm0 282.6c-69.8 0-126.3-56.5-126.3-126.3s56.5-126.3 126.3-126.3 126.3 56.5 126.3 126.3-56.5 126.3-126.3 126.3z'/%3E%3Cpath fill='%23FF5722' d='M271.2 170.5c-47.7 0-86.3 38.6-86.3 86.3s38.6 86.3 86.3 86.3 86.3-38.6 86.3-86.3-38.6-86.3-86.3-86.3zm0 142.6c-31.2 0-56.3-25.1-56.3-56.3s25.1-56.3 56.3-56.3 56.3 25.1 56.3 56.3-25.1 56.3-56.3 56.3z'/%3E%3Cpath fill='%234CAF50' d='M271.2 220.5c-20.7 0-37.3 16.6-37.3 37.3s16.6 37.3 37.3 37.3 37.3-16.6 37.3-37.3-16.6-37.3-37.3-37.3z'/%3E%3C/svg%3E"
            alt="True North Bites Logo"
            width={50}
            height={50}
          />
          <span
            className={`ml-2 text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-red-600" : "text-white"}`}
          >
            True North Bites
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/promotions"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Promotions
              </Link>
            </li>
            <li>
              <Link
                href="/loyalty"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Loyalty Program
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-red-300"}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Link
          href="/menu"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
        >
          Order Now
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link
                href="/"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/promotions"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Promotions
              </Link>
            </li>
            <li>
              <Link
                href="/loyalty"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Loyalty Program
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="block py-2 text-gray-800 hover:text-red-600 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                href="/menu"
                className="inline-block mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

