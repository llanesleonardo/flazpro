import React from 'react'
import cars from '../assets/slides/cars2.png'

export default function AboutUs() {
  return (
    <div className='bg-white'>
       <section className="w-full py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={cars}
            alt="Section Description" 
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008239] dark:#008239 leading-tight">
          ¿Quiénes Somos?
          </h2>
          
          <p className="text-xl text-black dark:text-black mb-6 text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
          
        </div>
      </div>
    </section>
    </div>
  )
}
