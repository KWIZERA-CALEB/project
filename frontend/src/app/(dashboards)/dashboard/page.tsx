'use client'
import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import Link from 'next/link'
import ChallengeCard from '@/components/custom/admin/ChallengeCard'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'
import { Button } from "@/components/ui/button"

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallenges } from '@/redux/slices/challengesSlice';
import { useEffect, useMemo, useState, useCallback } from 'react'
import { Challenge } from '@/utils/types';
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const getWeekRange = () => {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    return { start: startOfWeek, end: endOfWeek };
};

const getMonthRange = () => {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    startOfMonth.setHours(0, 0, 0, 0);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);
    return { start: startOfMonth, end: endOfMonth };
};

const filterChallengesByDateAndStatus = (challenges: Challenge[], dateRange: { start: Date, end: Date }, status: 'open' | 'closed' | 'ongoing') => {
    return challenges.filter((challenge) => {
        const challengeDate = new Date(challenge.createdAt);
        return challengeDate >= dateRange.start && challengeDate <= dateRange.end && challenge.status === status;
    });
};

export default function AdminDashboard () {
    const { isAuthenticated, isAdmin } = useAuth();
    const [selectedFilter, setSelectedFilter] = useState('week');
    const router = useRouter()

    const dispatch = useAppDispatch();
    const { data = [], loading } = useAppSelector((state) => state.challenges);

    const handleFetchChallenges = useCallback(() => {
        dispatch(fetchChallenges(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenges`));
    }, [dispatch])

    useEffect(() => {
        handleFetchChallenges()
    }, [handleFetchChallenges]);

    const handleCheckAuth = useCallback(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, router])

    useEffect(() => {
        handleCheckAuth()
    }, [handleCheckAuth])

    const challengeCounts = useMemo(() => {
        const counts = { open: 0, closed: 0, ongoing: 0 };
        
        data.forEach((challenge: Challenge) => {
            if (challenge.status === 'open') counts.open++;
            if (challenge.status === 'closed') counts.closed++;
            if (challenge.status === 'ongoing') counts.ongoing++;
        });
        
        return counts;
    }, [data]);

    const sortedChallenges = useMemo(() => {
        const sorted = [...data].sort((a: Challenge, b: Challenge) => {
            //return new Date(b.createdAt) - new Date(a.createdAt);
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        return sorted.slice(0, 3);
    }, [data]);

    const dateRange = selectedFilter === 'week' ? getWeekRange() : getMonthRange();

    const filteredClosedChallenges = filterChallengesByDateAndStatus(data, dateRange, 'closed');
    const filteredOpenChallenges = filterChallengesByDateAndStatus(data, dateRange, 'open');
    const filteredOngoingChallenges = filterChallengesByDateAndStatus(data, dateRange, 'ongoing');

    const dateRangeWeek = getWeekRange();
    const dateRangeMonth = getMonthRange();

    // for closed
    const filteredClosedChallengesWeek = filterChallengesByDateAndStatus(data, dateRangeWeek, 'closed');
    const filteredClosedChallengesMonth = filterChallengesByDateAndStatus(data, dateRangeMonth, 'closed');
    const weekCountClosed = filteredClosedChallengesWeek.length;
    const monthCountClosed = filteredClosedChallengesMonth.length;

    const percentageChangeClosed = useMemo(() => {
        if (monthCountClosed === 0) {
            return weekCountClosed > 0 ? 100 : 0;
        }
        const change = ((weekCountClosed - monthCountClosed) / monthCountClosed) * 100;
        return Math.round(change);
    }, [weekCountClosed, monthCountClosed]);

    // for open
    const filteredOpenChallengesWeek = filterChallengesByDateAndStatus(data, dateRangeWeek, 'open');
    const filteredOpenChallengesMonth = filterChallengesByDateAndStatus(data, dateRangeMonth, 'open');
    const weekCountOpen = filteredOpenChallengesWeek.length;
    const monthCountOpen = filteredOpenChallengesMonth.length;

    const percentageChangeOpen = useMemo(() => {
        if (monthCountOpen === 0) {
            return weekCountOpen > 0 ? 100 : 0;
        }
        const change = ((weekCountOpen - monthCountOpen) / monthCountOpen) * 100;
        return Math.round(change);
    }, [weekCountOpen, monthCountOpen]);

    // for ongoing
    const filteredOngoingChallengesWeek = filterChallengesByDateAndStatus(data, dateRangeWeek, 'ongoing');
    const filteredOngoingChallengesMonth = filterChallengesByDateAndStatus(data, dateRangeMonth, 'ongoing');
    const weekCountOngoing = filteredOngoingChallengesWeek.length;
    const monthCountOngoing = filteredOngoingChallengesMonth.length;

    const percentageChangeOngoing = useMemo(() => {
        if (monthCountOngoing === 0) {
            return weekCountOngoing > 0 ? 100 : 0;
        }
        const change = ((weekCountOngoing - monthCountOngoing) / monthCountOngoing) * 100;
        return Math.round(change);
    }, [weekCountOngoing, monthCountOngoing]);
    

    return (
        <>
            <div className='w-full h-[100vh] flex flex-row'>
                <Sidebar />
                <div className='md:flex-1 w-full md:ml-[270px]'>
                    <AdminNavbar />
                    <div className='bg-[#F9FAFB] z-20 pr-[25px] pl-[25px] pt-[70px] pb-[70px] md:pb-[25px] w-full min-h-screen'>
                        <div>
                            <h4 className='font-bold cursor-pointer select-none'>Welcome back Hilare</h4>
                            <p className='text-[#667185] select-none cursor-pointer text-[14px]'>Build Work Experience through Work Challenges</p>
                        </div>
                        {/* statistics */}
                        {isAdmin ? 
                        <>
                            <div className='w-full flex flex-col space-y-[6px] md:space-y-[0px] md:flex-row mt-[20px] justify-between items-center md:space-x-[12px]'>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] relative border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row space-x-[15px] items-center'>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Total Challenges</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{data.length}</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                                <p className='font-sans text-[#777] font-bold text-[12px]'>{selectedFilter === 'week' ? 'This week' : 'This month'}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                                </svg>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="end">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('week')}>
                                                    This week
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('month')}>
                                                    This month
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] relative border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row space-x-[15px] items-center'>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Total Participants</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>0</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                                <p className='font-sans text-[#777] font-bold text-[12px]'>{selectedFilter === 'week' ? 'This week' : 'This month'}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                                </svg>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="end">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('week')}>
                                                    This week
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('month')}>
                                                    This month
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className='md:mt-[12px] mt-[6px] w-full flex flex-col space-y-[6px] md:space-y-[0px] md:flex-row justify-between items-center md:space-x-[12px]'>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] relative border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row space-x-[15px] items-center'>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Completed Challenge</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{filteredClosedChallenges.length}</h4>
                                                <div className={`font-sans font-bold text-[12px] ${percentageChangeClosed < 0 ? 'bg-red-500 text-white' : 'bg-[#E7F6EC] text-umuravaBlueColor'} flex items-center space-x-[2px] p-[4px] rounded-full`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="12" width="12" fill={percentageChangeClosed < 0 ? '#FFF' : '#2B71F0'}>
                                                        <path d={percentageChangeClosed < 0 ? "M12 2L5.586 8.414l1.414 1.414L11 5.828V22h2V5.828l4.001 4.001 1.414-1.414L12 2z" : "M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"} />
                                                    </svg>
                                                    <p>
                                                        {percentageChangeClosed > 0 ? '+' : ''}{percentageChangeClosed}%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                                <p className='font-sans text-[#777] font-bold text-[12px]'>{selectedFilter === 'week' ? 'This week' : 'This month'}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                                </svg>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="end">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('week')}>
                                                    This week
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('month')}>
                                                    This month
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] relative border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row space-x-[15px] items-center'>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Open Challenge</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{filteredOpenChallenges.length}</h4>
                                                <div className={`font-sans font-bold text-[12px] ${percentageChangeOpen < 0 ? 'bg-red-500 text-white' : 'bg-[#E7F6EC] text-umuravaBlueColor'} flex items-center space-x-[2px] p-[4px] rounded-full`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="12" width="12" fill={percentageChangeOpen < 0 ? '#FFF' : '#2B71F0'}>
                                                        <path d={percentageChangeOpen < 0 ? "M12 2L5.586 8.414l1.414 1.414L11 5.828V22h2V5.828l4.001 4.001 1.414-1.414L12 2z" : "M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"} />
                                                    </svg>
                                                    <p>
                                                        {percentageChangeOpen > 0 ? '+' : ''}{percentageChangeOpen}%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                                <p className='font-sans text-[#777] font-bold text-[12px]'>{selectedFilter === 'week' ? 'This week' : 'This month'}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                                </svg>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="end">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('week')}>
                                                    This week
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('month')}>
                                                    This month
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] relative border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row space-x-[15px] items-center'>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Ongoing Challenge</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{filteredOngoingChallenges.length}</h4>
                                                <div className={`font-sans font-bold text-[12px] ${percentageChangeOngoing < 0 ? 'bg-red-500 text-white' : 'bg-[#E7F6EC] text-umuravaBlueColor'} flex items-center space-x-[2px] p-[4px] rounded-full`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="12" width="12" fill={percentageChangeOngoing < 0 ? '#FFF' : '#2B71F0'}>
                                                        <path d={percentageChangeOngoing < 0 ? "M12 2L5.586 8.414l1.414 1.414L11 5.828V22h2V5.828l4.001 4.001 1.414-1.414L12 2z" : "M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"} />
                                                    </svg>
                                                    <p>
                                                        {percentageChangeOngoing > 0 ? '+' : ''}{percentageChangeOngoing}%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                                <p className='font-sans text-[#777] font-bold text-[12px]'>{selectedFilter === 'week' ? 'This week' : 'This month'}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                                </svg>
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56" align="end">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('week')}>
                                                    This week
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setSelectedFilter('month')}>
                                                    This month
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='mt-[12px] flex justify-end'>
                                <Button className='bg-umuravaBlueColor flex flex-row space-x-[6px] items-center text-white hover:bg-umuravaBlueColor/[90%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#fff">
                                        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                    </svg>
                                    <p>
                                    View Profile
                                    </p>
                                </Button>
                            </div>
                            <div className='md:mt-[12px] mt-[6px] w-full flex flex-col space-y-[6px] md:space-y-[0px] md:flex-row justify-between items-center md:space-x-[12px]'>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row justify-between w-full items-center'>
                                        <div className='pl-[10px] border-l-[3px] border-solid border-umuravaBlueColor'>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Completed Challenge</p>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{challengeCounts.closed}</h4>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row justify-between w-full items-center'>
                                        <div className='pl-[10px] border-l-[3px] border-solid border-umuravaBlueColor'>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Open Challenge</p>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{challengeCounts.open}</h4>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row justify-between w-full items-center'>
                                        <div className='pl-[10px] border-l-[3px] border-solid border-umuravaBlueColor'>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Ongoing Challenge</p>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>{challengeCounts.ongoing}</h4>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        }
                        {/* statistics */}
                        <div className='mt-[40px]'>
                            <div className='flex flex-row mb-[12px] justify-between items-center'>
                                <div>
                                    <h4 className='font-sans font-bold cursor-pointer select-none'>Recent Challenges</h4>
                                </div>
                                <Link href='/challenges'>
                                    <div className='flex flex-row items-center cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-umuravaBlueColor font-bold text-[14px]'>See all</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#2B71F0">
                                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}