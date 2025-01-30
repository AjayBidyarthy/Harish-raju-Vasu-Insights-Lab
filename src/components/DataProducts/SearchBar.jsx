"use client"

import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-md bg-[#F8F8F8] mx-auto gap-2 p-4">
      <input
        type="text"
        placeholder="Search across marketplace"
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        <Search className="w-5 h-5" />
      </button>
    </div>
  )
}