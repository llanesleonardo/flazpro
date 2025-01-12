import React from 'react';

const Map = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '35.25%', height: 0, overflow: 'hidden' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216179.4223805328!2d-111.04731150578037!3d32.155601697171655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d665410b2ced2b%3A0x73c32d384d16c715!2sTucson%2C%20Arizona!5e0!3m2!1ses-419!2sus!4v1736717531341!5m2!1ses-419!2sus" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
