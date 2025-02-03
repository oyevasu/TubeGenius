import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to YouTuber AI Assistant</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Optimize your YouTube content, crack the algorithm, and boost your channel's performance with our AI-powered
        assistant.
      </p>
      <Button asChild size="lg">
        <Link href="/dashboard">Get Started</Link>
      </Button>
    </div>
  )
}

