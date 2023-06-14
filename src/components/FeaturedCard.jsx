import React from "react"
/* import { featured } from "../../data/Data" */
/* import slik from "../img/1.jpg"
import slik2 from "../img/apartman2/112.jpg" */


import { featured } from "../Data"


const FeaturedCard = () => {
  return (
    <>
      <div className='content bg-sky-500 grid md:grid-cols-2 gap-2 grid-cols-1 md:h-[100vh] mtop'>
        {featured.map((items, index) => (

          < div className='box' key={index} >

            <img className="rounded-lg hover:bg-gray-900/30  ml-[5%] mt-[7%] w-[90%] h-[70%]" src={items.cover} alt='' />

            <div className="flex">
              <h4 className=" flex justify-around hover:bg-sky-700 bg-sky-600 rounded-md sm:ml-[8%] ml-[12%]  mt-[3%]  w-[35%] md:p-1 " >{items.name}</h4>

              <h4 className="flex justify-around hover:bg-sky-700  rounded-md  bg-sky-600 sm:ml-[9%] ml-[12%] mt-[3%] w-[35%]  md:p-1 ">{items.total}</h4>
            </div>
          </div>
        ))}
      </div >


    </>
  )
}

export default FeaturedCard

