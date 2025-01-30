import React from 'react';
import { Check, Award, UserCheck, BookOpen } from 'lucide-react';

const Profits = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What else can I gain from <br/> participating in Skills Challenges?
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Join Skills Challenges Program to accelerate your career growth and become <br/> part of Africa&apos;s largest workforce of digital professionals.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mt-20">
          {/* Left Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col ">
              <div className="w-[50px] h-[50px] bg-blue-600 text-white rounded-[6px] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                  <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Enhance Your Employment Path
              </h3>
              <p className="text-sm text-gray-600">
                Network with other talented individuals and learn from their experiences.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col ">
              <div className="w-[50px] h-[50px] bg-blue-600 text-white rounded-[6px] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                  <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Earn Recognition and Prizes
              </h3>
              <p className="text-sm text-gray-600">
                Gain valuable experience and knowledge to advance your career in the digital economy.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col ">
              <div className="w-[50px] h-[50px] bg-blue-600 text-white rounded-[6px] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                  <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Personal Growth
              </h3>
              <p className="text-sm text-gray-600">
                Challenge yourself, learn new skills, and expand your professional network.
              </p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col">
              <div className="w-[50px] h-[50px] bg-blue-600 text-white rounded-[6px] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                  <path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM9 16.4185V19.4676L12 17.6676L15 19.4676V16.4185C14.0736 16.7935 13.0609 17 12 17C10.9391 17 9.92643 16.7935 9 16.4185ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"></path>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Learn from Industry Experts
              </h3>
              <p className="text-sm text-gray-600">
                Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/banner_img 1.png"
              alt="Dashboard Preview"
              className="w-full max-w-sm rounded-lg"
              style={{ marginTop: '16px' }} // Adds extra space between the image and the grid content.
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profits;
