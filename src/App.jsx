import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Price from './Components/Price'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
Footer

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6" >
        <Hero />
        <Features />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>


    </>
  )
}

export default App
