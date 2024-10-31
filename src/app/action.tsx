"use server";
import { generateText, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
// Get API key from localStorage if available (client-side), otherwise use env variable
let apiKey = "";
if (typeof window !== "undefined") {
  apiKey =
    localStorage.getItem("openai_api_key") || process.env.OPENAI_API_KEY || "";
} else {
  apiKey = process.env.OPENAI_API_KEY || "";
}

const openai = createOpenAI({
  apiKey: apiKey, // Use the apiKey variable defined above
});

export async function getAnswer(question: string) {
  const { textStream } = await streamText({
    model: openai("gpt-3.5-turbo"),
    prompt: question,
  });

  return { textStream };
}
