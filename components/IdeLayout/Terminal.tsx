"use client";
import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { FadeIn } from "../UI";
import "./Terminal.scss";
import { useTerminalHistory } from "@/hooks/useTerminalHistory";
import { useCommandHandler } from "@/hooks/useCommandHandler";
import { TERMINAL_RESPONSES } from "@/utils/terminalCom";

const Terminal = () => {
  const { history, push, clear } = useTerminalHistory();
  const { execute } = useCommandHandler({ history, push, clear });
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput("");
  };

  return (
    <FadeIn delay={0.1}>
      <div className="terminal">
        <div className="terminal-header">
          <div className="header-left">
            <TerminalIcon size={14} />
            <span>{TERMINAL_RESPONSES.HEADER}</span>
          </div>
        </div>
        <div className="terminal-container custom-scrollbar" ref={terminalRef}>
          {history.map((line, i) => (
            <div key={i} className="output-line">
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="command-input-area">
            <span className="prompt">{TERMINAL_RESPONSES.PROMPT}</span>
            <input
              type="text"
              className="command-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
          </form>
        </div>
      </div>
    </FadeIn>
  );
};

export default Terminal;
