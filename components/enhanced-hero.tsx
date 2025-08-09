"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Sparkles, Heart, Gift, ArrowRight } from "lucide-react"

export default function EnhancedHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100 overflow-hidden pt-20"
    >
      {/* Floating Decorative Elements - Better positioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-16 w-8 h-8 text-saffron opacity-40 animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          🪔
        </div>
        <div
          className="absolute top-48 right-24 w-6 h-6 text-maroon opacity-30 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🌺
        </div>
        <div
          className="absolute bottom-48 left-20 w-7 h-7 text-gold opacity-35 animate-bounce"
          style={{ animationDelay: "4s" }}
        >
          🪢
        </div>
        <div
          className="absolute bottom-32 right-20 w-6 h-6 text-saffron opacity-40 animate-bounce"
          style={{ animationDelay: "6s" }}
        >
          🌸
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left Content - Better spaced */}
          <div className={`space-y-10 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Festival Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full border-2 border-saffron/30 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full mr-4 shadow-lg">
                  <span className="text-white font-bold text-xl">🪢</span>
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-saffron">Happy Raksha Bandhan 2025!</div>
                  <div className="text-sm text-maroon/70">Celebrate the sacred bond</div>
                </div>
                <Sparkles className="w-6 h-6 text-gold ml-4 animate-pulse" />
              </div>
            </div>

            {/* Main Heading - Better typography */}
            <div className="space-y-8">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-maroon mb-4">Tie a Bond.</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-saffron via-gold to-maroon bg-clip-text text-transparent">
                    A Lifetime.
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-maroon/80 max-w-2xl leading-relaxed font-medium">
                Celebrate Raksha Bandhan with heartfelt gifts, personalized wishes, and cherished memories that last
                forever.
              </p>
            </div>

            {/* Action Buttons - New vibrant colors */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button
                onClick={() => handleNavClick("gifts")}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer border-0 outline-none focus:ring-4 focus:ring-orange-400/30"
              >
                <span className="relative z-10 flex items-center justify-center text-lg">
                  <Gift className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Explore Gifts
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>

              <button
                onClick={() => handleNavClick("wishes")}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer outline-none focus:ring-4 focus:ring-blue-400/30"
              >
                <span className="relative z-10 flex items-center justify-center text-lg">
                  <Heart className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Create Wishes
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Better positioned */}
          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative w-full h-[600px] group">
                {/* Decorative Background - More subtle */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 via-gold/10 to-maroon/10 rounded-full transform rotate-12 scale-105 blur-3xl"></div>

                {/* Main Illustration */}
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <Image
                    src="/rakhi-celebration-siblings.png"
                    alt="Sister tying Rakhi on brother's wrist in a warm, festive celebration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 via-transparent to-saffron/10"></div>
                </div>

                {/* Floating Decorative Elements - Better positioned */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20 animate-pulse">
                  <span className="text-2xl">🪢</span>
                </div>

                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-maroon to-saffron rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20 animate-pulse">
                  <span className="text-xl">💖</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-maroon/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-saffron rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
