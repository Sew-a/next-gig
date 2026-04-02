"use client";
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { FadeIn } from '../UI';
import { useRouter } from 'next/navigation';
import { TerminalCommand, TERMINAL_RESPONSES } from './constants';
import { useAppContext } from '@/contexts/appContext';
import "./Terminal.scss";

const Terminal = () => {
  const { setIsHacked, setTheme, theme, setIsIdeMode, isIdeMode } = useAppContext(); 
  const [localHistory, setLocalHistory] = useState<string[]>([TERMINAL_RESPONSES.INITIAL]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [localHistory]);

  const handleCommand = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const cmdParts = trimmedInput.toLowerCase().split(' ');
    const mainCmd = cmdParts[0];
    const newHistory = [...localHistory, `${TERMINAL_RESPONSES.PROMPT} ${trimmedInput}`];

    const validRoutes = ['home', 'contact', 'work', 'maelstrom'];

    switch (mainCmd) {
      case TerminalCommand.COMMANDS:
      case TerminalCommand.HELP:
        newHistory.push(...TERMINAL_RESPONSES.COMMANDS);
        break;

      case TerminalCommand.CLEAR:
        setLocalHistory([]);
        setInput('');
        return;

      case TerminalCommand.ABOUT:
        newHistory.push(TERMINAL_RESPONSES.ABOUT);
        break;

      case TerminalCommand.ROUTE: {
        const page = cmdParts[1];
        if (!page) {
          newHistory.push('Usage: route <pageName>');
        } else if (!validRoutes.includes(page)) {
          newHistory.push(`Error: Page "${page}" not found. Try one of: ${validRoutes.join(', ')}`);
        } else {
          newHistory.push(`Redirecting to /${page === 'home' ? '' : page}...`);
          // Set IDE Mode to false to allow the renderer to show the navigated page
          setIsIdeMode(false);
          router.push(page === 'home' ? '/' : `/${page}`);
        }
        break;
      }

      case TerminalCommand.HACK:
        newHistory.push('CRITICAL ERROR: ACCESS DENIED. SYSTEM BREACH DETECTED.');
        setIsHacked(true);
        break;

      case TerminalCommand.SWITCH_THEME: {
        const next = theme === 'default' ? 'secondary-theme' : 'default';
        setTheme(next);
        newHistory.push(`Success: Theme switched to ${next === 'default' ? 'Default' : 'Secondary-Theme'}.`);
        break;
      }

      case TerminalCommand.SWITCH_MODE: {
        const nextMode = !isIdeMode;
        setIsIdeMode(nextMode);
        newHistory.push(`Success: Switching to ${nextMode ? 'IDE Mode' : 'Site Mode'}.`);
        break;
      }

      default:
        newHistory.push(TERMINAL_RESPONSES.NOT_FOUND(mainCmd));
        break;
    }

    setLocalHistory(newHistory);
    setInput('');
  }, [input, localHistory, router, setIsHacked, setTheme, theme]);

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
          {localHistory.map((line, i) => (
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
