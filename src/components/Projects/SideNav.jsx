import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = ({ insights }) => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(true);
  const [isWorkbookOpen, setIsWorkbookOpen] = useState(true);
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const location = useLocation();

  const insightsList = [
    { id: 1, name: "Insight_1" },
    { id: 2, name: "Insight_2" },
    { id: 3, name: "Insight_3" },
    { id: 4, name: "Insight_4" },
    { id: 5, name: "Insight_5" }
  ];

  const ToggleIcon = ({ isOpen }) => (
    <span className="inline-block w-4 h-4 mr-2 text-gray-600 font-medium border border-gray-400 rounded flex items-center justify-center text-sm leading-none">
      {isOpen ? '−' : '+'}
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
              onClick={() => setIsInsightsOpen(!isInsightsOpen)} 
              className="flex items-center w-full text-left pl-6"
            >
              <ToggleIcon isOpen={isInsightsOpen} />
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Insights(5)
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
            <div className="absolute left-2 top-3 w-4 h-[2px] bg-gray-200"></div>
            <button 
              onClick={() => setIsWorkbookOpen(!isWorkbookOpen)} 
              className="flex items-center w-full text-left pl-6"
            >
              <ToggleIcon isOpen={isWorkbookOpen} />
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Insights Workbook(20)
            </button>
            {isWorkbookOpen && (
              <div className="ml-8 mt-1 relative">
                <div className="absolute left-[-14px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                {insights?.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="absolute left-[-14px] top-[50%] w-3 h-[2px] bg-gray-200"></div>
                    <Link
                      to={`/workbook/${item.id}`}
                      className="block py-1 px-2 hover:bg-gray-100 rounded"
                    >
                      {item.name} ({item.insights_workbook})
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="mb-2 relative">
            <div className="absolute left-2 top-3 w-4 h-[2px] bg-gray-200"></div>
            <button 
              onClick={() => setIsProductsOpen(!isProductsOpen)} 
              className="flex items-center w-full text-left pl-6"
            >
              <ToggleIcon isOpen={isProductsOpen} />
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Products(10)
            </button>
            {isProductsOpen && (
              <div className="ml-8 mt-1 relative">
                <div className="absolute left-[-14px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                {insights?.map((item) => (
                  <div key={item.id} className="relative">
                    <div className="absolute left-[-14px] top-[50%] w-3 h-[2px] bg-gray-200"></div>
                    <Link
                      to={`/products/${item.id}`}
                      className="block py-1 px-2 hover:bg-gray-100 rounded"
                    >
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