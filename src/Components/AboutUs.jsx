import React from 'react'
import cars from '../assets/slides/cars2.png'

export default function AboutUs() {
  return (
    <div id='nosotros' className='bg-white'>
       <section className="w-full py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={cars}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#008239] dark:#008239 leading-tight">
          ¿Quiénes Somos?
          </h2>
          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.
          </p>
          
        </div>
      </div>
    </section>
    </div>
  )
}
