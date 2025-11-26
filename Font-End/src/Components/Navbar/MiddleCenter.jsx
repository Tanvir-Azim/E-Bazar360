import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Button from '@mui/material/Button';

const MiddleCenter = () => {
  return (
    <div className=' ml-5 flex items-center h-full w-[70%]  justify-center sm:hidden  md:hidden  md:w-full sm:w-full lg:flex    '>
        <input  className=' w-[90%] bg-white border-[1px]  border-[#ebebeb] text-gray-500 outline-none h-[40px] pl-3 rounded-l-sm placeholder:pl-5 placeholder:text-sm' type="text" placeholder="Search"/>
        <Button style={{ backgroundColor: '#f4a137', color: 'white',height:'40px',width:'100px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} variant="contained"><IoSearchSharp className=' text-2xl'/></Button>
    </div>
  )
}
//bg-[#Ff3e20] flex items-center justify-center cursor-pointer hover:bg-red-500 text-white h-[40px] w-[100px] rounded-r-sm

export default MiddleCenter