import React from 'react'
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";

export const UpperSection = () => {
  return (
    <div className=' flex w-[79%] h-[40px]    items-center justify-between mx-auto  text-sm  sm:w-[97%] md:w-[97%] lg:w-[80%]'>
      <div className=' flex items-center'>
        <p className=' mr-2 text-[#666] sm:hidden md:hidden lg:flex'>Welcome to E-Bazar360</p>
        <div className=' flex items-center justify-evenly   w-[120px]'>
            <div className=' h-[23px]  text-center'>
               <Link to='/login'><p className=' text-[#666] text-[#f4a137]'>Login</p></Link>
            </div>
           <div className=' ml-5 text-[#555]'>
            <p >/</p>
           </div>
           <Link to='/registation' className=' text-[#f4a137] text-[15px] text-sm '>
            <div className=' h-[23px]  text-center ml-[20%]'>
               
                    Registation
                
            </div>
           </Link>
        </div>
        
      </div>

      <div className=' text-[#666] ' >
         <div class="country-select w-[110px]  pr-1 ">
            <select className=' outline-none' id="country" name="country">
              <option value="us">USA</option>
             <option value="bd">🇧angladesh</option>
            </select>
          </div>
      </div>
    </div>
  )
}
export default UpperSection