"use client"

import { ChevronRight, Grid, LayoutGrid, Star, Users } from "lucide-react"
import { useState } from "react"

// Sample data
const insights = Array(8).fill({
  name: "Customer Insights",
  rating: 4.5,
  reviews: 5,
  dataQuality: 99.8,
  model: "Transformation Model",
  source: "Public",
  domain: "Supply Chain",
  productType: "Cached",
})

export function DataProducts() {
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div>All({insights.length})</div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border rounded-md flex items-center gap-2">Filter</button>
          <div className="flex border rounded-md">
            <button className={`p-1.5 ${isGridView ? "bg-gray-100" : ""}`} onClick={() => setIsGridView(true)}>
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className={`p-1.5 ${!isGridView ? "bg-gray-100" : ""}`} onClick={() => setIsGridView(false)}>
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {insights.map((insight, i) => (
            <div key={i} className="rounded-lg p-4">
              <div className="flex justify-between mx-auto bg-[#E2D7FA] items-start mb-4 p-4 shadow-md">
                <div className="font-poppins">
                  <h3 className="font-medium mb-1">Customer Insights</h3>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{insight.reviews}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                      <span className="text-sm">{insight.rating}</span>
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
                  <span className="text-green-600">{insight.dataQuality}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Model</span>
                  <span>{insight.model}</span>
                </div>
                <div className="flex justify-between">
                  <span>Source</span>
                  <span>{insight.source}</span>
                </div>
                <div className="flex justify-between">
                  <span>Domain</span>
                  <span>{insight.domain}</span>
                </div>
                <div className="flex justify-between">
                  <span>Product Type</span>
                  <span>{insight.productType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border rounded-lg">
          <div className="grid grid-cols-[auto,1fr,1fr,1fr,1fr,1fr,1fr,1fr,auto] gap-4 p-3 bg-gray-50 border-b text-sm text-gray-500 font-medium">
            <div className="w-5">
              <input type="checkbox" className="rounded" />
            </div>
            <div>PRODUCT NAME</div>
            <div>DATA QUALITY</div>
            <div>SENSITIVITY</div>
            <div>DOMAIN</div>
            <div>SOURCE</div>
            <div>MODEL</div>
            <div>PRODUCT TYPE</div>
            <div className="text-right">MORE</div>
          </div>
          {insights.map((insight, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto,1fr,1fr,1fr,1fr,1fr,1fr,1fr,auto] gap-4 p-3 border-b last:border-b-0 items-center text-sm"
            >
              <div className="w-5">
                <input type="checkbox" className="rounded" />
              </div>
              <div >{insight.name}</div>
              <div className="text-green-600">{insight.dataQuality}%</div>
              <div>{insight.source}</div>
              <div>{insight.domain}</div>
              <div>{insight.source}</div>
              <div>{insight.model}</div>
              <div>{insight.productType}</div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  <span className="ml-1">{insight.rating}</span>
                </div>
                <button className="text-blue-600 hover:underline">View</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

