import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from '@mui/material/Button';

const BottomLeft = () => {
  return (
       <Button style={{ backgroundColor: '#Ff3e20', color: 'white',height:'40px',width:'230px',borderRadius: '3px', }} variant="contained">
          <GiHamburgerMenu  className=' text-[22px] font-bold mr-1'/>
          <p className=' font-bold text-[17px]'>ALL CATEGORIES</p>
          <MdOutlineKeyboardArrowDown  className=' text-[25px]' />
       </Button>
    //<button className=' flex items-center justify-center  gap-1 rounded-sm  bg-[#Ff3e20] text-white h-[40px] w-[230px] cursor-pointer' >
        //<GiHamburgerMenu  className=' text-[22px] font-bold mr-1'/>
        //<p className=' font-bold text-[17px]'>ALL CATEGORIES</p>
        //<MdOutlineKeyboardArrowDown  className=' text-[25px]' />

   // </button>
  )
}

export default BottomLeft