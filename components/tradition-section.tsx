import { Heart, Users, Gift, Sparkles, Shield, Star } from "lucide-react"

export default function TraditionSection() {
  const traditions = [
    {
      icon: Heart,
      title: "Sacred Bond",
      description: "A sister ties a rakhi on her brother's wrist, symbolizing eternal love and protection.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Promise of Protection",
      description: "Brothers vow to protect their sisters throughout their lives, no matter the distance.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Gift,
      title: "Exchange of Love",
      description: "Gifts are exchanged as tokens of affection and appreciation for the special bond.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Family Unity",
      description: "Families come together to celebrate the unbreakable bond between siblings.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Modern Celebrations",
      description: "Today's celebrations include virtual rakhis and creative ways to connect.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Star,
      title: "Blessed Tradition",
      description: "This ancient festival brings blessings, prosperity, and happiness to families.",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-cream/30">
      <div className="container mx-auto px-6">
        {/* Section Header - Better spaced */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-3 bg-saffron/10 rounded-full border border-saffron/20 mb-8">
            <span className="text-saffron font-semibold text-lg">✨ Ancient Wisdom</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-maroon mb-8">The Meaning of Raksha Bandhan</h2>
          <p className="text-xl text-maroon/80 max-w-4xl mx-auto leading-relaxed">
            Discover the beautiful traditions and deeper meaning behind this sacred festival of love and protection.
          </p>
        </div>

        {/* Cards Grid - Better spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {traditions.map((tradition, index) => {
            const IconComponent = tradition.icon
            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gold/20 hover:border-gold/40 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tradition.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${tradition.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-maroon mb-6 group-hover:text-saffron transition-colors">
                    {tradition.title}
                  </h3>
                  <p className="text-maroon/70 leading-relaxed text-lg">{tradition.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section - Better spaced */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-maroon/10 rounded-3xl p-12 md:p-16 border border-gold/20 shadow-xl">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-8">
              A Festival That Transcends Time
            </h3>
            <p className="text-lg text-maroon/80 leading-relaxed max-w-4xl mx-auto mb-12">
              From ancient scriptures to modern celebrations, Raksha Bandhan continues to strengthen the bonds between
              siblings. Today, this beautiful tradition has evolved to include not just biological siblings, but also
              friends, cousins, and anyone who embodies the spirit of protection and care.
            </p>
            <div className="flex justify-center items-center space-x-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-saffron mb-3">5000+</div>
                <div className="text-base text-maroon/70 font-medium">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-maroon mb-3">∞</div>
                <div className="text-base text-maroon/70 font-medium">Bonds Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-3">💖</div>
                <div className="text-base text-maroon/70 font-medium">Love Shared</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
