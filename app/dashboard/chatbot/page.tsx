"use client";

import ChatSimulator from "@/components/dashboard/chatbot/chatSimulator";
import React, { useEffect, useRef, useState } from "react";

interface ChatBotMetadata {
  id: string;
  user_email: string;
  color: string;
  welcome_message: string;
  created_at: string;
  source_ids: string[];
}

const ChatbotPage = () => {
  const [metadata, setMetadata] = useState<ChatBotMetadata | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (scrollViewportRef.current) {
      scrollViewportRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {};
  const handleKeyDown = async () => {};
  const handleSectionClick = async () => {};
  const handleReset = async () => {};

  return (
    <div className="p-6 md:p-8 space-y-8 w-full h-[calc(100vh-64px)] overflow-hidden flex flex-col">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            Chatbot Playground
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Test your assistant, customize appearance, and deploy it.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 h-full min-h-0 w-full lg:max-w-[50vw] lg:mx-auto">
        <div className="flex flex-col h-full min-h-0 space-y-4">
          <ChatSimulator
            messages={messages}
            primaryColor={primaryColor}
            sections={sections}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            handleKeyDown={handleKeyDown}
            handleSectionClick={handleSectionClick}
            activeSection={activeSection}
            isTyping={isTyping}
            handleReset={handleReset}
            scrollRef={scrollViewportRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
