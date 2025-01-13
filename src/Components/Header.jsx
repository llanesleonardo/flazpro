import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx"
import facebook from '../assets/icons/faceicon.png'
import instagram from '../assets/icons/instaicon.png'
import whatsapp from '../assets/icons/whatsappicon.png'
import phoneicon from '../assets/icons/phoneicon.png'
import mapicon from '../assets/icons/mapicon.png'
import emailicon from '../assets/icons/emailicon.png'
import logowhite from '../assets/logos/LogotipoWhite-T.png'
import Head from './Head'
import MobileMenu from './MobileMenu'

export default function Header() {
  
          const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);
          console.log('Current language:', langCode); // Debug: Log current language
          console.log(t('UNIQUE DESIGNS, EXTRAORDINARY RESULTS'));

  const handleClick = () => {
    window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  
  const menuItems = [
    { icon: phoneicon, title: t('Call Us'), content: '+1 (520) 289-7508' },
    { icon: mapicon, title: t('Visit Us'), content: 'Tucson area , AZ.' },
    { icon: emailicon, title: t('Contact Us'), content: 'arizonaprolandcaping@gmail.com' },
  ];

  const navItems = [
    { href: "#inicio", text: t('Home') },
    { href: "#nosotros", text: t('About Us') },
    { href: "#servicios", text: t('Services') },
    { href: "#galeria", text: t('Gallery') },
    { href: "#contact", text: t('Contact')},
  ];

  const socialIcons = [
    { icon: whatsapp, href: '#' },
    { icon: instagram, href: '#' },
    { icon: facebook, href: '#' }
  ];

  return (
    <div className='bg-white fixed w-full z-[99999]'>
      <header className='w-full'>
        <div className='top-bar flex items-center justify-between px-4 py-1 diagonal-split'>
          <div className='slogan'>
            <p className='py-0 text-white font-bold'>Slogan de la marca</p>
          </div>
          <div className='social'>
            <ul className='flex items-center justify-center px-4 py-1'>
              {socialIcons.map((social, index) => (
                <li key={index} className='px-2 py-2'>
                  <a href={social.href}><img src={social.icon} className='w-4/12' alt="Social Icon" /></a>
                </li>
              ))}
              <li className='px-2 py-2'><a href='#'><Head /></a></li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:pb-0 xl:pb-0">      
          <div className='flex items-center justify-around'>
          <div className=' md:hidden lg:block xl:block lg:w-[300px] xl:w-[540px] diagonal-split-gray py-3'>
  <img src={logowhite} alt="imagen de portada" className="object-cover pr-[6.5rem]" />
</div>   
            <div className='flex-grow'>
              <nav className='border-gray-200 border-b-2 lg:pb-2 xl:pb-4 hidden lg:block'>
                <ul className='flex items-stretch lg:justify-around xl:justify-start pl-2 py-0'>
                  {menuItems.map((item, index) => (
                    <li key={index} className='lg:flex-1 px-1 pb-0 lg:max-w-[24%]'>
                      <a href="#hero" className="h-full flex items-center">
                        <div className='flex items-center w-full'>
                          <img src={item.icon} className='w-8 h-8 flex-shrink-0' alt={item.title} />
                          <div className='pl-2 text-xs flex-grow'>
                            <p>{item.title}</p>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                  <li className='lg:flex-1 px-1 pb-0 lg:max-w-[21%]'>
                    <a href="#hero" className="h-full flex items-center">
                      <div className='flex items-center w-full'>
                        <div className='pl-2 text-xs flex-grow'>
                          <div className="">
                            <button onClick={handleClick} className="bg-custom-green hover:bg-custom-green text-white md:text-sx lg:text-sm xl:text-base font-bold md:py-2 md:px-2 lg:py-2 lg:px-3 xl:py-3 xl:px-12 rounded-full">
                              {t('Book Now!')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className='lg:px-4 xl:px-4 lg:pt-1 xl:pt-3 hidden lg:block'>
                <ul className='flex items-center justify-start font-bold'>
                  {navItems.map((item, index) => (
                    <li key={index} className='px-6 py-0'><a href={item.href}>{item.text}</a></li>
                  ))}
                </ul>
              </nav>
              <MobileMenu 
                logoSrc={logowhite} 
                menuItems={menuItems}
                navItems={navItems}
                socialIcons={socialIcons}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
