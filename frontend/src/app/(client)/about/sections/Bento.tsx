import { Banknote } from "lucide-react";

export default function Bento() {
  return (
    <section className="min-h-screen bg-gray-100 w-full pt-[50px] pb-[50px] pr-[20px] pl-[20px] md:pr-[100px] md:pl-[100px]">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-3xl font-bold text-black leading-tight">
          Why we are solving this problem
        </h1>
      </div>

      {/* Big Blue Section */}
      <div className="bg-blue-500 w-full rounded-lg p-10 mb-10">
        {/* Small White Div */}
        <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#2B71F0">
              <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
            </svg>
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
        <div className="flex-1 bg-blue-500 rounded-lg p-10">
          {/* Small White Div */}
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#2B71F0">
              <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
            </svg>
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
        <div className="flex-1 bg-blue-500 rounded-lg p-10">
          {/* Small White Div */}
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-lg mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#2B71F0">
              <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
            </svg>
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
