import { Filter, Plus, Search, SortAsc } from "lucide-react"

export const DataProductsToolbar = () => {
  return (
    <div className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search data products..."
              className="pl-9 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50">
            <SortAsc className="w-4 h-4" />
            Sort
          </button>
        </div>
      </div>
    </div>
  )
}

