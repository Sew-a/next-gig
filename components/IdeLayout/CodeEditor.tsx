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
      <h1>Hi, I'm a Software Engineer</h1>
      <p>I build things with React, Next.js, and TypeScript.</p>
      <p>I Also build things with C# and Unity.</p>
      <p>I have started all this with hacked games downloads and fixes in configuration files.</p>
      <p>Then I started building ladnidng pages and other websites.</p>
      <p>Then I have builded (not completed) a game with Unity. Platformer with parkour POP style</p>
      <span>I have no idea how I got here.</span>
    </div>
  );
};`,
  'Experience.ts': `const Works = [{
    company: 'Picsart',
    role: 'Frontend Engineer',
    work: "Worked on a lot of stuff, landings, editor, file systems, microfrontends, libs, design systems, etc..." 
    period: '2021 - 2026'
  },
  {
    company: 'JoinToHire',
    role: 'Frontend Developer',
    work: "Worked on wordpress websites, landing pages, etc..." 
    period: '2020 - 2021'
  }
];
const OtherProjects = [
{
  name: "Game project",
  work: "I have builded (not completed) a game with Unity. Platformer with parkour POP style, 
  I also had a small team which included game designer and graphic designer.
  worked on game for 6 months",
  whyStopped: "My Graphic Designer got divorced from me"
}]

`,
  'Skills.json': `{
  "Languages": ["JavaScript", "TypeScript", "C#", "HTML"],
  "Frameworks": ["React", "Next.js", "TailwindCSS", "Unity"],
  "StateManagers": ["Redux", "Zustand", "Context API"],
  "Styling": ["TailwindCSS", "SASS", "Styled Components", "CSS"],
  "Testing": ["Jest", "React Testing Library"],
  "Databases": ["Firebase"],
  "Tools": ["Git", "Docker", "Figma"]
}`,
  'Contact.md': `# Contact Info

- Email: sevavetisyan97@gmail.com
- GitHub: https://github.com/Sew-a/next-gig
- LinkedIn: https://www.linkedin.com/in/sevak-avetisyan-6122411b2/
- Phone: +374 41080497`,
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
