import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Button from '@mui/material/Button';

const MiddleCenter2 = () => {
  return (
    <div className=' flex items-center h-full w-[70%] sm:w-full md:w-full justify-center '>
        <input  className=' w-[90%] bg-white border-[1px] border-[#ebebeb] text-gray-500 outline-none h-[40px] pl-3 rounded-l-sm placeholder:pl-5 placeholder:text-sm sm:w-full bg-blue-950' type="text" placeholder="Search"/>
        <Button style={{ backgroundColor: '#e6870d', color: 'white',height:'40px',width:'100px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} variant="contained"><IoSearchSharp className=' text-2xl'/></Button>
    </div>
  )
}
//bg-[#Ff3e20] flex items-center justify-center cursor-pointer hover:bg-red-500 text-white h-[40px] w-[100px] rounded-r-sm

export default MiddleCenter2    