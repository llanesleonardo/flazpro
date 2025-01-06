import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MainMessage from './components/MainMessage'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ValueProposition from './components/ValueProposition'
import SecondMessage from './components/SecondMessage'
import Gallery from './components/Gallery'
import Map from './components/Map'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Reviews from './Components/Reviews'
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
