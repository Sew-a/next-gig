"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { routeNames } from "@/utils/mainRoutes";
import Link from "next/link";
import "./styles.scss";
import FileExplorer from "../IdeLayout/FileExplorer";
import { useAppContext } from "@/contexts/appContext";
import CharacterAnimation from "./CharacterAnimation";

export default function Sidebar() {
  const { isIdeMode } = useAppContext();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={`main-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? (
          <div className="opened-icon">
            -----------<br />
            -------
          </div>
        ) : (
          ">"
        )}
      </button>
      {sidebarOpen && (
        <div className="sidebar-content">
          {isIdeMode ?
            <FileExplorer />
            :
            <nav className="sidebar-nav">
              {routeNames.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`nav-link ${pathname === route.path && 'active'}`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          }
          <div className="sidebar-bottom">
            <CharacterAnimation />
          </div>
        </div>
      )}
    </div>
  );
}
