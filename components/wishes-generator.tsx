"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Share, Save, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WishesGenerator() {
  const [tone, setTone] = useState("")
  const [name, setName] = useState("")
  const [hobby, setHobby] = useState("")
  const [generatedWishes, setGeneratedWishes] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const wishTemplates = {
    Emotional: [
      "Dear {name}, tying this rakhi is my promise: come sunshine or rain, I'll always be by your side. Happy Raksha Bandhan.",
      "To my dearest {name}, this thread represents all the love, care, and protection I have for you. May our bond grow stronger each day.",
      "My beloved {name}, through every season of life, you've been my constant. This rakhi carries all my prayers for your happiness.",
    ],
    Funny: [
      "To the sibling who still steals my fries — tie the rakhi, and I'll forgive (maybe). Happy Rakhi!",
      "Dear {name}, I promise to protect you from everything... except your own bad jokes! Happy Raksha Bandhan!",
      "To my partner in crime {name}, thanks for always being the one to get caught first. Happy Rakhi!",
    ],
    Formal: [
      "Dear {name}, on this auspicious occasion of Raksha Bandhan, I wish you prosperity, happiness, and success in all your endeavors.",
      "Respected {name}, may this sacred thread strengthen our bond and bring you abundant blessings throughout the year.",
      "Dear {name}, wishing you a very Happy Raksha Bandhan filled with joy, love, and cherished moments.",
    ],
    "Marathi Mix": [
      "Tuzya sathi aaj hi rakhi, aani saglya kalji la bye-bye! Happy Raksha Bandhan, bhau/ben.",
      "My dear {name}, tu maza सबसे प्यारा sibling आहेस! Rakhi cha din खूप खूप शुभेच्छा!",
      "Aai-baba च्या लाडक्या {name}, तुझ्यासाठी माझे सारे प्रेम आणि आशीर्वाद. Happy Rakhi!",
    ],
  }

  const generateWishes = () => {
    if (!tone) {
      toast({
        title: "Please select a tone",
        description: "Choose the style of wishes you'd like to generate.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Simulate API call delay
    setTimeout(() => {
      const templates = wishTemplates[tone as keyof typeof wishTemplates]
      const wishes = templates.map((template) =>
        template.replace(/{name}/g, name || "dear sibling").replace(/bhau\/ben/g, name ? name : "bhau/ben"),
      )

      // Add hobby-specific touches if provided
      if (hobby) {
        wishes[0] = wishes[0] + ` May your passion for ${hobby} bring you endless joy!`
      }

      setGeneratedWishes(wishes)
      setIsGenerating(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard!",
      description: "The wish has been copied to your clipboard.",
    })
  }

  const shareWish = (text: string, platform: string) => {
    const encodedText = encodeURIComponent(text)
    let url = ""

    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodedText}`
        break
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodedText}`
        break
      default:
        copyToClipboard(text)
        return
    }

    window.open(url, "_blank")
  }

  return (
    <section id="wishes" className="py-20 bg-gradient-to-b from-cream/50 to-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-maroon mb-6">Custom Wishes Generator</h2>
          <p className="text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Create personalized Raksha Bandhan wishes that perfectly capture your feelings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-gold/20 shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-maroon text-center">Personalize Your Wishes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tone" className="text-maroon font-medium">
                    Choose Tone
                  </Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="border-gold/30 focus:border-saffron">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Emotional">Emotional</SelectItem>
                      <SelectItem value="Funny">Funny</SelectItem>
                      <SelectItem value="Formal">Formal</SelectItem>
                      <SelectItem value="Marathi Mix">Marathi Mix</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-maroon font-medium">
                    Sibling's Name (Optional)
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className="border-gold/30 focus:border-saffron"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hobby" className="text-maroon font-medium">
                    Their Hobby (Optional)
                  </Label>
                  <Input
                    id="hobby"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    placeholder="e.g., painting, cricket"
                    className="border-gold/30 focus:border-saffron"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={generateWishes}
                  disabled={isGenerating}
                  className="bg-saffron hover:bg-saffron/90 text-cream px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Wishes"
                  )}
                </Button>
              </div>

              {generatedWishes.length > 0 && (
                <div className="space-y-4 mt-8">
                  <h3 className="font-serif text-xl font-bold text-maroon text-center mb-6">
                    Your Personalized Wishes
                  </h3>
                  {generatedWishes.map((wish, index) => (
                    <Card key={index} className="bg-gradient-to-r from-cream/50 to-white/50 border-gold/20">
                      <CardContent className="p-6">
                        <p className="text-maroon leading-relaxed mb-4 font-medium">{wish}</p>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(wish)}
                            className="border-maroon text-maroon hover:bg-maroon hover:text-cream"
                          >
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => shareWish(wish, "whatsapp")}
                            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                          >
                            <Share className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => shareWish(wish, "twitter")}
                            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                          >
                            <Share className="w-4 h-4 mr-1" />
                            Twitter
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gold text-gold hover:bg-gold hover:text-white bg-transparent"
                          >
                            <Save className="w-4 h-4 mr-1" />
                            Save
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
