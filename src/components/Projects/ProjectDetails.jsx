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
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpM3kxeElhQV9YNmtUMmZ3RjRLUU9pNWdQRmdaOEo3Q09xYmU3MVBpVm5FIn0.eyJleHAiOjE3Mzg3NDU3ODksImlhdCI6MTczODY1OTM5MCwiYXV0aF90aW1lIjoxNzM4NjU2NjkxLCJqdGkiOiIwMGE4YWViZi05NzQ1LTQxMDgtODY0OS03NzdjYjQ1OGFhNmEiLCJpc3MiOiJodHRwczovLzEwLjEwLjIwLjI4Ojk0NDMvcmVhbG1zL2RleHRydXMiLCJhdWQiOiJkYXRhLW1hcmtldCIsInN1YiI6IjQyNjJmNmIzLTk0M2MtNGNjNS04NzM2LWMyODZmMGI3NTlhNyIsInR5cCI6IklEIiwiYXpwIjoiZGF0YS1tYXJrZXQiLCJub25jZSI6IjM1NDM0YWQwLTVjNGItNDEwZS05OWY4LTU4NGUwNzA2NTk5YyIsInNlc3Npb25fc3RhdGUiOiI4Y2MzY2I5Ny02NzNmLTQ4YWMtODZjMS0wMjYwNDc4ZGM5Y2EiLCJhdF9oYXNoIjoiMW5GTUhaRDg5eFN1bEVlQU5kejQ2dyIsImFjciI6IjEiLCJzaWQiOiI4Y2MzY2I5Ny02NzNmLTQ4YWMtODZjMS0wMjYwNDc4ZGM5Y2EiLCJpc0RmVXNlciI6dHJ1ZSwiaXNDb25zdW1lciI6dHJ1ZSwic3ViIjoiRFhBRE1JTjoxIiwiY2xpZW50SWQiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnc1JvbGVzIjpbImdzLjFfUFJPRFVDRVJTIiwiZ3MuMTYxM19URUNITklDQUxPV05FUlMiLCJncy4yMjYzX0JVU0lORVNTT1dORVJTIiwiZ3MuMjdfQ29tcG9zZXIiLCJncy4xNTMzX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE0ODRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTM0N19CVVNJTkVTU09XTkVSUyIsImdzLjI2NV9URUNITklDQUxPV05FUlMiLCJncy4xNzVfQlVTSU5FU1NPV05FUlMiLCJncy4xMzczX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjM2X0NvbXBvc2VyIiwiZ3MuMTM0N19QUk9EVUNFUlMiLCJncy4xMzQ0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTY1OF9URUNITklDQUxPV05FUlMiLCJncy42NDlfQlVTSU5FU1NPV05FUlMiLCJncy4xMzc0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTM0MF9QUk9EVUNFUlMiLCJncy4yNjVfUFJPRFVDRVJTIiwiZ3MuMzIwMV9URUNITklDQUxPV05FUlMiLCJncy41X0NvbXBvc2VyIiwiZ3MuNjQ5X1BST0RVQ0VSUyIsImdzLjE3X0NvbXBvc2VyIiwiZ3MuMjY0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTQxMF9QUk9EVUNFUlMiLCJncy4xMV9Db21wb3NlciIsImdzLjRfQ29tcG9zZXIiLCJncy4yODdfUFJPRFVDRVJTIiwiZ3MuMTc0X1RFQ0hOSUNBTE9XTkVSUyIsImdzLnJvbGVfZHhhZG1pbi1nZXRyaWdodGRhdGEuY29tIiwiZ3MuMTgwMF9QUk9EVUNFUlMiLCJncy4xNTMzX1BST0RVQ0VSUyIsImdzLjI2NV9CVVNJTkVTU09XTkVSUyIsImdzLjEyX0NvbXBvc2VyIiwiZ3MuMzVfQ29tcG9zZXIiLCJncy4yNjRfUFJPRFVDRVJTIiwiZ3MuMTQ4NF9QUk9EVUNFUlMiLCJncy4xOF9Db21wb3NlciIsImdzLjE2NzFfUFJPRFVDRVJTIiwiZ3MuMTc0X1BST0RVQ0VSUyIsImdzLjExMzFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTM0Nl9QUk9EVUNFUlMiLCJncy4xMzk4X0JVU0lORVNTT1dORVJTIiwiZ3MuMzBfQ29tcG9zZXIiLCJncy5jYXRhbG9nX1JvbGUiLCJncy4xNjU4X0JVU0lORVNTT1dORVJTIiwiZ3MuNl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNzNfQlVTSU5FU1NPV05FUlMiLCJncy4xM19Db21wb3NlciIsImdzLjEwX0NvbXBvc2VyIiwiZ3MuMTQxMV9QUk9EVUNFUlMiLCJncy5TdXBlciBBZG1pbiIsImdzLjE5MTlfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTcwMl9CVVNJTkVTU09XTkVSUyIsImdzLjIyMzFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMjhfQ29tcG9zZXIiLCJncy4xMzk4X1BST0RVQ0VSUyIsImdzLjRfQlVTSU5FU1NPV05FUlMiLCJncy4yNTk2X1BST0RVQ0VSUyIsImdzLjE3NV9QUk9EVUNFUlMiLCJncy45Nl9CVVNJTkVTU09XTkVSUyIsImdzLjE1MzRfUFJPRFVDRVJTIiwiZ3MuMzdfQ29tcG9zZXIiLCJncy4zNF9Db21wb3NlciIsImdzLjFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc2X0JVU0lORVNTT1dORVJTIiwiZ3MuMTcwMl9URUNITklDQUxPV05FUlMiLCJncy4xMzQwX0JVU0lORVNTT1dORVJTIiwiZ3MuN19Db21wb3NlciIsImdzLjEzNDVfQlVTSU5FU1NPV05FUlMiLCJncy4yODVfUFJPRFVDRVJTIiwiZ3MuNDBfQ29tcG9zZXIiLCJncy4xMzU4X0JVU0lORVNTT1dORVJTIiwiZ3Muc3lzdGVtX2RlZmF1bHRfZnVuY3Rpb25zIiwiZ3MuMTU1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjI4NV9CVVNJTkVTU09XTkVSUyIsImdzLjI0N19URUNITklDQUxPV05FUlMiLCJncy4yMjYzX1BST0RVQ0VSUyIsImdzLjY0OV9URUNITklDQUxPV05FUlMiLCJncy4xMTMxX1BST0RVQ0VSUyIsImdzLjI1OTZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTkxOV9QUk9EVUNFUlMiLCJncy4yNl9Db21wb3NlciIsImdzLjEzOTZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMzA3NF9QUk9EVUNFUlMiLCJncy4xODAwX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjEzNDRfUFJPRFVDRVJTIiwiZ3MuNTA1M19URUNITklDQUxPV05FUlMiLCJncy4zMl9Db21wb3NlciIsImdzLjE0MTFfQlVTSU5FU1NPV05FUlMiLCJncy4xMzQ1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE0MTBfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc1N19QUk9EVUNFUlMiLCJncy4xNzZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTQ4NF9CVVNJTkVTU09XTkVSUyIsImdzLjIxX0NvbXBvc2VyIiwiZ3MuMTVfQ29tcG9zZXIiLCJncy4xOTE5X0JVU0lORVNTT1dORVJTIiwiZ3MuMjRfQ29tcG9zZXIiLCJncy4zOV9Db21wb3NlciIsImdzLjE3NTdfQlVTSU5FU1NPV05FUlMiLCJncy4zM19Db21wb3NlciIsImdzLjEzNThfUFJPRFVDRVJTIiwiZ3MuMTc1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE1MzNfQlVTSU5FU1NPV05FUlMiLCJncy5zYWxlcyIsImdzLjQ0MzRfQlVTSU5FU1NPV05FUlMiLCJncy4xMzk2X1BST0RVQ0VSUyIsImdzLjI1OTZfQlVTSU5FU1NPV05FUlMiLCJncy4xNjEzX1BST0RVQ0VSUyIsImdzLjE2NThfUFJPRFVDRVJTIiwiZ3MuMl9Db21wb3NlciIsImdzLjEzNzRfUFJPRFVDRVJTIiwiZ3MuMTc5Nl9CVVNJTkVTU09XTkVSUyIsImdzLjhfQ29tcG9zZXIiLCJncy45Nl9URUNITklDQUxPV05FUlMiLCJncy4xMzQ2X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE3OTZfUFJPRFVDRVJTIiwiZ3MuMTM5Nl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNzRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTg2X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE4Nl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNThfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTA2NV9CVVNJTkVTU09XTkVSUyIsImdzLjE1NV9QUk9EVUNFUlMiLCJncy4xNzU3X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjMyMDFfUFJPRFVDRVJTIiwiZ3MuNTI5MV9URUNITklDQUxPV05FUlMiLCJncy4yM19Db21wb3NlciIsImdzLjEwNjVfUFJPRFVDRVJTIiwiZ3MuMzNfUFJPRFVDRVJTIiwiZ3MuMTM5N19CVVNJTkVTU09XTkVSUyIsImdzLnBvbGljeV91c2VyIiwiZ3MuMzIwMV9CVVNJTkVTU09XTkVSUyIsImdzLjZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuOV9Db21wb3NlciIsImdzLjEzOTdfUFJPRFVDRVJTIiwiZ3MuMjlfQ29tcG9zZXIiLCJncy4xNjEzX0JVU0lORVNTT1dORVJTIiwiZ3MuMTEzMV9CVVNJTkVTU09XTkVSUyIsImdzLjE3NF9CVVNJTkVTU09XTkVSUyIsImdzLjEzOTdfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc5Nl9URUNITklDQUxPV05FUlMiLCJncy4xMzQ3X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjEzNDRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTgwMF9CVVNJTkVTU09XTkVSUyIsImdzLjk2X1BST0RVQ0VSUyIsImdzLjEzNDVfUFJPRFVDRVJTIiwiZ3Muc3VwZXJfYWRtaW4iLCJncy42X0NvbXBvc2VyIiwiZ3MuM19Db21wb3NlciIsImdzLnJvbGVfY29uc3VtZXItZ2V0cmlnaHRkYXRhLmNvbSIsImdzLjIyX0NvbXBvc2VyIiwiZ3MuMjVfQ29tcG9zZXIiLCJncy41MjkxX0JVU0lORVNTT1dORVJTIiwiZ3MuMjk3X0JVU0lORVNTT1dORVJTIiwiZ3MuMTZfQ29tcG9zZXIiLCJncy4zMV9Db21wb3NlciIsImdzLjI2NF9URUNITklDQUxPV05FUlMiLCJncy4xNTVfQlVTSU5FU1NPV05FUlMiLCJncy4xX0JVU0lORVNTT1dORVJTIiwiZ3MuMTY3MV9CVVNJTkVTU09XTkVSUyIsImdzLjE1MzRfQlVTSU5FU1NPV05FUlMiLCJncy4xNDExX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjIyMzFfQlVTSU5FU1NPV05FUlMiLCJncy42X1BST0RVQ0VSUyIsImdzLjE5X0NvbXBvc2VyIiwiZ3MuMTg2X1BST0RVQ0VSUyIsImdzLjE0X0NvbXBvc2VyIiwiZ3MuMTM0MF9URUNITklDQUxPV05FUlMiLCJncy4xNjcxX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjIyMzFfUFJPRFVDRVJTIiwiZ3MuMjI2M19URUNITklDQUxPV05FUlMiLCJncy4yMF9Db21wb3NlciIsImdzLjEzOThfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMjk2NF9CVVNJTkVTU09XTkVSUyIsImdzLjE3MDJfUFJPRFVDRVJTIiwiZ3MuMTUzNF9URUNITklDQUxPV05FUlMiLCJncy4xNDEwX0JVU0lORVNTT1dORVJTIiwiZ3MuMTc2X1BST0RVQ0VSUyIsImdzLjUwNTNfQlVTSU5FU1NPV05FUlMiLCJncy4zOF9Db21wb3NlciIsImdzLjEzNDZfQlVTSU5FU1NPV05FUlMiLCJncy4xMzczX1BST0RVQ0VSUyIsImdzLmRtXyhkeGFkbWluJmdldHJpZ2h0ZGF0YS5jb20pIl0sIm9ubHlEYXRhTWFya2V0QWxsb3dlZCI6dHJ1ZSwiaXNTdXBlckFkbWluIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkeGFkbWluQGdldHJpZ2h0ZGF0YS5jb20iLCJnaXZlbl9uYW1lIjoiZHgiLCJ1c2VyTmFtZSI6ImR4IiwidXNlcklkIjoiMSIsInV1aWQiOiI0MjYyZjZiMy05NDNjLTRjYzUtODczNi1jMjg2ZjBiNzU5YTciLCJsaWNlbnNlVmFsaWQiOnRydWUsImhhc0xpY2Vuc2UiOnRydWUsIm5hbWUiOiJkeCBhZG1pbiIsInVzZXJFbWFpbCI6ImR4YWRtaW5AZ2V0cmlnaHRkYXRhLmNvbSIsImJ1c2luZXNzT3duZXIiOnRydWUsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImR4YWRtaW5AZ2V0cmlnaHRkYXRhLmNvbSJ9.SHL5syCPNxMQfulJIQ7gnP38i3QLtOOLss-nSPN3ivEtKv6GCw69Vc4gX_MH6kT9Db7we9jiuvQIizB-sJR4Hx2C0RrP-Lzhrw4L2zYip2-PFm6WdX1Eb--V9dsCBYuIpNW2wfDGAw3p1YI68DQHXw9SkPAnCgfVZ7cKN_71j7Ed_haNIFqgl0OkDXZT6FwGhXHcPM8bKv4Dg7E7btw91183eRam7dCEQgOREKKG4316PSl-kOdWAyCTZ7Z2P6DIXOB76FO_6rYOricLaGojjGmWyhXmYka36jRZowYmOVvcIGgYJAb4RLnXj03_F4CZSFSUFw0-SOYQ5SddyZFZ8g',
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
  }, []); // Empty dependency array means this runs once when component mounts

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

            {/* Modal Footer */}
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