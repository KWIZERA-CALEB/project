import Image from "next/image";
import ChallengeCard from '@/components/custom/admin/ChallengeCard'


export default function ChallengesSection() {
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
        {Array(3)
          .fill({
            title: "Design a Dashboard for SokoFund",
            skills: ["UI/UX Design", "Interaction Design", "Figma"],
            timeline: "5 Days",
            company: "Umurava",
            status: "Open",
            image: "/assets/images/Ummurava logo.png", // Update with your actual image path
          })
          .map((challenge, index) => (
            <ChallengeCard challengeLink='/challenges/577897' challengeTitle='Design a Dashboard for SokoFund' />
          ))}
      </div>

    
      <div className="flex justify-center mt-12">
        <button className="px-6 border border-blue-500 py-3 bg-whitefont-medium rounded-md hover:bg-gray-300 text-blue-500 transition">
          View More
        </button>
      </div>
    </section>
  );
}
