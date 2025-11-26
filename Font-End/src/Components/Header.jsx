import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import MiddleLeft from './Navbar/MiddleLeft';
import MiddleCenter from './Navbar/MiddleCenter';
import Navbar from './Navbar/Navbar';
import MiddleRight from './Navbar/MiddleRight';
import UpperSection from './Navbar/UpperSection';

//Header a grid system use korer karone Header air protity div a alada section dhore design kora hoyse
//

export const Header = () => {
    return (
       <>
        <div className=' w-full h-[195px] '>
             
          <div>
            <div className=' bg-[#f5f5f5] w-full  '>
              <UpperSection/>
            </div>
              
              <div className=' flex items-center w-[80%] h-[100px] mx-auto justify-center sm:w-[90%] lg:w-[80%]  '>
                                   
                <MiddleLeft/>
                <MiddleCenter/>
                <MiddleRight/>
              </div>

              <div className=' bg-[#f4a137] '>
                
                <div className= ' lg:w-[81%] mx-auto  h-[50px] sm:w-full md:w-full '>
                <div className=' w-[80%] flex items-center justify-between  h-full mx-auto bg-[#f4a137]   sm:w-full pl-2 pr-2 '>
                  <Navbar/>
                    <div className=' w-full flex items-center gap-1 lg:w-[190px] lg:h-full xl:w-[190px] xl:h-full   sm:w-[60px] md:w-[60px] md:h-full sm:h-full l bg-[#e6870d]  justify-center '>
                      <HiShoppingBag className=' text-white text-xl' />
                      <p className=' font-bold text-white sm:hidden md:hidden lg:flex'>MY CART</p>
                   </div>

                </div>
              </div>
            </div>
  
        </div>
        </div>
       </>
    );
};

export default Header