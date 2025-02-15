import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import SearchBar from "../components/DataProducts/SearchBar";
import { InsightsPage } from "../components/Insights/InsightsPage";
import "./LandingPage.scss";

 export function Insights() {
  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
        <Toolbar/>
        <SearchBar/>
        <InsightsPage/>
        </div>
      </div>
    </div>
  );
}