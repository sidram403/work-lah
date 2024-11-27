import { Download } from "lucide-react";
import promoBg from "./../../public/assets/promo-bg.png";

const AppPromo = () => {
  return (
    <div
      className="relative mb-12 md:mb-20 lg:mb-32 lg:h-[460px] md:h-[340px] h-[450px] w-full overflow-hidden  bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${promoBg})` }}
    >
      <div className="relative container mx-auto px-4 py-4  flex flex-col justify-center">
        <div className="grid items-center md:gap-8 gap-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center">
            <div className="">
              <div className="lg:mb-20 mb-6">
                <div className="flex gap-4 justify-center mb-4">
                  <button className="flex items-center p-3 justify-center w-[50px] h-[50px] rounded-full border-white text-white">
                    <img
                      src="./assets/apple-store-small.png"
                      alt="Apple App Store"
                      className="w-full h-full"
                    />
                  </button>
                  <button className="flex items-center p-3 justify-center w-[50px] h-[50px] rounded-full border-white text-white">
                    <img
                      src="./assets/play-store-small.png"
                      alt="Google Play Store"
                      className="h-full w-full"
                    />
                  </button>
                </div>
                <h3 className="md:text-[32px] text-[20px] font-[500] tracking-tight text-center text-white ">
                  Get Our App
                </h3>
              </div>

              <button className="md:mb-20 mb-4 flex items-center justify-center gap-2 rounded-full bg-gray-900 pl-6 pr-1 py-2 text-white sm:text-[20px] text-[16px] ">
                <span>Download</span>

                <Download className="md:h-12 md:w-12 w-8 h-8 rounded-full bg-blue-600 p-2" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative ">
            <div className="relative h-[350px] w-full lg:h-[500px]">
              <img
                src="./assets/Homepage.png"
                alt="Work from home illustration"
                width={400}
                height={400}
                className="absolute left-[30%] md:left-[22%] md:top-[45px] top-[10px] md:h-[80%] h-[70%] md:w-auto w-[170px] -translate-x-1/2 object-contain z-10"
              />
              <img
                src="./assets/Home.png"
                alt="Mobile app interface"
                width={250}
                height={500}
                className="absolute bottom-[88px] md:right-[-32px] xl:right-[140px] md:bottom-[25px] -right-[10px] md:h-[80%] h-[70%] md:w-auto w-[210px] object-contain z-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
