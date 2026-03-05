"use client";

import { useState } from "react";
import { routeNames } from "app/routes";
import Link from "next/link";
import "./styles.scss";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`main-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? "<" : ">"}
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
