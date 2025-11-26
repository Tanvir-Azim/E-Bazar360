import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <div className="w-[97%] h-[90%] mx-auto mt-5 rounded-lg overflow-hidden">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false} 
      >
        <div>
          <img className="" src='/slide-1.jpg' alt="Slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/slide-2.jpg" alt="Slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/slide-3.jpg" alt="Slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
