import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span className="text-2xl font-bold text-cyan-800">Roomies</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </a>
            <a href="#safety" className="text-gray-600 hover:text-gray-900 transition-colors">
              Safety
            </a>
            <a href="#podcast" className="text-gray-600 hover:text-gray-900 transition-colors">
              Podcast
            </a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block mb-6 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200">
            Trusted by 50,000+ users
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect <span className="text-purple-600">Roommate</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with compatible roommates in your area. Our smart matching system helps you find someone who shares
            your lifestyle, budget, and living preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your city or zip code"
                className="w-full h-12 px-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button className="h-12 px-8 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
              📍 Find Roommates
            </button>
          </div>
          <p className="text-sm text-gray-500">Free to join • No hidden fees • Safe & secure</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Roomies?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make finding the right roommate simple, safe, and stress-free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                All users go through identity verification and background checks for your safety
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our algorithm matches you based on lifestyle, budget, cleanliness, and personality
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
              <p className="text-gray-600">
                Chat safely with potential roommates through our built-in messaging system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get matched in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Tell us about yourself, your lifestyle, and what you're looking for in a roommate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                Our smart algorithm finds compatible roommates based on your preferences and location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Move In</h3>
              <p className="text-gray-600">Chat with matches, meet up, and find your perfect living situation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from happy roommates</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Found my perfect roommate in just 2 weeks! The matching system really works - we have so much in
                common."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-500">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The verification process made me feel so much safer. I knew I was talking to real, trustworthy people."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Mike R.</p>
                  <p className="text-sm text-gray-500">Austin, TX</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Not only did I find a great roommate, but we've become best friends! The lifestyle matching is spot
                on."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">J</span>
                </div>
                <div>
                  <p className="font-semibold">Jessica L.</p>
                  <p className="text-sm text-gray-500">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Safety is Our Priority</h2>
            <p className="text-xl text-gray-600">Multiple layers of protection to keep you safe</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-4">✅</div>
              <h3 className="font-semibold mb-2">ID Verification</h3>
              <p className="text-sm text-gray-600">Government ID required for all users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-4">✅</div>
              <h3 className="font-semibold mb-2">Background Checks</h3>
              <p className="text-sm text-gray-600">Optional criminal background screening</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-4">✅</div>
              <h3 className="font-semibold mb-2">Secure Messaging</h3>
              <p className="text-sm text-gray-600">No personal info shared until you're ready</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-500 mb-4">✅</div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Report issues anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Roomies Podcast</h2>
            <p className="text-xl text-gray-600">Real stories, expert tips, and roommate advice</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Episode 12: Red Flags to Avoid</h3>
              <p className="text-gray-600 mb-4">
                Learn the warning signs of problematic roommates and how to spot them early in the process.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">45 min</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">Listen Now</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Episode 11: Setting Boundaries</h3>
              <p className="text-gray-600 mb-4">
                How to establish healthy boundaries with your roommate from day one for a harmonious living situation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">38 min</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">Listen Now</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Episode 10: Budget Conversations</h3>
              <p className="text-gray-600 mb-4">
                Navigate money talks with potential roommates and ensure you're both on the same financial page.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">42 min</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">Listen Now</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              View All Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roommate Life Blog</h2>
            <p className="text-xl text-gray-600">Tips, guides, and insights for better shared living</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">GUIDE</div>
                <h3 className="text-xl font-semibold mb-2">The Ultimate Roommate Agreement Template</h3>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive template to set clear expectations and avoid conflicts before they start.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 min read</span>
                  <button className="text-cyan-800 hover:text-cyan-700 font-medium">Read More</button>
                </div>
              </div>
            </article>
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-cyan-100 flex items-center justify-center">
                <span className="text-6xl">🧹</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">TIPS</div>
                <h3 className="text-xl font-semibold mb-2">Creating a Cleaning Schedule That Actually Works</h3>
                <p className="text-gray-600 mb-4">
                  Practical strategies for maintaining a clean shared space without constant arguments or resentment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">7 min read</span>
                  <button className="text-cyan-800 hover:text-cyan-700 font-medium">Read More</button>
                </div>
              </div>
            </article>
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">💰</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">FINANCE</div>
                <h3 className="text-xl font-semibold mb-2">Splitting Bills: Apps and Methods That Work</h3>
                <p className="text-gray-600 mb-4">
                  Compare the best apps and strategies for managing shared expenses and keeping finances transparent.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">6 min read</span>
                  <button className="text-cyan-800 hover:text-cyan-700 font-medium">Read More</button>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-cyan-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Roommate?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of people who have found their ideal living situation through Roomies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-white text-cyan-800 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              ❤️ Start Matching Now
            </button>
            <p className="text-sm opacity-75">Free to join • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🏠</span>
                <span className="text-xl font-bold text-cyan-800">Roomies</span>
              </div>
              <p className="text-gray-600 text-sm">Making roommate matching simple, safe, and successful.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#safety" className="hover:text-gray-900 transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Roomies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
