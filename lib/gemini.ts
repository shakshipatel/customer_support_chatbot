import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function summarizeMarkdown(markdown: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are a data summarization engine for an AI chatbot.
Convert the input text into a CLEAN, DENSE SUMMARY for AI context.

Rules:
Output only plain text, one continuous paragraph.
Remove navigation, menus, buttons, CTAs, ads, UI labels, emojis, repeated content, and marketing fluff.
Keep only factual information useful for customer support.
Compress aggressively while preserving meaning.

INPUT:
${markdown}
`,
    });

    return response.text;
  } catch (err) {
    console.error("Gemini summarizeMarkdown error:", err);
    throw err;
  }
}

export async function summarizeConversation(messages: any[]) {
  try {
    const joined = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Summarize this conversation into one concise paragraph:
${joined}
`,
    });

    return response.text;
  } catch (err) {
    console.error("Gemini summarizeConversation error:", err);
    throw err;
  }
}