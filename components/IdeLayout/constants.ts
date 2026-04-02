export const ideFiles = ['AboutMe.tsx', 'Experience.ts', 'Skills.json', 'Contact.md', 'Documentation.md', 'Coding.tsx'];

export enum TerminalCommand {
  COMMANDS = 'commands',
  CLEAR = 'clear',
  ABOUT = 'about',
  HELP = 'help',
  ROUTE = 'route',
  HACK = 'hack',
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
    '- hack: Try it if you dare',
    '- switch-theme: Toggle secondary-theme',
    '- switch-mode: Toggle IDE/Site mode'
  ],
  ABOUT: 'This is an IDE-based portfolio mode built with React and Next.js.',
  NOT_FOUND: (cmd: string) => `Command not found: ${cmd}. Type "help" for assistance.`,
  HEADER: 'Terminal',
  PROMPT: '➜',
};
