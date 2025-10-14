import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Key,
  Activity,
  CreditCard,
  Settings,
  Copy,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react"

export default function ConsolePage() {
  const recentCalls = [
    { time: "2 min ago", api: "GPT-4 API", status: "success", latency: "245ms" },
    { time: "5 min ago", api: "Image Generation", status: "success", latency: "1.2s" },
    { time: "12 min ago", api: "Real-time Data", status: "success", latency: "89ms" },
    { time: "18 min ago", api: "SMS Gateway", status: "failed", latency: "—" },
    { time: "25 min ago", api: "Auth Service", status: "success", latency: "156ms" },
  ]

  const apiKeys = [
    { name: "Production Key", key: "sk_live_4xK9...mN2p", created: "Jan 15, 2024", lastUsed: "2 min ago" },
    { name: "Development Key", key: "sk_test_7yL2...qR8t", created: "Jan 10, 2024", lastUsed: "1 hour ago" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-sans text-3xl font-bold">Console</h1>
          <p className="text-muted-foreground">Manage your APIs, monitor usage, and track performance</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-1">
            <Button variant="secondary" className="w-full justify-start" size="sm">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Key className="mr-2 h-4 w-4" />
              API Keys
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Activity className="mr-2 h-4 w-4" />
              Usage Stats
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">API Calls This Month</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,231</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+20.1%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Remaining Credits</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">154,769</div>
                  <p className="text-xs text-muted-foreground">Out of 200,000 credits</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$127.50</div>
                  <p className="text-xs text-muted-foreground">Auto-recharge enabled</p>
                </CardContent>
              </Card>
            </div>

            {/* API Keys */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>API Keys</CardTitle>
                    <CardDescription>Manage your API authentication keys</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiKeys.map((key) => (
                    <div
                      key={key.key}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{key.name}</p>
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        </div>
                        <p className="font-mono text-sm text-muted-foreground">{key.key}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Created: {key.created}</span>
                          <span>Last used: {key.lastUsed}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent API Calls</CardTitle>
                <CardDescription>Monitor your latest API requests and responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentCalls.map((call, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                      <div className="flex items-center gap-3">
                        {call.status === "success" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <div>
                          <p className="font-medium">{call.api}</p>
                          <p className="text-xs text-muted-foreground">
                            <Clock className="mr-1 inline h-3 w-3" />
                            {call.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={call.status === "success" ? "secondary" : "destructive"}>{call.status}</Badge>
                        <p className="mt-1 text-xs text-muted-foreground">{call.latency}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
