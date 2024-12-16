import LayoutTitle from "./LayoutTitle";

const AppFlowSteps = () => {
  const steps = [
    {
      title: "Sign Up:",
      description: "Create your profile.",
      imageUrl: "./assets/step-1.svg",
      arrowImage: "./assets/arrow-1.png",
    },
    {
      title: "Browse Jobs:",
      description: "Search your preferred job you want to work on.",
      imageUrl: "./assets/step-2.svg",
      arrowImage: "./assets/arrow-2.png",
    },
    {
      title: "Apply:",
      description: "Select shifts that work for you.",
      imageUrl: "./assets/step-3.svg",
      arrowImage: "./assets/arrow-3.png",
    },
    {
      title: "Get Hired & Paid:",
      description: "Complete the shift and get paid instantly.",
      imageUrl: "./assets/step-4.svg",
      arrowImage: "",
    },
  ];

  return (
    <section className="py-4 px-2 md:py-8 md:px-4 bg-white">
      <div className="py-4 md:py-8 px-2 md:px-12">
        <LayoutTitle
          iconColor="#F68A24"
          firstText="How to"
          secondText=" use WorkLah! app"
        />
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <h2 className="text-[32px] font-bold text-[#007BE5] mb-4">
                Step: {index + 1}
              </h2>
              <div className="relative mb-6">
                <img
                  src={step.imageUrl}
                  alt={`Step ${index + 1} screen`}
                  className="rounded-lg w-[340px] h-[360px] "
                />
                {index < steps.length - 1 && (
                  <div
                    className={`${
                      index === 0
                        ? "-right-[3.5rem] max-[1535px]:-right-[3rem] max-[1282px]:-right-[2.5rem] top-[60%] "
                        : index === 1
                        ? "-right-[3.5rem] max-[1535px]:-right-[3rem] max-[1282px]:-right-[2.5rem] top-[50%]"
                        : "-right-[5.2rem] max-[1535px]:-right-[5.4rem] max-[1282px]:-right-[4.5rem] top-[58%]"
                    } absolute -translate-y-1/2 z-10 hidden lg:block`}
                  >
                    <img
                      src={step.arrowImage}
                      alt="Arrow right"
                      width={100}
                      height={50}
                      className="w-28 max-[1535px]:w-24 max-[1282px]:w-20"
                    />
                  </div>
                )}
              </div>
              <h3 className="text-[24px] font-semibold mb-2">{step.title}</h3>
              <p className="text-black text-[20px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFlowSteps;
