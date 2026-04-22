import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import "./App.css"
import Navbar from './components/Navbar'
import Technology from './components/Technology'
import Fitness from './components/Fitness'
import Food from './components/Food'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App