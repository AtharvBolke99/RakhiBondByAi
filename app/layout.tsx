import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "RakhiBond - Tie a bond. Celebrate a lifetime.",
  description:
    "Small threads, big promises — make this Raksha Bandhan unforgettable. Create personalized wishes, explore gift ideas, and celebrate the eternal bond between siblings.",
  keywords: "Raksha Bandhan, Rakhi, siblings, festival, Indian festival, brother sister, gifts, wishes, celebration",
  authors: [{ name: "RakhiBond Team" }],
  creator: "RakhiBond",
  publisher: "RakhiBond",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rakhibond.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RakhiBond - Celebrate Raksha Bandhan",
    description: "Small threads, big promises — make this Raksha Bandhan unforgettable.",
    url: "https://rakhibond.com",
    siteName: "RakhiBond",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RakhiBond - Raksha Bandhan Celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RakhiBond - Celebrate Raksha Bandhan",
    description: "Small threads, big promises — make this Raksha Bandhan unforgettable.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E87E04" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
