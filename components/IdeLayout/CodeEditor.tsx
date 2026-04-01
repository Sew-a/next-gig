"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useAppContext } from '@/contexts/appContext';
import "./CodeEditor.scss";
import { FadeIn } from '../UI';

const fileContents: Record<string, string> = {
  'AboutMe.tsx': `export const Bio = () => {
  return (
    <div>
      <h1>Hi, I'm a developer.</h1>
      <p>I build things with React, Next.js, and TypeScript.</p>
    </div>
  );
};`,
  'Experience.ts': `const jobs = [
  {
    company: 'Dev Corp',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present'
  },
  {
    company: 'Build It',
    role: 'Frontend Developer',
    period: '2020 - 2022'
  }
];

export default jobs;`,
  'Skills.json': `{
  "frontend": ["React", "Next.js", "TypeScript", "TailwindCSS"],
  "backend": ["Node.js", "Express", "Prisma", "PostgreSQL"],
  "tools": ["Git", "Docker", "Figma"]
}`,
  'Contact.md': `# Contact Info

- Email: developer@example.com
- GitHub: [github.com/developer](https://github.com/developer)
- LinkedIn: [linkedin.com/in/developer](https://linkedin.com/in/developer)`,
  'Documentation.md': `# Portfolio Project Documentation

## Project Overview
This project is a high-end personal portfolio website built with **Next.js**, 
**TypeScript**, and **SCSS**. It features a unique dual-mode experience, allowing users
 to switch between a sleek modern landing page ("Primary Mode") and a developer-centric
  interface mirroring an Integrated Development Environment ("IDE Mode").

---

## Future Roadmap
- Integration of a live contact form with server actions.
- Enhanced terminal interactivity for a truly immersive developer experience.
- More project case studies with detailed technical breakdowns.

---
*Created by [Sevak Avetisyan](https://www.linkedin.com/in/sevak-avetisyan-6122411b2/)*`
};

const CodeEditor = () => {
  const { currentFile } = useAppContext();
  const language = currentFile.endsWith('.ts') || currentFile.endsWith('.tsx') ? 'typescript' :
    currentFile.endsWith('.json') ? 'json' : 'markdown';

  return (
    <div className="code-editor">
      <FadeIn delay={0.2}>
        <div className="editor-header">
          <span className="file-name">{currentFile}</span>
        </div>
        <div className="editor-container custom-scrollbar">
          <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers={true}
            customStyle={{
              margin: 0,
              padding: '2rem',
              backgroundColor: 'transparent',
              fontSize: '15px',
              lineHeight: '1.8',
            }}
          >
            {fileContents[currentFile] || '// File not found'}
          </SyntaxHighlighter>
        </div>
      </FadeIn>
    </div>
  );
};

export default CodeEditor;
