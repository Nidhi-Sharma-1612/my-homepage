import React from "react";

const Metrics = () => {
  return (
    <div className="py-4 w-full bg-[#FAF6EF] ">
      <div className="flex flex-wrap justify-between max-w-7xl mx-auto px-6 lg:px-8">
        {/* Metric 1 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-5">
          <span className="text-6xl font-bold">90%</span>
          <p className="text-lg text-gray-700 mt-2">
            of all orders are produced locally
          </p>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-5">
          <span className="text-6xl font-bold">90%</span>
          <p className="text-lg text-gray-700 mt-2">
            of orders arrive within 5 days of ordering
          </p>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center w-full md:w-1/3 p-5">
          <span className="text-6xl font-bold">140+</span>
          <p className="text-lg text-gray-700 mt-2">
            print providers across 32 countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
