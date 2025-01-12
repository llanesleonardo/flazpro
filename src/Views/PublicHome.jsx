import React from 'react'
import Header from '../Components/Header.jsx'
import Hero from '../Components/Hero.jsx'
import MainMessage from '../Components/MainMessage.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import Services from '../Components/Services.jsx'
import SecondMessage from '../Components/SecondMessage.jsx'
import Gallery from '../Components/Gallery.jsx'
import Map from '../Components/Map.jsx'
import ContactForm from '../Components/ContactForm.jsx'
import Footer from '../Components/Footer.jsx'
import Reviews from '../Components/Reviews.jsx'

export default function PublicHome() {
  return (
    <div className='min-h-screen flex flex-col'>              
      <Header />
      <main className='flex-grow'>
        <Hero />
        <MainMessage />
        <AboutUs />
        <Services />
        <SecondMessage />
        <Gallery />
        <Map />
        <ContactForm />
        <Footer />
      </main>
      
    </div>
  )
}
