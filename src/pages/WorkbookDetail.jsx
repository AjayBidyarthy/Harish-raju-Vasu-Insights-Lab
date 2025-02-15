import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import SearchBar from "../components/DataProducts/SearchBar";
import "./LandingPage.scss";


 export function WorkbookDetail() {
  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
        <Toolbar/>
        <SearchBar/>
    
        </div>
      </div>
    </div>
  );
}