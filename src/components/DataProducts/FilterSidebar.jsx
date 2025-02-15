import { Search, X } from 'lucide-react'
import { useState, useEffect } from "react"

const FilterSidebar = ({ isOpen, onClose, onFilterChange }) => {
  const [selectedSensitivities, setSelectedSensitivities] = useState([])
  const [selectedApprovalStates, setSelectedApprovalStates] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [apiData, setApiData] = useState([])
  const authToken = import.meta.env.VITE_AUTH_TOKEN;
  
  const sensitivities = ["Public", "Restricted", "Highly Restricted", "Internal"]
  const approvalStates = [
    { label: "Subscribed Products", value: 1 },
    { label: "In Review", value: 2 },
    { label: "Rejected", value: 0 },
    { label: "Pending", value: 4 }
  ]

  useEffect(() => {
    fetchAndFilterData()
  }, [selectedSensitivities, selectedApprovalStates])

  useEffect(() => {
    applyFilters()
  }, [searchTerm, apiData])

  const handleSensitivityChange = (sensitivity) => {
    const newSelectedSensitivities = selectedSensitivities.includes(sensitivity)
      ? selectedSensitivities.filter(s => s !== sensitivity)
      : [...selectedSensitivities, sensitivity]
    
    setSelectedSensitivities(newSelectedSensitivities)
  }

  const handleApprovalStateChange = (stateValue) => {
    const newSelectedStates = selectedApprovalStates.includes(stateValue)
      ? selectedApprovalStates.filter(s => s !== stateValue)
      : [...selectedApprovalStates, stateValue]
    
    setSelectedApprovalStates(newSelectedStates)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const fetchAndFilterData = async () => {
    try {
      const userStatusQuery = selectedApprovalStates.length > 0 
        ? selectedApprovalStates.join(',')
        : '1'

        const response = await fetch(
          `/api/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=${userStatusQuery}`,
          {
            headers: {
              "Authorization": `Bearer ${authToken}`,
              "Accept": "application/json",
            }
          }
        );
        
      const data = await response.json()
      
      if (data.status === "success") {
        setApiData(data.data.hits)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const applyFilters = () => {
    let filteredProducts = [...apiData]
    
    if (selectedSensitivities.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        selectedSensitivities.includes(product.dataProductSensitivity)
      )
    }
    
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.domainName.toLowerCase().includes(searchTerm)
      )
    }
    
    onFilterChange(filteredProducts)
  }

  return (
    <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2>Filters</h2>
            <button onClick={onClose} className="close-button">
              <X />
            </button>
          </div>

          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search domain"
                className="search-input"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Approval State</h3>
            <div className="checkbox-group">
              {approvalStates.map((state) => (
                <label key={state.label} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedApprovalStates.includes(state.value)}
                    onChange={() => handleApprovalStateChange(state.value)}
                  />
                  <span>{state.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Data Sensitivity</h3>
            <div className="checkbox-group">
              {sensitivities.map((sensitivity) => (
                <label key={sensitivity} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedSensitivities.includes(sensitivity)}
                    onChange={() => handleSensitivityChange(sensitivity)}
                  />
                  <span>{sensitivity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterSidebar