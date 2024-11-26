import React from 'react'
import AboutCards from './AboutCards'

export default function About() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">
          About <span className="text-blue-500">WorkLah!</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
        <AboutCards
        title="Work Your Way with Complete Flexibility." 
        description=
        {`
            Find shifts that fit your schedule and style from a variety of roles and locations. Start earning with short gigs, or stack multiple shifts across days for more flexibility. 
        
            Pick what works best – role, time, and place – and enjoy the freedom to create your own work journey with WorkLah.
        `}
        image="src/assets/about1.png"
        
        />
        <AboutCards 
            title="Stay Ready with Standby Shifts."
            description=
            {`
              Don’t miss out on last-minute opportunities. Sign up for standby shifts and be next in line when positions open up. Just choose a shift that’s fully booked, and we’ll notify you if a spot becomes available. 
              
              Standby lets you stay flexible while keeping options open – earn extra on your schedule with WorkLah.
            `}
            image="src/assets/about2.png"
        />
        <AboutCards 
            title="Get Paid Instantly with WorkLah."
            description=
            {`
              Get paid instantly with WorkLah. Cash out as soon as your shift ends! Receive payments within minutes of completing your work.
              
              Planning a weekend getaway or a special treat? With WorkLah, your earnings are ready when you are – no waiting, just instant access to your hard-earned pay.
            `}
            image="src/assets/about3.png"  

        />
        </div>

        {/* App Links */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="inline-block"
          >
            <img
              src="path-to-appstore-badge" // Replace with the correct path
              alt="Download on App Store"
              className="h-12"
            />
          </a>
          <a
            href="#"
            className="inline-block"
          >
            <img
              src="path-to-googleplay-badge" // Replace with the correct path
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

