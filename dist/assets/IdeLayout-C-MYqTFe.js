import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{a as t,o as n}from"./three-BC8X_KNM.js";import{H as r,n as i,t as a,w as o}from"./index-BSL1WSlo.js";import{a as s,i as c,n as l,r as u,t as d}from"./code-highlight-BYWlrOUz.js";import{t as f}from"./UI-Bgau6Yol.js";var p=i(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),m=t();s.registerLanguage(`typescript`,u),s.registerLanguage(`json`,l),s.registerLanguage(`markdown`,d);var h=[`AboutMe.tsx`,`Experience.ts`,`Skills.json`,`Contact.md`,`Documentation.md`],g={"AboutMe.tsx":`export const Bio = () => {
  return (
    <div>
      <h1>Hi, I'm a Software Engineer</h1>
      <p>I build things with React, Next.js, and TypeScript.</p>
      <p>I Also build things with C# and Unity.</p>
      <p>I have started all this with hacked games downloads and fixes in configuration files.</p>
      <p>Then I started building landing pages and other websites.</p>
      <p>Then I have builded (not completed) a game with Unity. Platformer with parkour POP style</p>
      <span>I have no idea how I got here.</span>
    </div>
  );
};`,"Experience.ts":`const Works = [{
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

`,"Skills.json":`{
  "Languages": ["JavaScript", "TypeScript", "C#", "HTML"],
  "Frameworks": ["React", "Next.js", "TailwindCSS", "Unity"],
  "StateManagers": ["Redux", "Zustand", "Context API"],
  "Styling": ["TailwindCSS", "SASS", "Styled Components", "CSS"],
  "Testing": ["Jest", "React Testing Library"],
  "Databases": ["Firebase"],
  "Tools": ["Git", "Docker", "Figma"]
}`,"Contact.md":`# Contact Info

- Email: sevavetisyan97@gmail.com
- GitHub: https://github.com/Sew-a/next-gig
- LinkedIn: https://www.linkedin.com/in/sevak-avetisyan-6122411b2/
- Phone: +374 41080497`,"Documentation.md":`# Portfolio Project Documentation

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
*Created by [Sevak Avetisyan](https://www.linkedin.com/in/sevak-avetisyan-6122411b2/)*`},_=()=>{let{currentFile:e,setCurrentFile:t}=o(),n=e.endsWith(`.ts`)||e.endsWith(`.tsx`)?`typescript`:e.endsWith(`.json`)?`json`:`markdown`;return(0,m.jsxs)(`div`,{className:`code-editor`,children:[(0,m.jsx)(`div`,{className:`editor-header`,children:(0,m.jsx)(`div`,{className:`editor-tabs`,children:h.map(n=>(0,m.jsx)(`button`,{className:`editor-tab ${e===n?`editor-tab--active`:``}`,onClick:()=>t(n),children:n},n))})}),(0,m.jsx)(`div`,{className:`editor-container custom-scrollbar`,children:(0,m.jsx)(s,{language:n,style:c,showLineNumbers:!0,customStyle:{margin:0,padding:`2rem`,backgroundColor:`transparent`,fontSize:`15px`,lineHeight:`1.8`},children:g[e]||`// File not found`})})]})},v=e(n()),y=function(e){return e.COMMANDS=`commands`,e.CLEAR=`clear`,e.ABOUT=`about`,e.HELP=`help`,e.ROUTE=`route`,e.HACK=`hack`,e.HISTORY=`history`,e}({}),b={INITIAL:`Welcome to the terminal. Type "commands" for a list of commands.`,COMMANDS:[`Available commands:`,`- help: Show this message`,`- clear: Clear terminal`,`- about: Learn about this site`,`- route <page>: Navigate to a page`,`- history: Show command history`,`- hack: Try it if you dare`],ABOUT:`This is an IDE-based portfolio. Project where I will build as much interesting ideas as I can`,NOT_FOUND:e=>`Command not found: ${e}. Type "help" for assistance.`,HEADER:`Terminal`,PROMPT:`➜`},x=`terminal_log`;function S(){let[e,t]=(0,v.useState)(()=>{let e=sessionStorage.getItem(x);return e?JSON.parse(e):[b.INITIAL]});return(0,v.useEffect)(()=>{e.length>0&&sessionStorage.setItem(x,JSON.stringify(e))},[e]),{history:e,push:(...e)=>t(t=>[...t,...e]),clear:()=>{t([]),sessionStorage.removeItem(x)}}}var C=[`home`,`contact`,`work`];function w({history:e,push:t,clear:n}){let{setIsHacked:i,setIsIdeMode:a}=o(),s=r();return{execute:r=>{let o=r.trim();if(!o)return;let[c,...l]=o.toLowerCase().split(` `);switch(t(`${b.PROMPT} ${o}`),c){case y.COMMANDS:case y.HELP:t(...b.COMMANDS);break;case y.CLEAR:n();break;case y.ABOUT:t(b.ABOUT);break;case y.ROUTE:{let e=l[0];e?C.includes(e)?(t(`Redirecting to /${e===`home`?``:e}...`),a(!1),s(e===`home`?`/`:`/${e}`)):t(`Error: Page "${e}" not found. Try one of: ${C.join(`, `)}`):t(`Usage: route <pageName>`);break}case y.HACK:t(`CRITICAL ERROR: ACCESS DENIED. SYSTEM BREACH DETECTED.`),i(!0);break;case y.HISTORY:{let n=e.filter(e=>e.startsWith(b.PROMPT)).map(e=>e.replace(b.PROMPT,``).trim());t(n.length===0?`No command history found.`:`Previous commands:`,...n.map((e,t)=>`${t+1}. ${e}`));break}default:t(b.NOT_FOUND(c))}}}}var T=()=>{let{history:e,push:t,clear:n}=S(),{execute:r}=w({history:e,push:t,clear:n}),[i,a]=(0,v.useState)(``),o=(0,v.useRef)(null);return(0,v.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[e]),(0,m.jsx)(f,{delay:.1,children:(0,m.jsxs)(`div`,{className:`terminal`,children:[(0,m.jsx)(`div`,{className:`terminal-header`,children:(0,m.jsxs)(`div`,{className:`header-left`,children:[(0,m.jsx)(p,{size:14}),(0,m.jsx)(`span`,{children:b.HEADER})]})}),(0,m.jsxs)(`div`,{className:`terminal-container custom-scrollbar`,ref:o,children:[e.map((e,t)=>(0,m.jsx)(`div`,{className:`output-line`,children:e},t)),(0,m.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(i),a(``)},className:`command-input-area`,children:[(0,m.jsx)(`span`,{className:`prompt`,children:b.PROMPT}),(0,m.jsx)(`input`,{type:`text`,className:`command-input`,value:i,onChange:e=>a(e.target.value),autoFocus:!0})]})]})]})})},E=({onClose:e})=>(0,m.jsx)(`div`,{className:`hack-overlay`,children:(0,m.jsxs)(`div`,{className:`hack-modal`,children:[(0,m.jsxs)(`div`,{className:`hack-header`,children:[(0,m.jsx)(`h2`,{children:`SYSTEM BREACH`}),(0,m.jsx)(`button`,{onClick:e,children:(0,m.jsx)(a,{size:20})})]}),(0,m.jsxs)(`div`,{className:`hack-body`,children:[(0,m.jsx)(`p`,{children:`Your system has been compromised. All credentials and keys have been exported.`}),(0,m.jsx)(`div`,{className:`hack-warning`,children:`IP: 192.168.1.104 | TRACING...`})]}),(0,m.jsx)(`button`,{className:`hack-close-btn`,onClick:e,children:`EMERGENCY SHUTDOWN`})]})}),D=()=>{let{isHacked:e,setIsHacked:t}=o();return(0,m.jsxs)(`div`,{className:`ide-layout theme-secondary-theme`,children:[(0,m.jsxs)(`div`,{className:`editor-terminal-column`,children:[(0,m.jsx)(_,{}),(0,m.jsx)(T,{})]}),e&&(0,m.jsx)(E,{onClose:()=>t(!1)})]})};export{D as default};