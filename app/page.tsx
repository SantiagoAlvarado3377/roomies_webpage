import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { BlogSection } from "../components/blog-section"
import { PodcastSection } from "../components/podcast-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BlogSection />
      <PodcastSection />
      <Footer />
    </main>
  )
}
