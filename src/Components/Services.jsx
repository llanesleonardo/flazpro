import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import arrowleft from '../assets/icons/arrowiconleft.png'
import arrowright from '../assets/icons/arrowiconright.png'
import yardmaintenance from '../assets/services/yard-maintenance.png'
import pavers from '../assets/services/pavers.png'
import grass from '../assets/services/Grass.png'
import irrigationsystem from '../assets/services/IrrigationSystems.png'
import plantingpruning from '../assets/services/Planting&Pruning.png'
import palmtrees from '../assets/services/PalmTrees.png'
import gravel from '../assets/services/Gravel.png'
import graylines from '../assets/slides/gray-lines.png'

const CarouselItem = ({ color, children }) => (
  <div style={{ 
    backgroundColor: 'transparent', 
    height: 'auto', 
    width:'auto',
    display: 'block', 
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'black',
    fontSize: '16px',
    padding: '16px',
    position: 'relative', // Ensure the container is positioned
    zIndex: 9999, // Ensure the container is above the background
  }}>
    {children}
  </div>
);

import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function Services() {
  
  const isLargeScreen = useMediaQuery('(min-width: 1025px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px)');
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    if (isLargeScreen) {
      setItemsPerSlide(3);
    } else if (isMediumScreen) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(1);
    }
  }, [isLargeScreen, isMediumScreen]);
  
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide,
    withLoop: true,
    gutter: 10,
    startEndGutter: 10,
items: [
  {
    id: 'item-1',
    renderItem:
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={yardmaintenance} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Yard Maintenance" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Yard Maintenance</h3>
        <p className='text-justify'>
        Yard maintenance involves regular care, including mowing, pruning, weeding, and fertilizing. This ensures the health and aesthetics of outdoor spaces, keeping them functional and attractive across seasons for both residential and commercial properties.
        </p>

      </div>
    </CarouselItem>
  },
  {
    id: 'item-2',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={pavers} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Pavers" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Pavers</h3>
        <p className='text-justify'>
        Paver maintenance includes cleaning, sealing, and repairing paved surfaces to preserve their structure and appearance. Regular upkeep ensures pavers remain attractive, durable, and in excellent condition across all seasons.
        </p>

      </div>
    </CarouselItem>
  },
  {
    id: 'item-3',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={grass} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Grass Maintenance" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Grass & Artificial Grass</h3>
        <p className='text-justify'>
        Grass maintenance includes mowing, watering, and fertilizing, while artificial grass requires debris removal and occasional rinsing. Both options ensure a beautiful lawn, with artificial grass offering low-maintenance durability.
        </p>

      </div>
    </CarouselItem>
  },
  {
    id: 'item-4',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={irrigationsystem} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Irrigation Systems" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Irrigation Systems</h3>
        <p className='text-justify'>
        Irrigation system maintenance ensures water efficiency through leak checks, cleaning, and adjustments. Regular care promotes plant health, prevents costly repairs, and extends the system's lifespan.
        </p>
        <br/>

      </div>
    </CarouselItem>
  },
  {
    id: 'item-5',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={plantingpruning} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Planting & Pruning" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Planting & Pruning</h3>
        <p className='text-justify'>
        Planting ensures proper growth with soil preparation and spacing, while pruning removes unnecessary parts to enhance plant health and aesthetics. Both are essential for long-term vitality.
        </p>
        <br/>

      </div>
    </CarouselItem>
  },
  {
    id: 'item-6',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
      <div className='pt-24 relative text-center mx-auto'>
        <img src={palmtrees} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Palm Trees" />
      </div>
      <div className='bg-white pt-20 pb-6 px-6'>
        <h3 className='text-center text-[#1058a5] font-bold pb-6'>Palm Trees</h3>
        <p className='text-justify'>
        Palm tree care includes proper planting, selective pruning, and pest control. Regular maintenance ensures their iconic look, resilience, and long-lasting health.
        </p>
        <br/>
        <br/>
      </div>
    </CarouselItem>
  },
  {
    id: 'item-7',
    renderItem: 
    <CarouselItem color="#fff" className="relative">
    <div className='pt-24 relative text-center mx-auto' >
      <img src={gravel} className='absolute bg-transparent bottom-[-90px] left-[30%]' alt="Gravel" />
    </div>
    <div className='bg-white pt-20 pb-6 px-6 '>
      <h3 className='text-center text-[#1058a5] font-bold pb-6'>Gravel</h3>
      <p className='text-justify'>
      Gravel maintenance involves leveling, replenishing, and removing debris to keep surfaces functional and visually appealing. Proper care ensures durability and enhances outdoor aesthetics.
      </p>
    <br/>
     {/* <div className='text-center pt-10'>
        <a>
          <button className='bg-[#1058a5] text-white py-2 px-6 rounded-full font-bold'>LEER MAS</button>
        </a>
      </div>*/}
    </div>
    </CarouselItem>
  }
]
  });

  
  return (
<div id='servicios' className='bg-gray-100' >
      <section className="w-full md:py-12 xl:py-16 lg:py-16 xl:bg-cover lg:bg-cover bg-center" style={{ backgroundImage: `url(${graylines})` }}>
        <div className="container mx-auto px-12">
          <h1 className="text-[#1058a5] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12">
            ¿Qué Ofrecemos?
          </h1>
          <div className="relative">
            <button 
              onClick={slideToPrevItem}
              className="absolute md:left-[-70px] lg:left-[-50px] z-[9990] xl:left-[-100px] top-1/2 transform -translate-y-1/2   rounded-full  "
            >
             <img className='mx-auto lg:w-2/3 xl:w-auto' src={arrowleft}/>
            </button>
            <div className="overflow-hidden">
              {carouselFragment}
            </div>
            <button 
              onClick={slideToNextItem}
              className=" absolute md:right-[-70px] lg:right-[-50px] z-[9990] xl:right-[-100px] top-1/2 transform -translate-y-1/2   rounded-full  "
            >
             <img className='mx-auto lg:w-2/3 xl:w-auto' src={arrowright}/>
             </button>
          </div>
        </div>
      </section>
    </div>
  )
}
