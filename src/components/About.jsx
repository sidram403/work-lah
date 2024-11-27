import React from 'react';
import AboutCards from './AboutCards';
import LayoutTitle from './LayoutTitle';

const About = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="py-8 px-4 md:px-12">
        <LayoutTitle iconColor="#048BE1" firstText="About" secondText="WorkLah!" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AboutCards
            title="Work Your Way with Complete Flexibility."
            description={`Find shifts that fit your schedule and style from a variety of roles and locations. Start earning with short gigs, or stack multiple shifts across days for more flexibility. 
            Pick what works best – role, time, and place – and enjoy the freedom to create your own work journey with WorkLah.`}
            image="./assets/about1.png"
          />
          <AboutCards
            title="Stay Ready with Standby Shifts."
            description={`Don’t miss out on last-minute opportunities. Sign up for standby shifts and be next in line when positions open up. Just choose a shift that’s fully booked, and we’ll notify you if a spot becomes available. 
            Standby lets you stay flexible while keeping options open – earn extra on your schedule with WorkLah.`}
            image="./assets/about2.png"
          />
          <AboutCards
            title="Get Paid Instantly with WorkLah."
            description={`Get paid instantly with WorkLah. Cash out as soon as your shift ends! Receive payments within minutes of completing your work.
            Planning a weekend getaway or a special treat? With WorkLah, your earnings are ready when you are – no waiting, just instant access to your hard-earned pay.`}
            image="./assets/about3.png"
          />
        </div>

        {/* App Links */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block">
            <img
              src="./assets/apple-store.png"
              alt="Download on the App Store"
              className="h-12 w-auto md:h-16"
            />
          </a>
          <a href="#" className="inline-block">
            <img
              src="./assets/google-play.png"
              alt="Get it on Google Play"
              className="h-12 w-auto md:h-16"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
