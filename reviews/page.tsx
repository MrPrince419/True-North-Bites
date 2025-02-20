"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Header from "../components/Header"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "The best poutine I've ever had! Authentic Canadian flavors.",
    image: "https://images.unsplash.com/photo-1586805608485-add336722759?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Love the maple syrup burger. Such a unique taste!",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment: "Great atmosphere and friendly staff. Will definitely come back!",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=150&h=150&q=80",
  },
]

export default function Reviews() {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewReview((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(newReview)
    // Reset form after submission
    setNewReview({ name: "", rating: 5, comment: "" })
    alert("Thank you for your review!")
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1470&q=80"
            alt="Customer reviews banner"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Customer Reviews</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Average Rating</h2>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-8 h-8 ${i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold">{averageRating.toFixed(1)} out of 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">Write a Review</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={newReview.rating}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300 transform hover:scale-105 active:scale-95"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

