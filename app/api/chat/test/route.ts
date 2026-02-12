import { db } from "@/db/client";
import { knowledge_source } from "@/db/schema";
import { countConversationTokens } from "@/lib/countConversationTokens";
import { ai, summarizeConversation } from "@/lib/gemini";
import { isAuthorized } from "@/lib/isAuthorized";
import { inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

 export function mapRole(role: string): "user" | "model" {
  if (role === "assistant" || role === "model") return "model";
  return "user";
}

export async function POST(req: Request) {
  const user = await isAuthorized();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let { messages, knowledge_source_ids } = await req.json();

  let context = "";

  if (knowledge_source_ids && knowledge_source_ids.length > 0) {
    const sources = await db
      .select({
        content: knowledge_source.content,
      })
      .from(knowledge_source)
      .where(inArray(knowledge_source.id, knowledge_source_ids));

    context = sources
      .map((s) => s.content)
      .filter(Boolean)
      .join("\n\n");
  }

  const tokenCount = await countConversationTokens(messages);

  if (tokenCount > 6000) {
    const recentMessages = messages.slice(-10);

    const olderMessages = messages.slice(0, -10);

    if (olderMessages.length > 0) {
      const summary = await summarizeConversation(olderMessages);

      context = `PREVIOUS CONVERSATION SUMMARY:\n${summary}\n\n` + context;

      messages = recentMessages;
    }
  }

  // RAG = Retrieval Augmented Generative

  const systemPrompt = `Your name is Sarah. You are a friendly, human-like customer support specialist.

CRITICAL RULES:
- If asked for your name, always respond with "I'm Sarah".
- If asked for your role, always respond with "I'm a customer support specialist".
- Keep answers EXTREMELY SHORT (max 1-2 sentences) and conversational.
- If the user asks a broad question, DO NOT provide a summary. Instead, ask a friendly clarifying question to understand exactly what they need help with.
- Never dump information. Always conversationally guide the user to the specific answer they need.
- Mirror the user's brevity.

ESCALATION PROTOCOL:
- If you simply DON'T KNOW the answer from the context, or if the user indicates they are unhappy, ask: "Would you like me to create a support ticket for our specialist team?"
- If the user says "Yes" or gives permission to create a ticket, your reply MUST be: "[ESCALATED] I have created a support ticket. Our specialist team will review it shortly."

Context:
${context}`;
  try {
    const contents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      ...messages
        .filter((m: any) => m.content?.trim())
        .map((m: any) => ({
          role: mapRole(m.role),
          parts: [{ text: m.content }],
        })),
    ];

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    } as any);

    const reply = result.text ?? "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      { response: "An error occurred while processing your request." },
      { status: 500 },
    );
  }
}
