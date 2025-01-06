import React from 'react'
import facebook from '../assets/icons/faceicon.png'
import instagram from '../assets/icons/instaicon.png'
import whatsapp from '../assets/icons/whatsappicon.png'
import phoneicon from '../assets/icons/phoneicon.png'
import mapicon from '../assets/icons/mapicon.png'
import emailicon from '../assets/icons/emailicon.png'
import logowhite from '../assets/logos/LogotipoWhite-T.png'

export default function Header() {
  return (
    <div className='bg-white'>
      <header className='w-full'>
        <div className='top-bar bg-sky-700 flex items-center justify-between px-4 py-1 diagonal-split'>
          <div className='slogan '>
            <p className='py-0 text-white font-bold '>Slogan de la marca</p>
          </div>
          <div className='social'>
          <ul className='flex items-center justify-center px-4 py-1'>
              <li className='px-2 py-2'><a href='#'><img src={facebook} className='w-4/12' /></a></li>
              <li className='px-2 py-2'><a href='#'><img src={instagram} className='w-4/12' /></a></li>
              <li className='px-2 py-2'><a href='#'><img src={whatsapp} className='w-4/12' /></a></li>
            </ul>
          </div>
          </div>
        <div className="w-full ">      
        <div className='flex items-center justify-around '>
        <div className='w-[540px]  diagonal-split-gray'>
      <img src={logowhite} alt="imagen de portada" className=" object-cover pr-[6.5rem]" />
        </div>    
            <div className='flex-grow'>
                <nav className='border-gray-200 border-b-2 pb-4'>
                  <ul className='flex items-center justify-start px-4 py-0'>
                    <li className='px-6 pb-0'>
                      <a href="#hero">
                      <div className='flex items-center justify-around'>
                        <img src={phoneicon} className='w-4/12' />
                        <div className='pl-2'>
                        <p>Llamanos</p>
                        <p>1234567890</p>
                        </div>
                      </div>
                      </a>
                      </li>
                      <li className='px-6 py-0'><a href="#hero">
                      <div className='flex items-center justify-around'>
                        <img src={mapicon} className='w-4/12' />
                        <div className='pl-2'>
                        <p>Visitanos</p>
                        <p>Tucson,AZ.</p>
                        </div>
                      </div>
                      </a>
                      </li>
                      <li className='px-6 py-0'><a href="#hero">
                      <div className='flex items-center justify-around'>
                        <img src={emailicon} className='w-4/12' />
                        <div className='pl-2'>
                        <p>Contactanos</p>
                        <p>email@email.com.</p>
                        </div>
                      </div>
                      </a>
                      </li>         
                      <li className='px-6 py-0'>
                      <div className='flex items-center justify-around'>
                      <a className='bg-custom-blue py-3 px-4 rounded-full text-white' href="">
                      Contactanos
                      </a>
                      </div>
                      </li>               
                    </ul>
                </nav>
                <nav className='px-4 pt-3'>
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
