import { ProductCard } from "./ProductCard";
import { Bell} from "lucide-react"

export const MainContent = () => {
    const productData = [
      {
        icon: (
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrxjjCP7dvXK3LYQSRUhug4njsUDnX.png"
            alt="Knowledge Graph"
            width={80}
            height={80}
            className="mb-4"
          />
        ),
        title: "Explore Knowledge Graph",
        description: "Interconnected entities enabling smart insights.",
        onOpen: () => console.log("Open Knowledge Graph")
      },
      {
        icon: (
          <div className="w-20 h-20 bg-[#00758F] rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg font-bold">MySQL</span>
          </div>
        ),
        title: "My SQL Editor",
        description: "Efficient, versatile, intuitive SQL editor.",
        onOpen: () => console.log("Open SQL Editor")
      },
      {
        icon: (
          <div className="w-20 h-20 bg-[#F9E04B] rounded-full flex items-center justify-center mb-4">
            <span className="text-black text-2xl">jl</span>
          </div>
        ),
        title: "JupyterLite Notebook",
        description: "Lightweight, browser-based Python notebook.",
        onOpen: () => console.log("Open JupyterLite")
      },
      {
        icon: (
          <div className="w-20 h-20 border-2 border-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-600 font-bold">WORKBOOK</span>
          </div>
        ),
        title: "View My Insights Workbooks",
        description: "Personal growth through reflective insights.",
        onOpen: () => console.log("Open Workbooks")
      },
      {
        icon: (
          <div className="w-20 h-20 bg-[#FF4B55] rounded-full flex items-center justify-center mb-4">
            <Bell className="w-10 h-10 text-white" />
          </div>
        ),
        title: "Manage My Alerts",
        description: "Set, customize, and track notifications.",
        onOpen: () => console.log("Open Alerts")
      }
    ];
  
    return (
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Welcome back, Harish!</h2>
            <p className="text-gray-600">Ready to unlock new insights from your data products?</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((product, index) => (
              <ProductCard 
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                onOpen={product.onOpen}
              />
            ))}
          </div>
        </div>
      </main>
    );
  };