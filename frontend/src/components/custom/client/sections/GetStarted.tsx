import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How to Get Started</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-6 flex flex-col relative">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 1</p>
              <h3 className="text-xl font-semibold mb-4">Sign up on Umurava Platform</h3>
              <p className="text-gray-600 mb-6">
                Submit your completed project for evaluation.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 w-1/2">
              <img
                src="/assets/images/step1.png"
                alt="Step 1 Image"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 3</p>
              <h3 className="text-xl font-semibold mb-4">Register and Participate</h3>
              <p className="text-gray-600">
                Sign up for the challenge and start working on the project.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-6 flex flex-col">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 2</p>
              <h3 className="text-xl font-semibold mb-4">Browse Open Challenges</h3>
              <p className="text-gray-600">
                Explore the range of challenges and hackathons and choose one
                that aligns with your interests and career goals.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 4</p>
              <h3 className="text-xl font-semibold mb-4">Submit your work</h3>
              <p className="text-gray-600">
                Submit your completed project for evaluation.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 5</p>
              <h3 className="text-xl font-semibold mb-4">Receive Feedback and Recognition</h3>
              <p className="text-gray-600">
                Get feedback on your work and celebrate your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
