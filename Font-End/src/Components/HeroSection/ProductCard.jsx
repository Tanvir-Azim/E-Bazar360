import React, { useEffect, useState } from "react";

const ProductCard = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 130,
    hours: 4,
    minutes: 14,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-row md:flex-row rounded-2xl shadow-md p-3 sm:p-4 md:p-5 mx-auto bg-white ${className}`}
    >
      {/* Image Section */}
      <div className="relative w-full sm:w-1/2 md:w-1/2 flex-shrink-0">
        <img
          src="https://i.ibb.co/FYkhpTw/chair.png"
          alt="chair"
          className="rounded-xl w-full h-auto object-cover"
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
          -31%
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/2 md:w-1/2 px-2 sm:px-4 md:px-5 mt-2 sm:mt-0 flex flex-col items-start">
        <div>
          <h2 className="text-sm sm:text-lg md:text-xl font-semibold mb-1">
            Xancetta Bresao
          </h2>
          <p className="text-red-600 text-base sm:text-xl md:text-2xl font-bold">
            $58.00{" "}
            <span className="text-gray-400 line-through text-xs sm:text-base md:text-lg ml-1 sm:ml-2">
              $84.00
            </span>
          </p>

          <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
            <span className="font-semibold">Available:</span>{" "}
            <span className="text-red-600 font-semibold">444</span>{" "}
            <span className="ml-1 sm:ml-2 text-gray-500">Sold: 5</span>
          </div>

          <div className="w-full bg-gray-200 h-1 sm:h-2 rounded-full mt-2">
            <div className="bg-red-500 h-1 sm:h-2 rounded-full w-[20%]"></div>
          </div>
        </div>

        {/* Timer Section */}
        <div className="flex space-x-2 sm:space-x-4 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base">
          <div>
            <p className="text-sm sm:text-lg md:text-xl font-bold">{timeLeft.days}</p>
            <p className="text-gray-500 text-[8px] sm:text-xs md:text-sm">DAYS</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-xl font-bold">{timeLeft.hours}</p>
            <p className="text-gray-500 text-[8px] sm:text-xs md:text-sm">HOURS</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-xl font-bold">{timeLeft.minutes}</p>
            <p className="text-gray-500 text-[8px] sm:text-xs md:text-sm">MINS</p>
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-xl font-bold">{timeLeft.seconds}</p>
            <p className="text-gray-500 text-[8px] sm:text-xs md:text-sm">SECS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

