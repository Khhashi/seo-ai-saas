"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AIChat({ seoReportId }: { seoReportId: string }) {
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, sendMessage, status } = useChat({
    id: seoReportId,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input, metadata: { seoReportId } });
      setInput("");
    }
  };

  const isTyping = status === "submitted";

  return (
    <>
      {/* Chat Widget */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[90vw] md:w-[500px] h-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base">AI SEO Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full", isTyping ? "bg-yellow-300 animate-pulse" : "bg-green-300")}></div>
                  <p className="text-xs text-indigo-100">{isTyping ? "Thinking..." : "Online"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-white text-black">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm py-8">👋 Hi! Ask me anything about your SEO report.</div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm", message.role === "user" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-md" : "bg-gray-50 text-gray-800 border border-gray-200 rounded-bl-md")}>
                  {message.parts.map((part, i) => {
                    if (part.type === "text") {
                      return (
                        <div key={`${message.id}-${i}`} className="leading-relaxed">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
                              code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono text-black">{children}</code>,
                              a: ({ children, href }) => <a href={href} className="text-indigo-600 underline" target="_blank">{children}</a>,
                            }}
                          >
                            {part.text}
                          </ReactMarkdown>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-gray-100 bg-gray-50/50">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your SEO report..."
                className="flex-1 h-11 bg-white text-black dark:text-black rounded-xl border-gray-200 focus:ring-indigo-500"
                disabled={isTyping}
              />
              <Button type="submit" disabled={!input.trim() || isTyping} className="h-11 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-white"
        >
          {isExpanded ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        </Button>
      </div>
    </>
  );
}