"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isToday, setIsToday] = useState(true)

  useEffect(() => {
    // Since Raksha Bandhan is today, set countdown to zero
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
    setIsToday(true)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section id="countdown" className="py-20 bg-gradient-to-br from-saffron/5 via-gold/5 to-maroon/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {isToday ? (
            <>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon mb-6">
                🎉 Happy Raksha Bandhan! 🎉
              </h2>
              <p className="text-xl text-saffron font-semibold max-w-2xl mx-auto leading-relaxed">
                Today is the day! Celebrate the beautiful bond of love and protection with your siblings.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">
                Countdown to Raksha Bandhan 2025
              </h2>
              <p className="text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
                The festival of love and protection is approaching. Get ready to celebrate!
              </p>
            </>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="relative group">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-gold/40 hover:border-gold/60 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Celebration Confetti Effect */}
                  {isToday && (
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-gold/20 to-maroon/20 animate-pulse"></div>
                  )}

                  {/* Decorative Ring */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-cream text-sm font-bold">🪢</span>
                  </div>

                  <div className="text-center relative z-10">
                    <div className="text-5xl md:text-7xl font-bold text-maroon mb-3 font-mono">
                      {unit.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm md:text-base font-bold text-saffron uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {isToday ? (
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-saffron via-gold to-maroon rounded-full text-cream font-bold text-lg shadow-xl animate-pulse">
                <span className="mr-3 text-2xl">🎊</span>
                Celebrate Today with Your Siblings!
                <span className="ml-3 text-2xl">🎊</span>
              </div>
            ) : (
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-saffron to-gold rounded-full text-cream font-semibold shadow-lg">
                <span className="mr-2">🎉</span>
                Mark your calendars for August 10, 2025!
                <span className="ml-2">🎉</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
