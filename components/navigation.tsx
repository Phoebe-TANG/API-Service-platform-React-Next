"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Marketplace" },
    { href: "/console", label: "Console" },
    { href: "/docs", label: "Docs" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary">
              <Code2 className="h-5 w-5 text-secondary-foreground" />
            </div>
            <span className="font-sans text-xl font-semibold">APIHub</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant={pathname === link.href ? "secondary" : "ghost"} size="sm" className="font-medium">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}
