import Header from "@/components/header"
import EnhancedHero from "@/components/enhanced-hero"
import TraditionSection from "@/components/tradition-section"
import EnhancedGiftIdeas from "@/components/enhanced-gift-ideas"
import SongDedication from "@/components/song-dedication"
import WishesGenerator from "@/components/wishes-generator"
import CountdownTimer from "@/components/countdown-timer"
import LoveStories from "@/components/love-stories"
import PhotoGallery from "@/components/photo-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-0">
        <EnhancedHero />

        {/* Spacer */}
        <div className="h-8"></div>

        <TraditionSection />

        {/* Spacer */}
        <div className="h-8"></div>

        <EnhancedGiftIdeas />

        {/* Spacer */}
        <div className="h-8"></div>

        <SongDedication />

        {/* Spacer */}
        <div className="h-8"></div>

        <WishesGenerator />

        {/* Spacer */}
        <div className="h-8"></div>

        <CountdownTimer />

        {/* Spacer */}
        <div className="h-8"></div>

        <LoveStories />

        {/* Spacer */}
        <div className="h-8"></div>

        <PhotoGallery />
      </main>
      <Footer />
    </div>
  )
}
