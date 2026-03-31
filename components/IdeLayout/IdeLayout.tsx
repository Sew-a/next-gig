"use client";
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import "./IdeLayout.scss";

const IdeLayout = () => {
  return (
    <div className="ide-layout">
      <div className="editor-terminal-column">
        <CodeEditor />
        <Terminal />
      </div>
    </div>
  );
};

export default IdeLayout;
