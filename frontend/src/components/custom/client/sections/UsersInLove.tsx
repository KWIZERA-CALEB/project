import React from 'react';
import { Play } from 'lucide-react';

const UsersInLove = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-left">
          Users are in Love with Skills <br/>Challenges Program
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 text-left">
          See what our clients say about working with us. Their success <br/> speaks for our dedication and expertise.
        </p>

        {/* Horizontal Scrollable Video Testimonial Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-8 items-center px-4">
            {/* Video Card 1 */}
            <div className="min-w-[280px] sm:min-w-[320px]  border border-gray-200 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <div className="w-full h-48 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <Play size={32} color="white" /> {/* Lucide Play Icon inside gray circle */}
                </div>
              </div>
              <div className="flex ">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img
                    src="/assets/demo/blue.png" // Add your image path here
                    alt="Manzi Jack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Manzi Jack</p>
                  <p className="text-sm text-gray-600">Product Designer, Kigali</p>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="min-w-[280px] sm:min-w-[320px] bg-white rounded-lg border border-gray-200 shadow-lg p-4 flex flex-col items-center">
              <div className="w-full h-48 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <Play size={32} color="white" /> {/* Lucide Play Icon inside gray circle */}
                </div>
              </div>
              <div className="flex ">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img
                    src="/assets/demo/blue.png" // Add your image path here
                    alt="Jane Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Jane Doe</p>
                  <p className="text-sm text-gray-600">Software Engineer, Nairobi</p>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="min-w-[280px] sm:min-w-[320px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <div className="w-full h-48 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Play size={32} color="white" /> {/* Lucide Play Icon inside gray circle */}
                </div>
              </div>
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img
                    src="/assets/demo/blue.png" // Add your image path here
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">John Smith</p>
                  <p className="text-sm text-gray-600">Data Scientist, Lagos</p>
                </div>
              </div>
            </div>

            {/* Add more Video Cards if needed */}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default UsersInLove;
