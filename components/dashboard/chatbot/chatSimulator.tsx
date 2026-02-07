import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import React, { RefObject } from "react";

interface ChatSimulatorProps {
  messages: any[];
  primaryColor: string;
  sections: Section[];
  input: string;
  setInput: (val: string) => void;
  handleSend: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleSectionClick: (name: string) => void;
  activeSection: string | null;
  isTyping: boolean;
  handleReset: () => void;
  scrollRef: RefObject<HTMLDivElement | null>;
}

const ChatSimulator = ({
  messages,
  primaryColor,
  sections,
  input,
  setInput,
  handleSend,
  handleKeyDown,
  handleSectionClick,
  activeSection,
  isTyping,
  handleReset,
  scrollRef,
}: ChatSimulatorProps) => {
  return (
    <Card className="flex-1 flex flex-col border-white/5 bg-[#0A0A0E] overflow-hidden relative shadow-2xl">
      <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0E0E12]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">
            Test Environment
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="h-8 text-zinc-500 hover:text-white"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-2" />
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default ChatSimulator;
