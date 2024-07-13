import React from 'react';
import './App.css';
// import Nav from './layout/pub/Nav';
import Navt from './layout/pub/Navtwo';
import Footer from './layout/pub/Footer';
import Home from './pages/home';
import Second from './pages/second';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navt />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sec" element={<Second />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
