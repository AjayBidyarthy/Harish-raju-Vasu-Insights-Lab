import { ChevronRight, Grid, LayoutGrid, Star, Users } from "lucide-react"
import { useState, useEffect } from "react"
import FilterSidebar from "./FilterSidebar"

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
    return <div className="p-4">Loading data products...</div>
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>
  }

  return (
    <div className="p-4 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex space-x-6 border-b md:ml-6">
          <button
            className={`relative pb-2 text-sm font-medium ${activeTab === "all" ? "text-[#1a73e8]" : "text-gray-600"}`}
            onClick={() => setActiveTab("all")}
          >
            All ({products.length})
            {activeTab === "all" && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1a73e8]" />}
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="px-3 py-1.5 border rounded-md flex items-center gap-2 text-sm"
            onClick={() => setIsFilterOpen(true)}
          >
            <span className="text-gray-700">Filter</span>
          </button>
          <div className="flex border rounded-md overflow-hidden">
            <button
              className={`p-1.5 ${isGridView ? "bg-black text-white" : "bg-white text-black"}`}
              onClick={() => setIsGridView(true)}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              className={`p-1.5 ${!isGridView ? "bg-black text-white" : "bg-white text-black"}`}
              onClick={() => setIsGridView(false)}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
      <FilterSidebar 
  isOpen={isFilterOpen} 
  onClose={() => setIsFilterOpen(false)}
  onFilterChange={(filteredProducts) => setProducts(filteredProducts)} 
/>

        <div className={`transition-all duration-300 ${isFilterOpen ? "ml-80" : "ml-0"}`}>
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.dataProductId} className="rounded-lg p-4">
                  <div className="flex justify-between mx-auto bg-[#E2D7FA] items-start mb-4 p-4 shadow-md">
                    <div className="font-poppins">
                      <h3 className="font-medium mb-1">{product.displayName}</h3>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{product.subscribers}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                          <span className="text-sm">{product.avgRating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:underline flex items-center text-sm">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Data Quality</span>
                      <span className="text-green-600">{product.dataQuality}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Model</span>
                      <span>{product.transformationMode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Source</span>
                      <span>{product.sourceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domain</span>
                      <span>{product.domainName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sensitivity</span>
                      <span>{product.dataProductSensitivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border rounded-lg">
              <div className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1fr_1.5fr_1fr_80px_80px] gap-2 p-3 bg-gray-50 border-b text-sm text-gray-500 font-medium">
                <div className="flex items-center">
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center">PRODUCT NAME</div>
                <div className="flex items-center">DATA QUALITY</div>
                <div className="flex items-center">SENSITIVITY</div>
                <div className="flex items-center">DOMAIN</div>
                <div className="flex items-center">SOURCE</div>
                <div className="flex items-center">MODEL</div>
                <div className="flex items-center">SUBSCRIBERS</div>
                <div className="flex items-center">RATING</div>
                <div className="flex items-center justify-end">MORE</div>
              </div>
              {products.map((product) => (
                <div
                  key={product.dataProductId}
                  className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1fr_1.5fr_1fr_80px_80px] gap-2 p-3 border-b last:border-b-0 items-center text-sm"
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center">{product.displayName}</div>
                  <div className="flex items-center text-green-600">{product.dataQuality}%</div>
                  <div className="flex items-center">{product.dataProductSensitivity}</div>
                  <div className="flex items-center">{product.domainName}</div>
                  <div className="flex items-center">{product.sourceType}</div>
                  <div className="flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.transformationMode}
                  </div>
                  <div className="flex items-center">{product.subscribers}</div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                      <span className="ml-1">{product.avgRating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button className="text-blue-600 hover:underline">View</button>
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