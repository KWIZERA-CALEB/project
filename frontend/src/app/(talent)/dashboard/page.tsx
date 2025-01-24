import React from "react";
import { ChallengeStats } from "@/components/ui/ChallengeStats";
import { ChallengeCard } from "@/components/ui/ChallengeCard";
import { AiOutlineCheckCircle, AiOutlineFolderOpen } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { MdVisibility } from "react-icons/md"; // Import the visibility icon from react-icons

const Dashboard: React.FC = () => {
  // Static data for stats
  const stats = [
    {
      label: "Completed Challenges",
      value: "05",
      icon: <AiOutlineCheckCircle className="text-blue-500 w-8 h-8" />,
    },
    {
      label: "Open Challenges",
      value: "200",
      icon: <AiOutlineFolderOpen className="text-blue-500 w-8 h-8" />,
    },
    {
      label: "Ongoing Challenges",
      value: "200",
      icon: <FiClock className="text-blue-500 w-8 h-8" />,
    },
  ];

  // Static data for challenges
  const challenges = [
    {
      status: "open",
      title: "Design a Dashboard for SokoFund, Fintech Product",
      tags: ["UI/UX Design", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
    },
    {
      status: "open",
      title: "Develop an API for a Payment Gateway",
      tags: ["Backend Development", "API Design"],
      seniority: "Intermediate, Senior",
      timeline: "10 Days",
    },
    {
      status: "closed",
      title: "Create a Social Media Campaign Strategy",
      tags: ["Marketing", "Social Media"],
      seniority: "Junior",
      timeline: "7 Days",
    },
  ];

  return (
    <main>
      {/* Welcome Section */}
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, Hilaire,
          </h1>
          <p className="text-gray-600">
            Build Work Experience through Skills Challenges
          </p>
        </div>
        
        {/* View Profile Button */}
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm shadow-md">
          <MdVisibility className="w-5 h-8" /> {/* Visibility Icon */}
          View Profile
        </button>
      </div>


      {/* Challenge Stats */}
      <ChallengeStats stats={stats} />
      <div className="py-2 px-6">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-bold text-gray-800">Recent Challenges</h2>
            <a href="#" className="text-blue-500 hover:underline">
              See all
              </a>
       </div>
      </div>

      {/* Recent Challenges */}
      <ChallengeCard challenges={challenges} />
    </main>
  );
};

export default Dashboard;
