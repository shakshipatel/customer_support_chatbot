import React from 'react'

import { ArrowRight, Send, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-20 text-center">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="text-xs text-zinc-300 tracking-wide font-light">
            Version 1.0.0 available now
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
          Human-friendly support,
          <br />
          <span className="text-zinc-500">powered by AI.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 font-light mb-10  max-auto leading-relaxed">
          Instantly resolve customer questions with an assistant that reads your
          docs and speaks with empathy. No robotic replies, just answers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="flex items-center gap-2 h-11 px-8 rounded-full cursor-pointer bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
            Start for free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="h-11 px-8 rounded-full border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-600 hover:text-white bg-black/20 backdrop-blur-sm transition-all">
            View demo
          </button>
        </div>

        {/* Chat Preview */}
        <div className="mx-auto max-w-3xl relative z-10">
          {/* Header */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none">
          <div className="rounded-xl w-full md:h-150 h-125 overflow-hidden  bg-[#0a0a0e]">
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0E0E12] shrink-0">
            <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">OneMinute Stack Inc.</span>
            </div>
          </div>
          </div>
          </div>
          {/* Messages */}
          <div className="p-6 space-y-6">
            {/* Bot message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <User className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white text-zinc-900 p-4 text-sm shadow-sm">
                Hi there, How can I help you today?
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs">
                    FAQ
                  </span>
                  <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs">
                    Pricing
                  </span>
                  <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs">
                    Support
                  </span>
                </div>
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end gap-3">
              <div className="rounded-2xl rounded-tr-sm bg-zinc-800 text-zinc-200 p-4 text-sm shadow-sm">
                I need some information about oneminute stack
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <User className="w-4 h-4 text-zinc-400" />
              </div>
            </div>

            {/* Bot reply */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&fit=crop"
                  alt="Support Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white text-zinc-900 p-4 text-sm shadow-sm leading-relaxed">
                OneMinute Stack is an integrated ecosystem designed to enhance
                developer efficiency. It includes tools like OneMinute Logs for
                real-time monitoring and Becodemy for community support.
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-[#0A0A0E]">
            <div className="relative min-h-[50px] w-full px-4 py-3 text-sm bg-zinc-900/50 border border-white/10 rounded-xl flex items-center justify-between text-zinc-500">
              <span>Type a message...</span>
              <button className="h-8 w-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Send className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
