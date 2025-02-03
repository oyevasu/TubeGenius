"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContentScheduler() {
  const [title, setTitle] = useState("")
  const [scheduledDate, setScheduledDate] = useState("")
  const [scheduledContent, setScheduledContent] = useState<Array<{ title: string; date: string }>>([])

  const handleSchedule = () => {
    if (title && scheduledDate) {
      setScheduledContent([...scheduledContent, { title, date: scheduledDate }])
      setTitle("")
      setScheduledDate("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Scheduler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="content-title">Content Title</Label>
            <Input id="content-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="scheduled-date">Scheduled Date</Label>
            <Input
              id="scheduled-date"
              type="date"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
          </div>
          <Button onClick={handleSchedule}>Schedule Content</Button>
          <div className="mt-4">
            <h3 className="font-bold mb-2">Scheduled Content:</h3>
            <ul className="list-disc pl-5">
              {scheduledContent.map((content, index) => (
                <li key={index}>
                  {content.title} - {content.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

