import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx"
import logowhite from '../assets/logos/LogotipoWhite.jpg'
import whatsappog from '../assets/icons/whatsappiconog.png'
import mainslide from '../assets/slides/mainslide.png'
import whitehalfcircle from '../assets/slides/helmet.png'

export default function Hero() {
  
        const { t, i18n } = useTranslation(undefined, { useSuspense: false });
        const { langCode } = useContext(SystemContext);
       return (
    <div id='inicio' className='relative overflow-hidden'>
      <section className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full px-4 mx-auto sm:py-[180px] lg:py-[300px] lx:py-[300px]" style={{backgroundImage: `url(${mainslide})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="grid items-center gap-8 lg:grid-cols-1">
          <div className='pr-[80px]'>
          <div className="w-full flex items-center justify-end gap-4 relative">
           <div>
           <h1 className="text-right md:text-[3rem] lg:text-6xl xl:text-8xl font-extrabold tracking-tight text-white dark:text-white sm:text-6xl md:text-8xl">
            {t('EVERY GARDEN')}<br/>
            {t('TELLS A STORY')}
            </h1>
           <p className="text-right mt-4 text-3xl text-white dark:text-gray-300">
            {t('Ready to start yours?')}         
              </p>
           </div>

            </div>
          </div>

          <a href="https://wa.me/15202897508" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
              <img src={whatsappog} alt="WhatsApp" />
            </a>
        </div>
      </div>
    </section>
    <div>
      <img src={whitehalfcircle} alt='whitehalfcircle' className='absolute md:bottom-[-100px] xl:bottom-[-250px] lg:bottom-[-43px] right-0 z-0' />
    </div>
    </div>
  )
}
