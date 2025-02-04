import { Warehouse } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";

export const Toolbar = () => {
  const location = useLocation();
  const params = useParams();

  // Define static page titles
  const pageTitles = {
    "/products": "My Products",
    "/projects": "My Projects",
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const basePath = `/${pathSegments[0]}`;
  const currentPage = pageTitles[basePath] || "";


  const itemId = pathSegments[1] ? `#${pathSegments[1]}` : "";

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
          {currentPage && (
            <>
              <span className="text-gray-500"> | </span>
              <span className="text-blue-600 font-poppins">{currentPage}</span>
            </>
          )}
          {itemId && (
            <>
              <span className="text-gray-500"> &gt; </span>
              <span className="text-black-600 font-poppins">{itemId}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
