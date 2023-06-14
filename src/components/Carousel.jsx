import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    /*  url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80', */
    url:'https://media.gettyimages.com/id/1203295403/photo/strbacki-buk-waterfall-in-una-river.jpg?s=2048x2048&w=gi&k=20&c=IxwJetG1TH8Mx5gG9XxJzDk682xZa5JeaHrHjx2a1lg=',
    
   },
  {
  /*   url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80', */
    url: 'https://media.gettyimages.com/id/1178959090/photo/aerial-view-of-river-una-and-bihac-city-bosanska-krajina-bosnia-and-herzegovina.jpg?s=2048x2048&w=gi&k=20&c=vGqMEfOk4N3QYVM1YIfNJ7nluk8nC3Ec-OJzHzksCVg=',
  },
 
  {
    /*   url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', */
    url:'https://media.gettyimages.com/id/999446110/photo/una-river.jpg?s=2048x2048&w=gi&k=20&c=dRG0O4Se8Jj-PhSbIZEQDJNXQ_y-Xr3rzoNDTYtxwBg=',
  },
  {
  /*   url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', */
    url: 'https://media.gettyimages.com/id/991089884/photo/una-river-kostelsku-buk-waterfall.jpg?s=2048x2048&w=gi&k=20&c=trw9Hm7dYNbpas50T4OPMFRwMCpZHj7C9lVYooiyxbQ=',
  },
  
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div name='carousel'>
       <h1 className='text-teal-300 text-center bg-sky-500 '>Explore the beautiful UNA</h1> 
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 '>
   {/*  <h1 className='text-teal-300 text-center bg-sky-500 '>Explore the beautiful UNA</h1> */}
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Carousel;
