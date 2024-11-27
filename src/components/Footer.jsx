import React from "react";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            <div>
              <img
                src="./assets/logo.png"
                alt="Worklah Logo"
                className="w-20 h-auto mb-4"
              />
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Contact Us</p>
              <h3 className="text-2xl md:text-4xl">WORKLAH! PVT. LTD.</h3>
              <div className="flex items-center gap-2 text-xl mt-2">
                <MapPin className="text-blue-500" />
                <span>123 Orchard Road, #04-56, Singapore 238888</span>
              </div>
              <div className="flex items-center gap-2 text-xl mt-2">
                <Mail className="text-blue-500" />
                <a href="mailto:support@worklah.in" className="hover:underline">
                  <p className="text-white"> support@worklah.in </p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Articles</h3>
              <ul className="text-xl space-y-2">
                <li>
                  <a href="#" className="hover:underline text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 text-center text-sm text-gray-500">
          © 2023 WORKLAH! PTE. LTD.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
