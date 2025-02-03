"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SEOAnalysis() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [keywords, setKeywords] = useState("")
  const [analysis, setAnalysis] = useState<string | null>(null)

  const handleAnalyze = async () => {
    // In a real application, this would call an API endpoint
    const response = await fetch("/api/analyze-seo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, keywords }),
    })
    const data = await response.json()
    setAnalysis(data.analysis)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Video Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="keywords">Keywords</Label>
            <Input id="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          </div>
          <Button onClick={handleAnalyze}>Analyze SEO</Button>
          {analysis && (
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <h3 className="font-bold mb-2">Analysis Result:</h3>
              <p>{analysis}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

