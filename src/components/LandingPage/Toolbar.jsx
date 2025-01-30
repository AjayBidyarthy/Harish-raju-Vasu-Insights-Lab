
import { RotateCcw, RotateCw, Trash2, Warehouse } from "lucide-react"
export const Toolbar = () => {
    return (
      <div className="bg-white border-b px-6 py-6 bg-[#EBFAFF]">
        <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-gray-900">
              <Warehouse className="w-5 h-5" />
            </button>
          <div className="flex items-center gap-3">
            <button className="text-black-600 font-poppins hover:text-gray-900">
            Insights lab
            </button>
          </div>
        </div>
      </div>
    );
  };