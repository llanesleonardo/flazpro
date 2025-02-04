import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../contexts/SystemContext.jsx"
import g1 from '../assets/gallery/fl1.jpg'
import g2 from '../assets/gallery/fl2.jpg'
import g3 from '../assets/gallery/fl3.jpg'
import g4 from '../assets/gallery/fl4.jpg'
import g5 from '../assets/gallery/fl5.jpg'
import g6 from '../assets/gallery/fl7.jpg'

const GridItem = ({ imageUrl, title }) => (
  <div 
    className="relative h-64 rounded-lg overflow-hidden"
    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute bg-black bg-opacity-10 flex items-center justify-center rounded-none">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  </div>
);

export default function ImageGrid() {

          const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);

  const items = [
    { id: 1, imageUrl: g1, title: '' },
    { id: 2, imageUrl: g2, title: '' },
    { id: 3, imageUrl: g3, title: '' },
    { id: 4, imageUrl: g4, title: '' },
    { id: 5, imageUrl: g5, title: '' },
    { id: 6, imageUrl: g6, title: '' },
  ];

  return (
    <div id='galeria' className=" px-8 py-16 bg-white">
      <div className="container mx-auto">
      <h1 className="text-[#1058a5] text-4xl md:text-5xl font-bold text-center mb-12">
            {t('Gallery')}
          </h1>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <GridItem key={item.id} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
      </div>
    </div>
  );
}
