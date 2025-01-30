import Image from "next/image";
import Link from 'next/link'

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
            className="px-6 py-3 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-medium transition"
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Featured Project Card */}
      <div className="bg-gray-100 rounded-lg max-w-5xl mx-auto flex flex-col lg:flex-row items-start pt-[40px] pb-[40px] pr-[40px] pl-[40px]">
        {/* Icon and Text */}
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <div className="w-[70px] h-[70px] flex justify-center rounded-full mb-4">
            <img src='/assets/images/sf.png' alt='SF' />
          </div>
          <p className="text-gray-600 text-start text-[14px] mt-[20px]">
          The Embedded Finance Platform and Payroll<br></br> Management Software Solutions for your organization and Workforce
          </p>
          <Link
            href="/login"
            className="text-umuravaBlueColor mt-[20px] flex flex-row items-center space-x-[6px] font-bold text-sm transition hover:underline"
          >
            <p>
            Learn more 
            </p>
            <div className='bg-umuravaBlueColor w-[30px] h-[30px] rounded-full flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#fff">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </Link>
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
                index === 0 ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
