import Image from "next/image";

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
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-40 bg-blue-500 flex items-center justify-center">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  className="object-contain"
                  fill
                />
                <span className="absolute top-2 right-2 text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
                  {challenge.status}
                </span>
              </div>
              {/* Card Content */}
              <div className="p-6">
                {/* Challenge Title */}
                <h3 className="text-black font-semibold text-lg mb-2">{challenge.title}</h3>
                {/* Skills */}
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Skills Needed:</strong> {challenge.skills.join(", ")}
                </p>
                {/* Timeline */}
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Timeline:</strong> {challenge.timeline}
                </p>
                {/* Button */}
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                  View Challenge
                </button>
              </div>
            </div>
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
