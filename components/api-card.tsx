import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp } from "lucide-react"

interface ApiCardProps {
  icon: React.ReactNode
  title: string
  description: string
  category: string
  calls: string
  price: string
  trending?: boolean
}

export function ApiCard({ icon, title, description, category, calls, price, trending }: ApiCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      {trending && (
        <div className="absolute right-3 top-3">
          <Badge variant="secondary" className="gap-1 bg-primary text-primary-foreground">
            <TrendingUp className="h-3 w-3" />
            Trending
          </Badge>
        </div>
      )}
      <CardHeader className="space-y-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">{icon}</div>
        <div className="space-y-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Category</span>
          <Badge variant="outline">{category}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Monthly calls</span>
          <span className="font-medium">{calls}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Starting at</span>
          <span className="text-xl font-bold">{price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground" size="sm">
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
