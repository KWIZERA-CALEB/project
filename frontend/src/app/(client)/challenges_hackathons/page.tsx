'use client'
import React from "react";
import Navbar from '@/components/custom/client/Navbar';
import Footer from '@/components/custom/client/Footer';
import ChallengeCard from "@/components/custom/admin/ChallengeCard";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect, useCallback } from 'react'
import { Challenge } from '@/utils/types';

const ChallengesPage = () => {
  const dispatch = useAppDispatch();
  const { data = [], loading } = useAppSelector((state: { api: { data: Challenge[]; loading: boolean; error: any } }) => state.challenges);
  
  const handleFetchChallenges = useCallback(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    dispatch(fetchChallenges(`${apiBaseUrl}/challenges`));
  }, [dispatch]);

  useEffect(() => {
      handleFetchChallenges()
  }, [handleFetchChallenges]);

  return (
    <>
      <Navbar />
      <main className='pr-[20px] pl-[20px] pt-[20px] pb-[20px]'>
        <h1 className="text-[20px] font-bold text-[#101928] text-center font-[600] cursor-pointer select-none">Challenges & Hackathons</h1>
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
              <div className='grid grid-cols-1 mt-[15px] sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
    </>
  );
};

export default ChallengesPage;
