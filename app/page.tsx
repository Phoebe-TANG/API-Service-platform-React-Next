import { Navigation } from "@/components/navigation"
import { ApiCard } from "@/components/api-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Zap, Database, Brain, ImageIcon, MessageSquare, BarChart3, Lock, Globe } from "lucide-react"

export default function MarketplacePage() {
  const categories = ["All APIs", "AI & ML", "Data", "Tools", "Analytics", "Security"]

  const apis = [
    {
      icon: <Brain className="h-7 w-7 text-primary" />,
      title: "GPT-4 API",
      description: "Advanced language model for natural language processing and generation",
      category: "AI & ML",
      calls: "1M+",
      price: "$0.03/1K",
      trending: true,
    },
    {
      icon: <Database className="h-7 w-7 text-primary" />,
      title: "Real-time Data",
      description: "Access real-time market data, stocks, crypto, and financial information",
      category: "Data",
      calls: "500K+",
      price: "$0.01/call",
      trending: true,
    },
    {
      icon: <ImageIcon className="h-7 w-7 text-primary" />,
      title: "Image Generation",
      description: "Create stunning images from text descriptions using AI models",
      category: "AI & ML",
      calls: "750K+",
      price: "$0.02/image",
      trending: false,
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-primary" />,
      title: "SMS Gateway",
      description: "Send and receive SMS messages globally with high delivery rates",
      category: "Tools",
      calls: "2M+",
      price: "$0.05/SMS",
      trending: false,
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-primary" />,
      title: "Analytics API",
      description: "Track user behavior, events, and conversions with detailed analytics",
      category: "Analytics",
      calls: "1.5M+",
      price: "Free",
      trending: false,
    },
    {
      icon: <Lock className="h-7 w-7 text-primary" />,
      title: "Auth Service",
      description: "Complete authentication solution with OAuth, SSO, and MFA support",
      category: "Security",
      calls: "3M+",
      price: "$0.001/auth",
      trending: true,
    },
    {
      icon: <Globe className="h-7 w-7 text-primary" />,
      title: "Geolocation",
      description: "IP-based geolocation with city-level accuracy and timezone data",
      category: "Data",
      calls: "800K+",
      price: "$0.005/call",
      trending: false,
    },
    {
      icon: <Zap className="h-7 w-7 text-primary" />,
      title: "Webhook Relay",
      description: "Reliable webhook delivery with retry logic and event streaming",
      category: "Tools",
      calls: "1.2M+",
      price: "$0.001/event",
      trending: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
              <Zap className="mr-1 h-3 w-3" />
              Over 500+ APIs Available
            </Badge>
            <h1 className="mb-6 font-sans text-4xl font-bold tracking-tight text-balance md:text-6xl">
              API Marketplace for Modern Developers
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              Connect with powerful APIs, build amazing applications, and scale your services with our easy-to-use
              platform
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:w-auto"
              >
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Browse APIs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="border-b border-border/40 bg-muted/30">
        <div className="container py-8">
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search for APIs, categories, or features..." className="h-12 pl-12 pr-4 text-base" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border/40">
        <div className="container py-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All APIs" ? "secondary" : "ghost"}
                size="sm"
                className="shrink-0 font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* API Grid */}
      <section className="container py-12">
        <div className="mb-8">
          <h2 className="mb-2 font-sans text-2xl font-bold">Featured APIs</h2>
          <p className="text-muted-foreground">Discover the most popular and trending APIs</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apis.map((api) => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-balance">Ready to build something amazing?</h2>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">
              Join thousands of developers using our APIs to power their applications
            </p>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Start Building Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
