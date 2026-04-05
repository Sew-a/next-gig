export const ideFiles = ['AboutMe.tsx', 'Experience.ts', 'Skills.json', 'Contact.md', 'Documentation.md'];

export enum TerminalCommand {
  COMMANDS = 'commands',
  CLEAR = 'clear',
  ABOUT = 'about',
  HELP = 'help',
  ROUTE = 'route',
  HACK = 'hack',
  HISTORY = 'history',
  SWITCH_THEME = 'switch-theme',
  SWITCH_MODE = 'switch-mode'
}

export const TERMINAL_RESPONSES = {
  INITIAL: 'Welcome to the terminal. Type "commands" for a list of commands.',
  COMMANDS: [
    'Available commands:',
    '- help: Show this message',
    '- clear: Clear terminal',
    '- about: Learn about this site',
    '- route <page>: Navigate to a page',
    '- history: Show command history',
    '- hack: Try it if you dare',
    '- switch-theme: Toggle secondary-theme',
    '- switch-mode: Toggle IDE/Site mode'
  ],
  ABOUT: 'This is an IDE-based portfolio. Project where I will build as much interesting ideas as I can',
  NOT_FOUND: (cmd: string) => `Command not found: ${cmd}. Type "help" for assistance.`,
  HEADER: 'Terminal',
  PROMPT: '➜',
};
