"use client";
import { useAppContext } from '@/contexts/appContext';

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode } = useAppContext();

  return (
    <button onClick={() => setIsIdeMode(prev => !prev)} className="mode-switcher">
      {isIdeMode ? 'SITE MODE' : 'IDE Mode'}
    </button>
  );
};

export default VersionSwitcher;
