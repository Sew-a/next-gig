export const ideFiles = ['AboutMe.tsx', 'Experience.ts', 'Skills.json', 'Contact.md', 'Documentation.md', 'Coding.tsx'];

export enum TerminalCommand {
  COMMANDS = 'commands',
  CLEAR = 'clear',
  ABOUT = 'about',
  HELP = 'help'
}

export const TERMINAL_RESPONSES = {
  INITIAL: 'Welcome to the terminal. Type "commands" for a list of commands.',
  COMMANDS: [
    'Available commands:',
    '- help: Show this message',
    '- clear: Clear terminal',
    '- about: Learn about this site'
  ],
  ABOUT: 'This is an IDE-based portfolio mode built with React and Next.js.',
  NOT_FOUND: (cmd: string) => `Command not found: ${cmd}. Type "help" for assistance.`,
  HEADER: 'Terminal',
  PROMPT: '➜',
};
