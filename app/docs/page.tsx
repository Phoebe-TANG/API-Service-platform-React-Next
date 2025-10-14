import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Code2, Zap, Shield, Clock } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container py-8">
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="space-y-4">
            <div>
              <h3 className="mb-2 px-2 text-sm font-semibold">Getting Started</h3>
              <div className="space-y-1">
                <a
                  href="#overview"
                  className="block rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
                >
                  Overview
                </a>
                <a
                  href="#authentication"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Authentication
                </a>
                <a
                  href="#quickstart"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Quick Start
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-2 px-2 text-sm font-semibold">API Reference</h3>
              <div className="space-y-1">
                <a
                  href="#endpoints"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Endpoints
                </a>
                <a
                  href="#parameters"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Parameters
                </a>
                <a
                  href="#responses"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Responses
                </a>
                <a
                  href="#errors"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Error Codes
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-2 px-2 text-sm font-semibold">Resources</h3>
              <div className="space-y-1">
                <a
                  href="#examples"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Code Examples
                </a>
                <a
                  href="#sdks"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  SDKs
                </a>
                <a
                  href="#changelog"
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Changelog
                </a>
              </div>
            </div>
          </aside>

          {/* Main Documentation Content */}
          <div className="space-y-8">
            <div>
              <h1 className="mb-2 font-sans text-4xl font-bold">API Documentation</h1>
              <p className="text-lg text-muted-foreground">Complete guide to integrating and using our APIs</p>
            </div>

            {/* Overview Card */}
            <Card id="overview">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  <CardTitle>Overview</CardTitle>
                </div>
                <CardDescription>Introduction to the GPT-4 API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  The GPT-4 API provides access to advanced language models for natural language processing, text
                  generation, and conversational AI. This API is designed for developers who want to integrate powerful
                  AI capabilities into their applications.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Fast Response</p>
                      <p className="text-sm text-muted-foreground">Average 200ms latency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Secure</p>
                      <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">99.9% Uptime</p>
                      <p className="text-sm text-muted-foreground">Reliable infrastructure</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card id="authentication">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <CardTitle>Authentication</CardTitle>
                </div>
                <CardDescription>Secure your API requests with authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  All API requests require authentication using an API key. Include your API key in the Authorization
                  header of each request.
                </p>
                <div className="rounded-lg bg-secondary p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Example Request</span>
                    <Badge variant="outline">cURL</Badge>
                  </div>
                  <pre className="overflow-x-auto font-mono text-sm">
                    <code className="text-secondary-foreground">{`curl https://api.apihub.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* API Endpoint */}
            <Card id="endpoints">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  <CardTitle>Create Chat Completion</CardTitle>
                </div>
                <CardDescription>
                  <Badge variant="secondary" className="mr-2">
                    POST
                  </Badge>
                  <code className="text-sm">/v1/chat/completions</code>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold">Request Body</h4>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium">Parameter</th>
                          <th className="px-4 py-3 text-left font-medium">Type</th>
                          <th className="px-4 py-3 text-left font-medium">Required</th>
                          <th className="px-4 py-3 text-left font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="px-4 py-3 font-mono">model</td>
                          <td className="px-4 py-3 text-muted-foreground">string</td>
                          <td className="px-4 py-3">
                            <Badge variant="destructive" className="text-xs">
                              Yes
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">ID of the model to use</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-mono">messages</td>
                          <td className="px-4 py-3 text-muted-foreground">array</td>
                          <td className="px-4 py-3">
                            <Badge variant="destructive" className="text-xs">
                              Yes
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">Array of message objects</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-mono">temperature</td>
                          <td className="px-4 py-3 text-muted-foreground">number</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-xs">
                              No
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">Sampling temperature (0-2)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-mono">max_tokens</td>
                          <td className="px-4 py-3 text-muted-foreground">integer</td>
                          <td className="px-4 py-3">
                            <Badge variant="outline" className="text-xs">
                              No
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">Maximum tokens to generate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">Code Examples</h4>
                  <Tabs defaultValue="javascript" className="w-full">
                    <TabsList>
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                    </TabsList>
                    <TabsContent value="javascript" className="mt-4">
                      <div className="rounded-lg bg-secondary p-4">
                        <pre className="overflow-x-auto font-mono text-sm">
                          <code className="text-secondary-foreground">{`const response = await fetch('https://api.apihub.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      { role: 'user', content: 'Hello, how are you?' }
    ],
    temperature: 0.7,
    max_tokens: 150
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    <TabsContent value="python" className="mt-4">
                      <div className="rounded-lg bg-secondary p-4">
                        <pre className="overflow-x-auto font-mono text-sm">
                          <code className="text-secondary-foreground">{`import requests

response = requests.post(
    'https://api.apihub.com/v1/chat/completions',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'gpt-4',
        'messages': [
            {'role': 'user', 'content': 'Hello, how are you?'}
        ],
        'temperature': 0.7,
        'max_tokens': 150
    }
)

data = response.json()
print(data['choices'][0]['message']['content'])`}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    <TabsContent value="curl" className="mt-4">
                      <div className="rounded-lg bg-secondary p-4">
                        <pre className="overflow-x-auto font-mono text-sm">
                          <code className="text-secondary-foreground">{`curl https://api.apihub.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "Hello, how are you?"}
    ],
    "temperature": 0.7,
    "max_tokens": 150
  }'`}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
