import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse md:flex-row flex-wrap relative py-16 bg-gradient-to-r from-white via-gray-100 to-white">
      {/* Left Section */}
      <div className="flex w-full md:w-1/2 px-4 md:px-8">
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6 ">
            Print on demand for your ecommerce business
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Sign up for free and only pay for what you sell.
          </p>
          <p className="text-lg text-gray-700">
            Turn your passion into profit with the world's largest{" "}
            <a
              href="https://www.gelato.com/print-on-demand"
              className="text-black font-semibold hover:underline"
            >
              print on demand
            </a>{" "}
            network.
          </p>
          <div className="flex flex-wrap mt-6 space-x-3">
            <a href="/in/api/signup" className="mb-3">
              <button className="bg-black text-white py-3 px-6 rounded-lg shadow hover:bg-gray-800 transition-all">
                Get started for free
              </button>
            </a>
            <a href="/in/custom" className="mb-3">
              <button className="border border-black text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-all">
                See our products
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-1/2 px-4 md:px-8">
        <div className="flex items-center justify-start w-full">
          <img
            src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/"
            alt="Hero"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
