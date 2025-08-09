import { Heart, Users, Gift, Sparkles } from "lucide-react"

export default function About() {
  const traditions = [
    {
      icon: Heart,
      title: "Sacred Bond",
      description: "A sister ties a rakhi on her brother's wrist, symbolizing love and protection.",
    },
    {
      icon: Users,
      title: "Family Unity",
      description: "Families come together to celebrate the unbreakable bond between siblings.",
    },
    {
      icon: Gift,
      title: "Exchange of Gifts",
      description: "Brothers give gifts to sisters as a token of their promise to protect.",
    },
    {
      icon: Sparkles,
      title: "Modern Celebrations",
      description: "Today's celebrations include virtual rakhis and creative gift ideas.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream to-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">About Raksha Bandhan</h2>
          <p className="text-lg text-maroon/80 max-w-3xl mx-auto leading-relaxed">
            Raksha Bandhan, the festival of protection, celebrates the eternal bond between brothers and sisters. This
            ancient tradition has evolved beautifully, embracing modern ways while preserving its sacred essence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {traditions.map((tradition, index) => {
            const IconComponent = tradition.icon
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gold/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-cream" />
                </div>
                <h3 className="font-serif text-xl font-bold text-maroon mb-3">{tradition.title}</h3>
                <p className="text-maroon/70 leading-relaxed">{tradition.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon mb-4">The Timeless Tradition</h3>
              <p className="text-maroon/80 leading-relaxed mb-4">
                Dating back to ancient Hindu scriptures, Raksha Bandhan has been celebrated for centuries. The festival
                falls on the full moon day of the Hindu month of Shravana, typically in August.
              </p>
              <p className="text-maroon/80 leading-relaxed">
                Today, the celebration has expanded beyond biological siblings to include cousins, close friends, and
                even symbolic relationships that embody the spirit of protection and care.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-saffron/20 to-maroon/20 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🪢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
