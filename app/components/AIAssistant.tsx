"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Mic, Send } from "lucide-react"
import { useChat } from "ai/react"

export default function AIAssistant() {
  const [isListening, setIsListening] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const handleVoiceInput = () => {
    setIsListening(true)
    // Implement voice recognition logic here
    // For demonstration, we'll just set a mock message
    setTimeout(() => {
      handleInputChange({ target: { value: "Vasu, please upload today's vlog" } } as any)
      setIsListening(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-auto mb-4">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
              >
                {message.content}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask your AI assistant..."
            className="flex-grow mr-2 p-2 border rounded"
          />
          <Button type="submit" size="icon">
            <Send />
          </Button>
          <Button type="button" variant="outline" size="icon" className="ml-2" onClick={handleVoiceInput}>
            <Mic className={isListening ? "text-red-500" : ""} />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

