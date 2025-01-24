import { Database, FileSpreadsheet, GitBranch, Share2 } from "lucide-react"

export const DataProducts = () => {
  const dataProducts = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      name: "Customer Database",
      type: "MySQL Database",
      lastAccessed: "2 hours ago",
      shared: "12 users",
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-green-600" />,
      name: "Sales Analytics",
      type: "Excel Workbook",
      lastAccessed: "1 day ago",
      shared: "8 users",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-600" />,
      name: "Product Metrics",
      type: "Knowledge Graph",
      lastAccessed: "3 days ago",
      shared: "15 users",
    },
  ]

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Data Products</h2>
          <p className="text-gray-600">Manage and explore your data assets</p>
        </div>

        <div className="grid gap-4">
          {dataProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">{product.icon}</div>
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm text-gray-500">Last accessed: {product.lastAccessed}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Share2 className="w-4 h-4" />
                    {product.shared}
                  </div>
                  <button className="bg-[#0047bb] text-white px-4 py-2 rounded-md hover:bg-[#003d9e] transition-colors">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

