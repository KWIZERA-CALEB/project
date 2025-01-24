import Image from "next/image";

export default function SkillsShowcase() {
  return (
    <section className="py-16 px-4 lg:px-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
          Skills Challenges Cover various in-demand skills <br /> and Careers for the digital economy
        </h1>
        <p className="text-sm text-gray-600 mt-3">
          Explore the projects that various talents are working on.
        </p>
      </div>

      {/* Skills Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        {[
          "UI/UX Design",
          "Data Science",
          "Graphic Design",
          "Data Analysis & Research",
          "Animation",
          "Videography & Photography",
          "AI & Machine Learning",
          "Web3",
          "Digital Marketing & Communications",
        ].map((skill, index) => (
          <button
            key={index}
            className="px-6 py-3 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg text-sm font-medium transition"
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Featured Project Card */}
      <div className="bg-gray-100 rounded-lg shadow-md max-w-5xl mx-auto flex flex-col lg:flex-row items-center p-6">
        {/* Icon and Text */}
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <div className="bg-blue-100 w-10 h-10 flex justify-center items-center rounded-full mb-4">
            <span className="text-blue-500 text-lg font-bold">sf</span>
          </div>
          <h2 className="text-black text-lg font-semibold mb-2">
            The Embedded Finance Platform and Payroll Management Software
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Solutions for your organization and workforce.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium text-sm transition hover:underline"
          >
            Learn more &rarr;
          </a>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/images/desktop.png"
            alt="Project Screenshot"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === 0 ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
