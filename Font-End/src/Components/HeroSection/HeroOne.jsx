import React from 'react'
import { GiAmpleDress } from "react-icons/gi";
import { BsFillGiftFill } from "react-icons/bs";
import { BsFillLampFill } from "react-icons/bs";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { GiSonicShoes } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { TbToolsKitchen } from "react-icons/tb";
import DemoCarousel from './Curasol';

const HeroOne = () => {
  return (
    <div className=' w-[80%] h-[450px]  border-[1px] sm:h-[320px] md:h-[415px] lg:h-[480px] border-[#ebebeb] mx-auto mt-4 grid grid-cols-[0.4fr_1fr] grid-rows-1 sm:grid-cols-1 sm:grid-rows-[0.2fr_1fr] lg:grid-cols-[0.3fr_1fr] lg:grid-rows-1   '>
        <div className='  mx-auto   w-[250px]'>
            <div className=' w-full h-12   flex items-center gap-3 ml-[-3px] font-bold'>
                <IoMenu className=' text-2xl '/>
                <p>ALL CATEGORIES</p>
            </div>
            <div className=' sm:hidden lg:block'>
            <div className=' flex items-center gap-3  text-[#666] h-10 text-md'>
                <BsFillGiftFill/>
                <p className=' '>Fashion</p>
            </div>

              <div className=' flex items-center gap-3  text-[#666] h-10 text-md'>
                <MdElectricBolt/>
                <p>Electronic</p>
            </div>

            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <FcSmartphoneTablet/>
                <p>SmartPhone & Tablet</p>
            </div>
            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <GiAmpleDress/>
                <p>Fashion & Accessorise</p>
            </div>

            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <BsFillLampFill />
                <p>Home & Light</p>
            </div>

            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <GiJewelCrown />
                <p>Jewellery</p>
            </div>


            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <GiSonicShoes />
                <p>Footwear</p>
            </div>


             <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <PiHandbagSimpleFill />
                <p>Bags</p>
            </div>

            <div className=' flex items-center gap-3 text-md text-[#666] h-10'>
                <TbToolsKitchen />
                <p>Grocery Essentials</p>
            </div>
            </div>
        </div>
        <div>
            <DemoCarousel/>
        </div>
    </div>
  )
}

export default HeroOne