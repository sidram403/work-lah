import React, { useState } from "react";
import LayoutTitle from "./LayoutTitle";

const faqData = [
  {
    question: "How will I be paid?",
    answer:
      "With Worklah, you'll receive payment through PayNow just minutes after completing your shift. Need flexibility? You can also choose to cash out directly to another bank account as per your preference.",
  },
  {
    question: "What if I have friends that I want to work with?",
    answer:
      "You can invite your friends to join and work together on shifts. Share your referral code with them to get started.",
  },
  {
    question: "What if a business wants to hire me after a shift?",
    answer:
      "That's great news! Businesses can extend permanent job offers through our platform. We encourage building long-term relationships between workers and businesses.",
  },
];

const QAAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-2 md:py-8 px-4 bg-white">
      {/* Section Header */}
      <div className="py-4 md:py-8 px-4 md:px-12">
        <LayoutTitle iconColor="#000000" firstText="Q&A" secondText="" />
      </div>

      {/* FAQ Container */}
      <div className="max-w-7xl mx-auto px-4 space-y-2 md:space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="overflow-hidden">
            {/* Question Button */}
            <div className="p-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 px-4 flex items-center justify-between text-left rounded-lg border border-gray-200 bg-white shadow-md hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="./assets/question.png"
                    alt="Question Icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                  />
                  <span className="text-[16px] sm:text-[20px] md:text-[24px] text-black font-semibold">
                    {item.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <img
                    src="./assets/arrow-up.png"
                    alt="Collapse Icon"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 transition-transform duration-300"
                  />
                ) : (
                  <img
                    src="./assets/arrow-down.png"
                    alt="Expand Icon"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 transition-transform duration-300"
                  />
                )}
              </button>

              {/* Answer Text */}
              <div
                className={`mt-4 ml-4 sm:ml-6 text-black text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QAAccordion;
