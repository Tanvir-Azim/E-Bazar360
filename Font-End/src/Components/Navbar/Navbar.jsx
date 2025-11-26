import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import MiddleCenter2 from './MiddleCenter2';
import SideNavBar from '../SideNavBar';


const Navbar= () => {
  return (
    <div className=' flex items-center sm:justify-between sm:w-[70%]  w-[80%]   '>
      <div className=' flex items-center h-full xl:hidden lg:hidden sm:w-[95px] md:w-[80px] '>
        <SideNavBar/>
      </div>
      <div className=' lg:hidden xl:hidden md:w-[400px]'>
        <MiddleCenter2/>
      </div>
        <ul className=' w-[600px] flex  h-[50px] font-bold text-white items-center justify-between text-sm sm:hidden  lg:flex '>
            <li className=' flex items-center  cursor-pointer'><Link to='/'>HOME</Link><IoMdArrowDropdown /></li>
            <li className=' flex items-center  cursor-pointer'> <Link to='/pages'>PAGES  </Link><IoMdArrowDropdown /></li>
            <li className=' flex items-center  cursor-pointer'> <Link to='/blog'> BLOG </Link><IoMdArrowDropdown /></li>
            <li className=' flex items-center  cursor-pointer'> <Link to='/shop'> SHOP</Link> <IoMdArrowDropdown /></li>
            <li className=' flex items-center  cursor-pointer'> <Link to='/collection'>COLLECTIONS</Link> <IoMdArrowDropdown /></li>
            <li className=' flex items-center  cursor-pointer'> <Link to='/specials'>SPECIALS</Link> <IoMdArrowDropdown /></li>
        </ul>
    </div>
  )
}

export default Navbar