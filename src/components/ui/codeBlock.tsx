"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./button";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  canCopy?: boolean;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  canCopy = true,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-[#282c34] font-mono text-sm">
      {canCopy && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-7 w-7"
          onClick={handleCopy}
        >
          {isCopied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Copy className="size-4 text-slate-300" />
          )}
        </Button>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

// const jsonCode = JSON.stringify({ agent: "DataAnalyzer", status: "completed" }, null, 2);
// <CodeBlock code={jsonCode} language="json" />