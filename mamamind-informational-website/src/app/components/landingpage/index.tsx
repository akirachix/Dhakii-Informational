import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row px-6 lg:px-12 py-6 items-center justify-between ipad:flex-col">
      
      <div className="mb-8 mt-40 lg:order-last px-6 w-1/2">
        <img
          src="landingPageImage.png"
          alt="Mother and child"
          className=" md:w-[400px] md:h-[400px] lg:w-[517px] lg:h-[758px] object-contain lg:object-cover mx-auto nest-hub:w-[400px] nest-hub:h-[400px] nest-hub-max:w-[600px] nest-hub-max:h-[600px]"
        />
      </div>
      
      <div className="w-full text-center  lg:text-left lg:ml-8 lg:pt-20">
        <h1 className="text-[28px] md:text-[55px] lg:text-[62px] mb-8 font-bold text-Orange font-nunito nest-hub:text-size-26 text-left">
          Thrive with MamaMind
        </h1>
        <p className="text-[25px] md:text-[44px] lg:text-[34px] font-nunito mb-8 text-gray-800 nest-hub:text-size-24 text-left nest-hub-max:text-size-24">
          Immerse yourself in a supportive community and <br />follow a care guide crafted for your postpartum journey.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 pt-4">
          <button className="px-4 py-2 lg:px-6 lg:py-3 text-[20px] md:text-[28px] lg:text-[22px] text-white bg-Blue font-nunito hover:bg-gray-400 rounded-lg ">
            Get a Demo
          </button>
          <button className="px-4 py-2 lg:px-6 lg:py-3 text-[20px] md:text-[28px] lg:text-[22px] w-full lg:w-64 border-2 border-Blue font-nunito text-Blue hover:bg-gray-300 rounded-lg ">
            Get the Dashboard
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
