import React from "react";

interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface ChallengeStatsProps {
  stats: Stat[];
}

export const ChallengeStats: React.FC<ChallengeStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
        >
          <div className=" border-blue-500 ">
            <h3 className="text-gray-600 font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-blue-500">{stat.value}</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};
