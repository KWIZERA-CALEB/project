import React from 'react'
import { ChallengeCard } from '@/components/ui/ChallengeCard';

const challenges = () => {
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
                  Challenges
                </h1>
                <p className="text-gray-600">
                  Build Work Experience through Skills Challenges
                </p>
              </div>
              
             
              
            </div>
      
      
            
            
      
            {/* Recent Challenges */}
            <ChallengeCard challenges={challenges} />

            <div className='flex py-4 px-6 justify-between items-center'>
              <button className='bg-blue-500 text-white text-xl  px-4 rounded-sm'>Back</button>
              <button className='bg-blue-500 text-white text-xl px-4 rounded-sm' >Next </button>
            </div>
    </main>  
  )
}

export default challenges
