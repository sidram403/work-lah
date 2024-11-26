import { Download } from 'lucide-react'

const AppPromo=()=> {
  return (
    <div className="relative mb-32 h-[460px] w-full overflow-hidden bg-[url('src/assets/promo-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="relative container mx-auto px-4 py-4  flex flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className='flex flex-col items-center'>
          <div className="">
            <div className='mb-20'>
          <div className="flex gap-4 justify-center mb-4">
              <button className="flex items-center p-3 justify-center w-[50px] h-[50px] rounded-full border-white text-white">
                <img
                  src="src/assets/apple-store-small.png"
                  alt="Apple App Store"
                  className='w-full h-full'
                />
              </button>
              <button className="flex items-center p-3 justify-center w-[50px] h-[50px] rounded-full border-white text-white">
                <img
                  src="src/assets/play-store-small.png"
                  alt="Google Play Store"
                  
                  className="h-full w-full"
                />
              </button>
            </div>
            <h1 className="text-[32px] font-[500] tracking-tight text-center text-white ">
              Get Our App
            </h1>
            </div>
            
            <button className="mb-20 flex items-center justify-center gap-2 rounded-full bg-gray-900 pl-6 pr-1 py-2 text-white text-[20px]">
              <span>Download</span>
              
              <Download className="h-12 w-12 rounded-full bg-blue-600 p-2" />
            </button>
          </div>
          </div>

          {/* Right Content */}
          <div className="relative ">
            <div className="relative h-[400px] w-full md:h-[500px]">
              <img
                src="src/assets/Homepage.png"
                alt="Work from home illustration"
                width={400}
                height={400}
                className="absolute left-[36%] top-[45px] h-[80%] w-auto -translate-x-1/2 object-contain z-10"
              />
              <img
                src="src/assets/Home.png"
                alt="Mobile app interface"
                width={250}
                height={500}
                className="absolute bottom-[57px] right-[15px] h-[80%] w-auto object-contain z-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPromo