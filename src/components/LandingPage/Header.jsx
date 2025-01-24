import { Bell, Cog, User } from "lucide-react"

export const Header = () => {
    return (
      <header className="bg-[#054CA0] text-white p-4 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">RIGHT DATA</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <Cog className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>
    );
  };