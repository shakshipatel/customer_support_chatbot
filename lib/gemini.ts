import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
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
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `Summarize the following conversation history into a concise paragraph, preserving key details and user intent. The final output MUST be under 2000 words.`,
          },
        ],
      },
      ...messages.map((m: any) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    return response.text ?? "";
  } catch (error) {
    console.error("Gemini summarizeConversation error:", error);
    throw error;
  }
}
