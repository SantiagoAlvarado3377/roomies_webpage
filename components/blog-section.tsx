"use client"

import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Questions to Ask Your Potential Roommate",
    excerpt: "Essential questions that will help you determine if someone is the right fit for your living situation.",
    author: "Sarah Johnson",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Tips",
    image: "/placeholder-1bd1n.png",
  },
  {
    id: 2,
    title: "Creating House Rules That Actually Work",
    excerpt:
      "Learn how to establish boundaries and expectations that keep everyone happy and the house running smoothly.",
    author: "Mike Chen",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Living Together",
    image: "/placeholder-lw62u.png",
  },
  {
    id: 3,
    title: "Red Flags to Watch Out For",
    excerpt: "Warning signs that might indicate a potential roommate isn't the right match for your lifestyle.",
    author: "Emma Davis",
    date: "Dec 2, 2024",
    readTime: "6 min read",
    category: "Safety",
    image: "/placeholder-lka8a.png",
  },
  {
    id: 4,
    title: "Budget-Friendly Decorating Ideas",
    excerpt: "Transform your shared space into a cozy home without breaking the bank or stepping on toes.",
    author: "Alex Rivera",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Lifestyle",
    image: "/placeholder-hnrdv.png",
  },
  {
    id: 5,
    title: "Handling Conflicts Like a Pro",
    excerpt: "Practical strategies for resolving disagreements and maintaining a peaceful living environment.",
    author: "Jordan Kim",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Communication",
    image: "/placeholder-bavi9.png",
  },
  {
    id: 6,
    title: "The Ultimate Moving In Checklist",
    excerpt: "Everything you need to know and do when moving in with a new roommate for the first time.",
    author: "Taylor Brown",
    date: "Nov 22, 2024",
    readTime: "10 min read",
    category: "Moving",
    image: "/placeholder-2kpo6.png",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Discover expert tips, real stories, and practical advice to help you navigate "}
              {"the world of roommate living with confidence."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 100}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
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
              View All Blog Posts
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
