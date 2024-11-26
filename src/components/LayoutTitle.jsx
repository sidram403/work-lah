import { Diamond } from 'lucide-react'
import React from 'react'

const LayoutTitle = ({iconColor, firstText, secondText}) => {
  return (
    <div className='flex items-center gap-8 text-left'>
      <Diamond className='w-7 h-7' fill={iconColor} color={iconColor}  />
      <h2 className="text-2xl md:text-3xl font-bold ">
          {firstText} <span className="text-blue">{secondText}</span>
    </h2>
    </div>
  )
}

export default LayoutTitle
