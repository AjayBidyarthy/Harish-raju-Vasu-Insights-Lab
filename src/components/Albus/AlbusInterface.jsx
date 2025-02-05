import { Share2, Maximize2, X } from "lucide-react"
import { useState } from "react"

export default function AlbusInterface() {
  const [showMetadata, setShowMetadata] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  const metadata = [
    {
      id: 1,
      fieldName: "C_ACCTBAL",
      businessName: "c_acctbal",
      businessDescription: "C_ACCTBAL",
      dataDomain: "Number",
      piiType: "Not PII",
      sampleValues: "1566,9865,0943,9875",
    },
    {
      id: 1,
      fieldName: "C_ACCTBAL",
      businessName: "c_acctbal",
      businessDescription: "C_ACCTBAL",
      dataDomain: "Number",
      piiType: "Not PII",
      sampleValues: "1566,9865,0943,9875",
    },
    {
      id: 1,
      fieldName: "C_ACCTBAL",
      businessName: "c_acctbal",
      businessDescription: "C_ACCTBAL",
      dataDomain: "Number",
      piiType: "Not PII",
      sampleValues: "1566,9865,0943,9875",
    },
  ]

  return (
    <div className="min-h-screen font-poppins w-full p-6 bg-white flex flex-col">
         <div className="relative flex space-x-6 border-b">
            <button
            className={`relative pb-2 text-sm font-medium ${activeTab === "all" ? "text-[#1a73e8]" : "text-gray-600"}`}
            onClick={() => setActiveTab("all")}
          >
            Ask Albus
            {activeTab === "all" && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1a73e8]" />}
          </button>
          </div><br/>
      <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
  <div>
    <div className="text-sm text-gray-500">Data Product</div>
    <div>Customerinsights</div>
  </div>
  
  <div className="h-12 w-px bg-gray-200" />
  
  <div className="px-6">
    <div className="text-sm text-gray-500">Last Refresh Date & Time</div>
    <div>2025-01-29 05:18:46</div>
  </div>
  
  <div className="h-12 w-px bg-gray-200" />
  
  <div className="px-6">
    <div className="text-sm text-gray-500">No. of Column & Records</div>
    <div>05 Columns, 359862 Records</div>
  </div>
  
  <div className="h-12 w-px bg-gray-200" />
  
  <div className="px-6">
    <div className="text-sm text-gray-500">Data Sensitivity</div>
    <div>Public</div>
  </div>
  
  <div className="h-12 w-px bg-gray-200" />
  
  <div className="px-6">
    <div className="text-sm text-gray-500">PII</div>
    <div>No</div>
  </div>
</div>
        <div className="flex gap-2">
          <button className="w-14 h-14 flex items-center justify-center p-4">
          <img src="/assets/albus-add.png" alt="Ask Albus" className="w-full h-full object-contain" />
        </button>
        <button className="w-14 h-14 rounded-lg flex items-center justify-center p-4">
          <img src="/assets/albus-2.png" alt="Ask Albus" className="w-full h-full object-contain " />
        </button>
        <button className="w-14 h-14  flex items-center justify-center p-4 rounded-lg">
        <img
            src="/assets/albus-resize.png"
            alt="Ask Albus"
            className="w-full h-full object-contain"
        />
        </button>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="mb-8 flex flex-col h-full">
          <h2 className="text-xl font-semibold mb-1">Explore & Discover</h2>
          <p className="text-sm text-gray-500 mb-4">Your data product with our AI Assistance</p>
          <textarea
  className="w-full min-h-36 border rounded-lg p-4"
  placeholder="Type your prompt here"
/>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
          </div>
        </div>

        <div className="flex-grow overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium">Metadata</div>
            <button onClick={() => setShowMetadata(false)} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3">#</th>
                  <th className="text-left p-3">Field Name</th>
                  <th className="text-left p-3">Business Name</th>
                  <th className="text-left p-3">Business Description</th>
                  <th className="text-left p-3">Data Domain</th>
                  <th className="text-left p-3">PII Type</th>
                  <th className="text-left p-3">Sample Values</th>
                </tr>
              </thead>
              <tbody>
                {metadata.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{row.id}</td>
                    <td className="p-3">{row.fieldName}</td>
                    <td className="p-3">{row.businessName}</td>
                    <td className="p-3">{row.businessDescription}</td>
                    <td className="p-3">{row.dataDomain}</td>
                    <td className="p-3">{row.piiType}</td>
                    <td className="p-3">{row.sampleValues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

