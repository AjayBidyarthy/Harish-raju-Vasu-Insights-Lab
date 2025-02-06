import { Search, X } from "lucide-react"
import { useState, useEffect } from "react"

const FilterSidebar = ({ isOpen, onClose, onFilterChange }) => {
  const [selectedSensitivities, setSelectedSensitivities] = useState([])
  const [selectedApprovalStates, setSelectedApprovalStates] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [apiData, setApiData] = useState([])
  
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
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpM3kxeElhQV9YNmtUMmZ3RjRLUU9pNWdQRmdaOEo3Q09xYmU3MVBpVm5FIn0.eyJleHAiOjE3Mzg5MDc3MDUsImlhdCI6MTczODgyMTMwNiwiYXV0aF90aW1lIjoxNzM4ODIwNzkyLCJqdGkiOiJiMzM5YWVjOS05ZmZmLTQxNGMtYWIyZC0yZjNlZjhmM2Y4ZTIiLCJpc3MiOiJodHRwczovLzEwLjEwLjIwLjI4Ojk0NDMvcmVhbG1zL2RleHRydXMiLCJhdWQiOiJkYXRhLW1hcmtldCIsInN1YiI6ImIzOGE2Mjk0LWFjYmUtNGE2Yi05NmVjLTc4ZWI4ZDgwM2IwMiIsInR5cCI6IklEIiwiYXpwIjoiZGF0YS1tYXJrZXQiLCJub25jZSI6IjY1ZWFkY2U1LTVkMzctNDM3MS1iNWMwLTYxYWE4OWU5Mzk1NyIsInNlc3Npb25fc3RhdGUiOiI2MmMzM2U1ZS0zMmQwLTRiZDktYTFhNy03YWVkMDNhNTY4NTkiLCJhdF9oYXNoIjoibzJLQms4TmN0VDVUdG42RlhIQmJudyIsImFjciI6IjEiLCJzaWQiOiI2MmMzM2U1ZS0zMmQwLTRiZDktYTFhNy03YWVkMDNhNTY4NTkiLCJpc0RmVXNlciI6dHJ1ZSwiaXNDb25zdW1lciI6dHJ1ZSwic3ViIjoiYmxhY2tjb2ZmZXJqb2JzQGdldHJpZ2h0ZGF0YS5jb206MSIsImNsaWVudElkIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ3NSb2xlcyI6WyJncy5kbV8oYmxhY2tjb2ZmZXJqb2JzJmdldHJpZ2h0ZGF0YS5jb20pIiwiZ3Muc3lzdGVtX2RlZmF1bHRfZnVuY3Rpb25zIl0sIm9ubHlEYXRhTWFya2V0QWxsb3dlZCI6dHJ1ZSwiaXNTdXBlckFkbWluIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYmxhY2tjb2ZmZXJqb2JzQGdldHJpZ2h0ZGF0YS5jb20iLCJnaXZlbl9uYW1lIjoiQmxhY2siLCJ1c2VyTmFtZSI6IkJsYWNrIiwidXNlcklkIjoiNTUwOTQ4MjgwMzQ0MTU0NjY0NSIsInV1aWQiOiJiMzhhNjI5NC1hY2JlLTRhNmItOTZlYy03OGViOGQ4MDNiMDIiLCJsaWNlbnNlVmFsaWQiOnRydWUsImhhc0xpY2Vuc2UiOnRydWUsIm5hbWUiOiJCbGFjayBDb2ZmZXIgSm9icyIsInVzZXJFbWFpbCI6ImJsYWNrY29mZmVyam9ic0BnZXRyaWdodGRhdGEuY29tIiwiYnVzaW5lc3NPd25lciI6ZmFsc2UsImZhbWlseV9uYW1lIjoiQ29mZmVyIEpvYnMiLCJlbWFpbCI6ImJsYWNrY29mZmVyam9ic0BnZXRyaWdodGRhdGEuY29tIn0.NCczBA4PAJ09TCuMqLPV5RQWALzCRepHrToyAmD98qOoORDptktKmJGax19erKuXO5sUpzuC-truy0zmxLF6NoojxgGJdTB4VOolYVUZTxt5VG-WpH7bsSQDCvVuaFHr8XLRF8iEMg0zaQfM-VPRTH7xUk6PnC5of70eF9MqGaMRv6Xy97vVGmDl97qgAc9GO3Fte2pauWDftQWjIfuWqlxS9yXzJD1FqXXs5qQzbARkdcOZKZx1dJWbLfrqSbkhVu6f-UrnPGMXa311ZG-lItyNIH-fg8AR0AefHyKXdgjdiUhwl5-KaXxK56GImZzAQBu8uHzn6KcLj02KbQgv9g',
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