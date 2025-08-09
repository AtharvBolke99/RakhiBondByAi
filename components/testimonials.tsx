"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      relation: "Sister",
      story:
        "Every Raksha Bandhan, my brother and I recreate our childhood ritual of making rakhis together. Even though we live in different cities now, we video call and tie virtual rakhis. The bond remains as strong as ever.",
      location: "Mumbai",
    },
    {
      name: "Arjun Patel",
      relation: "Brother",
      story:
        "My sister surprised me last year by learning to make traditional sweets just for Rakhi. The love and effort she put in made it the most memorable celebration. It's not about the gifts, it's about the thought.",
      location: "Ahmedabad",
    },
    {
      name: "Meera Reddy",
      relation: "Sister",
      story:
        "Being the only girl among three brothers, Raksha Bandhan has always been special. This year, my brothers pooled together to gift me a trip to our hometown. The best gift was spending time together as a family.",
      location: "Hyderabad",
    },
    {
      name: "Rohit Kumar",
      relation: "Brother",
      story:
        "My sister moved abroad for work, but she never misses sending me a rakhi. Last year, she sent a handmade one with a video message. Technology has made our bond stronger despite the distance.",
      location: "Delhi",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section id="stories" className="py-20 bg-gradient-to-br from-cream/30 to-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">Heartwarming Stories</h2>
          <p className="text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Real stories from siblings who celebrate the beautiful bond of Raksha Bandhan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-white/80 backdrop-blur-sm border-gold/20 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-cream" />
                </div>

                <div className="ml-8">
                  <blockquote className="text-lg md:text-xl text-maroon leading-relaxed mb-6 font-medium italic">
                    "{testimonials[currentIndex].story}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xl font-bold text-maroon">{testimonials[currentIndex].name}</p>
                      <p className="text-saffron font-medium">
                        {testimonials[currentIndex].relation} • {testimonials[currentIndex].location}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPrevious}
                        className="w-10 h-10 rounded-full border-maroon text-maroon hover:bg-maroon hover:text-cream bg-transparent"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToNext}
                        className="w-10 h-10 rounded-full border-maroon text-maroon hover:bg-maroon hover:text-cream bg-transparent"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-saffron scale-125" : "bg-maroon/30 hover:bg-maroon/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
