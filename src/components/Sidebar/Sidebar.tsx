"use client";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { routeNames } from "@/src/routes/mainRoutes";
import { TextAlignEnd, PanelLeftOpen } from "lucide-react";
import "./styles.scss";
import FileExplorer from "../IdeLayout/FileExplorer";
import { useAppContext } from "@/src/contexts/appContext";
import CharacterAnimation from "./CharacterAnimation";

export default function Sidebar() {
  const { isIdeMode } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();

  return (
    <div className={`main-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <TextAlignEnd size={24} /> : <PanelLeftOpen size={24} />}
      </button>
      {sidebarOpen && (
        <div className="sidebar-content">
          {isIdeMode ? (
            <FileExplorer />
          ) : (
            <nav className="sidebar-nav">
              {routeNames.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`nav-link ${pathname === route.path && "active"}`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          )}
          <div className="sidebar-bottom">
            <CharacterAnimation />
          </div>
        </div>
      )}
    </div>
  );
}
