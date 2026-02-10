import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MODEL = "gemini-2.5-flash";

/**
 * Count tokens for a plain string
 */
export async function countTokens(text: string): Promise<number> {
  const { totalTokens } = await ai.models.countTokens({
    model: MODEL,
    contents: text,
  });

  return totalTokens ?? 0;
}

/**
 * Count tokens for chat conversation
 */
export async function countConversationTokens(
  messages: { role: string; content: string }[]
): Promise<number> {
  const contents = messages.map((m) => ({
    role: m.role,
    parts: [{ text: m.content }],
  }));

  const { totalTokens } = await ai.models.countTokens({
    model: MODEL,
    contents,
  });

  return totalTokens ?? 0;
}
