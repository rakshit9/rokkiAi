"use server";
import { generateText, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

export async function getAnswer(question: string, apiKey: string) {
  const openai = createOpenAI({ apiKey });
  
  const { textStream } = await streamText({
    model: openai("gpt-3.5-turbo"),
    prompt: question,
  });

  return { textStream };
}
