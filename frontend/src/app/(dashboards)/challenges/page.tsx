'use client';

import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ChallengeCard from '@/components/custom/admin/ChallengeCard'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect, useMemo, useState, useCallback } from 'react'
import { Challenge } from '@/utils/types';




export default function AdminChallenges () {
    const currentUser = 'admin'
    
    const dispatch = useAppDispatch();
    const { data = [], loading } = useAppSelector((state: { api: { data: Challenge[]; loading: boolean; error: any } }) => state.api);
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleFetchChallenges = useCallback(() => {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        dispatch(fetchChallenges(`${apiBaseUrl}/challenges`));
    }, [dispatch])

    useEffect(() => {
        handleFetchChallenges()
    }, [handleFetchChallenges]);

    const challengeCounts = useMemo(() => {
        const counts = { open: 0, closed: 0, ongoing: 0 };
        
        data.forEach((challenge: Challenge) => {
            if (challenge.status === 'open') counts.open++;
            if (challenge.status === 'closed') counts.closed++;
            if (challenge.status === 'ongoing') counts.ongoing++;
        });
        
        return counts;
    }, [data]);

    const filteredData = selectedFilter === 'all' 
        ? data 
        : data.filter((challenge: Challenge) => challenge.status === selectedFilter);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage * itemsPerPage < filteredData.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleFilterChange = (status: 'all' | 'open' | 'closed' | 'ongoing') => {
        setSelectedFilter(status);
        setCurrentPage(1);
    };

    return (
        <>
            <div className='w-full h-[100vh] flex flex-row'>
                <Sidebar />
                <div className='md:flex-1 w-full md:ml-[270px]'>
                    <AdminNavbar />
                    <div className='bg-[#F9FAFB] z-20 pr-[25px] pl-[25px] pt-[70px] pb-[70px] md:pb-[25px] w-full min-h-screen'>
                        <div>
                            <h4 className='font-bold cursor-pointer select-none'>Challenges</h4>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Join a challenge or workspace to gain valuable experience</p>
                        </div>
                        <div className='mt-[40px]'>
                            {/* filters */}
                            {currentUser === 'admin' ?
                                (<div className='flex flex-row flex-wrap space-x-[1px] mb-[10px]'>
                                    <Button onClick={() => handleFilterChange('all')} className={selectedFilter === 'all' ? 'bg-[#D0E0FC] text-black hover:bg-[#D0E0FC] border-solid border-[1px] border-[#FCD2C2] flex flex-row items-center justify-between' : 'bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#2B71F0'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>All Challenge</div>
                                        <div className={selectedFilter === 'all' ? 'bg-umuravaBlueColor rounded-full w-[20px] h-[20px] flex justify-center items-center text-white' : 'bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'}>
                                            <p>{data.length}</p>
                                        </div>
                                    </Button>
                                    <Button onClick={() => handleFilterChange('closed')} className={selectedFilter === 'closed' ? 'bg-[#D0E0FC] text-black hover:bg-[#D0E0FC] border-solid border-[1px] border-[#FCD2C2] flex flex-row items-center justify-between' : 'bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Completed Challenge</div>
                                        <div className={selectedFilter === 'closed' ? 'bg-umuravaBlueColor rounded-full w-[20px] h-[20px] flex justify-center items-center text-white' : 'bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'}>
                                            <p>{challengeCounts.closed}</p>
                                        </div>
                                    </Button>
                                    <Button onClick={() => handleFilterChange('open')} className={selectedFilter === 'open' ? 'bg-[#D0E0FC] text-black hover:bg-[#D0E0FC] border-solid border-[1px] border-[#FCD2C2] flex flex-row items-center justify-between' : 'bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Open Challenge</div>
                                        <div className={selectedFilter === 'open' ? 'bg-umuravaBlueColor rounded-full w-[20px] h-[20px] flex justify-center items-center text-white' : 'bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'}>
                                            <p>{challengeCounts.open}</p>
                                        </div>
                                    </Button>
                                    <Button onClick={() => handleFilterChange('ongoing')} className={selectedFilter === 'ongoing' ? 'bg-[#D0E0FC] text-black hover:bg-[#D0E0FC] border-solid border-[1px] border-[#FCD2C2] flex flex-row items-center justify-between' : 'bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Ongoing Challenge</div>
                                        <div className={selectedFilter === 'ongoing' ? 'bg-umuravaBlueColor rounded-full w-[20px] h-[20px] flex justify-center items-center text-white' : 'bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'}>
                                            <p>{challengeCounts.ongoing}</p>
                                        </div>
                                    </Button>
                                    <Link href='/challenges/create'>
                                        <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans flex flex-row items-center space-x-[6px]'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                Create New Challenge
                                            </div>
                                        </Button>
                                    </Link>
                                </div>)
                                :
                                (<div className='flex flex-row flex-wrap space-x-[1px] mb-[10px]'>
                                    <Button className='bg-[#D0E0FC] text-black hover:bg-[#D0E0FC] border-solid border-[1px] border-[#FCD2C2] flex flex-row items-center justify-between'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#2B71F0'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>All Challenge</div>
                                        <div className='bg-umuravaBlueColor rounded-full w-[20px] h-[20px] flex justify-center items-center text-white'>
                                            <p>0</p>
                                        </div>
                                    </Button>
                                    <Button className='bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Completed Challenge</div>
                                        <div className='bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'>
                                            <p>0</p>
                                        </div>
                                    </Button>
                                    <Button className='bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Open Challenge</div>
                                        <div className='bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'>
                                            <p>0</p>
                                        </div>
                                    </Button>
                                    <Button className='bg-[#F0F2F5] text-[#667185] hover:bg-[#F0F2F5] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-center justify-between'>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#667185'>
                                                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>Ongoing Challenge</div>
                                        <div className='bg-[#E4E7EC] rounded-full w-[20px] h-[20px] flex justify-center items-center text-black'>
                                            <p>0</p>
                                        </div>
                                    </Button>
                                </div>)
                            }
                            {/* filters */}
                            {loading ? 
                                    <div className='w-full h-[200px] flex items-center justify-center'>
                                        <div className='loader'></div>
                                    </div>
                                :
                                    filteredData.length === 0 ? 
                                        <div className='w-full h-[200px] flex items-center justify-center'>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>No challenges available</p>
                                        </div>
                                    :
                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                            {Array.isArray(currentItems) && currentItems.map((challenge) => (
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
                            {filteredData.length !== 0 && 
                                <div className='flex flex-row justify-between mt-[15px] items-center pr-[30px] pl-[30px]'>
                                    <Button 
                                        onClick={handlePrevPage} 
                                        className='bg-white text-[#667185] hover:bg-white/[90%] font-sans' 
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </Button>
                                    <Button 
                                        onClick={handleNextPage} 
                                        className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans' 
                                        disabled={currentPage * itemsPerPage >= filteredData.length}
                                    >
                                        Next
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}

