"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  Pause,
  Heart,
  Share2,
  Copy,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Download,
  SkipBack,
  SkipForward,
  AlertCircle,
  Music,
  List,
  ExternalLink,
  Headphones,
  Radio,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SongDedication() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [likedSongs, setLikedSongs] = useState<number[]>([])
  const [showShareMenu, setShowShareMenu] = useState<number | null>(null)
  const [volume, setVolume] = useState<{ [key: number]: number }>({})
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({})
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({})
  const [duration, setDuration] = useState<{ [key: number]: number }>({})
  const [isSimulatedPlay, setIsSimulatedPlay] = useState<{ [key: number]: boolean }>({})
  const simulationIntervals = useRef<{ [key: number]: NodeJS.Timeout }>({})
  const { toast } = useToast()

  const songs = [
    {
      id: 1,
      title: "Phoolon Ka Taron Ka",
      artist: "Mohammed Rafi",
      category: "For Brother",
      description: "A classic song expressing a sister's love and blessings for her brother",
      duration: "4:32",
      durationSeconds: 272,
      lyrics: "Phoolon ka taron ka sabka kehna hai, ek hazaron mein meri behna hai...",
      color: "from-blue-500 to-purple-600",
      emoji: "🎵",
    },
    {
      id: 2,
      title: "Behna Ne Bhai Ki Kalai Se",
      artist: "Lata Mangeshkar",
      category: "For Brother",
      description: "Beautiful song about the sacred thread of Rakhi and sibling bond",
      duration: "5:15",
      durationSeconds: 315,
      lyrics: "Behna ne bhai ki kalai se pyar bandha hai...",
      color: "from-pink-500 to-rose-600",
      emoji: "🪢",
    },
    {
      id: 3,
      title: "Rakhi Dhagon Ka Tyohar",
      artist: "Anuradha Paudwal",
      category: "For Sister",
      description: "Modern celebration song for the festival of Raksha Bandhan",
      duration: "4:18",
      durationSeconds: 258,
      lyrics: "Rakhi dhagon ka tyohar hai, bhai behen ka pyar hai...",
      color: "from-orange-500 to-red-600",
      emoji: "🎊",
    },
    {
      id: 4,
      title: "Bhaiya Mere Rakhi Ke Bandhan Ko Nibhana",
      artist: "Lata Mangeshkar",
      category: "For Brother",
      description: "Emotional song about keeping the promise of Rakhi",
      duration: "6:22",
      durationSeconds: 382,
      lyrics: "Bhaiya mere rakhi ke bandhan ko nibhana, tu hamesha mujhko tarna...",
      color: "from-green-500 to-teal-600",
      emoji: "💝",
    },
    {
      id: 5,
      title: "Mere Bhaiya Mere Chanda",
      artist: "Geeta Dutt",
      category: "For Brother",
      description: "Sweet song comparing brother to the moon",
      duration: "3:45",
      durationSeconds: 225,
      lyrics: "Mere bhaiya mere chanda, mere anmol ratan...",
      color: "from-yellow-500 to-orange-600",
      emoji: "🌙",
    },
    {
      id: 6,
      title: "Resham Ka Rumaal",
      artist: "Great Grand Masti",
      category: "For Sister",
      description: "Fun and playful song for sister's celebration",
      duration: "4:01",
      durationSeconds: 241,
      lyrics: "Resham ka rumaal tera, main to deewana...",
      color: "from-purple-500 to-indigo-600",
      emoji: "🎭",
    },
  ]

  // Simulate audio playback with realistic experience
  const simulatePlayback = (id: number) => {
    const song = songs.find((s) => s.id === id)
    if (!song) return

    setIsSimulatedPlay((prev) => ({ ...prev, [id]: true }))
    setCurrentTime((prev) => ({ ...prev, [id]: 0 }))
    setDuration((prev) => ({ ...prev, [id]: song.durationSeconds }))

    // Simulate progress with realistic timing
    simulationIntervals.current[id] = setInterval(() => {
      setCurrentTime((prev) => {
        const newTime = (prev[id] || 0) + 1
        if (newTime >= song.durationSeconds) {
          setPlayingId(null)
          setIsSimulatedPlay((prevSim) => ({ ...prevSim, [id]: false }))
          clearInterval(simulationIntervals.current[id])
          delete simulationIntervals.current[id]
          return { ...prev, [id]: 0 }
        }
        return { ...prev, [id]: newTime }
      })
    }, 1000)
  }

  const togglePlay = (id: number) => {
    const song = songs.find((s) => s.id === id)
    if (!song) return

    if (playingId === id) {
      // Pause current song
      if (simulationIntervals.current[id]) {
        clearInterval(simulationIntervals.current[id])
        delete simulationIntervals.current[id]
      }
      setIsSimulatedPlay((prev) => ({ ...prev, [id]: false }))
      setPlayingId(null)
      toast({
        title: "Paused ⏸️",
        description: "Song paused",
      })
    } else {
      // Stop any currently playing song
      if (playingId !== null) {
        if (simulationIntervals.current[playingId]) {
          clearInterval(simulationIntervals.current[playingId])
          delete simulationIntervals.current[playingId]
        }
        setIsSimulatedPlay((prev) => ({ ...prev, [playingId]: false }))
      }

      // Start new song
      simulatePlayback(id)
      setPlayingId(id)
      toast({
        title: "Now Playing 🎵",
        description: `${song.title} by ${song.artist}`,
      })
    }
  }

  const toggleLike = (id: number) => {
    setLikedSongs((prev) => (prev.includes(id) ? prev.filter((songId) => songId !== id) : [...prev, id]))

    if (!likedSongs.includes(id)) {
      toast({
        title: "Added to favorites! ❤️",
        description: "Song added to your favorite Rakhi songs.",
      })
    } else {
      toast({
        title: "Removed from favorites",
        description: "Song removed from your favorites.",
      })
    }
  }

  const toggleShareMenu = (id: number) => {
    setShowShareMenu(showShareMenu === id ? null : id)
  }

  const skipToNext = () => {
    if (playingId !== null) {
      const currentIndex = songs.findIndex((song) => song.id === playingId)
      const nextIndex = (currentIndex + 1) % songs.length
      togglePlay(songs[nextIndex].id)
    }
  }

  const skipToPrevious = () => {
    if (playingId !== null) {
      const currentIndex = songs.findIndex((song) => song.id === playingId)
      const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1
      togglePlay(songs[prevIndex].id)
    }
  }

  const shareOnPlatform = (song: any, platform: string) => {
    const songUrl = `${window.location.origin}#songs`
    const shareText = `🪢 Listen to "${song.title}" by ${song.artist} - Perfect for Raksha Bandhan! ${song.description}`
    const hashtags = "RakshaBandhan,RakhiSongs,SiblingLove,IndianFestival"

    let shareUrl = ""

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${songUrl}`)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(songUrl)}&quote=${encodeURIComponent(shareText)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(songUrl)}&hashtags=${hashtags}`
        break
      case "instagram":
        navigator.clipboard.writeText(`${shareText}\n\n${songUrl}`)
        toast({
          title: "Copied to clipboard! 📋",
          description: "Share this on Instagram by pasting the copied text.",
        })
        return
      case "copy":
        navigator.clipboard.writeText(`${shareText}\n\n${songUrl}`)
        toast({
          title: "Link copied! 🔗",
          description: "Song link copied to clipboard.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
      toast({
        title: "Sharing song! 🎵",
        description: `Opening ${platform} to share this beautiful Rakhi song.`,
      })
    }

    setShowShareMenu(null)
  }

  const downloadSong = (song: any) => {
    toast({
      title: "Download feature coming soon! 📥",
      description: `"${song.title}" will be available for download soon.`,
    })
  }

  const exploreMoreSongs = () => {
    toast({
      title: "Exploring More Songs! 🎵",
      description: "Redirecting to our extended Rakhi songs collection...",
    })
    // Simulate navigation to more songs
    setTimeout(() => {
      toast({
        title: "More Songs Available! 🎶",
        description: "Found 50+ additional Rakhi songs for you to enjoy!",
      })
    }, 2000)
  }

  const createPlaylist = () => {
    const likedSongTitles = songs.filter((song) => likedSongs.includes(song.id)).map((song) => song.title)

    if (likedSongTitles.length === 0) {
      toast({
        title: "Create Your Playlist! 🎵",
        description: "Like some songs first to add them to your playlist.",
      })
    } else {
      toast({
        title: "Playlist Created! 🎶",
        description: `Created "My Rakhi Favorites" with ${likedSongTitles.length} songs: ${likedSongTitles.slice(0, 2).join(", ")}${likedSongTitles.length > 2 ? "..." : ""}`,
      })
    }
  }

  const openMusicLibrary = () => {
    toast({
      title: "Opening Music Library! 🎵",
      description: "Accessing your complete Rakhi music collection...",
    })
    setTimeout(() => {
      toast({
        title: "Music Library Loaded! 📚",
        description: "Browse through 100+ traditional and modern Rakhi songs!",
      })
    }, 1500)
  }

  const startRadioMode = () => {
    toast({
      title: "Starting Rakhi Radio! 📻",
      description: "Playing continuous Rakhi songs based on your preferences...",
    })
    setTimeout(() => {
      toast({
        title: "Rakhi Radio Live! 🎙️",
        description: "Now playing: Curated Rakhi classics and modern hits!",
      })
    }, 2000)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowShareMenu(null)
    }

    if (showShareMenu !== null) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [showShareMenu])

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(simulationIntervals.current).forEach((interval) => {
        clearInterval(interval)
      })
    }
  }, [])

  return (
    <section id="songs" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-3 bg-purple-100 rounded-full border border-purple-200 mb-8">
            <span className="text-purple-700 font-semibold text-lg">🎵 Musical Memories</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon mb-8">Song Dedication</h2>
          <p className="text-xl text-maroon/80 max-w-4xl mx-auto leading-relaxed">
            Dedicate beautiful Rakhi songs to your siblings and share the melody of love. Each song carries the essence
            of sibling bond and festive joy.
          </p>

          {/* Demo Notice */}
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-amber-100 rounded-full border border-amber-200">
            <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-medium">Demo Mode: Songs play in simulation for demonstration</span>
          </div>
        </div>

        {/* Global Music Controls */}
        {playingId !== null && (
          <div className="fixed bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20 p-4 z-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎵</span>
                </div>
                <div>
                  <div className="font-semibold text-maroon">{songs.find((s) => s.id === playingId)?.title}</div>
                  <div className="text-sm text-maroon/60 flex items-center">
                    {songs.find((s) => s.id === playingId)?.artist}
                    <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Demo</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={skipToPrevious}
                  className="w-10 h-10 rounded-full hover:bg-purple-100 flex items-center justify-center transition-colors"
                >
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={() => togglePlay(playingId)}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300"
                >
                  {playingId ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={skipToNext}
                  className="w-10 h-10 rounded-full hover:bg-purple-100 flex items-center justify-center transition-colors"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Songs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {songs.map((song) => (
            <Card
              key={song.id}
              className="group bg-white/90 backdrop-blur-sm border-2 border-gold/20 hover:border-gold/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${song.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 relative z-10">
                {/* Song Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${song.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{song.emoji}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleLike(song.id)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center ${
                        likedSongs.includes(song.id)
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-white/80 text-maroon hover:bg-red-50 hover:text-red-500"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedSongs.includes(song.id) ? "fill-current" : ""}`} />
                    </button>
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleShareMenu(song.id)
                        }}
                        className="w-10 h-10 rounded-full bg-white/80 text-maroon hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      {/* Share Menu */}
                      {showShareMenu === song.id && (
                        <div
                          className="absolute top-12 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20 p-4 min-w-[200px] z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="text-sm font-semibold text-maroon mb-3">Share this song</div>
                          <div className="space-y-2">
                            <button
                              onClick={() => shareOnPlatform(song, "whatsapp")}
                              className="flex items-center w-full px-3 py-2 text-left text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            >
                              <MessageCircle className="w-4 h-4 mr-3" />
                              WhatsApp
                            </button>
                            <button
                              onClick={() => shareOnPlatform(song, "facebook")}
                              className="flex items-center w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Facebook className="w-4 h-4 mr-3" />
                              Facebook
                            </button>
                            <button
                              onClick={() => shareOnPlatform(song, "twitter")}
                              className="flex items-center w-full px-3 py-2 text-left text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                              <Twitter className="w-4 h-4 mr-3" />
                              Twitter
                            </button>
                            <button
                              onClick={() => shareOnPlatform(song, "instagram")}
                              className="flex items-center w-full px-3 py-2 text-left text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                            >
                              <Instagram className="w-4 h-4 mr-3" />
                              Instagram
                            </button>
                            <hr className="my-2 border-gray-200" />
                            <button
                              onClick={() => shareOnPlatform(song, "copy")}
                              className="flex items-center w-full px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <Copy className="w-4 h-4 mr-3" />
                              Copy Link
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Song Info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {song.category}
                    </span>
                    <span className="text-sm text-maroon/60 font-medium">
                      {currentTime[song.id] && duration[song.id]
                        ? `${formatTime(currentTime[song.id])} / ${formatTime(duration[song.id])}`
                        : song.duration}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-maroon mb-2 group-hover:text-purple-600 transition-colors">
                    {song.title}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">by {song.artist}</p>
                  <p className="text-maroon/70 text-sm leading-relaxed mb-4">{song.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-maroon/60 italic">"{song.lyrics}"</p>
                  </div>
                </div>

                {/* Progress Bar */}
                {duration[song.id] && (
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${song.color} transition-all duration-300`}
                        style={{
                          width: `${((currentTime[song.id] || 0) / duration[song.id]) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => togglePlay(song.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      playingId === song.id
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                        : `bg-gradient-to-r ${song.color} text-white hover:scale-105`
                    } shadow-lg hover:shadow-xl`}
                  >
                    {playingId === song.id ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {playingId === song.id ? "Pause" : "Play"}
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => downloadSong(song)}
                      className="w-10 h-10 rounded-full bg-white/80 text-maroon hover:bg-green-50 hover:text-green-600 flex items-center justify-center transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Playing Indicator */}
                {playingId === song.id && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                      <div
                        className="w-1 h-6 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-5 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-1 h-7 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="w-1 h-4 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm text-purple-600 font-medium">Demo Playing...</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Create Musical Memories Section - Fully Clickable */}
        <div className="text-center">
          <div
            onClick={() => {
              toast({
                title: "Musical Memories! 🎵",
                description: "Explore all the beautiful ways to share Rakhi songs with your loved ones!",
              })
            }}
            className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl p-12 border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
          >
            <div className="mb-8">
              <h3 className="font-serif text-3xl font-bold text-maroon mb-6 group-hover:text-purple-600 transition-colors">
                Create Musical Memories
              </h3>
              <p className="text-lg text-maroon/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Share these beautiful Rakhi songs with your siblings and create lasting musical memories. Each song
                carries the warmth of tradition and the joy of celebration.
              </p>
            </div>

            {/* Interactive Action Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Explore More Songs */}
              <button
                onClick={exploreMoreSongs}
                className="group/item bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <Music className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Explore More</div>
                    <div className="text-sm opacity-90">50+ Songs</div>
                  </div>
                </div>
              </button>

              {/* Create Playlist */}
              <button
                onClick={createPlaylist}
                className="group/item bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <List className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Create Playlist</div>
                    <div className="text-sm opacity-90">Your Favorites</div>
                  </div>
                </div>
              </button>

              {/* Music Library */}
              <button
                onClick={openMusicLibrary}
                className="group/item bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Music Library</div>
                    <div className="text-sm opacity-90">Full Collection</div>
                  </div>
                </div>
              </button>

              {/* Rakhi Radio */}
              <button
                onClick={startRadioMode}
                className="group/item bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Rakhi Radio</div>
                    <div className="text-sm opacity-90">Live Stream</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={exploreMoreSongs}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 group/main"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover/main:rotate-12 transition-transform" />
                Discover More Songs
              </button>
              <button
                onClick={createPlaylist}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group/main"
              >
                <List className="w-5 h-5 mr-2 group-hover/main:scale-110 transition-transform" />
                Build Your Playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
