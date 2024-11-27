import React from "react";

const AboutCards = ({ title, description, image }) => {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden">
      <div className=" flex justify-center bg-[#C4E8FF] mb-8">
        <div className="w-[50%] h-[50%] py-10">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
          {title}
        </h3>
        {description.split("\n").map((text, index) => (
          <p
            key={index}
            className="text-black text-sm sm:text-base text-justify mb-4"
          >
            {text.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
