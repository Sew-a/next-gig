"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/src/contexts/appContext";
import { TERMINAL_RESPONSES, TerminalCommand } from "@/src/utils/terminalCom";

const VALID_ROUTES = ["home", "contact", "work", "maelstrom"] as const;

interface UseCommandHandlerProps {
  history: string[];
  push: (...lines: string[]) => void;
  clear: () => void;
}

export function useCommandHandler({
  history,
  push,
  clear,
}: UseCommandHandlerProps) {
  const { setIsHacked, setIsIdeMode, isIdeMode } = useAppContext();
  const router = useRouter();

  const execute = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const [mainCmd, ...args] = trimmed.toLowerCase().split(" ");
    push(`${TERMINAL_RESPONSES.PROMPT} ${trimmed}`);

    switch (mainCmd as TerminalCommand) {
      case TerminalCommand.COMMANDS:
      case TerminalCommand.HELP:
        push(...TERMINAL_RESPONSES.COMMANDS);
        break;

      case TerminalCommand.CLEAR:
        clear();
        break;

      case TerminalCommand.ABOUT:
        push(TERMINAL_RESPONSES.ABOUT);
        break;

      case TerminalCommand.ROUTE: {
        const page = args[0];
        if (!page) {
          push("Usage: route <pageName>");
        } else if (
          !VALID_ROUTES.includes(page as (typeof VALID_ROUTES)[number])
        ) {
          push(
            `Error: Page "${page}" not found. Try one of: ${VALID_ROUTES.join(", ")}`,
          );
        } else {
          push(`Redirecting to /${page === "home" ? "" : page}...`);
          setIsIdeMode(false);
          router.push(page === "home" ? "/" : `/${page}`);
        }
        break;
      }

      case TerminalCommand.HACK:
        push("CRITICAL ERROR: ACCESS DENIED. SYSTEM BREACH DETECTED.");
        setIsHacked(true);
        break;

      case TerminalCommand.HISTORY: {
        const commands = history
          .filter((line) => line.startsWith(TERMINAL_RESPONSES.PROMPT))
          .map((line) => line.replace(TERMINAL_RESPONSES.PROMPT, "").trim());

        push(
          commands.length === 0
            ? "No command history found."
            : "Previous commands:",
          ...commands.map((cmd, i) => `${i + 1}. ${cmd}`),
        );
        break;
      }

      default:
        push(TERMINAL_RESPONSES.NOT_FOUND(mainCmd));
    }
  };

  return { execute };
}
