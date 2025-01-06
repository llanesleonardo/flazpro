import React from 'react'
import logowhite from '../assets/logos/LogotipoWhite.jpg'
import whatsappog from '../assets/icons/whatsappiconog.png'
import mainslide from '../assets/slides/mainslide.png'
import whitehalfcircle from '../assets/slides/helmet.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden'>
      <section className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full px-4 py-24 mx-auto sm:py-[100px] lg:py-[200px] lg:py-[200px]" style={{backgroundImage: `url(${mainslide})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="grid items-center gap-8 lg:grid-cols-1">
          <div className='pr-[80px]'>
          <div className="w-full flex items-center justify-end gap-4 relative">
           <div>
           <h1 className="text-right text-8xl font-extrabold tracking-tight text-white dark:text-white sm:text-6xl md:text-8xl">
            CADA JARDÍN<br/>
            CUENTA UNA HISTORIA
            </h1>
           <p className="text-right mt-4 text-3xl text-white dark:text-gray-300">
            ¿Listo para empezar la tuya?          
              </p>
           </div>

            </div>
          </div>

          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
              <img src={whatsappog} alt="WhatsApp" />
            </a>
        </div>
      </div>
    </section>
    <div>
      <img src={whitehalfcircle} alt='whitehalfcircle' className='absolute bottom-[-280px] right-0 z-0' />
    </div>
    </div>
  )
}
