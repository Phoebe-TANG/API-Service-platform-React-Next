import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Star, Building2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      icon: <Zap className="h-6 w-6" />,
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our APIs",
      features: [
        "10,000 API calls/month",
        "Basic support",
        "Community access",
        "Standard rate limits",
        "7-day data retention",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      icon: <Star className="h-6 w-6" />,
      price: "$49",
      period: "per month",
      description: "For growing projects and businesses",
      features: [
        "500,000 API calls/month",
        "Priority support",
        "Advanced analytics",
        "Higher rate limits",
        "30-day data retention",
        "Custom webhooks",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: <Building2 className="h-6 w-6" />,
      price: "Custom",
      period: "contact us",
      description: "For large-scale applications",
      features: [
        "Unlimited API calls",
        "Dedicated support",
        "Custom SLA",
        "No rate limits",
        "Unlimited data retention",
        "Custom integrations",
        "Advanced security",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How does billing work?",
      answer:
        "We bill monthly based on your plan. You can upgrade, downgrade, or cancel at any time. Unused credits roll over to the next month for paid plans.",
    },
    {
      question: "What happens if I exceed my API call limit?",
      answer:
        "If you exceed your monthly limit, your API calls will be throttled. You can upgrade your plan or purchase additional credits to continue using the service without interruption.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
            Pricing Plans
          </Badge>
          <h1 className="mb-4 font-sans text-4xl font-bold text-balance md:text-5xl">
            Choose the perfect plan for your needs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Start free and scale as you grow. All plans include access to our full API suite.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="font-sans text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mb-16 rounded-2xl border border-border bg-muted/30 p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 font-sans text-3xl font-bold">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-sans text-3xl font-bold">50K+</div>
              <p className="text-sm text-muted-foreground">Active Developers</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-sans text-3xl font-bold">1B+</div>
              <p className="text-sm text-muted-foreground">API Calls/Month</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-sans text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our pricing</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/20 via-background to-background p-12 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-balance">Still have questions?</h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            Our team is here to help you find the right plan for your needs
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
