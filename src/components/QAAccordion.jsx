import React, { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import LayoutTitle from "./LayoutTitle"

const faqData = [
  {
    question: "How will I be paid?",
    answer: "With Worklah, you'll receive payment through PayNow just minutes after completing your shift. Need flexibility? You can also choose to cash out directly to another bank account as per your preference."
  },
  {
    question: "What if I have friends that I want to work with?",
    answer: "You can invite your friends to join and work together on shifts. Share your referral code with them to get started."
  },
  {
    question: "What if a business wants to hire me after a shift?",
    answer: "That's great news! Businesses can extend permanent job offers through our platform. We encourage building long-term relationships between workers and businesses."
  }
]

const QAAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? -1 : index)
    }

  return (
    <section className="py-8 px-4 bg-white">
      <div className='py-8 px-12'>
        <LayoutTitle iconColor="#000000" firstText="Q&A" secondText="" />

        </div>
    <div className="max-w-7xl mx-auto p-4 space-y-4">
    {faqData.map((item, index) => (
      <div
        key={index}
        className=" overflow-hidden"
      >
        <div className="p-2">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full py-8 px-6 flex items-center justify-between text-left rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden hover:border-gray-300 hover:shadow-lg"
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center gap-6">
              <img src="./assets/question.png" className="h-10 w-10 flex-shrink-0" />
              <span className="text-[24px] text-black font-semibold">{item.question}</span>
            </div>
            {openIndex === index ? (
              <img src="./assets/arrow-up.png" className="h-8 w-8 text-gray-500 transition-transform duration-300 ease-in-out" />
            ) : (
              <img src="./assets/arrow-down.png" className="h-8 w-8 text-gray-500 transition-transform duration-300 ease-in-out" />
            )}
          </button>
          <div 
            className={`mt-4 ml-4 text-black text-[20px] leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  </section>
  )
}

export default QAAccordion

