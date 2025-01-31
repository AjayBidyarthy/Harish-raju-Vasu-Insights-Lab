import SearchBar from "../components/DataProducts/SearchBar";
import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import { ProjectDetails } from "../components/Projects/ProjectDetails";

export function Projects() {

    return (
      <div className="flex flex-col h-screen">
       <Header/>
        <div className="flex flex-1">
          <Sidebar/>
          <div className="flex-1 flex flex-col bg-[#f5f9fc]">
            <Toolbar/>
            <SearchBar/>
            <ProjectDetails/>
          </div>
        </div>
      </div>
    )
  }