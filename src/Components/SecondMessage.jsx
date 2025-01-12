import React from 'react';
import featureMessageImage from '../assets/slides/featuremessage.jpg'; // Adjust the path as necessary

export default function SecondMessage() {
  return (
    <div>
      <div 
        className="relative flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${featureMessageImage})` }} // Use template literals
      >
        <div className="w-full mx-auto py-14 px-4 text-center relative z-10">
          <h1 className="md:text-6xl lg:text-6xl xl:text-8xl font-bold mb-6 text-white">Tus espacios <br/> merecen destacar</h1>
          <p className="text-3xl md:text-3xl mb-8 text-white">¡Solicita tu cotización ahora!</p>
        </div>
      </div>
    </div>
  );
}
