import React from 'react'

const AboutCards = ({title, description,image}) => {
  return (
    <div className=" rounded-lg ">
      <img
        src={image}
        alt="Work Flexibility"
        className="w-full h-[350px] mb-4 bg-[#E3F4FF] p-12 rounded-lg "
      />
      <h3 className="text-xl font-semibold text-black mb-2">
        {title}
      </h3>
      {description.split("\n").map((text, index) => (
  <p key={index} className="text-black text-justify mb-4">
    {text}
  </p>
))}
     
    </div>

    
  )
}

export default AboutCards
