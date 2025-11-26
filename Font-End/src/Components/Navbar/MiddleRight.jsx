import React from 'react'

import { FaSyncAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MiddleRight= () => {
  return (
    <div className=' w-[500px]   ml-10  flex items-center h-full justify-between sm:hidden lg:flex  '>
      <Link to='/compare'>    
       <div className=' flex items-center gap-2 h-[40]  '>
      
            <div className=' h-[40px] w-[40px] rounded-full flex items-center justify-center border-[1px] border-[#ebebeb]'>
                <FaSyncAlt className=' text-[#666] hover:text-[#f4a137] '/>
             </div>
            
            <p className='text-[#666] hover:text-[#f4a137]  '>Compare</p>
          
        </div>
        </Link>
        <Link to='/fevourite'>
          <div className=' flex items-center  gap-2 h-[40] w-[140px]  '>
            <div className=' h-[40px] w-[40px] rounded-full flex items-center justify-center border-[1px] border-[#ebebeb] hover:text-[#f4a137] '>
                <FaHeart className=' text-[#666] hover:text-[#f4a137] '/>
            </div>
            
            <p className='text-[#666] '>Wish List (0)</p>
          </div>
        </Link>
            
    </div>
  )
}

export default MiddleRight