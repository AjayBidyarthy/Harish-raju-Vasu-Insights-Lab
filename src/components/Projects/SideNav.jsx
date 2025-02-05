import { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

const SideNav = ({ insights }) => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(true);
  const [isWorkbookOpen, setIsWorkbookOpen] = useState(true);
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const location = useLocation();
  const { id } = useParams(); // Capture the project ID from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  const insightsList = [
    { id: 1, name: "Insight_1" },
    { id: 2, name: "Insight_2" },
    { id: 3, name: "Insight_3" },
    { id: 4, name: "Insight_4" },
    { id: 5, name: "Insight_5" }
  ];

  const handleInsightsClick = () => {
    setIsInsightsOpen(!isInsightsOpen);
  };

  const handleInsightsDoubleClick = () => {
    if (id) {
      navigate(`/projects/${id}/insights`);
    }
  };

  const ToggleIcon = ({ isOpen }) => (
    <span className="inline-block w-4 h-4 mr-2 text-gray-600 font-medium border border-gray-400 rounded flex items-center justify-center text-sm leading-none">
      {isOpen ? "−" : "+"}
    </span>
  );

  return (
    <nav className="w-64 min-h-screen border-r border-gray-200 bg-white">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <h2 className="text-lg">Supplychain Analysis</h2>
        </div>

        <div className="space-y-2 relative">
          <div className="absolute left-2 top-6 bottom-6 w-[2px] bg-gray-200"></div>

          {/* Insights Section */}
          <div className="mb-2 relative">
            <div className="absolute left-2 top-3 w-4 h-[2px] bg-gray-200"></div>
            <button
              onClick={handleInsightsClick}
              onDoubleClick={handleInsightsDoubleClick}
              className="flex items-center w-full text-left pl-6"
            >
              <ToggleIcon isOpen={isInsightsOpen} />
              <span>Insights (5)</span>
            </button>
            {isInsightsOpen && (
              <div className="ml-8 mt-1 relative">
                <div className="absolute left-[-14px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                {insightsList.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="absolute left-[-14px] top-[50%] w-3 h-[2px] bg-gray-200"></div>
                    <Link
                      to={`/project/${item.id}`}
                      className={`block py-1 px-2 rounded ${
                        location.pathname === `/project/${item.id}`
                          ? "bg-blue-100 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Insights Workbook Section */}
          <div className="mb-2 relative">
            <button onClick={() => setIsWorkbookOpen(!isWorkbookOpen)} className="flex items-center w-full text-left pl-6">
              <ToggleIcon isOpen={isWorkbookOpen} />
              <span>Insights Workbook (20)</span>
            </button>
            {isWorkbookOpen && (
              <div className="ml-8 mt-1 relative">
                {insights?.map((item) => (
                  <div key={item.id} className="relative">
                    <Link to={`/workbook/${item.id}`} className="block py-1 px-2 hover:bg-gray-100 rounded">
                      {item.name} ({item.insights_workbook})
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="mb-2 relative">
            <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="flex items-center w-full text-left pl-6">
              <ToggleIcon isOpen={isProductsOpen} />
              <span>Products (10)</span>
            </button>
            {isProductsOpen && (
              <div className="ml-8 mt-1 relative">
                {insights?.map((item) => (
                  <div key={item.id} className="relative">
                    <Link to={`/products/${item.id}`} className="block py-1 px-2 hover:bg-gray-100 rounded">
                      {item.name} ({item.added_products})
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
