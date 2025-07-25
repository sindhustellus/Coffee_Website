import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Testimonial from './pages/Testimonial'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
    </>
  )
}

export default App
