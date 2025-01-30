"use client"

import * as React from "react"
import { Home, Network} from "lucide-react"

export  function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <div className="flex h-screen">
    <nav className="flex flex-col bg-[#F8F8F8] text-white w-[60px] py-4 border-r-2 border-blue-400">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={() => (window.location.href = "/")}
            className="p-3  text-blue-800 rounded-lg transition-colors"
          >
            <Home size={20} />
          </button>
          <button
            onClick={() => (window.location.href = "/network")}
            className="p-3  text-blue-800 rounded-lg transition-colors"
          >
            <Network size={20} />
          </button>
          <div className="flex-1" />
        </div>
      </nav>
    </div>
  )
}

