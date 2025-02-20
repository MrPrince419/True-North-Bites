"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Header from "../components/Header"

export default function LoyaltyProgram() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "" })
    alert("Thank you for joining our loyalty program!")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1470&q=80"
            alt="Loyalty program banner"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Loyalty Program</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Join Our Loyalty Program</h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Benefits of Joining:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Earn points on every purchase</li>
                <li>Get exclusive access to special promotions</li>
                <li>Receive a free meal on your birthday</li>
                <li>Enjoy member-only events and tastings</li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
              >
                Join Now
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

