"use client";
import { useState } from "react";
import { routeNames } from "@/utils/mainRoutes";
import Link from "next/link";
import Image from "next/image";
import "./styles.scss";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  //   const storedData = useInitialStore((state) => state.storedData);
  // const setStoreData = useInitialStore((state) => state.setStoredData);

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
        <nav className="sidebar-nav">
          {routeNames.map((route) => (
            <Link key={route.path} href={route.path} className="nav-link">
              {route.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
