import React from "react";
import Image from "next/image";

interface Challenge {
  status: string;
  title: string;
  tags: string[];
  seniority: string;
  timeline: string;
}

interface RecentChallengesProps {
  challenges: Challenge[];
}

export const ChallengeCard: React.FC<RecentChallengesProps> = ({
  challenges,
}) => {
  return (
    <div className="px-6 py-4">
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  shadow ">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="bg-blue-100 p-4 relative">
              {/* Status Badge */}
              <span
                className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                  challenge.status.toLowerCase() === "open"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {challenge.status}
              </span>

              {/* Challenge Image */}
              <Image
                src="/assets/images/umurava_logo.png" // Replace with actual image path
                alt={challenge.title}
                className="w-full h-32 text-white object-contain"
                width={300}
                height={200}
              />
            </div>

            <div className="p-4">
              {/* Challenge Title */}
              <h3 className="text-lg font-bold text-gray-800">
                {challenge.title}
              </h3>

              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                <p>Skills needed:</p>
                {challenge.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-500 text-sm px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Seniority Level */}
              <p className="mt-2 text-gray-600 text-sm">
                <span className="font-medium">Seniority Level:</span>{" "}
                {challenge.seniority}
              </p>

              {/* Timeline */}
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Timeline:</span> {challenge.timeline}
              </p>

              {/* Button */}
              <div className="border border-t-2 border-y-0 border-x-0 ">
              <button className="mt-4 w-1/2 bg-blue-500 text-white text-sm py-2 rounded-md hover:bg-blue-600">
                View Challenge
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
