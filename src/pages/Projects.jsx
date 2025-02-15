import SearchBar from "../components/DataProducts/SearchBar";
import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import { ProjectDetails } from "../components/Projects/ProjectDetails";
import "./LandingPage.scss"

export function Projects() {

    return (
      <div className="landing-page">
       <Header/>
        <div className="content">
          <Sidebar/>
          <div className="main-content">
            <Toolbar/>
            <SearchBar/>
            <ProjectDetails/>
          </div>
        </div>
      </div>
    )
  }