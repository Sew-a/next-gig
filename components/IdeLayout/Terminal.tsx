"use client";
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { FadeIn } from '../UI';
import { TerminalCommand, TERMINAL_RESPONSES } from './constants';
import "./Terminal.scss";

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([TERMINAL_RESPONSES.INITIAL]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    switch (cmd) {
      case TerminalCommand.COMMANDS:
      case TerminalCommand.HELP:
        newHistory.push(...TERMINAL_RESPONSES.COMMANDS);
        break;

      case TerminalCommand.CLEAR:
        setHistory([]);
        setInput('');
        return;

      case TerminalCommand.ABOUT:
        newHistory.push(TERMINAL_RESPONSES.ABOUT);
        break;

      default:
        newHistory.push(TERMINAL_RESPONSES.NOT_FOUND(cmd));
        break;
    }

    setHistory(newHistory);
    setInput('');
  }, [input, history]);

  return (
    <FadeIn delay={0.1}>
      <div className="terminal">
        <div className="terminal-header">
          <div className="header-left">
            <TerminalIcon size={14} />
            <span>{TERMINAL_RESPONSES.HEADER}</span>
          </div>
        </div>
        <div
          className="terminal-container custom-scrollbar"
          ref={terminalRef}
        >
          {history.map((line, i) => (
            <div key={i} className="output-line">
              {line}
            </div>
          ))}
          <form onSubmit={handleCommand} className="command-input-area">
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
