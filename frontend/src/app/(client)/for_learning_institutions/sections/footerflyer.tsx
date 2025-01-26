import React from 'react';

const BannerSection = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-xl sm:text-xl lg:text-2xl font-bold mb-4 text-center">
              Ready to Transform your learning institution?
            </h2>
            <div className="flex justify-center lg:justify-center">
              <button className="bg-white text-blue-500 font-semibold py-3 px-8 text-xs rounded-lg hover:bg-gray-100 transition duration-200">
                Let's Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
