import React from 'react'
import UpperSection from './Navbar/UpperSection';
import MiddleRight from './Navbar/MiddleRight';
import MiddleCenter from './Navbar/MiddleCenter';
import MiddleLeft from './Navbar/MiddleLeft';
import BottomCenter from './Navbar/BottomCenter';
import BottomLeft from './Navbar/BottomLeft';
import BottomRight from './Navbar/BottomRight';

//Header a grid system use korer karone Header air protity div a alada section dhore design kora hoyse
//

export const Header = () => {
    return (
       <>
        <div className=' w-full h-[195px] bg-[#232f3e]  '>
          <div className=' w-[93%] h-[180px] mx-auto  display: grid grid-cols-[0.6fr_1.5fr_1fr] grid-rows-[0.7fr_1fr_1fr]'>
              <UpperSection/>
            <div className=''>
                <MiddleLeft/>
            </div>
            <div className=''>
              <BottomCenter/>
            <MiddleCenter/>
            </div>
            <div className=''>
                <MiddleRight/>
            </div>
            <div className=' '>
             <BottomLeft/>
            </div>
            <div className=''>
              
            </div>
            <div className=' flex h-full w-[100%] justify-end'>
              <BottomRight/>
            </div>
           
          </div>
  
        </div>
       </>
    );
};

export default Header

      <Link to='/compare'>
                    <div className=' cursor-pointer bg-blue-100'>
                        <FaSyncAlt className=' text-xl text-[#666] relative left-[0px] top-2 cursor-pointer'/>   
                    </div>
                    <div className=' relative cursor-pointer left-4 bottom-8 h-[17px] bg-red-500 w-[17px]  text-[10px] flex items-center justify-center rounded-full '>
                        0
                    </div>
                </Link>
                </div>


                import React from 'react'
                import UpperSection from './Navbar/UpperSection';
                import MiddleRight from './Navbar/MiddleRight';
                import MiddleCenter from './Navbar/MiddleCenter';
                import MiddleLeft from './Navbar/MiddleLeft';
                import BottomCenter from './Navbar/BottomCenter';
                import BottomLeft from './Navbar/BottomLeft';
                import BottomRight from './Navbar/BottomRight';
                
                //Header a grid system use korer karone Header air protity div a alada section dhore design kora hoyse
                //
                
                export const Header = () => {
                    return (
                       <>
                        <div className=' w-full h-[195px]   '>
                          <div className=' w-[100%] h-[120px] mx-auto  display: grid grid-cols-[0.6fr_1.5fr_1fr] grid-rows-[40px_1fr] '>
                              <UpperSection/>
                            <div className=' '>
                                <MiddleLeft/>
                            </div>
                            <div className=' '>
                              <BottomCenter/>
                            </div>
                            <div className=' flex justify-end'>
                                <BottomRight/>
                            </div>
                           
                          </div>
                  
                        </div>
                       </>
                    );
                };
                
                export default Header