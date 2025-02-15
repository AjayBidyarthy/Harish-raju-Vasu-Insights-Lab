import { Bell, Settings, User } from "lucide-react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header1">
      <div className="header-left">
        <button className="menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <img src="/assets/icon.png" alt="Icon" className="logo" />
        <h1 className="title">
          <span className="text-white">DATA</span><span className="text-gray">MARKET</span>
        </h1>
      </div>
      <div className="header-right">
        <Bell className="icon" />
        <Settings className="icon" />
        <User className="icon" />
      </div>
    </header>
  );
};
