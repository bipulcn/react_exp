import React from 'react';
import './App.css';
import './css/style.min.css';
import Nav from './layout/pub/Nav';
import Footer from './layout/pub/Footer';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
