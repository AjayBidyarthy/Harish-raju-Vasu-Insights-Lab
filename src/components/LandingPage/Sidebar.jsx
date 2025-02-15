"use client";

import * as React from "react";
import { Home, Network } from "lucide-react";
import "./Sidebar.scss";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <nav className="sidebar">
        <div className="sidebar-menu">
          <button onClick={() => (window.location.href = "/")} className="sidebar-button">
            <Home size={20} />
          </button>
          <button onClick={() => (window.location.href = "/network")} className="sidebar-button">
            <Network size={20} />
          </button>
          <div className="spacer" />
        </div>
      </nav>
    </div>
  );
}
