import React from 'react'
import { Menu } from 'lucide-react'

export default function Hero() {
  return (
    <div className=" min-h-screen relative z-10">
        <div className='bg-[#C4E8FF] mx-3 my-3 rounded-lg px-4'>
        <nav className="flex items-center justify-between p-4 md:px-6">
       
       <div className='flex items-center'>
       <button className=" border-none bg-black rounded-full mr-2">
          <Menu className="h-6 w-6" />
        </button>
        <div className="hidden md:flex items-center gap-1">

          <button className="bg-blue text-white px-4 py-2 rounded-full ">For Workers</button>
          <button className="bg-white text-black px-4 py-2 rounded-full">For Businesses</button>
        </div>
        </div> 
        <div className="flex items-center justify-center">
          <img
            src="src/assets/logo.png"
            alt="WorkLah Logo"
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-white text-black rounded-full">About</button>
          <button className="bg-white text-black rounded-full">Reviews</button>
          <button className="bg-white text-black rounded-full">How to use</button>
          <button className="bg-white text-black rounded-full">Q&A</button>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-12 md:py-20 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-4 ">
            <h1 className="text-6xl text-black md:text-5xl font-bold leading-tight">
              Work anytime,
              <br />
              Get paid now.
            </h1>
            <p className="text-black w-[500px] text-lg">
              With WorkLah, you're in control. Pick shifts that fit your schedule, work when you want, and get paid instantly. No delays or waiting for payday - your earnings are processed and fast forwards right to your account. Your work, your way, with WorkLah.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img
                  src="src/assets/apple-store.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="src/assets/google-play.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
          
          <div className="relative z-10">
            <img
              src="src/assets/Group1.png"
              alt="WorkLah App Interface and Team"
              className="w-full h-auto"
            />
          </div>

        </div>

      </main>

        </div>
     
        <div className='absolute z-9 w-full bottom-0  left-0'><img className='w-full' src="src/assets/Group.svg" alt="" /></div>

    </div>
  )
}

