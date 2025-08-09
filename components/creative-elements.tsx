"use client"

import { useState } from "react"

export function InteractiveRakhi({ className = "" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative cursor-pointer transition-transform duration-300 ${
        isHovered ? "scale-105" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-saffron via-gold to-maroon rounded-full flex items-center justify-center shadow-lg">
        <span className="text-2xl">🪢</span>
      </div>
    </div>
  )
}

export function CreativeLoader() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-3 h-3 bg-saffron rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-3 h-3 bg-maroon rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
    </div>
  )
}

export function ParticleEffect() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const createParticle = (x: number, y: number) => {
    const newParticle = { id: Date.now(), x, y }
    setParticles((prev) => [...prev, newParticle])

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
    }, 2000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gold rounded-full animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          }}
        />
      ))}
    </div>
  )
}
