'use server';
import { generateText, streamText } from 'ai';
import { createOpenAI } from "@ai-sdk/openai"

const openai = createOpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || '' // Add fallback empty string
})

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not configured in environment variables');
}

export async function getAnswer(question: string) {
  console.log(question,"question");
  // const { text, finishReason, usage } = await generateText({
  //   model: openai('gpt-3.5-turbo'),
  //   prompt: question,
  // });


  const { textStream } = await streamText({
    model: openai('gpt-3.5-turbo'),
    prompt: question,
  });
  

  return {textStream}





  // return { text, finishReason, usage };
}