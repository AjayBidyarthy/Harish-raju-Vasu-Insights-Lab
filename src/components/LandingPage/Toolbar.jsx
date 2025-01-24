
import { RotateCcw, RotateCw, Trash2 } from "lucide-react"
export const Toolbar = () => {
    return (
      <div className="bg-white border-b px-6 py-4 bg-[#EBFAFF]">
        <div className="flex items-center gap-6">
          <button className="text-black-600 hover:text-gray-900 text-lg">File</button>
          <button className="text-black-600 hover:text-gray-900 text-lg">Edit</button>
          <button className="text-black-600 hover:text-gray-900 text-lg">View</button>
          <button className="text-black-600 hover:text-gray-900 text-lg">Database</button>
          <div className="flex items-center gap-3 ml-6">
            <button className="text-gray-600 hover:text-gray-900">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <RotateCw className="w-5 h-5" />
            </button>
            <button className="text-red-600 hover:text-red-700">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };