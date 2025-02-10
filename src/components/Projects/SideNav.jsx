import { useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { X } from 'lucide-react';
import MainSection from "./MainSection";
import CreateInsightModal from "./CreateInsightModal";

const SideNav = ({ insights }) => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isWorkbookOpen, setIsWorkbookOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCreateInsight, setIsCreateInsight]=useState(false)
  const location = useLocation();
  const { id } = useParams(); // Capture the project ID from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  const projectData = [
    {
      id: 1,
      projectInfo: {
        name: "Project 1",
        insights: 10,
        insights_workbook: [
          { id: 1, name: "InsightWorkbook_1" },
          { id: 2, name: "InsightWorkbook_2" },
          { id: 3, name: "InsightWorkbook_3" },
          { id: 4, name: "InsightWorkbook_4" },
          { id: 5, name: "InsightWorkbook_5" }
        ],
        added_products: 5
      },
      insightsList: [
        { id: 1, name: "Insights_1", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 2, name: "Insights_2", format: "Code, Text", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 2,
      projectInfo: {
        name: "Project 2",
        insights: 8,
        insights_workbook: [
          { id: 6, name: "InsightWorkbook_6" },
          { id: 7, name: "InsightWorkbook_7" },
          { id: 8, name: "InsightWorkbook_8" },
          { id: 9, name: "InsightWorkbook_9" },
          { id: 10, name: "InsightWorkbook_10" }
        ],
        added_products: 4
      },
      insightsList: [
        { id: 3, name: "Insights_3", format: "Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" },
        { id: 4, name: "Insights_4", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 3,
      projectInfo: {
        name: "Project 3",
        insights: 12,
        insights_workbook: [
          { id: 11, name: "InsightWorkbook_11" },
          { id: 12, name: "InsightWorkbook_12" },
          { id: 13, name: "InsightWorkbook_13" },
          { id: 14, name: "InsightWorkbook_14" },
          { id: 15, name: "InsightWorkbook_15" }
        ],
        added_products: 6
      },
      insightsList: [
        { id: 5, name: "Insights_5", format: "Text", source: "Python Code", datetime: "30/1/25 - 15:15" },
        { id: 6, name: "Insights_6", format: "Code, Text", source: "SQL Studio", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 4,
      projectInfo: {
        name: "Project 4",
        insights: 15,
        insights_workbook: [
          { id: 16, name: "InsightWorkbook_16" },
          { id: 17, name: "InsightWorkbook_17" },
          { id: 18, name: "InsightWorkbook_18" },
          { id: 19, name: "InsightWorkbook_19" },
          { id: 20, name: "InsightWorkbook_20" }
        ],
        added_products: 8
      },
      insightsList: [
        { id: 7, name: "Insights_7", format: "Code", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 8, name: "Insights_8", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    },
    {
      id: 5,
      projectInfo: {
        name: "Project 5",
        insights: 6,
        insights_workbook: [
          { id: 21, name: "InsightWorkbook_21" },
          { id: 22, name: "InsightWorkbook_22" },
          { id: 23, name: "InsightWorkbook_23" },
          { id: 24, name: "InsightWorkbook_24" },
          { id: 25, name: "InsightWorkbook_25" }
        ],
        added_products: 3
      },
      insightsList: [
        { id: 9, name: "Insights_9", format: "Text", source: "Albus AI", datetime: "30/1/25 - 15:15" },
        { id: 10, name: "Insights_10", format: "Code", source: "Python Code", datetime: "30/1/25 - 15:15" }
      ]
    }
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
                        <button 
  className="w-auto flex items-center gap-1 p-1 text-xs text-white bg-[#054CA0] rounded mb-1"
  onClick={() => setIsCreateInsight(true)}
>
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Create New Insight
</button>
<>
      {isCreateInsight && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white rounded-lg w-full max-w-6xl p-6 relative"> {/* Increased max-width */}
         {/* Modal Header */}
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-xl font-semibold">Create Insight</h2>
           <button 
             onClick={() => setIsCreateInsight(false)}
             className="text-gray-500 hover:text-gray-700"
           >
             <X className="w-5 h-5" />
           </button>
         </div>
     
         {/* Replace the current content with MainSection */}
         <CreateInsightModal/>
     
         {/* Keep the action buttons */}
         <div className="flex justify-end gap-3 mt-6">
           <button
             onClick={() => setIsCreateInsight(false)}
             className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
           >
             Cancel
           </button>
           <button
             className="px-4 py-2 bg-[#054CA0] text-white rounded-md hover:bg-blue-700 transition-colors"
           >
             Create
           </button>
         </div>
       </div>
     </div>
      )}
    </>
                <div className="absolute left-[-14px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
                {projectData.flatMap(project => project.insightsList).map((item) => (
  <div key={item.id} className="relative">
    <div className="absolute left-[-14px] top-[50%] w-3 h-[2px] bg-gray-200"></div>
    <Link
      to={`/projects/${id}/insights/${item.id}`}
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
           <button 
  className="w-auto flex items-center gap-1 p-1 text-xs text-white bg-[#054CA0] rounded mb-1"
  onClick={() => setIsModalOpen(true)}
>
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Create New Workbook
</button>

<>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Create Insight Workbook</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Title Name</label>
                <input 
                  type="text"
                  placeholder="Title Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Description</label>
                <input 
                  type="text"
                  placeholder="Description"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#054CA0] text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Create
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </>

   

                {projectData.flatMap(project => project.projectInfo?.insights_workbook ?? []).map((item) => (
  <div key={item.id} className="relative">
    <Link to={`/projects/${id}/workbooks/${item.id}`} className="block py-1 px-2 hover:bg-gray-100 rounded">
      {item.name}
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
                {projectData.flatMap(project => project.projectInfo).map((item) => (
                  <div key={item.id} className="relative">
                    <Link to={`/products/${item.id}`} className="block py-1 px-2 hover:bg-gray-100 rounded">
                     Product ({item.added_products})
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
