"use client";
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import { useAppContext } from '@/contexts/appContext';
import { X } from 'lucide-react';
import "./IdeLayout.scss";

const HackAlert = ({ onClose }: { onClose: () => void }) => (
  <div className="hack-overlay">
    <div className="hack-modal">
      <div className="hack-header">
        <h2>SYSTEM BREACH</h2>
        <button onClick={onClose}><X size={20} /></button>
      </div>
      <div className="hack-body">
        <p>Your system has been compromised. All credentials and keys have been exported.</p>
        <div className="hack-warning">IP: 192.168.1.104 | TRACING...</div>
      </div>
      <button className="hack-close-btn" onClick={onClose}>EMERGENCY SHUTDOWN</button>
    </div>
  </div>
);

const IdeLayout = () => {
  const { isHacked, setIsHacked, theme } = useAppContext();

  return (
    <div className={`ide-layout theme-${theme}`}>
      <div className="editor-terminal-column">
        <CodeEditor />
        <Terminal />
      </div>
      {isHacked && <HackAlert onClose={() => setIsHacked(false)} />}
    </div>
  );
};

export default IdeLayout;
