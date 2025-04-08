'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Images } from '../../../assets/Images';

const images = [
  {
    src: Images.slider_1,
    quote:
      'We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team.',
    author: 'Sarah Markivoc – Project Manager',
  },
  {
    src: Images.slider_2,
    quote:
      'Room.me made our meetings feel real again. The tools help our remote teams collaborate better than ever.',
    author: 'Jason Lee – Software Engineer',
  },
  {
    src: Images.slider_3,
    quote: 'The simplicity and power of Room.me has helped us save hours of setup time. Love it!',
    author: 'Amanda Patel – Product Owner',
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const { src, quote, author } = images[currentIndex];

  return (
    <div className="relative w-full pr-5 pt-5">
      <div
        className="relative min-h-160 group hover:-translate-y-2 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          className="rounded-xl object-cover cursor-pointer"
          priority
        />
        <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-md p-6 rounded-xl text-white max-w-md">
          <p className="text-lg">“{quote}”</p>
          <p className="mt-3 text-xs md:text-sm font-semibold">{author}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`relative h-1 w-10 mx-1 rounded-xl transition-all duration-500 ${
              index === currentIndex ? 'bg-[#beff46]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
