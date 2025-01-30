import { Header } from "../components/LandingPage/Header"
import { Sidebar } from "../components/LandingPage/Sidebar"
import { DataProducts } from "../components/DataProducts/DataProducts"
import SearchBar from "../components/DataProducts/SearchBar"
import { Toolbar } from "../components/LandingPage/Toolbar"

export function Dataproducts() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#f5f9fc]">
          <Toolbar/>
          <SearchBar/>
         <DataProducts /> 
        </div>
      </div>
    </div>
  )
}

