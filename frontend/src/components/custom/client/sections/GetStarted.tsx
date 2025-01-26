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
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-6 flex flex-col relative">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 1</p>
              <h3 className="text-xl font-semibold mb-4">Sign up on Umurava Platform</h3>
              <p className="text-gray-600">Submit your completed project for evaluation</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <img
                src="/assets/images/step1.png"
                alt="Step 1 Image"
                className="rounded-lg shadow-lg w-full lg:w-3/4"
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 3</p>
              <h3 className="text-xl font-semibold mb-4">Register and Participate</h3>
              <p className="text-gray-600">Sign up for the challenge and start working on the project.</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <div className="text-left">
              <p className="text-blue-600 font-bold mb-4">Step 4</p>
              <h3 className="text-xl font-semibold mb-4">Submit your work</h3>
              <p className="text-gray-600">Submit your completed project for evaluation</p>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
