import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from 'lucide-react';
import LayoutTitle from "./LayoutTitle";

const testimonials = [
  {
    id: 1,
    name: "David Patel",
    image: "./assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 2,
    name: "John Doe",
    image: "./assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 3,
    name: "Sarah Lee",
    image: "./assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 4,
    name: "Mike Ross",
    image: "./assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 5,
    name: "Jessica Smith",
    image: "./assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => 
      (prev - 1 + testimonials.length - slidesToShow + 1) % (testimonials.length - slidesToShow + 1)
    );
  };

  return (
    <div className="w-full py-8 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Heading */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4 sm:mb-0">
          <LayoutTitle iconColor="#F12DEE" firstText="Testimonials" secondText="" />
        </h2>
        <div className="flex gap-4">
          <button
            onClick={previousSlide}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <MoveLeft className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" color="gray" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <MoveRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" color="gray" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 sm:px-4"
              style={{
                width: `${100 / slidesToShow}%`,
              }}
            >
              <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-lg h-full">
                {/* Profile and Name */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="mt-4 border-t border-gray-200"></div>
                {/* Quote */}
                <div className="mt-4 flex flex-col gap-2">
                  <div>
                    <img src="./assets/comma.svg" alt="comma" className="w-6 h-6 sm:w-8 sm:h-8"/>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ml-6 sm:ml-8">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

