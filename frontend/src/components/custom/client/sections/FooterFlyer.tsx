import React from 'react';

const BannerSection = () => {
  return (
    <section className="w-full bg-white pt-[50px] pb-[50px] pr-[10px] pl-[10px] md:pr-[100px] md:pl-[100px]">
      <div className="w-full">
        <div className="bg-umuravaBlueColor w-full rounded-[26px] pt-[50px] pb-[50px] pr-[70px] pl-[70px]  flex flex-col items-center md:flex-row relative">
          <img
            alt="ellipse"
            src="/assets/images/bendup.png"
            className="absolute bottom-0 left-0 opacity-90 ml-15 pointer-events-none object-cover w-96"
          />
          <img
            alt="ellipse"
            src="/assets/images/bend_bottom.png"
            className="absolute top-0 right-0 opacity-90 pointer-events-none object-cover h-25"
          />
          <div className="w-full md:w-[50%] mb-6 lg:mb-0">
            <img
              src="/assets/demo/students.png" 
              alt="Skills Challenges Program"
              className="w-64 sm:w-72 md:w-80 rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[50%] text-white text-center lg:text-left">
            <h2 className="text-xl sm:text-xl lg:text-2xl font-bold mb-4">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-xs sm:text-base lg:text-sm mb-6 leading-relaxed">
              Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio and increase your chance to land job opportunities and accelerate your career growth.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 text-xs rounded-lg  hover:bg-gray-100 transition duration-200">
              View Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
