
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
import {
  FaFacebook, FaBooking, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className='absolute flex w-full cursor-pointer from-sky-600 justify-between items-center h-20 px-4  z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
         <span className='text-teal-200'>Apartman's Becirevic</span> 
        </h1>
      </div>
      <ul className='hidden md:flex'>
        <li>
          <Link to='hero' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='destinations' smooth={true} duration={500}>
            Destinations
          </Link>
        </li>
        <li>
          <Link to='search' smooth={true} duration={500}>
            Travel
          </Link>
        </li>
        <li>
          <Link to='Hero' smooth={true} duration={500}>
            View
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>

      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>


      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? (
          <AiOutlineClose className='text-black' size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>


      <div
        onClick={handleNav}
        className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}
      >
        <ul>
          <h1 className='text-green-400'>UNA River</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/dalija_apartment_bihac/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.booking.com/hotel/ba/dalija-apartment-bihac1.pl.html'
            >
              Booking <button size={30} ></button>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://myaccount.google.com/?utm_source=sign_in'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/*    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Profile}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

