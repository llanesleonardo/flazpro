import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MainMessage from './components/MainMessage.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import SecondMessage from './components/SecondMessage.jsx'
import Gallery from './components/Gallery.jsx'
import Map from './components/Map.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import Reviews from './Components/Reviews.jsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <Hero />
        <MainMessage />
        <AboutUs />
        <Services />
        <Reviews />
        <SecondMessage />
        <Gallery />
        <Map />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
