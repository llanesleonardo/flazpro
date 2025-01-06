import React from 'react';

const Map = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '35.25%', height: 0, overflow: 'hidden' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381511.3522247532!2d-114.57102939327264!3d34.13976188156936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08ebcb4c186b%3A0x423927b17fc1cd71!2sArizona!5e0!3m2!1ses-419!2sus!4v1736102803057!5m2!1ses-419!2sus" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
