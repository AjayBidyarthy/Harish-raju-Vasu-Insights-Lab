import { Search, X } from "lucide-react"
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

  // Fetch and filter data when filters change
  useEffect(() => {
    fetchAndFilterData()
  }, [selectedSensitivities, selectedApprovalStates])

  // Apply filters whenever search term or API data changes
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
        `http://10.10.20.28:5017/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=${userStatusQuery}`,
        {
          headers: {
            "Authorization": `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
      
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
    
    // Apply sensitivity filter if any selected
    if (selectedSensitivities.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        selectedSensitivities.includes(product.dataProductSensitivity)
      )
    }
    
    // Apply domain name search if search term exists
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.domainName.toLowerCase().includes(searchTerm)
      )
    }
    
    onFilterChange(filteredProducts)
  }

  return (
    <div
      className={`absolute top-0 left-0 h-full w-80 border-r transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search domain"
                className="w-full pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Approval State</h3>
            <div className="space-y-2">
              {approvalStates.map((state) => (
                <label key={state.label} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 mr-2"
                    checked={selectedApprovalStates.includes(state.value)}
                    onChange={() => handleApprovalStateChange(state.value)}
                  />
                  <span className="text-sm">{state.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Data Sensitivity</h3>
            <div className="space-y-2">
              {sensitivities.map((sensitivity) => (
                <label key={sensitivity} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 mr-2"
                    checked={selectedSensitivities.includes(sensitivity)}
                    onChange={() => handleSensitivityChange(sensitivity)}
                  />
                  <span className="text-sm">{sensitivity}</span>
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