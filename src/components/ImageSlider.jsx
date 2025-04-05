import React, { useEffect, useState, useRef } from "react";

const images = ["ac.png", "test.jpg", "fan.jpeg"];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (distance < -50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full max-w-4xl mx-auto mt-8 mb-6 relative rounded-2xl overflow-hidden shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[currentIndex]}
        alt={`Feature ${currentIndex + 1}`}
        className="w-full h-[28rem] object-cover transition-all duration-500" // ⬅️ Increased height to 28rem (448px)
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
