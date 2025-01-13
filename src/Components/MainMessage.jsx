
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx"

export default function MainMessage() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
      console.log('Current language:', langCode); // Debug: Log current language
      console.log(t('UNIQUE DESIGNS, EXTRAORDINARY RESULTS'));

  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='relative'>
      <div className="bg-[#e8e8e8] flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center py-10">
          <h1 className="text-4xl font-bold mb-0 text-[#008239]">{t('UNIQUE DESIGNS, EXTRAORDINARY RESULTS')}</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <button onClick={handleCLick} className="bg-custom-green hover:bg-custom-green text-white md:text-xl lg:text-2xl xl:text-3xl  font-bold md:py-4 md:px-12 lg:py-4 lg:px-12 xl:py-6 xl:px-16 rounded-full">

          {t('Book Now!')}
        </button>
      </div>
    </div>
  )
}
