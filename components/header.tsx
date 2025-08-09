"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "gifts", "songs", "wishes", "countdown", "stories", "gallery"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gifts", href: "#gifts" },
    { name: "Songs", href: "#songs" },
    { name: "Wishes", href: "#wishes" },
    { name: "Countdown", href: "#countdown" },
    { name: "Stories", href: "#stories" },
    { name: "Gallery", href: "#gallery" },
  ]

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🪢</span>
            </div>
            <span className="font-serif text-2xl font-bold text-maroon">RakhiBond</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-maroon hover:text-saffron transition-all duration-300 font-semibold py-2 px-1 ${
                  activeSection === item.href.replace("#", "") ? "text-saffron" : ""
                }`}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-maroon hover:text-saffron hover:bg-saffron/10 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 py-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full px-6 py-3 text-left text-maroon hover:text-saffron hover:bg-saffron/10 transition-all duration-300 relative ${
                  activeSection === item.href.replace("#", "") ? "text-saffron bg-saffron/5" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold">{item.name}</span>
                {activeSection === item.href.replace("#", "") && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-saffron to-gold rounded-r"></div>
                )}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
