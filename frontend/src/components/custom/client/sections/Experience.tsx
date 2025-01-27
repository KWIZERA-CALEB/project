import { Banknote } from "lucide-react";

export default function Experience() {
  return (
    <section className="min-h-screen bg-gray-100 w-full p-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-3xl font-bold text-black leading-tight">
          Experience a New Way of Building <br /> Work Experience
        </h1>
        <p className="text-sm text-gray-600 mt-5">
          Join Skills Challenges Program to accelerate your career growth and
          become <br /> part of Africa&apos;s largest workforce of digital professionals.
        </p>
      </div>

      {/* Big Blue Section */}
      <div className="bg-blue-600 w-full rounded-lg p-10 mb-10">
        {/* Small White Div */}
        <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
          <Banknote className="text-blue-600 w-6 h-6" />
        </div>
        {/* Content */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">
            Build a Strong Portfolio and Hands-On Experience
          </h2>
          <p className="text-white text-sm leading-relaxed">
            Tackle real-world projects through challenges and hackathons that
            mirror real-world challenges faced by businesses and organizations.
            Showcase your skills and accomplishments to potential employers and
            clients through a portfolio of completed projects.
          </p>
        </div>
      </div>

      {/* Two Smaller Divs in Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Small Div */}
        <div className="flex-1 bg-blue-600 rounded-lg p-10">
          {/* Small White Div */}
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
            <Banknote className="text-blue-600 w-6 h-6" />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">
              Enhance Your Employment Path
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Develop in-demand skills and build a strong portfolio to increase
              your chances of landing your dream job or contract.
            </p>
          </div>
        </div>

        {/* Second Small Div */}
        <div className="flex-1 bg-blue-600 rounded-lg p-10">
          {/* Small White Div */}
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
            <Banknote className="text-blue-600 w-6 h-6" />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">
              Earn Recognition and Prizes
            </h2>
            <p className="text-white text-sm leading-relaxed">
              Earn money and knowledge prizes by participating in contests and
              competitions. Work on real-world projects and hackathons from our
              partner companies and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
