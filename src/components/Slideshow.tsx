import React, { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
  interval?: number;
  width?: string;
  height?: string;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  interval = 0,
  width = '30rem',
  height = '30rem',  
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (interval != 0) {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    

    return () => clearInterval(slideInterval);
    }
  }, [currentIndex, images.length, interval]);
  

  return (
    <div
      className="relative overflow-hidden max-w-[100vw] max-h-[100vw]"
      style={{ width, height }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Optional: Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center">
        <button
          className="text-white bg-like-lavendar bg-opacity-50 p-2 rounded"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        >
          ←
        </button>
        <button
          className="text-white bg-like-lavendar bg-opacity-50 p-2 rounded"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
