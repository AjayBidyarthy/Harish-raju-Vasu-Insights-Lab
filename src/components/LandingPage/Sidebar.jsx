import { Home, Search } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="w-64 border-r bg-white flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 text-[#0047bb] mb-4">
          <Home className="w-5 h-5" />
          <span className="font-medium">Navigator</span>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-8 pr-2 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <nav className="p-2">
        <div className="space-y-1">
          <button
            className={`w-full text-left px-2 py-1.5 rounded ${
              location.pathname === "/" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`w-full text-left px-2 py-1.5 rounded ${
              location.pathname === "/dataproducts" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
            }`}
            onClick={() => navigate("/dataproducts")}
          >
            Data Products
          </button>
          <button  className={`w-full text-left px-2 py-1.5 rounded ${
              location.pathname === "/projects" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
            }`}
            onClick={() => navigate("/projects")}>Projects</button>
        </div>
      </nav>
    </div>
  )
}

