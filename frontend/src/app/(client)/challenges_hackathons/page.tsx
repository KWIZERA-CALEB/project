'use client'
import React from "react";
import Navbar from '@/components/custom/client/Navbar';
import Footer from '@/components/custom/client/Footer';
import ChallengeCard from "@/components/custom/admin/ChallengeCard";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect } from 'react'
import { Challenge } from '@/utils/types';

const ChallengesPage = () => {
  const dispatch = useAppDispatch();
  const { data = [], loading } = useAppSelector((state: { api: { data: Challenge[]; loading: boolean; error: any } }) => state.api);

  const handleFetchChallenges = () => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    dispatch(fetchChallenges(`${apiBaseUrl}/challenges`));
  };

  useEffect(() => {
      handleFetchChallenges()
  }, [dispatch]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12">Challenges & Hackathons</h1>
        {loading ? 
          <div className='w-full h-[200px] flex items-center justify-center'>
              <div className='loader'></div>
          </div>
      :
          data.length === 0 ? 
              <div className='w-full h-[200px] flex items-center justify-center'>
                  <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>No challenges available</p>
              </div>
          :
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {Array.isArray(data) && data.map((challenge) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default ChallengesPage;
