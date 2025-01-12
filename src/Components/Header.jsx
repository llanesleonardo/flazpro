import React from 'react'
import facebook from '../assets/icons/faceicon.png'
import instagram from '../assets/icons/instaicon.png'
import whatsapp from '../assets/icons/whatsappicon.png'
import phoneicon from '../assets/icons/phoneicon.png'
import mapicon from '../assets/icons/mapicon.png'
import emailicon from '../assets/icons/emailicon.png'
import logowhite from '../assets/logos/LogotipoWhite-T.png'
import Head from './Head'

export default function Header() {
  const handleCLick = ()=> {
    // Replace 'https://example.com/agendar' with your actual scheduling link
    window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
}
  
  
  return (
    <div className='bg-white fixed w-full z-[99999]'>
      <header className='w-full'>
        <div className='top-bar  flex items-center justify-between px-4 py-1 diagonal-split'>
          <div className='slogan '>
            <p className='py-0 text-white font-bold '>Slogan de la marca</p>
          </div>
          <div className='social'>
          <ul className='flex items-center justify-center px-4 py-1'>
               {/*<li className='px-2 py-2'><a href='#'><img src={facebook} className='w-4/12' /></a></li>
              <li className='px-2 py-2'><a href='#'><img src={instagram} className='w-4/12' /></a></li>
             */}
              <li className='px-2 py-2'><a href='#'><img src={whatsapp} className='w-4/12' /></a></li>
              <li className='px-2 py-2'><a href='#'><Head /></a></li>
            
            </ul>
          </div>
          </div>
        <div className="w-full lg:pb-0 xl:pb-0">      
        <div className='flex items-center justify-around '>
        <div className='md:w-[300px] lg:w-[300px] xl:w-[540px]  diagonal-split-gray py-3'>
      <img src={logowhite} alt="imagen de portada" className=" object-cover pr-[6.5rem]" />
        </div>    
            <div className='flex-grow'>
            <nav className='border-gray-200 border-b-2 lg:pb-2 xl:pb-4'>
            <ul className='flex items-stretch lg:justify-around xl:justify-start pl-2 py-0'>
              <li className='lg:flex-1 px-1 pb-0 lg:max-w-[24%]'>
                <a href="#hero" className="h-full flex items-center">
                  <div className='flex items-center w-full'>
                    <img src={phoneicon} className='w-8 h-8 flex-shrink-0' />
                    <div className='pl-2 text-xs flex-grow'>
                        <p>Llamanos</p>
                        <p>+1 (520) 289-7508</p>
                        </div>
                      </div>
                      </a>
                      </li>
                      <li className='lg:flex-1 px-1 pb-0 lg:max-w-[23%]'>
                <a href="#hero" className="h-full flex items-center">
                  <div className='flex items-center w-full'>
                    <img src={phoneicon} className='w-8 h-8 flex-shrink-0' />
                    <div className='pl-2 text-xs flex-grow'>
                        <p>Visitanos</p>
                        <p>Tucson area , AZ.</p>
                        </div>
                      </div>
                      </a>
                      </li>
                      <li className='lg:flex-1 px-1 pb-0 lg:max-w-34%]'>
                <a href="#hero" className="h-full flex items-center">
                  <div className='flex items-center w-full'>
                    <img src={phoneicon} className='w-8 h-8 flex-shrink-0' />
                    <div className='pl-2 text-xs flex-grow'>
                        <p>Contactanos</p>
                        <p>arizonaprolandcaping@gmail.com
                        </p>
                        </div>
                      </div>
                      </a>
                      </li>         
                      <li className='lg:flex-1 px-1 pb-0 lg:max-w-[21%]'>
                <a href="#hero" className="h-full flex items-center">
                  <div className='flex items-center w-full'>
                    <div className='pl-2 text-xs flex-grow'>
                    <div className=" ">
                        <button onClick={handleCLick} className="bg-custom-green hover:bg-custom-green text-white md:text-sx lg:text-sm xl:text-base font-bold md:py-2 md:px-2 lg:py-2 lg:px-3 xl:py-3 xl:px-12 rounded-full">
                          Agendar Ahora!
                        </button>
                      </div>
                        </div>
                      </div>
                      </a>
                      </li>               
                    </ul>
                </nav>
                <nav className='lg:px-4  xl:px-4 lg:pt-1 xl:pt-3'>
                <ul className='flex items-center justify-start font-bold'>
                  <li className='px-6 py-0'><a href="#inicio">Inicio</a></li>
                  <li className='px-6 py-0'><a href="#nosotros">Nosotros</a></li>
                  <li className='px-6 py-0'><a href="#servicios">Servicios</a></li>
                  <li className='px-6 py-0'><a href="#galeria">Galeria</a></li>
                  <li className='px-6 py-0'><a href="#contact">Contacto</a></li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
      </header>
    </div>
  )
}
