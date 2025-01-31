import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage';
import { Dataproducts } from './pages/Dataproducts';
import { Projects } from './pages/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Dataproducts />} />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;