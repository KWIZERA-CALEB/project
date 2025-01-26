
export default function Skills() {
    return (
      <section className="min-h-screen bg-gray-50 w-full p-10 lg:p-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Title, Paragraph, and Button */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Skills Challenges Program is built on the Umurava Talent Marketplace Platform
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed mt-8">
              A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to showcase their skills to real-world projects and challenges from our partner companies and organizations.
            </p>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              Umurava Skills Challenges enables young talents to build a portfolio and experience that increase their readiness to access job opportunities and projects.
            </p>
            <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </div>
  
          {/* Right Side: Adjusted Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/assets/images/about image.png"
              alt="Impact Illustration"
              className="w-full max-w-lg h-auto lg:h-96 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  