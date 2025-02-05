import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage';
import { Dataproducts } from './pages/Dataproducts';
import { AskAlbus } from './pages/AskAlbus';
import { Projects } from './pages/Projects';
import PageProject from './pages/PageProject';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Dataproducts />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<PageProject />} />
        <Route path="/albus" element={<AskAlbus/>} />
      </Routes>
    </Router>
  );
}

export default App;