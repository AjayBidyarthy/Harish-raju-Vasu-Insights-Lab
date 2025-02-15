import React from 'react'
import { Header } from '../components/LandingPage/Header'
import { Sidebar } from '../components/LandingPage/Sidebar'
import { Toolbar } from '../components/LandingPage/Toolbar'
import SearchBar from '../components/DataProducts/SearchBar'
import { ProjectPage } from '../components/Projects/ProjectPage'
import "./LandingPage.scss";

const PageProject = () => {
  return (
    <div className="landing-page">
    <Header />
    <div className="content">
      <Sidebar />
      <div className="main-content">
      <Toolbar/>
      <SearchBar/>
    <ProjectPage/>
      </div>
    </div>
  </div>
  )
}

export default PageProject