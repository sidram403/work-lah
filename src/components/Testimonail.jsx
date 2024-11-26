import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import LayoutTitle from "./LayoutTitle";

const testimonials = [
  {
    id: 1,
    name: "David Patel",
    image: "src/assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 2,
    name: "John Doe",
    image: "src/assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 3,
    name: "Sarah Lee",
    image: "src/assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 4,
    name: "Mike Ross",
    image: "src/assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
  {
    id: 5,
    name: "Jessica Smith",
    image: "src/assets/avatar.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis magna leo varius lectus",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full py-8 px-12 overflow-hidden">
      {/* Heading */}
      <div className="mb-8 flex justify-between">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <LayoutTitle iconColor="#F12DEE" firstText="Testimonials" secondText="" />
          
        </h2>
        <div className="flex gap-4">
          <button
            onClick={previousSlide}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            <MoveLeft className="w-10 h-10" color="gray" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            <MoveRight className="w-10 h-10" color="gray" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{
                width: "32%", // Ensures three items fit perfectly in the visible area
              }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg h-[22rem]">
                {/* Profile and Name */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="mt-4 border-t border-gray-200"></div>
                {/* Quote */}
                <div className="mt-4 flex flex-col gap-2">
                <div>
                    <img src="src/assets/comma.svg" alt="comma" className="w-8 h-8"/>
                </div>
                  <p className="text-gray-600 text-sm leading-relaxed ml-8">
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