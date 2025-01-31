import { Search, X } from "lucide-react";

function FilterSidebar({ isOpen, onClose }) {
  return (
    <div
      className={`absolute top-0 left-0 h-full w-80 border-r  transform transition-transform duration-300 ease-in-out  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
        {isOpen && (
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Domain */}
        <div className="mb-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search domain"
              className="w-full pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Approval State */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Approval State</h3>
          <div className="space-y-2">
            {["Subscribed Products", "Pending", "In Review", "Rejected"].map((state) => (
              <label key={state} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-2" />
                <span className="text-sm">{state}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Data Sensitivity */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Data Sensitivity</h3>
          <div className="space-y-2">
            {["Public", "Restricted", "Highly Restricted", "Internal"].map((sensitivity) => (
              <label key={sensitivity} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-2" />
                <span className="text-sm">{sensitivity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
    
  );
}

export default FilterSidebar;