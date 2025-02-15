import { Header } from "../components/LandingPage/Header"
import { Sidebar } from "../components/LandingPage/Sidebar"
import { DataProducts } from "../components/DataProducts/DataProducts"
import SearchBar from "../components/DataProducts/SearchBar"
import { Toolbar } from "../components/LandingPage/Toolbar"
import "./LandingPage.scss"

export function Dataproducts() {

  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Toolbar/>
          <SearchBar/>
         <DataProducts /> 
        </div>
      </div>
    </div>
  )
}

