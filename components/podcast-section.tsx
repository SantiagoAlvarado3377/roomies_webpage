"use client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { Play, Pause, Clock, Calendar, Headphones } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const podcastEpisodes = [
  {
    id: 1,
    title: "Finding Your Roommate Soulmate",
    description:
      "Join us as we chat with relationship expert Dr. Lisa Park about the psychology behind great roommate matches.",
    duration: "32:15",
    date: "Dec 10, 2024",
    plays: "2.1K",
    cover: "/podcast-microphone-setup.png",
  },
  {
    id: 2,
    title: "Horror Stories and How to Avoid Them",
    description:
      "Real roommate horror stories from our community and expert advice on how to prevent similar situations.",
    duration: "28:42",
    date: "Dec 3, 2024",
    plays: "1.8K",
    cover: "/placeholder-pmujk.png",
  },
  {
    id: 3,
    title: "International Students Share Their Stories",
    description:
      "Hear from international students about their unique challenges and successes in finding roommates abroad.",
    duration: "41:20",
    date: "Nov 26, 2024",
    plays: "1.5K",
    cover: "/placeholder-y3sxs.png",
  },
  {
    id: 4,
    title: "The Art of Compromise",
    description: "Learn practical strategies for navigating differences and finding middle ground with your roommates.",
    duration: "35:08",
    date: "Nov 19, 2024",
    plays: "2.3K",
    cover: "/placeholder-vddp4.png",
  },
]

export function PodcastSection() {
  const [playingId, setPlayingId] = useState<number | null>(null)

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id)
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Roomies Podcast</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Tune in to real conversations, expert interviews, and community stories "}
              {"that will help you on your roommate journey."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {podcastEpisodes.map((episode, index) => (
            <ScrollReveal key={episode.id} delay={index * 150}>
              <Card className="group hover:shadow-lg transition-all duration-300 bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={episode.cover || "/placeholder.svg"}
                        alt={episode.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <button
                        onClick={() => togglePlay(episode.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        {playingId === episode.id ? (
                          <Pause className="w-6 h-6 text-white" />
                        ) : (
                          <Play className="w-6 h-6 text-white ml-1" />
                        )}
                      </button>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {episode.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
                        {episode.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{episode.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{episode.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="w-3 h-3" />
                          <span>{episode.plays} plays</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Listen to All Episodes
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
