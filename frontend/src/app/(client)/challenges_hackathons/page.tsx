'use client'
import React from "react";
import Navbar from '@/components/custom/client/Navbar';
import Footer from '@/components/custom/client/Footer';
import ChallengeCard from "@/components/custom/admin/ChallengeCard";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect, useCallback } from 'react'
import { Challenge } from '@/utils/types';
import Link from 'next/link'

const ChallengesPage = () => {
  const dispatch = useAppDispatch();
  const { data = [], loading } = useAppSelector((state: { challenges: { data: Challenge[]; loading: boolean; error: any } }) => state.challenges);
  
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
      <main className='pr-[50px] pl-[50px] pt-[20px] pb-[20px]'>
        <h1 className="text-[20px] font-bold text-[#101928] text-center font-[600] cursor-pointer select-none">Challenges & Hackathons</h1>
        <div className='w-full bg-white pr-[25px] pl-[25px] h-[50px]'>
            <div className='flex flex-row items-center space-x-[4px]'>
                <div className='flex flex-row cursor-pointer items-center space-x-[6px]'>
                    <div className='border-solid border-[1px] rounded-[5px] border-[#667185] p-[4px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='14' width='14' fill="#667185">
                            <path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z"></path>
                        </svg>
                    </div>
                    <Link href='/'>
                        <div>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Go Back</p>
                        </div>
                    </Link>
                </div>
                <p className='text-[14px] text-[#667185]'>/</p>
                <p className='text-umuravaBlueColor font-sans select-none cursor-pointer text-[14px]'>Challenges & Hackathons</p>
            </div>
        </div>
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
              <div className='grid grid-cols-1 mt-[15px] sm:grid-cols-2 md:grid-cols-4 gap-4'>
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
