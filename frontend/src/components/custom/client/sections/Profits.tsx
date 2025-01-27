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
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                <Check size={20} />
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
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                <Award size={20} />
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
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                <UserCheck size={20} />
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
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-3">
                <BookOpen size={20} />
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
