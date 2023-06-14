import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Welcome to Dalija and Diamond M Apartments, your ultimate destination for luxury and comfort. </h2>
          {/*    <h2>Welcome to Dalija and Diamond M Apartments, your ultimate destination for luxury and comfort. </h2> */}
          <p className='py-4'>
            Step into the Dalija Apartments and experience a world of elegance. Each spacious unit is tastefully furnished, boasting contemporary amenities and breathtaking views of the city skyline. Whether you're a leisure traveler or a business professional, Dalija Apartments cater to all your needs.

            For those seeking a touch of opulence, the Diamond M Apartments are a true gem. Indulge in the finest details of craftsmanship and exquisite interior design. These lavish apartments feature state-of-the-art facilities, including a private concierge service and access to exclusive amenities like a rooftop pool and spa.

            Both Dalija and Diamond M Apartments provide a seamless blend of comfort and convenience. Enjoy fully equipped kitchens, luxurious bathrooms, and plush living spaces that make you feel right at home. Whether you're staying for a short-term visit or an extended stay, our dedicated staff ensures your every requirement is met.

            Located in a prime location, Dalija and Diamond M Apartments offer easy access to the city's finest attractions, shopping districts, and entertainment venues. Immerse yourself in the cultural richness of the city, explore renowned landmarks, or simply unwind in the serenity of your luxurious apartment.

            At Dalija and Diamond M Apartments, we understand the importance of personalized service. Our attentive staff is available around the clock to assist you with any requests, ensuring your stay is nothing short of extraordinary.

            Indulge in the epitome of luxury and sophistication at Dalija and Diamond M Apartments. Book your stay with us today and embark on an unforgettable journey of elegance and comfort.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border text-center'>
          <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
