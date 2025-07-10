"use client";

import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Send } from "lucide-react";
import { Spinner } from "./spinner";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"; 

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
  inputPlaceholder?: string;
}

export function ChatInterface({
  messages,
  onSubmit,
  isLoading,
  inputPlaceholder = "Ask the agent anything...",
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="flex h-[70vh] flex-col rounded-md border">
      {/* Message Area */}
      <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <Avatar className="size-8">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                "max-w-[75%] rounded-lg p-3",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              <p className="text-sm">{message.content}</p>
            </div>
             {message.role === "user" && (
              <Avatar className="size-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3">
             <Avatar className="size-8">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
             <div className="bg-muted p-3 rounded-lg flex items-center">
                <Spinner size="sm" />
             </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}