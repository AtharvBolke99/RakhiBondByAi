"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const quickLinks = [
    { name: "About Rakhi", href: "#about" },
    { name: "Gift Ideas", href: "#gifts" },
    { name: "Wishes Generator", href: "#wishes" },
    { name: "Photo Gallery", href: "#gallery" },
  ]

  const supportLinks = [
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Accessibility", href: "#accessibility" },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-maroon to-maroon/90 text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                <span className="text-cream font-bold">🪢</span>
              </div>
              <span className="font-serif text-2xl font-bold">RakhiBond</span>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Celebrating the eternal bond between siblings with love, tradition, and modern touches. Making every
              Raksha Bandhan memorable and special.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-cream/10 hover:bg-saffron rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/80 hover:text-saffron transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      // Handle different support actions
                      switch (link.href) {
                        case "#contact":
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                          break
                        case "#privacy":
                          alert("Privacy Policy - Feature coming soon!")
                          break
                        case "#terms":
                          alert("Terms of Service - Feature coming soon!")
                          break
                        case "#accessibility":
                          alert("Accessibility Information - Feature coming soon!")
                          break
                        default:
                          alert("Support section - Feature coming soon!")
                      }
                    }}
                    className="text-cream/80 hover:text-saffron transition-colors duration-200 text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-4">
              <button
                onClick={() => (window.location.href = "mailto:hello@rakhibond.com")}
                className="flex items-center space-x-2 text-cream/80 hover:text-saffron transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@rakhibond.com</span>
              </button>
              <button
                onClick={() => (window.location.href = "tel:+919876543210")}
                className="flex items-center space-x-2 text-cream/80 hover:text-saffron transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </button>
              <div className="flex items-center space-x-2 text-cream/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold">Stay Connected</h3>
            <p className="text-cream/80 text-sm">
              Get the latest Rakhi ideas, wishes, and celebration tips delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/60 focus:border-saffron"
              />
              <Button className="w-full bg-saffron hover:bg-saffron/90 text-cream font-semibold">Subscribe</Button>
            </div>
            <p className="text-xs text-cream/60">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-cream/80 text-sm">
              © {new Date().getFullYear()} RakhiBond. Made with <Heart className="w-4 h-4 inline text-saffron" /> for
              siblings everywhere.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => alert("Privacy Policy - Feature coming soon!")}
                className="text-cream/80 hover:text-saffron transition-colors cursor-pointer"
              >
                Privacy
              </button>
              <button
                onClick={() => alert("Terms of Service - Feature coming soon!")}
                className="text-cream/80 hover:text-saffron transition-colors cursor-pointer"
              >
                Terms
              </button>
              <button
                onClick={() => alert("Accessibility Information - Feature coming soon!")}
                className="text-cream/80 hover:text-saffron transition-colors cursor-pointer"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
