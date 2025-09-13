"use client"

import { Button } from "./ui/button"
import { ArrowRight, Users, Heart, Home } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-gentle" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-bounce-gentle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-bounce-gentle"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Find Your Perfect Match</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to the <span className="text-primary">Roomies</span> Community
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {"Discover stories, tips, and insights from our community of roommate seekers. "}
              {"Learn how to find your perfect living companion and create lasting friendships."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 group"
              >
                Explore Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Listen to Podcasts
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-left grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Roommates</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
