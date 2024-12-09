"use client"

import { useState, useRef, useEffect } from 'react';

const cards = [
  { id: 1, title: 'Card 1', description: 'Description 1' },
  { id: 2, title: 'Card 2', description: 'Description 2' },
  { id: 3, title: 'Card 3', description: 'Description 3' },
  { id: 4, title: 'Card 4', description: 'Description 4' },
  { id: 5, title: 'Card 5', description: 'Description 5' },
  { id: 6, title: 'Card 6', description: 'Description 6' },
  { id: 7, title: 'Card 7', description: 'Description 7' },
  { id: 8, title: 'Card 8', description: 'Description 8' }
];

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsPerView = 4;

  useEffect(() => {
    const checkOverflow = () => {
      if (carouselRef.current && containerRef.current) {
        const carouselWidth = carouselRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        setIsOverflowing(carouselWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView < cards.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-6xl mx-auto overflow-hidden"
    >
      <div 
        ref={carouselRef}
        className="flex transition-transform duration-500 gap-4" 
        style={{ 
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` 
        }}
      >
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="w-1/4 p-4 bg-white shadow-lg rounded-lg flex-shrink-0"
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show if overflowing */}
      {isOverflowing && (
        <>
          {currentIndex > 0 && (
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 
              bg-white/50 rounded-full w-12 h-12 flex items-center 
              justify-center cursor-pointer z-10"
              onClick={handlePrev}
            >
              ←
            </div>
          )}
          
          {currentIndex + cardsPerView < cards.length && (
            <div 
              className="absolute top-1/2 right-0 -translate-y-1/2 
              bg-white/50 rounded-full w-12 h-12 flex items-center 
              justify-center cursor-pointer z-10"
              onClick={handleNext}
            >
              →
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MultiCardCarousel;