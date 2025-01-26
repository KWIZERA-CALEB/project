import { Banknote } from "lucide-react";

export default function Bento() {
  return (
    <section className="min-h-screen bg-gray-100 w-full p-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
          Why we are solving this problem
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-4">
        {/* Top Row: Three Equal-Sized Cards */}
        <div className="flex-1 lg:w-[32%] bg-blue-500 rounded-lg p-6">
          {/* Small White Div */}
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg mb-4">
            <Banknote className="text-blue-500 w-5 h-5" />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              Build a Strong Portfolio
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Showcase your skills and accomplishments to potential employers
              and clients through a portfolio of completed projects.
            </p>
          </div>
        </div>

        <div className="flex-1 lg:w-[32%] bg-blue-500 rounded-lg p-6">
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg mb-4">
            <Banknote className="text-blue-500 w-5 h-5" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              Enhance Your Employment Path
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Develop in-demand skills and build a strong portfolio to increase
              your chances of landing your dream job or contract.
            </p>
          </div>
        </div>

        <div className="flex-1 lg:w-[32%] bg-blue-500 rounded-lg p-6">
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg mb-4">
            <Banknote className="text-blue-500 w-5 h-5" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              Earn Recognition and Prizes
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Earn money and knowledge prizes by participating in contests and
              competitions.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        {/* Large Card */}
        <div className="lg:w-[66%] bg-blue-500 rounded-lg p-6">
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg mb-4">
            <Banknote className="text-blue-500 w-5 h-5" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              Real-World Experience
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Tackle real-world projects through challenges and hackathons that
              mirror real-world challenges faced by businesses and organizations.
            </p>
          </div>
        </div>

        {/* Regular Card */}
        <div className="lg:w-[32%] bg-blue-500 rounded-lg p-6">
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg mb-4">
            <Banknote className="text-blue-500 w-5 h-5" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">
              Knowledge Prizes
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Work on real-world projects and hackathons from our partner companies and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
