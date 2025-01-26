import React from 'react';

const Integration = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-16">
        {/* Left Side */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-snug">
            How Skills Challenges Program can Be <br /> Integrated into your Learning Institution
          </h2>
          <ul className="space-y-6 mt-5">
            {/* List Item 1 */}
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                1
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  As Career Development and Job Readiness Program
                </h3>
              </div>
            </li>

            {/* List Item 2 */}
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                2
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  As Skills Assessments Method after a course or a term
                </h3>
              </div>
            </li>

            {/* List Item 3 */}
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                3
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  As extracurricular activities to complement academic courses
                </h3>
                
              </div>
            </li>

            {/* List Item 4 */}
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                4
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  As the portfolio of the Students
                </h3>
               
              </div>
            </li>

            {/* List Item 5 */}
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                5
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  As part of Capstone Projects or final-year assignments
                </h3>
              
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/assets/images/banner_img 1.png"
            alt="Dashboard Preview"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Integration;
