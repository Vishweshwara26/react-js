import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
