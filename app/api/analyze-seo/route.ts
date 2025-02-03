import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { title, description, keywords } = await req.json()

  const prompt = `
    Analyze the following YouTube video metadata for SEO optimization:
    Title: ${title}
    Description: ${description}
    Keywords: ${keywords}

    Provide suggestions for improvement and potential impact on search rankings.
  `

  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt: prompt,
  })

  return NextResponse.json({ analysis: text })
}

