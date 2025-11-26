import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "./ProductCard";

const DailyDealSlider = () => {
  return (
    <div className="w-full mx-auto mt-5 rounded-lg overflow-hidden shadow-none xs:bg-amber-300">
      <Carousel
        className="dailyDealCarousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {/* 🔹 Slide 1 */}
        <div className="w-full h-90 flex  items-center justify-evenly">
          <div>
             <ProductCard />
          </div>
            <div className="hidden lg:block ">
            <ProductCard className=" w-full"/>
          </div>   
        </div>

          <div className="w-full h-90 flex  items-center justify-evenly ">
          <div>
             <ProductCard />
          </div>
            <div className="hidden lg:block ">
            <ProductCard className=" w-full"/>
          </div>   
        </div>



        {/* চাইলে আরও slide যোগ করো */}
      </Carousel>
    </div>
  );
};

export default DailyDealSlider;
