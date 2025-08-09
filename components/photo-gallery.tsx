"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Share, X } from "lucide-react"
import Image from "next/image"

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/rakhi-celebration-siblings.png",
      caption: "Traditional Rakhi Ceremony",
      frame: "gold",
    },
    {
      src: "/colorful-rakhi.png",
      caption: "Handcrafted Rakhis",
      frame: "silver",
    },
    {
      src: "/raksha-bandhan-celebration.png",
      caption: "Family Celebration",
      frame: "gold",
    },
    {
      src: "/rakhi-sweets.png",
      caption: "Festival Sweets",
      frame: "copper",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      caption: "Gift Exchange",
      frame: "silver",
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      caption: "Festive Decorations",
      frame: "gold",
    },
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const getFrameStyle = (frame: string) => {
    switch (frame) {
      case "gold":
        return "border-4 border-gold shadow-gold/20"
      case "silver":
        return "border-4 border-gray-300 shadow-gray-300/20"
      case "copper":
        return "border-4 border-orange-400 shadow-orange-400/20"
      default:
        return "border-4 border-gold shadow-gold/20"
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">Rakhi Memories Gallery</h2>
          <p className="text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Celebrate the beautiful moments and create lasting memories of your Raksha Bandhan celebrations.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-gradient-to-br from-cream/80 to-white/80 border-gold/30">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="font-serif text-xl font-bold text-maroon mb-2">Share Your Moment</h3>
                <p className="text-maroon/70 text-sm">Upload your Rakhi celebration photo to create a preview card</p>
              </div>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
              <Button
                onClick={() => document.getElementById("image-upload")?.click()}
                className="bg-saffron hover:bg-saffron/90 text-cream"
              >
                Choose Photo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Uploaded Image Preview */}
        {uploadedImage && (
          <div className="max-w-sm mx-auto mb-12">
            <Card className="bg-white/80 border-gold/30 overflow-hidden">
              <div className="relative">
                <Image
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded celebration photo"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Your Rakhi Celebration</p>
                  <Button size="sm" className="mt-2 bg-white/20 hover:bg-white/30 text-white border border-white/30">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
              <Card
                className={`overflow-hidden bg-white/80 ${getFrameStyle(image.frame)} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.caption}
                    </p>
                    <Button
                      size="sm"
                      className="mt-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Share functionality
                      }}
                    >
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
