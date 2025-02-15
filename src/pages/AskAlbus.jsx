import AlbusInterface from "../components/Albus/AlbusInterface"
import { Header } from "../components/LandingPage/Header"
import { Sidebar } from "../components/LandingPage/Sidebar"
import { Toolbar } from "../components/LandingPage/Toolbar"
import "./LandingPage.scss"

export function AskAlbus() {

  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Toolbar/>
          <AlbusInterface/>
        </div>
      </div>
    </div>
  )
}