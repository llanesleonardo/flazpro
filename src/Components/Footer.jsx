import React from 'react';
import logoblue from '../assets/logos/logoblue.png';
import phonewhite from '../assets/icons/phoneiconwhite.png'
import mapiconwhite from '../assets/icons/mapiconwhite.png'
import emailiconwhite from '../assets/icons/emailiconwhite.png'
import facewhite from '../assets/icons/faceicon.png'
import instacon from '../assets/icons/instaicon.png'
import whastappicon from '../assets/icons/whatsappicon.png'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1058a5] text-white pt-12 ">
      <div className="w-full mx-auto px-4 flex justify-around items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-6 ">
          <img 
            src={logoblue} // Replace with your logo path
            alt="Company Logo" 
            className="h-[150px]" // Adjust height as needed
          />
        </div>

        {/* List of 3 Elements */}
        <div className="flex flex-col items-start mb-6 space-y-2">
          <div className='flex items-center space-x-2'>
            <img src={phonewhite} alt="phone icon" className="h-8 w-8" />
            <p className="text-white">+1 (520) 289-7508</p>
          </div>
          <div className='flex items-center space-x-2'>
            <img src={mapiconwhite} alt="phone icon" className="h-8 w-8" />
            <p className="text-white">Tucson areas , AZ.</p>
          </div>
          <div className='flex items-center space-x-2'>
            <img src={emailiconwhite} alt="phone icon" className="h-8 w-8" />
            <p className="text-white">arizonaprolandcaping@gmail.com</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex  gap-4 space-x-4 mb-6">
      {/*<img src={facewhite} className='h-[50px]' />
      <img src={instacon} className='h-[50px]'/>*/}
      <img src={whastappicon} className='h-[30px]'/>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center bg-custom-green">
        <p className="text-white font-bold text-2xl">
          Todos los derechos reservados {new Date().getFullYear()} © FL | ARIZONA PRO LANDSCAPING, LLC. 
        </p>
      </div>
    </footer>
  );
}
