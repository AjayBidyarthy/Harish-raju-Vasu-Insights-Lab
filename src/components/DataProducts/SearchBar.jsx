"use client";

import { Search } from "lucide-react";
import "./SearchBar.scss"

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search across marketplace"
        className="search-input"
      />
      <button className="search-button">
        <Search className="icon" />
      </button>
    </div>
  );
}
