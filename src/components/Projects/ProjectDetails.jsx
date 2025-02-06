import { ChevronRight, Grid, LayoutGrid, Search, X, Plus, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react" // Added useEffect
import FilterSidebar from "../DataProducts/FilterSidebar"
import { useNavigate } from "react-router-dom";

const insights = [
  { id: 1, name: "Project 1", insights: 10, insights_workbook: 5, added_products: 5 },
  { id: 2, name: "Project 2", insights: 8, insights_workbook: 3, added_products: 4 },
  { id: 3, name: "Project 3", insights: 12, insights_workbook: 7, added_products: 6 },
  { id: 4, name: "Project 4", insights: 15, insights_workbook: 10, added_products: 8 },
  { id: 5, name: "Project 5", insights: 6, insights_workbook: 2, added_products: 3 },
];

export function ProjectDetails() {
  const [isGridView, setIsGridView] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [products, setProducts] = useState([]) // Changed to state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://10.10.20.28:5017/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=1', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpM3kxeElhQV9YNmtUMmZ3RjRLUU9pNWdQRmdaOEo3Q09xYmU3MVBpVm5FIn0.eyJleHAiOjE3Mzg5MDc3MDUsImlhdCI6MTczODgyMTMwNiwiYXV0aF90aW1lIjoxNzM4ODIwNzkyLCJqdGkiOiJiMzM5YWVjOS05ZmZmLTQxNGMtYWIyZC0yZjNlZjhmM2Y4ZTIiLCJpc3MiOiJodHRwczovLzEwLjEwLjIwLjI4Ojk0NDMvcmVhbG1zL2RleHRydXMiLCJhdWQiOiJkYXRhLW1hcmtldCIsInN1YiI6ImIzOGE2Mjk0LWFjYmUtNGE2Yi05NmVjLTc4ZWI4ZDgwM2IwMiIsInR5cCI6IklEIiwiYXpwIjoiZGF0YS1tYXJrZXQiLCJub25jZSI6IjY1ZWFkY2U1LTVkMzctNDM3MS1iNWMwLTYxYWE4OWU5Mzk1NyIsInNlc3Npb25fc3RhdGUiOiI2MmMzM2U1ZS0zMmQwLTRiZDktYTFhNy03YWVkMDNhNTY4NTkiLCJhdF9oYXNoIjoibzJLQms4TmN0VDVUdG42RlhIQmJudyIsImFjciI6IjEiLCJzaWQiOiI2MmMzM2U1ZS0zMmQwLTRiZDktYTFhNy03YWVkMDNhNTY4NTkiLCJpc0RmVXNlciI6dHJ1ZSwiaXNDb25zdW1lciI6dHJ1ZSwic3ViIjoiYmxhY2tjb2ZmZXJqb2JzQGdldHJpZ2h0ZGF0YS5jb206MSIsImNsaWVudElkIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ3NSb2xlcyI6WyJncy5kbV8oYmxhY2tjb2ZmZXJqb2JzJmdldHJpZ2h0ZGF0YS5jb20pIiwiZ3Muc3lzdGVtX2RlZmF1bHRfZnVuY3Rpb25zIl0sIm9ubHlEYXRhTWFya2V0QWxsb3dlZCI6dHJ1ZSwiaXNTdXBlckFkbWluIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYmxhY2tjb2ZmZXJqb2JzQGdldHJpZ2h0ZGF0YS5jb20iLCJnaXZlbl9uYW1lIjoiQmxhY2siLCJ1c2VyTmFtZSI6IkJsYWNrIiwidXNlcklkIjoiNTUwOTQ4MjgwMzQ0MTU0NjY0NSIsInV1aWQiOiJiMzhhNjI5NC1hY2JlLTRhNmItOTZlYy03OGViOGQ4MDNiMDIiLCJsaWNlbnNlVmFsaWQiOnRydWUsImhhc0xpY2Vuc2UiOnRydWUsIm5hbWUiOiJCbGFjayBDb2ZmZXIgSm9icyIsInVzZXJFbWFpbCI6ImJsYWNrY29mZmVyam9ic0BnZXRyaWdodGRhdGEuY29tIiwiYnVzaW5lc3NPd25lciI6ZmFsc2UsImZhbWlseV9uYW1lIjoiQ29mZmVyIEpvYnMiLCJlbWFpbCI6ImJsYWNrY29mZmVyam9ic0BnZXRyaWdodGRhdGEuY29tIn0.NCczBA4PAJ09TCuMqLPV5RQWALzCRepHrToyAmD98qOoORDptktKmJGax19erKuXO5sUpzuC-truy0zmxLF6NoojxgGJdTB4VOolYVUZTxt5VG-WpH7bsSQDCvVuaFHr8XLRF8iEMg0zaQfM-VPRTH7xUk6PnC5of70eF9MqGaMRv6Xy97vVGmDl97qgAc9GO3Fte2pauWDftQWjIfuWqlxS9yXzJD1FqXXs5qQzbARkdcOZKZx1dJWbLfrqSbkhVu6f-UrnPGMXa311ZG-lItyNIH-fg8AR0AefHyKXdgjdiUhwl5-KaXxK56GImZzAQBu8uHzn6KcLj02KbQgv9g',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })

        const data = await response.json();
        
        // Extract displayNames from the response
        if (data.status === "success" && data.data && data.data.hits) {
          const displayNames = data.data.hits.map(item => item.displayName);
          setProducts(displayNames);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  const toggleProduct = (product) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    )
  }

  return (
    <div className="p-4 font-poppins bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex space-x-6 border-b md:ml-6">
          <button
            className={`relative pb-2 text-sm font-medium ${activeTab === "all" ? "text-[#1a73e8]" : "text-gray-600"}`}
            onClick={() => setActiveTab("all")}
          >
            All ({insights.length})
            {activeTab === "all" && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1a73e8]" />}
          </button>
        </div>

        {/* Filter and View Toggle Buttons */}
        <div className="flex gap-2">
          <button 
            className="bg-[#054CA0] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Create Project
          </button>
          <button
            className="px-3 py-1.5 border rounded-md flex items-center gap-2 text-sm bg-white"
            onClick={() => setIsFilterOpen(true)}
          >
            <span className="text-gray-700">Filter</span>
          </button>
          <div className="flex border rounded-md overflow-hidden bg-white">
            <button
              className={`p-1.5 ${isGridView ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}
              onClick={() => setIsGridView(true)}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              className={`p-1.5 ${!isGridView ? "bg-gray-900 text-white" : "bg-white text-gray-600"}`}
              onClick={() => setIsGridView(false)}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Create Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Create New Project</h2>
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
                <label className="block text-sm text-gray-700 mb-1">Project Name</label>
                <input 
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Add Subscribed Products</label>
                <div className="relative">
                  <button
                    className="w-full px-3 py-2 border rounded-md flex justify-between items-center bg-white"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="text-gray-500">
                      {selectedProducts.length === 0 
                        ? "Subscribed Products" 
                        : `${selectedProducts.length} selected`}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto z-50">
                      {products.map((product) => (
                        <label 
                          key={product}
                          className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product)}
                            onChange={() => toggleProduct(product)}
                            className="mr-2"
                          />
                          <span>{product}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Filter Sidebar */}
      <div className="relative">
        {/* Filter Sidebar */}
        <FilterSidebar 
  isOpen={isFilterOpen} 
  onClose={() => setIsFilterOpen(false)}
  onFilterChange={(filteredData) => {
    console.log('Filtered data:', filteredData);
    setFilteredResults(filteredData);
  }}
/>

        {/* Content Area */}
        <div className={`transition-all duration-300 ${isFilterOpen ? "ml-80" : "ml-0"}`}>
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {insights.map((insight, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-[#E2D7FA] rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-900">Project_{i + 1}</h3>
                      <button
  className="text-blue-600 text-sm flex items-center hover:underline"
  onClick={() => navigate(`/projects/${insight.id}`)}
>
  View Details
  <ChevronRight className="w-4 h-4 ml-1" />
</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-1">INSIGHTS</span>
                      <span>{insight.insights}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-1">INSIGHTS WORKBOOK</span>
                      <span>{insight.insights_workbook}</span>
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-1">ADDED PRODUCTS</span>
                      <span>{insight.added_products}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 p-4 border-b bg-gray-50 text-sm font-medium text-gray-500">
                <div>PROJECT NAME</div>
                <div>INSIGHTS</div>
                <div>INSIGHTS WORKBOOK</div>
                <div>ACTIONS</div>
              </div>
              {insights.map((insight, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 p-4 border-b last:border-b-0 items-center text-sm">
                  <div className="font-medium">Project_{i + 1}</div>
                  <div>{insight.insights}</div>
                  <div>{insight.insights_workbook}</div>
                  <button
  className="text-blue-600 text-sm flex items-center hover:underline"
  onClick={() => navigate(`/projects/${insight.id}`)}
>
  View Details
  <ChevronRight className="w-4 h-4 ml-1" />
</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}