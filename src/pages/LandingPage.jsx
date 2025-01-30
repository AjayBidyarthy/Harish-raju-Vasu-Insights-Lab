import { Header } from "../components/LandingPage/Header";
import { Sidebar } from "../components/LandingPage/Sidebar";
import { Toolbar } from "../components/LandingPage/Toolbar";
import { MainContent } from "../components/LandingPage/MainContent";

 export function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#F8F8F8]">
          <Toolbar />
          <MainContent/>
        </div>
      </div>
    </div>
  );
}