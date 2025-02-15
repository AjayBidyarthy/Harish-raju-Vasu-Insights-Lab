import { ChevronRight, Grid, LayoutGrid, Star, Users } from "lucide-react"
import { useState, useEffect } from "react"
import FilterSidebar from "./FilterSidebar"
import './DataProducts.scss'
import "./FilterSidebar.scss"

export const DataProducts = () => {
  const [isGridView, setIsGridView] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const authToken = import.meta.env.VITE_AUTH_TOKEN;
  
  useEffect(() => {
    fetchDataProducts()
  }, [])

  const fetchDataProducts = async () => {
    try {
      const response = await fetch('/api/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=1', {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        }
      });

      const data = await response.json()
      if (data.status === "success") {
        setProducts(data.data.hits)
      } else {
        setError("Failed to fetch data products")
      }
    } catch (err) {
      setError("Error fetching data products")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Loading data products...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="data-products">
      <div className="header">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All ({products.length})
          </button>
        </div>

        <div className="controls">
          <button
            className="filter-button"
            onClick={() => setIsFilterOpen(true)}
          >
            <span>Filter</span>
          </button>
          <div className="view-toggle">
            <button
              className={`toggle-button ${isGridView ? "active" : ""}`}
              onClick={() => setIsGridView(true)}
            >
              <LayoutGrid className="icon" />
            </button>
            <button
              className={`toggle-button ${!isGridView ? "active" : ""}`}
              onClick={() => setIsGridView(false)}
            >
              <Grid className="icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="content">
        <FilterSidebar 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)}
          onFilterChange={(filteredProducts) => setProducts(filteredProducts)} 
        />

        <div className={`products-container ${isFilterOpen ? "sidebar-open" : ""}`}>
          {isGridView ? (
            <div className="grid-view">
              {products.map((product) => (
                <div key={product.dataProductId} className="product-card">
                  <div className="product-header">
                    <div className="product-info">
                      <h3>{product.displayName}</h3>
                      <div className="metrics">
                        <div className="metric">
                          <Users className="icon" />
                          <span>{product.subscribers}</span>
                        </div>
                        <div className="metric">
                          <Star className="icon star" />
                          <span>{product.avgRating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="view-details">
                      View Details
                      <ChevronRight className="icon" />
                    </button>
                  </div>

                  <div className="product-details">
                    <div className="detail-row">
                      <span>Data Quality:</span>
                      <span className="quality">{product.dataQuality}%</span>
                    </div>
                    <div className="detail-row">
                      <span>Model:</span>
                      <span>{product.transformationMode}</span>
                    </div>
                    <div className="detail-row">
                      <span>Source:</span>
                      <span>{product.sourceType}</span>
                    </div>
                    <div className="detail-row">
                      <span>Domain:</span>
                      <span>{product.domainName}</span>
                    </div>
                    <div className="detail-row">
                      <span>Sensitivity:</span>
                      <span>{product.dataProductSensitivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="list-view">
              <div className="list-header">
                <div className="checkbox-cell">
                  <input type="checkbox" />
                </div>
                <div>PRODUCT NAME</div>
                <div>DATA QUALITY</div>
                <div>SENSITIVITY</div>
                <div>DOMAIN</div>
                <div>SOURCE</div>
                <div>MODEL</div>
                <div>SUBSCRIBERS</div>
                <div>RATING</div>
                <div>MORE</div>
              </div>
              {products.map((product) => (
                <div key={product.dataProductId} className="list-row">
                  <div className="checkbox-cell">
                    <input type="checkbox" />
                  </div>
                  <div>{product.displayName}</div>
                  <div className="quality">{product.dataQuality}%</div>
                  <div>{product.dataProductSensitivity}</div>
                  <div>{product.domainName}</div>
                  <div>{product.sourceType}</div>
                  <div className="model">{product.transformationMode}</div>
                  <div>{product.subscribers}</div>
                  <div className="rating">
                    <Star className="icon star" />
                    <span>{product.avgRating}</span>
                  </div>
                  <div className="actions">
                    <button>View</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataProducts