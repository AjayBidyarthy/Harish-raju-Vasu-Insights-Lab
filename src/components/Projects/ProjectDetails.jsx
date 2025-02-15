import { ChevronRight, Grid, LayoutGrid, Search, X, Plus, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import FilterSidebar from "../DataProducts/FilterSidebar"
import { useNavigate } from "react-router-dom";
import ExploreModal from "./ExploreModal";
import CreateProjectPanel from "./CreateProjectSlider";
import "./ProjectDetails.scss"

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [projectName, setProjectName] = useState("")
  const navigate = useNavigate()
  const authToken = import.meta.env.VITE_AUTH_TOKEN

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          '/api/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=1',
          {
            headers: {
              "Authorization": `Bearer ${authToken}`,
              "Accept": "application/json",
            }
          }
        );

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
    <div className="project-details">
      <div className="project-details__header">
        <CreateProjectPanel
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          products={products}
          selectedProducts={selectedProducts}
          onToggleProduct={toggleProduct}
          openModal={() => setIsModalOpen(true)}
          projectName={projectName}
          setProjectName={setProjectName}
        />
        <ExploreModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          projectName={projectName}
        />
        <div className="project-details__tabs">
          <button
            className={`project-details__tab ${activeTab === "all" ? "project-details__tab--active" : "project-details__tab--inactive"}`}
            onClick={() => setActiveTab("all")}
          >
            All ({insights.length})
          </button>
        </div>

        <div className="project-details__actions">
          <button 
            className="project-details__create-btn"
            onClick={() => setIsCreateOpen(true)}
          >
            <Plus className="w-4 h-4" />
            Create Project
          </button>
          <button
            className="project-details__filter-btn"
            onClick={() => setIsFilterOpen(true)}
          >
            <span>Filter</span>
          </button>
          <div className="project-details__view-toggle">
            <button
              className={isGridView ? "active" : "inactive"}
              onClick={() => setIsGridView(true)}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              className={!isGridView ? "active" : "inactive"}
              onClick={() => setIsGridView(false)}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="project-details__content">
        <FilterSidebar 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)}
          onFilterChange={(filteredData) => {
            console.log('Filtered data:', filteredData);
            setFilteredResults(filteredData);
          }}
        />

        <div className={`project-details__content ${isFilterOpen ? "project-details__content--with-filter" : ""} ${isCreateOpen ? "project-details__content--with-create" : ""}`}>
          {isGridView ? (
            <div className="project-details__grid">
              {insights.map((insight, i) => (
                <div key={i} className="project-details__card">
                  <div className="project-details__card-header">
                    <div className="project-details__card-title">
                      <h3>Project_{i + 1}</h3>
                      <button
                        className="project-details__view-btn"
                        onClick={() => navigate(`/projects/${insight.id}`)}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="project-details__card-stats">
                    <div className="project-details__card-stat">
                      <span>INSIGHTS</span>
                      <span>{insight.insights}</span>
                    </div>
                    <div className="project-details__card-stat">
                      <span>INSIGHTS WORKBOOK</span>
                      <span>{insight.insights_workbook}</span>
                    </div>
                    <div className="project-details__card-stat">
                      <span>ADDED PRODUCTS</span>
                      <span>{insight.added_products}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="project-details__table">
              <div className="project-details__table-header">
                <div>PROJECT NAME</div>
                <div>INSIGHTS</div>
                <div>INSIGHTS WORKBOOK</div>
                <div>ACTIONS</div>
              </div>
              {insights.map((insight, i) => (
                <div key={i} className="project-details__table-row">
                  <div>Project_{i + 1}</div>
                  <div>{insight.insights}</div>
                  <div>{insight.insights_workbook}</div>
                  <button
                    className="project-details__view-btn"
                    onClick={() => navigate(`/projects/${insight.id}`)}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}