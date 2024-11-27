import React from 'react';
import { Menu } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen relative z-10">
      <div className="bg-[#C4E8FF] mx-3 my-3 rounded-lg px-4">
        <nav className="flex items-center justify-between p-4 md:px-6">
          {/* Left Section */}
          <div className="flex items-center">
            <button className="border-none bg-black rounded-full mr-2 p-2">
              <Menu className="h-6 w-6" color="white" />
            </button>
            <div className="hidden md:flex items-center gap-2">
              <button className="bg-blue text-white px-4 py-2 rounded-full">
                For Workers
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full">
                For Businesses
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="./assets/logo.png"
              alt="WorkLah Logo"
              className="h-12 w-auto md:h-16"
            />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {['About', 'Reviews', 'How to use', 'Q&A'].map((item, index) => (
              <button
                key={index}
                className="bg-white text-black px-4 py-2 rounded-full"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 md:py-20 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Work anytime,
                <br />
                Get paid now.
              </h1>
              <p className="text-black text-base md:text-lg max-w-lg">
                With WorkLah, you're in control. Pick shifts that fit your
                schedule, work when you want, and get paid instantly. No delays
                or waiting for payday - your earnings are processed and fast
                forwarded right to your account. Your work, your way, with
                WorkLah.
              </p>
              <div className="flex gap-4">
                <a href="#" className="inline-block">
                  <img
                    src="./assets/apple-store.png"
                    alt="Download on the App Store"
                    className="h-12 md:h-16 w-auto"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="./assets/google-play.png"
                    alt="Get it on Google Play"
                    className="h-12 md:h-16 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative z-10">
              <img
                src="./assets/Group1.png"
                alt="WorkLah App Interface and Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Background SVG */}
      <div className="absolute z-0 w-full bottom-0 left-0">
        <img className="w-full" src="./assets/Group.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
