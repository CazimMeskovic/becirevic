

import React, { useState, useEffect } from 'react';
import sl1 from '../img/apartman2/32.jpg';
import sl2 from '../img/apartman2/62.jpg';
import sl3 from '../img/apartman2/52.jpg';
import sl4 from '../img/apartman2/82.jpg';
import sl6 from '../img/apartman2/92.jpg';

const Destinations1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Inicijalna provjera veličine ekrana

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
/* max-w-[1240px]  */
  return (
    <div className='w-full mx-auto py-16 px-4 text-center'>
      <h1>Superior service</h1>
      <p className='py-4'>Diamond M Apartman</p>
      <div className='grid grid-rows-none cursor-pointer  md:grid-cols-5 py-4 gap-2 md:gap-4'>
     <img
          className='w-full h-full  object-cover col-span-2 md:col-span-3 row-span-2'
          src={sl1}
          alt="/"
          onClick={() => handleImageClick(sl1)}
        />
        <img
          className='w-full h-full object-cover'
          src={sl2}
          alt="/"
          onClick={() => handleImageClick(sl2)}
        />
        <img
          className='w-full h-full object-cover'
          src={sl3}
          alt="/"
          onClick={() => handleImageClick(sl3)}
        />
        <img
          className='w-full h-full object-cover'
          src={sl4}
          alt="/"
          onClick={() => handleImageClick(sl4)}
        />
        <img
          className='w-full h-full object-cover'
          src={sl6}
          alt="/"
          onClick={() => handleImageClick(sl6)}
        />
      </div>
      {selectedImage && (
        <div className="w-full h-full fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute mr-[10%] mt-[25%] top-2 right-2 p-2 text-white bg-red-500 rounded-full"
              onClick={handleCloseOverlay}
            >
              X
            </button>
            <img
              className="w-[60%] h-[60%] object-contain"
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations1;
