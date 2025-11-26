import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Corem Ipsum Dolor",
    price: 100,
    oldPrice: 165,
    discount: "-39%",
    available: 49,
    sold: 31,
    image: "https://i.ibb.co/3k36Ch7/shorts.png",
  },
  {
    id: 2,
    name: "Ground Round Enim",
    price: 66,
    oldPrice: 76,
    discount: "-13%",
    available: 60,
    sold: 40,
    image: "https://i.ibb.co/n3Skj5L/belts.png",
  },
  {
    id: 3,
    name: "Incididunt Picanha",
    price: 80,
    oldPrice: 100,
    discount: "-20%",
    available: 75,
    sold: 45,
    image: "https://i.ibb.co/3vG4CBF/shoes.png",
  },
];

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days later

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-5 bg-white">
      <h2 className="text-xl font-bold border-b-2 border-orange-500 inline-block mb-5">
        SPECIAL OFFERS
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-sm p-4 relative bg-white"
          >
            {/* Discount badge */}
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
              {item.discount}
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-xl mb-3"
            />

            {/* Product Info */}
            <h3 className="text-lg font-semibold">{item.name}</h3>

            {/* Ratings */}
            <div className="text-orange-500 mb-1">★★★★★</div>

            {/* Price */}
            <p className="text-2xl font-bold text-gray-800">
              ${item.price.toFixed(2)}{" "}
              <span className="text-gray-400 line-through text-lg">
                ${item.oldPrice.toFixed(2)}
              </span>
            </p>

            {/* Availability */}
            <div className="text-sm mt-1">
              <span className="font-semibold">Available:</span>{" "}
              <span className="text-orange-500 font-semibold">
                {item.available}
              </span>{" "}
              <span className="ml-2 text-gray-500">Sold: {item.sold}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{
                  width: `${(item.sold / (item.available + item.sold)) * 100}%`,
                }}
              ></div>
            </div>

            {/* Countdown */}
            <div className="mt-3">
              <p className="font-bold text-gray-800">Hurry Up!</p>
              <p className="text-sm text-gray-500 mb-2">Offer ends in:</p>

              <div className="flex justify-between text-center">
                <div>
                  <p className="text-lg font-bold">{timeLeft.days}</p>
                  <p className="text-xs text-gray-500">DAY</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{timeLeft.hours}</p>
                  <p className="text-xs text-gray-500">HOUR</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{timeLeft.mins}</p>
                  <p className="text-xs text-gray-500">MIN</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{timeLeft.secs}</p>
                  <p className="text-xs text-gray-500">SEC</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
