import React from "react";
import Navbar from '@/components/custom/client/Navbar';
import Footer from '@/components/custom/client/Footer';
import ChallengeCard from "@/components/custom/admin/ChallengeCard";

const ChallengesPage = () => {
  const challenges = [
    {
      challengeTitle: "Design a Dashboard for Startups",
      challengeLink: "design-dashboard",
      duration: "2 weeks",
      status: "open",
    },
    {
      challengeTitle: "Create a Mobile App Prototype",
      challengeLink: "mobile-app-prototype",
      duration: "3 weeks",
      status: "ongoing",
    },
    {
      challengeTitle: "Build a Responsive Website",
      challengeLink: "responsive-website",
      duration: "1 month",
      status: "open",
    },
    {
      challengeTitle: "Design a Dashboard for Startups",
      challengeLink: "design-dashboard",
      duration: "2 weeks",
      status: "open",
    },
    {
      challengeTitle: "Create a Mobile App Prototype",
      challengeLink: "mobile-app-prototype",
      duration: "3 weeks",
      status: "ongoing",
    },
    {
      challengeTitle: "Build a Responsive Website",
      challengeLink: "responsive-website",
      duration: "1 month",
      status: "open",
    },
    {
      challengeTitle: "Design a Dashboard for Startups",
      challengeLink: "design-dashboard",
      duration: "2 weeks",
      status: "open",
    },
    {
      challengeTitle: "Create a Mobile App Prototype",
      challengeLink: "mobile-app-prototype",
      duration: "3 weeks",
      status: "open",
    },
    {
      challengeTitle: "Build a Responsive Website",
      challengeLink: "responsive-website",
      duration: "1 month",
      status: "closed",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">Challenges & Hackathons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              challengeTitle={challenge.challengeTitle}
              challengeLink={challenge.challengeLink}
              duration={challenge.duration}
              status={challenge.status}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChallengesPage;
