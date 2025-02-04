import React from 'react'
import { Header } from '../components/LandingPage/Header'
import { Sidebar } from '../components/LandingPage/Sidebar'
import { Toolbar } from '../components/LandingPage/Toolbar'
import SearchBar from '../components/DataProducts/SearchBar'
import { ProjectPage } from '../components/Projects/ProjectPage'


const PageProject = () => {
  return (
    <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#f5f9fc]">
      <Toolbar/>
      <SearchBar/>
    <ProjectPage/>
      </div>
    </div>
  </div>
  )
}

export default PageProject