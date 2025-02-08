import { ChevronRight, Grid, LayoutGrid, Search, X, Plus, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import FilterSidebar from "../DataProducts/FilterSidebar"
import CreateProjectSlider from "./CreateProjectSlider";
import { useNavigate } from "react-router-dom";
import ExploreModal from "./ExploreModal";

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
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  const authToken = import.meta.env.VITE_AUTH_TOKEN;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://10.10.20.28:5017/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=1', {
          headers: {
            "Authorization": `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })

        const data = await response.json();

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

        <div className="flex gap-2">
          <button 
            className="bg-[#054CA0] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            onClick={() => setIsCreateOpen(true)}
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

        {/* Create Project Slider */}
        <CreateProjectSlider 
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          products={products}
          selectedProducts={selectedProducts}
          onToggleProduct={toggleProduct}
          openModal={() => setIsModalOpen(true)}
        />
 <ExploreModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            />
        {/* Main Content Area */}
        <div className={`transition-all duration-300 ${isFilterOpen ? "ml-80" : "ml-0"} ${isCreateOpen ? "mr-96" : "mr-0"}`}>
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