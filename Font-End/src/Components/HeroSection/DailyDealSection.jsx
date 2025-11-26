import React from 'react'
import DailyDealSlider from './DailyDealSlider'

const DailyDealSection = () => {
  return (
    <div className=' w-[80%] h-[450px]  mx-auto mt-5'>
        <div className=' h-13 border-b-[1px] border-[#eeeeee]'>
            <p className=' w-[130px] h-10 bg-amber-600 text-center flex items-center justify-center text-white font-semibold   my-5' >DAILY DEALS</p>
        </div>

        <div>
            <DailyDealSlider/>
        </div>
        
    </div>
  )
}

export default DailyDealSection