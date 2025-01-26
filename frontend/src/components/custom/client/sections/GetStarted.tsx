import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How to Get Started</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Step 1 and Step 2 */}
          <div className="lg:col-span-3 space-y-6">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-2xl p-4 relative flex flex-col items-end">
              <div className="text-left pt-5">
                <p className="text-blue-600 font-bold mb-2">Step 1</p>
                <h3 className="text-xl font-semibold mb-2">Sign up on Umurava Platform</h3>
                <p className="text-gray-600 text-sm pr-80 mr-10">
                Submit your completed project for evaluation
                </p>
              </div>
              <div className="right-0 mt-4">
                <img
                  src="/assets/images/step1.png"
                  alt="Step 2 Image"
                  className="rounded-lg shadow-lg w-32 h-32 object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-2xl p-4 relative flex flex-col items-end">
              <div className="text-left px-10 pt-5">
                <p className="text-blue-600 font-bold mb-2">Step 2</p>
                <h3 className="text-xl font-semibold mb-2">Browse Open Challenges</h3>
                <p className="text-gray-600 text-sm">
                  Explore the range of challenges and hackathons and choose one that aligns with your
                  interests and career goals.
                </p>
              </div>
              <div className="right-0 mt-4">
                <img
                  src="/assets/images/step2.png"
                  alt="Step 2 Image"
                  className="rounded-lg shadow-lg w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Steps 3, 4, and 5 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="text-left pt-5">
                <p className="text-blue-600 font-bold mb-4">Step 3</p>
                <h3 className="text-xl font-semibold mb-4">Register and Participate</h3>
                <p className="text-gray-600">
                  Sign up for the challenge and start working on the project.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="text-left pt-5">
                <p className="text-blue-600 font-bold mb-4">Step 4</p>
                <h3 className="text-xl font-semibold mb-4">Submit your work</h3>
                <p className="text-gray-600">Submit your completed project for evaluation.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="text-left pt-5">
                <p className="text-blue-600 font-bold mb-4">Step 5</p>
                <h3 className="text-xl font-semibold mb-4">Receive Feedback and Recognition</h3>
                <p className="text-gray-600">
                  Get feedback on your work and celebrate your achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
