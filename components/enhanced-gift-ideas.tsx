"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Star, Eye, Share2, Plus } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

export default function EnhancedGiftIdeas() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [viewedItems, setViewedItems] = useState<number[]>([])
  const [showMore, setShowMore] = useState(false)

  const filters = ["All", "For Brother", "For Sister", "DIY", "Traditional", "Modern"]

  const gifts = [
    {
      id: 1,
      title: "Handcrafted Silver Rakhi",
      description: "Beautiful silver rakhi with traditional motifs and premium silk thread",
      price: "₹299",
      originalPrice: "₹399",
      category: "For Brother",
      image: "/elegant-silver-rakhi.png",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      isNew: false,
    },
    {
      id: 2,
      title: "Golden Thread Rakhi Set",
      description: "Set of 3 golden thread rakhis with decorative beads and stones",
      price: "₹199",
      originalPrice: "₹299",
      category: "For Brother",
      image: "/golden-rakhi-set.png",
      rating: 4.7,
      reviews: 89,
      badge: "Popular",
      isNew: false,
    },
    {
      id: 3,
      title: "Personalized Photo Frame",
      description: "Custom frame with your favorite sibling memories and elegant border",
      price: "₹499",
      originalPrice: "₹699",
      category: "For Sister",
      image: "/placeholder-wer4k.png",
      rating: 4.9,
      reviews: 156,
      badge: "Trending",
      isNew: true,
    },
    {
      id: 4,
      title: "Designer Jewelry Set",
      description: "Elegant earrings and necklace set with traditional Indian motifs",
      price: "₹899",
      originalPrice: "₹1,299",
      category: "For Sister",
      image: "/placeholder-n6g8o.png",
      rating: 4.8,
      reviews: 91,
      badge: "Exclusive",
      isNew: true,
    },
    {
      id: 5,
      title: "Silk Dupatta with Embroidery",
      description: "Beautiful silk dupatta with hand embroidered traditional patterns",
      price: "₹799",
      originalPrice: "₹1,199",
      category: "For Sister",
      image: "/silk-dupatta.png",
      rating: 4.6,
      reviews: 67,
      badge: "Artisan",
      isNew: false,
    },
    {
      id: 6,
      title: "DIY Rakhi Making Kit",
      description: "Create your own unique rakhi with premium materials and step-by-step guide",
      price: "₹199",
      originalPrice: "₹299",
      category: "DIY",
      image: "/placeholder-pvks3.png",
      rating: 4.7,
      reviews: 203,
      badge: "Popular",
      isNew: false,
    },
    {
      id: 7,
      title: "Craft Beads & Threads Set",
      description: "Complete set of colorful beads, threads, and decorative items for rakhi making",
      price: "₹149",
      originalPrice: "₹199",
      category: "DIY",
      image: "/craft-beads-set.png",
      rating: 4.5,
      reviews: 134,
      badge: "Budget",
      isNew: false,
    },
    {
      id: 8,
      title: "Premium DIY Rakhi Kit",
      description: "Deluxe kit with silk threads, pearls, stones and premium materials",
      price: "₹349",
      originalPrice: "₹449",
      category: "DIY",
      image: "/premium-diy-kit.png",
      rating: 4.8,
      reviews: 78,
      badge: "Premium",
      isNew: true,
    },
    {
      id: 9,
      title: "Traditional Sweet Box",
      description: "Assorted Indian sweets in decorative packaging with festival wishes",
      price: "₹399",
      originalPrice: "₹499",
      category: "Traditional",
      image: "/indian-sweets-box.png",
      rating: 4.6,
      reviews: 245,
      badge: "Classic",
      isNew: false,
    },
    {
      id: 10,
      title: "Handwoven Silk Saree",
      description: "Beautiful handwoven silk saree with traditional patterns for sister",
      price: "₹1,599",
      originalPrice: "₹2,199",
      category: "Traditional",
      image: "/elegant-silk-saree.png",
      rating: 4.9,
      reviews: 45,
      badge: "Artisan",
      isNew: false,
    },
    {
      id: 11,
      title: "Brass Pooja Thali Set",
      description: "Traditional brass thali with diya, kumkum holder and decorative items",
      price: "₹599",
      originalPrice: "₹799",
      category: "Traditional",
      image: "/brass-pooja-thali.png",
      rating: 4.7,
      reviews: 112,
      badge: "Sacred",
      isNew: false,
    },
    {
      id: 12,
      title: "Wooden Jewelry Box",
      description: "Handcrafted wooden jewelry box with traditional carvings and velvet lining",
      price: "₹449",
      originalPrice: "₹599",
      category: "Traditional",
      image: "/wooden-jewelry-box.png",
      rating: 4.6,
      reviews: 89,
      badge: "Handmade",
      isNew: false,
    },
    {
      id: 13,
      title: "Smart Watch for Brother",
      description: "Latest smartwatch with health tracking and premium leather strap",
      price: "₹2,999",
      originalPrice: "₹3,999",
      category: "Modern",
      image: "/modern-smartwatch.png",
      rating: 4.7,
      reviews: 156,
      badge: "Tech",
      isNew: true,
    },
    {
      id: 14,
      title: "Wireless Earbuds",
      description: "Premium wireless earbuds with noise cancellation and long battery life",
      price: "₹1,999",
      originalPrice: "₹2,799",
      category: "Modern",
      image: "/wireless-earbuds.png",
      rating: 4.8,
      reviews: 203,
      badge: "Tech",
      isNew: true,
    },
    {
      id: 15,
      title: "Skincare Gift Set",
      description: "Complete skincare routine set with natural and organic products",
      price: "₹899",
      originalPrice: "₹1,299",
      category: "Modern",
      image: "/skincare-gift-set.png",
      rating: 4.6,
      reviews: 134,
      badge: "Wellness",
      isNew: false,
    },
    {
      id: 16,
      title: "Portable Power Bank",
      description: "High-capacity power bank with fast charging and multiple ports",
      price: "₹799",
      originalPrice: "₹1,099",
      category: "Modern",
      image: "/portable-power-bank.png",
      rating: 4.5,
      reviews: 167,
      badge: "Utility",
      isNew: false,
    },
  ]

  const filteredGifts = activeFilter === "All" ? gifts : gifts.filter((gift) => gift.category === activeFilter)
  const displayedGifts = showMore ? filteredGifts : filteredGifts.slice(0, 8)

  const toggleLike = (id: number) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleQuickView = (id: number) => {
    setViewedItems((prev) => [...prev, id])
    alert(`Quick view for product ${id} - Feature coming soon!`)
  }

  const { toast } = useToast()

  const handleShare = async (gift: any) => {
    const shareText = `🎁 Check out this amazing Rakhi gift!\n\n${gift.title}\n${gift.description}\n\nPrice: ${gift.price}\n\n${window.location.href}#gifts`

    // Try Web Share API first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${gift.title} - Perfect Rakhi Gift`,
          text: shareText,
          url: window.location.href + "#gifts",
        })
        toast({
          title: "Shared successfully! 🎉",
          description: `${gift.title} has been shared.`,
        })
        return
      } catch (error) {
        // User cancelled or error occurred, continue to fallback
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(shareText)
      toast({
        title: "Copied to clipboard! 📋",
        description: "Gift details copied. Share it anywhere!",
      })
    } catch (error) {
      // Final fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = shareText
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)

      toast({
        title: "Copied to clipboard! 📋",
        description: "Gift details copied. Share it anywhere!",
      })
    }
  }

  const handleAddToCart = (gift: any) => {
    alert(`${gift.title} added to cart! Price: ${gift.price}`)
  }

  const getBadgeColor = (badge: string) => {
    const colors = {
      Bestseller: "bg-green-500",
      Trending: "bg-purple-500",
      Popular: "bg-blue-500",
      Premium: "bg-gold",
      Classic: "bg-maroon",
      Exclusive: "bg-saffron",
      Tech: "bg-gray-700",
      Artisan: "bg-orange-500",
      Budget: "bg-teal-500",
      Sacred: "bg-indigo-500",
      Handmade: "bg-amber-600",
      Wellness: "bg-pink-500",
      Utility: "bg-cyan-600",
    }
    return colors[badge as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section id="gifts" className="py-20 bg-gradient-to-b from-cream/30 to-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon mb-6">
            Thoughtful Gift Ideas
            <span className="block text-lg font-normal text-maroon/70 mt-3">
              {filteredGifts.length} carefully curated gifts for your beloved sibling
            </span>
          </h2>
          <p className="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
            Express your love with carefully curated gifts that celebrate the beautiful bond you share.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-saffron via-gold to-saffron hover:from-gold hover:via-saffron hover:to-gold text-cream shadow-xl border-0"
                  : "border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream bg-white hover:scale-105"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50 animate-pulse rounded-2xl"></div>
              )}
            </Button>
          ))}
        </div>

        {/* Enhanced Gift Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedGifts.map((gift) => (
            <div
              key={gift.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-gold/20 hover:border-gold/40 relative"
            >
              {/* Badge */}
              {gift.badge && (
                <div
                  className={`absolute top-4 left-4 z-20 px-3 py-1 ${getBadgeColor(gift.badge)} text-white text-xs font-bold rounded-full shadow-lg`}
                >
                  {gift.badge}
                </div>
              )}

              {/* New Badge */}
              {gift.isNew && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse shadow-lg">
                  NEW
                </div>
              )}

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={gift.image || "/placeholder.svg"}
                  alt={gift.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(gift.title)}`
                  }}
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleQuickView(gift.id)}
                      className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-maroon hover:text-saffron shadow-lg backdrop-blur-sm"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(gift)}
                      className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-maroon hover:text-saffron shadow-lg backdrop-blur-sm"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Like Button */}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleLike(gift.id)}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm ${
                    likedItems.includes(gift.id)
                      ? "bg-red-500 text-white hover:bg-red-600 scale-110"
                      : "bg-white/90 hover:bg-white text-maroon hover:text-red-500"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedItems.includes(gift.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-saffron bg-saffron/10 px-4 py-2 rounded-full border border-saffron/20">
                    {gift.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-gold text-gold" />
                    <span className="text-sm text-maroon/70 font-semibold">{gift.rating}</span>
                    <span className="text-xs text-maroon/50">({gift.reviews})</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-maroon mb-3 group-hover:text-saffron transition-colors line-clamp-2">
                  {gift.title}
                </h3>

                <p className="text-maroon/70 mb-4 leading-relaxed text-sm line-clamp-2">{gift.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-2xl text-saffron">{gift.price}</span>
                    {gift.originalPrice && (
                      <span className="text-sm text-maroon/50 line-through">{gift.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart(gift)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Add to Cart
                </Button>

                {/* Progress bar for popularity */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-maroon/60 mb-2">
                    <span className="font-medium">Popularity</span>
                    <span className="font-bold">{Math.round((gift.reviews / 250) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-saffron to-gold h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.round((gift.reviews / 250) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredGifts.length > 8 && (
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-gradient-to-r from-saffron via-gold to-saffron hover:from-gold hover:via-saffron hover:to-gold text-cream font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-lg"
            >
              <Plus className="w-6 h-6 mr-3" />
              {showMore ? "Show Less Gifts" : "Load More Gifts"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
