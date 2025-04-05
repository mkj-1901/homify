import React, { useEffect, useState } from "react";

const images = [
  "/features/feature1.webp",
  "/features/feature2.webp",
  "/features/feature3.webp",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-6 relative rounded-2xl overflow-hidden shadow-lg">
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
