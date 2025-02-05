import AlbusInterface from "../components/Albus/AlbusInterface"
import { Header } from "../components/LandingPage/Header"
import { Sidebar } from "../components/LandingPage/Sidebar"
import { Toolbar } from "../components/LandingPage/Toolbar"

export function AskAlbus() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#f5f9fc]">
          <Toolbar/>
          <AlbusInterface/>
        </div>
      </div>
    </div>
  )
}