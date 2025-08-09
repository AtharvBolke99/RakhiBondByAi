"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react"
import Image from "next/image"

export default function LoveStories() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stories = [
    {
      name: "Priya & Arjun",
      relation: "Sister & Brother",
      story:
        "Every year, Priya sends me a handmade rakhi from Canada. Last year, she included a video of her tying it on a photo of us. Distance means nothing when love is this strong. This rakhi represents all the childhood memories we share.",
      location: "Mumbai ↔ Toronto",
      image: "/rakhi-celebration-siblings.png",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Meera & Rohan",
      relation: "Sister & Brother",
      story:
        "When I couldn't come home for Rakhi due to my job, Rohan drove 8 hours to my city just so we could celebrate together. He said no festival is complete without his sister. That's the kind of protection this festival represents.",
      location: "Delhi ↔ Bangalore",
      image: "/raksha-bandhan-celebration.png",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Anjali & Vikram",
      relation: "Sister & Brother",
      story:
        "After our parents passed away, we only had each other. Every Raksha Bandhan, we promise to be there for one another. This festival taught us that family isn't just about blood – it's about the bonds we choose to honor.",
      location: "Pune",
      image: "/raksha-bandhan-celebration.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Kavya & Aditya",
      relation: "Cousins",
      story:
        "Growing up, Aditya was more like a brother to me than a cousin. Even after marriage, he makes sure to visit every Rakhi. His wife joins in now too, making our bond even stronger. Some relationships are just meant to be eternal.",
      location: "Chennai",
      image: "/rakhi-cousin-siblings.png",
      color: "from-green-500 to-emerald-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(timer)
  }, [stories.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? stories.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === stories.length - 1 ? 0 : currentIndex + 1)
  }

  const currentStory = stories[currentIndex]

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-maroon/10 rounded-full border border-maroon/20 mb-6">
            <Heart className="w-4 h-4 text-maroon mr-2" />
            <span className="text-maroon font-semibold">Real Stories</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon mb-6">Love Stories</h2>
          <p className="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
            Heartwarming tales from siblings who celebrate the beautiful bond of Raksha Bandhan with love, dedication,
            and endless care.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="order-2 lg:order-1">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-gold/20 shadow-2xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentStory.color} opacity-5`}></div>
                <CardContent className="p-8 md:p-12 relative z-10">
                  {/* Quote Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${currentStory.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  <blockquote className="text-lg md:text-xl text-maroon leading-relaxed mb-8 font-medium italic">
                    "{currentStory.story}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-2xl font-bold text-maroon">{currentStory.name}</p>
                      <p className="text-saffron font-semibold text-lg">{currentStory.relation}</p>
                      <p className="text-maroon/60 text-sm mt-1">📍 {currentStory.location}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPrevious}
                        className="w-12 h-12 rounded-full border-maroon text-maroon hover:bg-maroon hover:text-cream bg-transparent shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToNext}
                        className="w-12 h-12 rounded-full border-maroon text-maroon hover:bg-maroon hover:text-cream bg-transparent shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentStory.image || "/placeholder.svg"}
                    alt={`${currentStory.name} celebrating Raksha Bandhan`}
                    fill
                    className="object-cover transition-all duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentStory.color} opacity-20`}></div>

                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-maroon">{currentStory.relation}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${currentStory.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Story Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${stories[index].color} scale-125 shadow-lg`
                    : "bg-maroon/30 hover:bg-maroon/50"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
