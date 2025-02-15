import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import { MainContent } from "../components/LandingPage/MainContent";
import "./LandingPage.scss";

export function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Toolbar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
