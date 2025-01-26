'use client'
import Image from "next/image";
import ChallengeCard from '@/components/custom/admin/ChallengeCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect, useMemo } from 'react'
import { Challenge } from '@/utils/types';

export default function ChallengesSection() {

  const dispatch = useAppDispatch();
  const { data = [], loading, error } = useAppSelector((state) => state.api);

  const handleFetchChallenges = () => {
      dispatch(fetchChallenges(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenges`));
  };

  useEffect(() => {
      handleFetchChallenges()
  }, [dispatch]);

  const sortedChallenges = useMemo(() => {
    const sorted = [...data].sort((a: Challenge, b: Challenge) => {
        //return new Date(b.createdAt) - new Date(a.createdAt);
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return sorted.slice(0, 3);
  }, [data]);

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
      {loading ? 
          <div className='w-full h-[200px] flex items-center justify-center'>
              <div className='loader'></div>
          </div>
      :
          sortedChallenges.length === 0 ? 
              <div className='w-full h-[200px] flex items-center justify-center'>
                  <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>No challenges available</p>
              </div>
          :
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {Array.isArray(sortedChallenges) && sortedChallenges.map((challenge) => (
                      <ChallengeCard 
                          key={challenge._id} 
                          challengeLink={challenge._id} 
                          duration={challenge.challengeDuration} 
                          challengeTitle={challenge.challengeTitle}
                          status={challenge.status} 
                      />
                  ))}
              </div>
      }

      <div className="flex justify-center mt-12">
        <button className="px-6 border border-blue-500 py-3 bg-white font-medium rounded-md hover:bg-gray-300 text-blue-500 transition">
          View More
        </button>
      </div>
    </section>
  );
}
