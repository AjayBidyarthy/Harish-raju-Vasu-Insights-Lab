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

  useEffect(() => {
    fetchDataProducts()
  }, [])

  const fetchDataProducts = async () => {
    try {
      const response = await fetch('http://10.10.20.28:5017/v1.5/api/search/multi-query?aggregations=true&indexes=data_products&start=0&size=20&search_engine=normal_search&user_status=1', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpM3kxeElhQV9YNmtUMmZ3RjRLUU9pNWdQRmdaOEo3Q09xYmU3MVBpVm5FIn0.eyJleHAiOjE3Mzg3NDU3ODksImlhdCI6MTczODY1OTM5MCwiYXV0aF90aW1lIjoxNzM4NjU2NjkxLCJqdGkiOiIwMGE4YWViZi05NzQ1LTQxMDgtODY0OS03NzdjYjQ1OGFhNmEiLCJpc3MiOiJodHRwczovLzEwLjEwLjIwLjI4Ojk0NDMvcmVhbG1zL2RleHRydXMiLCJhdWQiOiJkYXRhLW1hcmtldCIsInN1YiI6IjQyNjJmNmIzLTk0M2MtNGNjNS04NzM2LWMyODZmMGI3NTlhNyIsInR5cCI6IklEIiwiYXpwIjoiZGF0YS1tYXJrZXQiLCJub25jZSI6IjM1NDM0YWQwLTVjNGItNDEwZS05OWY4LTU4NGUwNzA2NTk5YyIsInNlc3Npb25fc3RhdGUiOiI4Y2MzY2I5Ny02NzNmLTQ4YWMtODZjMS0wMjYwNDc4ZGM5Y2EiLCJhdF9oYXNoIjoiMW5GTUhaRDg5eFN1bEVlQU5kejQ2dyIsImFjciI6IjEiLCJzaWQiOiI4Y2MzY2I5Ny02NzNmLTQ4YWMtODZjMS0wMjYwNDc4ZGM5Y2EiLCJpc0RmVXNlciI6dHJ1ZSwiaXNDb25zdW1lciI6dHJ1ZSwic3ViIjoiRFhBRE1JTjoxIiwiY2xpZW50SWQiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJnc1JvbGVzIjpbImdzLjFfUFJPRFVDRVJTIiwiZ3MuMTYxM19URUNITklDQUxPV05FUlMiLCJncy4yMjYzX0JVU0lORVNTT1dORVJTIiwiZ3MuMjdfQ29tcG9zZXIiLCJncy4xNTMzX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE0ODRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTM0N19CVVNJTkVTU09XTkVSUyIsImdzLjI2NV9URUNITklDQUxPV05FUlMiLCJncy4xNzVfQlVTSU5FU1NPV05FUlMiLCJncy4xMzczX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjM2X0NvbXBvc2VyIiwiZ3MuMTM0N19QUk9EVUNFUlMiLCJncy4xMzQ0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTY1OF9URUNITklDQUxPV05FUlMiLCJncy42NDlfQlVTSU5FU1NPV05FUlMiLCJncy4xMzc0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTM0MF9QUk9EVUNFUlMiLCJncy4yNjVfUFJPRFVDRVJTIiwiZ3MuMzIwMV9URUNITklDQUxPV05FUlMiLCJncy41X0NvbXBvc2VyIiwiZ3MuNjQ5X1BST0RVQ0VSUyIsImdzLjE3X0NvbXBvc2VyIiwiZ3MuMjY0X0JVU0lORVNTT1dORVJTIiwiZ3MuMTQxMF9QUk9EVUNFUlMiLCJncy4xMV9Db21wb3NlciIsImdzLjRfQ29tcG9zZXIiLCJncy4yODdfUFJPRFVDRVJTIiwiZ3MuMTc0X1RFQ0hOSUNBTE9XTkVSUyIsImdzLnJvbGVfZHhhZG1pbi1nZXRyaWdodGRhdGEuY29tIiwiZ3MuMTgwMF9QUk9EVUNFUlMiLCJncy4xNTMzX1BST0RVQ0VSUyIsImdzLjI2NV9CVVNJTkVTU09XTkVSUyIsImdzLjEyX0NvbXBvc2VyIiwiZ3MuMzVfQ29tcG9zZXIiLCJncy4yNjRfUFJPRFVDRVJTIiwiZ3MuMTQ4NF9QUk9EVUNFUlMiLCJncy4xOF9Db21wb3NlciIsImdzLjE2NzFfUFJPRFVDRVJTIiwiZ3MuMTc0X1BST0RVQ0VSUyIsImdzLjExMzFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTM0Nl9QUk9EVUNFUlMiLCJncy4xMzk4X0JVU0lORVNTT1dORVJTIiwiZ3MuMzBfQ29tcG9zZXIiLCJncy5jYXRhbG9nX1JvbGUiLCJncy4xNjU4X0JVU0lORVNTT1dORVJTIiwiZ3MuNl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNzNfQlVTSU5FU1NPV05FUlMiLCJncy4xM19Db21wb3NlciIsImdzLjEwX0NvbXBvc2VyIiwiZ3MuMTQxMV9QUk9EVUNFUlMiLCJncy5TdXBlciBBZG1pbiIsImdzLjE5MTlfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTcwMl9CVVNJTkVTU09XTkVSUyIsImdzLjIyMzFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMjhfQ29tcG9zZXIiLCJncy4xMzk4X1BST0RVQ0VSUyIsImdzLjRfQlVTSU5FU1NPV05FUlMiLCJncy4yNTk2X1BST0RVQ0VSUyIsImdzLjE3NV9QUk9EVUNFUlMiLCJncy45Nl9CVVNJTkVTU09XTkVSUyIsImdzLjE1MzRfUFJPRFVDRVJTIiwiZ3MuMzdfQ29tcG9zZXIiLCJncy4zNF9Db21wb3NlciIsImdzLjFfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc2X0JVU0lORVNTT1dORVJTIiwiZ3MuMTcwMl9URUNITklDQUxPV05FUlMiLCJncy4xMzQwX0JVU0lORVNTT1dORVJTIiwiZ3MuN19Db21wb3NlciIsImdzLjEzNDVfQlVTSU5FU1NPV05FUlMiLCJncy4yODVfUFJPRFVDRVJTIiwiZ3MuNDBfQ29tcG9zZXIiLCJncy4xMzU4X0JVU0lORVNTT1dORVJTIiwiZ3Muc3lzdGVtX2RlZmF1bHRfZnVuY3Rpb25zIiwiZ3MuMTU1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjI4NV9CVVNJTkVTU09XTkVSUyIsImdzLjI0N19URUNITklDQUxPV05FUlMiLCJncy4yMjYzX1BST0RVQ0VSUyIsImdzLjY0OV9URUNITklDQUxPV05FUlMiLCJncy4xMTMxX1BST0RVQ0VSUyIsImdzLjI1OTZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTkxOV9QUk9EVUNFUlMiLCJncy4yNl9Db21wb3NlciIsImdzLjEzOTZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMzA3NF9QUk9EVUNFUlMiLCJncy4xODAwX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjEzNDRfUFJPRFVDRVJTIiwiZ3MuNTA1M19URUNITklDQUxPV05FUlMiLCJncy4zMl9Db21wb3NlciIsImdzLjE0MTFfQlVTSU5FU1NPV05FUlMiLCJncy4xMzQ1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE0MTBfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc1N19QUk9EVUNFUlMiLCJncy4xNzZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTQ4NF9CVVNJTkVTU09XTkVSUyIsImdzLjIxX0NvbXBvc2VyIiwiZ3MuMTVfQ29tcG9zZXIiLCJncy4xOTE5X0JVU0lORVNTT1dORVJTIiwiZ3MuMjRfQ29tcG9zZXIiLCJncy4zOV9Db21wb3NlciIsImdzLjE3NTdfQlVTSU5FU1NPV05FUlMiLCJncy4zM19Db21wb3NlciIsImdzLjEzNThfUFJPRFVDRVJTIiwiZ3MuMTc1X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE1MzNfQlVTSU5FU1NPV05FUlMiLCJncy5zYWxlcyIsImdzLjQ0MzRfQlVTSU5FU1NPV05FUlMiLCJncy4xMzk2X1BST0RVQ0VSUyIsImdzLjI1OTZfQlVTSU5FU1NPV05FUlMiLCJncy4xNjEzX1BST0RVQ0VSUyIsImdzLjE2NThfUFJPRFVDRVJTIiwiZ3MuMl9Db21wb3NlciIsImdzLjEzNzRfUFJPRFVDRVJTIiwiZ3MuMTc5Nl9CVVNJTkVTU09XTkVSUyIsImdzLjhfQ29tcG9zZXIiLCJncy45Nl9URUNITklDQUxPV05FUlMiLCJncy4xMzQ2X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE3OTZfUFJPRFVDRVJTIiwiZ3MuMTM5Nl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNzRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTg2X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjE4Nl9CVVNJTkVTU09XTkVSUyIsImdzLjEzNThfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTA2NV9CVVNJTkVTU09XTkVSUyIsImdzLjE1NV9QUk9EVUNFUlMiLCJncy4xNzU3X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjMyMDFfUFJPRFVDRVJTIiwiZ3MuNTI5MV9URUNITklDQUxPV05FUlMiLCJncy4yM19Db21wb3NlciIsImdzLjEwNjVfUFJPRFVDRVJTIiwiZ3MuMzNfUFJPRFVDRVJTIiwiZ3MuMTM5N19CVVNJTkVTU09XTkVSUyIsImdzLnBvbGljeV91c2VyIiwiZ3MuMzIwMV9CVVNJTkVTU09XTkVSUyIsImdzLjZfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuOV9Db21wb3NlciIsImdzLjEzOTdfUFJPRFVDRVJTIiwiZ3MuMjlfQ29tcG9zZXIiLCJncy4xNjEzX0JVU0lORVNTT1dORVJTIiwiZ3MuMTEzMV9CVVNJTkVTU09XTkVSUyIsImdzLjE3NF9CVVNJTkVTU09XTkVSUyIsImdzLjEzOTdfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTc5Nl9URUNITklDQUxPV05FUlMiLCJncy4xMzQ3X1RFQ0hOSUNBTE9XTkVSUyIsImdzLjEzNDRfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMTgwMF9CVVNJTkVTU09XTkVSUyIsImdzLjk2X1BST0RVQ0VSUyIsImdzLjEzNDVfUFJPRFVDRVJTIiwiZ3Muc3VwZXJfYWRtaW4iLCJncy42X0NvbXBvc2VyIiwiZ3MuM19Db21wb3NlciIsImdzLnJvbGVfY29uc3VtZXItZ2V0cmlnaHRkYXRhLmNvbSIsImdzLjIyX0NvbXBvc2VyIiwiZ3MuMjVfQ29tcG9zZXIiLCJncy41MjkxX0JVU0lORVNTT1dORVJTIiwiZ3MuMjk3X0JVU0lORVNTT1dORVJTIiwiZ3MuMTZfQ29tcG9zZXIiLCJncy4zMV9Db21wb3NlciIsImdzLjI2NF9URUNITklDQUxPV05FUlMiLCJncy4xNTVfQlVTSU5FU1NPV05FUlMiLCJncy4xX0JVU0lORVNTT1dORVJTIiwiZ3MuMTY3MV9CVVNJTkVTU09XTkVSUyIsImdzLjE1MzRfQlVTSU5FU1NPV05FUlMiLCJncy4xNDExX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjIyMzFfQlVTSU5FU1NPV05FUlMiLCJncy42X1BST0RVQ0VSUyIsImdzLjE5X0NvbXBvc2VyIiwiZ3MuMTg2X1BST0RVQ0VSUyIsImdzLjE0X0NvbXBvc2VyIiwiZ3MuMTM0MF9URUNITklDQUxPV05FUlMiLCJncy4xNjcxX1RFQ0hOSUNBTE9XTkVSUyIsImdzLjIyMzFfUFJPRFVDRVJTIiwiZ3MuMjI2M19URUNITklDQUxPV05FUlMiLCJncy4yMF9Db21wb3NlciIsImdzLjEzOThfVEVDSE5JQ0FMT1dORVJTIiwiZ3MuMjk2NF9CVVNJTkVTU09XTkVSUyIsImdzLjE3MDJfUFJPRFVDRVJTIiwiZ3MuMTUzNF9URUNITklDQUxPV05FUlMiLCJncy4xNDEwX0JVU0lORVNTT1dORVJTIiwiZ3MuMTc2X1BST0RVQ0VSUyIsImdzLjUwNTNfQlVTSU5FU1NPV05FUlMiLCJncy4zOF9Db21wb3NlciIsImdzLjEzNDZfQlVTSU5FU1NPV05FUlMiLCJncy4xMzczX1BST0RVQ0VSUyIsImdzLmRtXyhkeGFkbWluJmdldHJpZ2h0ZGF0YS5jb20pIl0sIm9ubHlEYXRhTWFya2V0QWxsb3dlZCI6dHJ1ZSwiaXNTdXBlckFkbWluIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkeGFkbWluQGdldHJpZ2h0ZGF0YS5jb20iLCJnaXZlbl9uYW1lIjoiZHgiLCJ1c2VyTmFtZSI6ImR4IiwidXNlcklkIjoiMSIsInV1aWQiOiI0MjYyZjZiMy05NDNjLTRjYzUtODczNi1jMjg2ZjBiNzU5YTciLCJsaWNlbnNlVmFsaWQiOnRydWUsImhhc0xpY2Vuc2UiOnRydWUsIm5hbWUiOiJkeCBhZG1pbiIsInVzZXJFbWFpbCI6ImR4YWRtaW5AZ2V0cmlnaHRkYXRhLmNvbSIsImJ1c2luZXNzT3duZXIiOnRydWUsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImR4YWRtaW5AZ2V0cmlnaHRkYXRhLmNvbSJ9.SHL5syCPNxMQfulJIQ7gnP38i3QLtOOLss-nSPN3ivEtKv6GCw69Vc4gX_MH6kT9Db7we9jiuvQIizB-sJR4Hx2C0RrP-Lzhrw4L2zYip2-PFm6WdX1Eb--V9dsCBYuIpNW2wfDGAw3p1YI68DQHXw9SkPAnCgfVZ7cKN_71j7Ed_haNIFqgl0OkDXZT6FwGhXHcPM8bKv4Dg7E7btw91183eRam7dCEQgOREKKG4316PSl-kOdWAyCTZ7Z2P6DIXOB76FO_6rYOricLaGojjGmWyhXmYka36jRZowYmOVvcIGgYJAb4RLnXj03_F4CZSFSUFw0-SOYQ5SddyZFZ8g',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
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