import { Bell, Cog, User, Home, Search, RotateCcw, RotateCw, Trash2 } from "lucide-react"


export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
 
      <header className="bg-[#054CA0] text-white p-4 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">RIGHT DATA</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6" />
          <Cog className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>
    
      <div className="flex flex-1">
        <div className="w-64 border-r bg-white flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2 text-[#0047bb] mb-4">
              <Home className="w-5 h-5" />
              <span className="font-medium">Navigator</span>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-2 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <nav className="p-2">
            <div className="space-y-1">
              <button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-100">Data Products</button>
              <button className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-100">Projects</button>
            </div>
          </nav>
        </div>

    
        <div className="flex-1 flex flex-col bg-[#f5f9fc]">
        <div className="bg-white border-b px-6 py-4 bg-[#EBFAFF]">
  <div className="flex items-center gap-6">
    <button className="text-black-600 hover:text-gray-900 text-lg">File</button>
    <button className="text-black-600 hover:text-gray-900 text-lg">Edit</button>
    <button className="text-black-600 hover:text-gray-900 text-lg">View</button>
    <button className="text-black-600 hover:text-gray-900 text-lg">Database</button>
    <div className="flex items-center gap-3 ml-6">
      <button className="text-gray-600 hover:text-gray-900">
        <RotateCcw className="w-5 h-5" />
      </button>
      <button className="text-gray-600 hover:text-gray-900">
        <RotateCw className="w-5 h-5" />
      </button>
      <button className="text-red-600 hover:text-red-700">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  </div>


          </div>

        
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold">Welcome back, Harish!</h2>
                <p className="text-gray-600">Ready to unlock new insights from your data products?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrxjjCP7dvXK3LYQSRUhug4njsUDnX.png"
                        alt="Knowledge Graph"
                        width={80}
                        height={80}
                        className="mb-4"
                      />
                      <h3 className="font-semibold mb-2">Explore Knowledge Graph</h3>
                      <p className="text-sm text-gray-600">Interconnected entities enabling smart insights.</p>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors">
                      Open
                    </button>
                  </div>
                </div>

           
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-[#00758F] rounded-full flex items-center justify-center mb-4">
                        <span className="text-white text-lg font-bold">MySQL</span>
                      </div>
                      <h3 className="font-semibold mb-2">My SQL Editor</h3>
                      <p className="text-sm text-gray-600">Efficient, versatile, intuitive SQL editor.</p>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors">
                      Open
                    </button>
                  </div>
                </div>

             
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-[#F9E04B] rounded-full flex items-center justify-center mb-4">
                        <span className="text-black text-2xl">jl</span>
                      </div>
                      <h3 className="font-semibold mb-2">JupyterLite Notebook</h3>
                      <p className="text-sm text-gray-600">Lightweight, browser-based Python notebook.</p>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors">
                      Open
                    </button>
                  </div>
                </div>

         
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 border-2 border-gray-200 rounded-full flex items-center justify-center mb-4">
                        <span className="text-gray-600 font-bold">WORKBOOK</span>
                      </div>
                      <h3 className="font-semibold mb-2">View My Insights Workbooks</h3>
                      <p className="text-sm text-gray-600">Personal growth through reflective insights.</p>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors">
                      Open
                    </button>
                  </div>
                </div>

         
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-[#FF4B55] rounded-full flex items-center justify-center mb-4">
                        <Bell className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Manage My Alerts</h3>
                      <p className="text-sm text-gray-600">Set, customize, and track notifications.</p>
                    </div>
                  </div>
                  <div className="px-6 pb-4">
                    <button className="w-full bg-[#0047bb] text-white py-2 px-4 rounded-md hover:bg-[#003d9e] transition-colors">
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

