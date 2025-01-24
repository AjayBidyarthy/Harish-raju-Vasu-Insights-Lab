import { Header } from "../components/LandingPage/Header"
import { Sidebar } from "../components/LandingPage/Sidebar"
import { DataProductsToolbar } from "../components/DataProducts/DataProductsToolbar"
import { DataProducts } from "../components/DataProducts/DataProducts"

export function Dataproducts() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#f5f9fc]">
         <DataProductsToolbar />
         <DataProducts /> 
        </div>
      </div>
    </div>
  )
}

