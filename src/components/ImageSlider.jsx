import React, { useEffect, useState, useRef } from "react";

const images = ["1.png", "3.png", "2.png"]; // Add real image paths

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 (because of clone at beginning)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef();

  const totalImages = images.length;
  const extendedImages = [images[totalImages - 1], ...images, images[0]];

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

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
      goToSlide(currentIndex + 1);
    } else if (distance < -50) {
      goToSlide(currentIndex - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle looping with transition
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalImages);
      }, 1000);
    } else if (currentIndex === totalImages + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <div
      className="w-full max-w-4xl mx-auto mt-8 mb-6 relative rounded-2xl overflow-hidden shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={slideRef}
        className="flex"
        style={{
          width: `${extendedImages.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / extendedImages.length)}%)`,
          transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
        }}
        onTransitionEnd={() => setIsTransitioning(true)} // Re-enable transition after jump
      >
        {extendedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-[28rem] object-cover flex-shrink-0"
            style={{ width: `${100 / extendedImages.length}%` }}
          />
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)} // +1 because first is clone
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-green-600" : "bg-[#d3cff8]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
