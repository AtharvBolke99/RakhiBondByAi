"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-maroon/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23E87E04' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Countdown Chip */}
            <div className="inline-flex items-center px-4 py-2 bg-gold/20 rounded-full border border-gold/30">
              <span className="text-sm font-medium text-maroon">🎉 Raksha Bandhan 2025 approaching</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-maroon leading-tight">
                Tie a bond. <span className="text-saffron">Celebrate</span> a lifetime.
              </h1>

              <p className="text-lg md:text-xl text-maroon/80 max-w-lg leading-relaxed">
                Small threads, big promises — make this Raksha Bandhan unforgettable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("wishes")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-saffron hover:bg-saffron/90 text-cream font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Create a Wish
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("gifts")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 bg-transparent"
              >
                Explore Gifts
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative w-full h-96 md:h-[500px]">
              <Image
                src="/rakhi-exchange.png"
                alt="Brother and sister celebrating Raksha Bandhan with traditional rakhi exchange"
                fill
                className="object-contain"
                priority
              />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-saffron/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
