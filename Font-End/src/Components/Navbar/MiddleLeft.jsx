import React from 'react'
import { Link } from 'react-router-dom'
const MiddleOne = () => {
  return (
    <div className='flex w-[400px]  h-full items-center ml-[-30px] sm:justify-center'>
     <Link to='/'>
      <img className=' w-[400px] mt-[10px]  h-[180px] sm:w-[300px] sm:h-[150px]  cursor-pointer' src='/tanvir.png'/></Link>
      
    </div>
  )
}

export default MiddleOne