"use client";
import { useAppContext } from '@/contexts/appContext';

const VersionSwitcher = () => {
  const { isIdeMode, setIsIdeMode, theme, setTheme } = useAppContext();

  return (
    <div
      className="version-switcher-container"
      style={{
        position: 'fixed',
        top: '26px',
        right: '46px',
        display: 'flex',
        gap: '12px',
        zIndex: 1000
      }}
    >
      <button
        onClick={() => setIsIdeMode(prev => !prev)}
        className="mode-switcher"
        style={{ position: 'static', top: 'auto', right: 'auto' }}
      >
        {isIdeMode ? 'SITE MODE' : 'IDE Mode'}
      </button>
      <button
        onClick={() => setTheme(prev => prev === 'default' ? 'secondary-theme' : 'default')}
        className="mode-switcher theme-switcher"
        style={{ position: 'static', top: 'auto', right: 'auto' }}
      >
        {'Swicth Color'}
      </button>
    </div>
  );
};

export default VersionSwitcher;
