import Image from "next/image";
import ChallengeCard from '@/components/custom/admin/ChallengeCard';

export default function ChallengesSection() {
  // Sample data for challenges
  const challenges = [
    {
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "Interaction Design", "Figma"],
      timeline: "5 Days",
      company: "Umurava",
      status: "Open",
      image: "/assets/images/Ummurava logo.png",
      link: '/challenges/577897',
    },
    {
      title: "Build a Mobile App for HealthTrack",
      skills: ["Mobile Development", "React Native", "UI/UX Design"],
      timeline: "10 Days",
      company: "HealthTrack",
      status: "Open",
      image: "/assets/images/healthtrack_logo.png",
      link: '/challenges/577898',
    },
    {
      title: "Create a Website for GreenTech",
      skills: ["Web Development", "JavaScript", "React"],
      timeline: "7 Days",
      company: "GreenTech",
      status: "Open",
      image: "/assets/images/greentech_logo.png",
      link: '/challenges/577899',
    },
  ];

  return (
    <section className="py-16 bg-white px-4 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
          Explore Challenges & Hackathons
        </h1>
        <p className="text-sm text-gray-600 mt-3">
          Join Skills Challenges Program to accelerate your career growth and become <br />
          part of Africa's largest workforce of digital professionals.
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            challengeTitle={challenge.title}
            challengeLink={challenge.link}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-6 border border-blue-500 py-3 bg-white font-medium rounded-md hover:bg-gray-300 text-blue-500 transition">
          View More
        </button>
      </div>
    </section>
  );
}
