"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"

export default function GiftIdeas() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "For Brother", "For Sister", "DIY", "Experiences"]

  const gifts = [
    {
      id: 1,
      title: "Handcrafted Silver Rakhi",
      description: "Beautiful silver rakhi with traditional motifs",
      price: "₹299",
      category: "For Brother",
      image: "/elegant-silver-rakhi.png",
    },
    {
      id: 2,
      title: "Personalized Photo Frame",
      description: "Custom frame with your favorite sibling memories",
      price: "₹499",
      category: "For Sister",
      image: "./placeholder-wer4k.png",
    },
    {
      id: 3,
      title: "DIY Rakhi Kit",
      description: "Create your own unique rakhi with premium materials",
      price: "₹199",
      category: "DIY",
      image: "./placeholder-pvks3.png",
    },
    {
      id: 4,
      title: "Spa Day Experience",
      description: "Relaxing spa voucher for your beloved sister",
      price: "₹1,999",
      category: "Experiences",
      image: "/luxury-indian-spa.png",
    },
    {
      id: 5,
      title: "Traditional Sweet Box",
      description: "Assorted Indian sweets in decorative packaging",
      price: "₹399",
      category: "For Brother",
      image: "/indian-sweets-box.png",
    },
    {
      id: 6,
      title: "Jewelry Set",
      description: "Elegant earrings and necklace set",
      price: "₹899",
      category: "For Sister",
      image: "./placeholder-n6g8o.png",
    },
  ]

  const filteredGifts = activeFilter === "All" ? gifts : gifts.filter((gift) => gift.category === activeFilter)

  return (
    <section id="gifts" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">Thoughtful Gift Ideas</h2>
          <p className="text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Express your love with carefully curated gifts that celebrate the beautiful bond you share.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-saffron hover:bg-saffron/90 text-cream"
                  : "border-maroon text-maroon hover:bg-maroon hover:text-cream"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Gift Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGifts.map((gift) => (
            <div
              key={gift.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gold/20"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={gift.image || "/placeholder.svg"}
                  alt={gift.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-maroon hover:text-saffron"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-saffron bg-saffron/10 px-3 py-1 rounded-full">
                    {gift.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm text-maroon/70">4.8</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-maroon mb-2">{gift.title}</h3>

                <p className="text-maroon/70 mb-4 leading-relaxed">{gift.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-saffron">{gift.price}</span>
                  <Button size="sm" className="bg-maroon hover:bg-maroon/90 text-cream px-4 py-2 rounded-full">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
