import React from 'react'

export default function MainMessage() {
  return (
    <div className='relative'>
      <div className="bg-[#e8e8e8] flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center py-10">
          <h1 className="text-4xl font-bold mb-0 text-[#008239]">DISEÑOS ÚNICOS, RESULTADOS EXTRAORDINARIOS</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <button className="bg-custom-green hover:bg-custom-green text-white font-bold py-3 px-6 rounded-full">
          Agendar Ahora!
        </button>
      </div>
    </div>
  )
}
