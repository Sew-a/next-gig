"use client";
import { FileJson, FileText, FileCode, Folder } from 'lucide-react';
import { useAppContext } from '@/contexts/appContext';
import "./FileExplorer.scss";
import { ideFiles } from './constants';

const getFileIcon = (fileName: string) => {
  const cn = `file-icon ${fileName.split('.').pop()}`;
  if (fileName.endsWith('.tsx') || fileName.endsWith('.ts')) return <FileCode size={16} className={cn} />;
  if (fileName.endsWith('.json')) return <FileJson size={16} className={cn} />;
  if (fileName.endsWith('.md')) return <FileText size={16} className={cn} />;
  return <FileText size={16} className={cn} />;
};

const FileExplorer = () => {
  const { currentFile, setCurrentFile } = useAppContext();

  return (
    <div className="ide-explorer">
      <div className="explorer-root">
        <Folder size={14} className="folder-icon" />
        <span>Prototype-Project</span>
      </div>
      <div className="file-list">
        {ideFiles.map((file) => (
          <div
            key={file}
            className={`file-item ${currentFile === file ? 'active' : ''}`}
            onClick={() => setCurrentFile(file)}
          >
            {getFileIcon(file)}
            <span className="file-name">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
