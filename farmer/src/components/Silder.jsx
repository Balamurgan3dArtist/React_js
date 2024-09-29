import React, { useState } from "react";

const images = [
  "src/assets/images/BellPepper.jpeg",
  "src/assets/images/Onion.jpeg",
  "src/assets/images/Pumpkin.jpeg",
  "src/assets/images/Broccoli.jpeg",
];

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider-container p-5 ">
      <div className="slider relative overflow-hidden h-64  rounded-xl "> 
        <button
          onClick={handlePrev}
          className="prev-button absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2"
        >
          ❮
        </button>

        <div className="slider-content flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div
              className={`slide w-full h-full flex-shrink-0 ${index === currentSlide ? "active" : ""}`}
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="next-button absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2"
        >
          ❯
        </button>
      </div>

      <div className="dots flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentSlide ? "bg-gray-800" : "bg-gray-400"}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveSlider;
