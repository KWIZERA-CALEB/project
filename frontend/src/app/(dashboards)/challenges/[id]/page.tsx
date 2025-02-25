'use client'
import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'
import { useAuth } from '@/hooks/useAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchChallengeDetails, deleteChallenge } from '@/redux/slices/challengesSlice';
import { fetchParticipants } from '@/redux/slices/participantsSlice';
import { useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/slices/index';
import RegisterAndSubmitWork from '@/components/custom/admin/RegisterAndSubmitWork' 
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { BarsLoading } from '@/components/skeletons/Skeletons'
import { Participants } from '@/utils/types'
import ProtectedRoute from '@/hoc/withAuth'



interface AdminEditChallengeParams {
    id: string;
}

interface AdminEditChallengeProps {
    params: AdminEditChallengeParams;
}


const AdminChallengePage: React.FC<AdminEditChallengeProps> = ({ params })  => {
    const { id } = params; 
    const { isAuthenticated, isAdmin } = useAuth();
    const dispatch = useAppDispatch();
    const { challengeDetails, loading } = useAppSelector((state: RootState) => state. challenges);
    //const { data = [] } = useAppSelector((state: RootState) => state.participants);
    const { data = [] } = useAppSelector((state: RootState) => ({
        data: state.participants.data || []
    }));

    const router = useRouter();

    const handleFetchChallenge = useCallback(() => {
        dispatch(fetchChallengeDetails({url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge`, id}));
    }, [dispatch, id])

    useEffect(() => {
        handleFetchChallenge()
    }, [handleFetchChallenge]);


    const handleFetchParticipants = useCallback(() => {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        dispatch(fetchParticipants(`${apiBaseUrl}/participants/challenge/${id}`));
    }, [dispatch, id])

    useEffect(() => {
        handleFetchParticipants()
    }, [handleFetchParticipants])

    const handleDeleteChallenge = async () => {
        const resultAction = await dispatch(
          deleteChallenge({ url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete-challenge`, id })
        );
    
        if (deleteChallenge.fulfilled.match(resultAction)) {
          router.push('/challenges');
        } else {
          console.error('Failed to delete challenge:', resultAction.payload || resultAction.error);
        }
    };

    const sortedParticipants = useMemo(() => {
        if (!data.length) return [];
        
        const sorted = [...data].sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        return sorted.slice(0, 3);
    }, [data]);

    return (
        <ProtectedRoute>
            <div className='w-full h-[100vh] flex flex-row'>
                <Sidebar />
                <div className='md:flex-1 w-full md:ml-[270px]'>
                    <AdminNavbar />
                    <div className='bg-[#F9FAFB] z-20 pt-[50px] pb-[70px] pr-[10px] pl-[10px] md:pr-[0px] md:pl-[0px] md:pb-[25px] w-full min-h-screen'>
                        <div className='w-full bg-white pr-[25px] pl-[25px] h-[50px] flex flex-row space-x-[15px] items-center'>
                            <div className='flex flex-row cursor-pointer items-center space-x-[6px]'>
                                <div className='border-solid border-[1px] rounded-[5px] border-[#667185] p-[4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='14' width='14' fill="#667185">
                                        <path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z"></path>
                                    </svg>
                                </div>
                                <Link href='/challenges'>
                                    <div>
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[12px] md:text-[14px]'>Go Back</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[12px] md:text-[14px]'><Link href='/challenges'>Challenges & Hackathons</Link> / 
                                <span className='text-umuravaBlueColor'>{challengeDetails?.challengeTitle || 'Loading...'}</span></p>
                            </div>
                        </div>

                        <div className='md:pr-[25px] md:pl-[25px] flex flex-col md:flex-row space-y-[6px] md:space-y-[0px] md:space-x-[25px] w-full'>
                            <div className='w-full md:w-[60%]'>
                                <div className='bg-white border-solid border-[1px] border-[#E4E7EC] p-[15px] rounded-[12px] mt-[20px]'>
                                    <div className='w-full h-[250px] bg-umuravaBlueColor flex justify-center items-center rounded-[10px]'>
                                        <img src='/assets/images/official-logo.png' className='w-[120px]' alt='Challenge Image' />
                                    </div>
                                    {loading ? 
                                        <BarsLoading />
                                        : 
                                        <div className='mt-[30px]'>
                                            <h4 className='font-bold cursor-pointer select-none text-start'>Project Brief : {challengeDetails?.challengeTitle}</h4>
                                            <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>{challengeDetails?.projectBrief}</p>
                                            <h4 className='font-bold mt-[6px] cursor-pointer select-none text-start'>Tasks:</h4>

                                            <div>
                                                <h4 className='font-bold mt-[6px] cursor-pointer select-none text-start'>Product Requirements:</h4>
                                                <div className='mt-[6px]'>
                                                    <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>{challengeDetails?.projectDescriptionTasks}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className='font-bold mt-[6px] cursor-pointer select-none text-start'>Product Design:</h4>
                                                <div className='mt-[6px]'>
                                                    <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>{challengeDetails?.projectDescription}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className='font-bold mt-[6px] cursor-pointer select-none text-start'>Deliverables:</h4>
                                                <div className='mt-[6px]'>
                                                    <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>{challengeDetails?.projectDescriptionTasks}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className='font-bold mt-[6px] cursor-pointer select-none text-start'>NOTE:</h4>
                                                <div className='mt-[6px]'>
                                                    <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>
                                                    A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='w-full md:w-[40%]'>
                                <div className='bg-white border-solid border-[1px] border-[#E4E7EC] p-[15px] rounded-[12px] mt-[20px]'>
                                    <h4 className='font-bold cursor-pointer select-none text-start'>Key Instructions:</h4>
                                    <p className='text-[#667185] mt-[6px] select-none cursor-pointer text-start text-[14px]'>
                                    You are free to schedule the clarification call with the team via this
                                    </p>

                                    {loading ? 
                                        <BarsLoading />
                                    :
                                    
                                        <div className='flex flex-col space-y-[10px] mt-[20px] mb-[20px]'>
                                            <div className='flex items-center flex-row space-x-[6px]'>
                                                <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className='font-bold cursor-pointer select-none'>{challengeDetails?.contactEmail}</h4>
                                                    <p className='text-[#667185] select-none cursor-pointer text-[14px]'>Contact Email</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center flex-row space-x-[6px]'>
                                                <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                        <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className='font-bold cursor-pointer select-none'>{challengeDetails?.category}</h4>
                                                    <p className='text-[#667185] select-none cursor-pointer text-[14px]'>Challenge Category</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center flex-row space-x-[6px]'>
                                                <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className='font-bold cursor-pointer select-none'>{challengeDetails?.challengeDuration}</h4>
                                                    <p className='text-[#667185] select-none cursor-pointer text-[14px]'>Duration</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center flex-row space-x-[6px]'>
                                                <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                        <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className='font-bold cursor-pointer select-none'>{challengeDetails?.moneyPrize}</h4>
                                                    <p className='text-[#667185] select-none cursor-pointer text-[14px]'>Money Prize</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {isAdmin ?
                                        <div className='flex w-full flex-row space-x-[6px] mt-[10px] justify-between items-center'>
                                            <Button disabled={loading} onClick={handleDeleteChallenge} className='bg-[#E5533C] w-[50%] text-white hover:bg-[#E5533C]/[90%] font-sans'>
                                                Delete
                                            </Button>
                                            <Button className='bg-umuravaBlueColor w-[50%] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                <Link href={`/challenges/edit/${id}`}>
                                                Edit
                                                </Link>
                                            </Button>
                                        </div>
                                        :
                                        (challengeDetails?._id && <RegisterAndSubmitWork challengeStatus={challengeDetails.status} challengeId={challengeDetails._id} />)
                                    }
                                </div>
                                {isAdmin &&
                                <div className='bg-white pb-[15px] border-solid border-[1px] border-[#E4E7EC] rounded-[12px] mt-[20px]'>
                                    <div className='border-solid border-b-[1px] flex flex-row items-center space-x-[4px] pb-[15px] pt-[15px] pl-[24px] pr-[24px] border-[#E4E7EC]'>
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Participants</p>
                                        <div className='w-[40px] h-[20px] p-[2px] flex items-center justify-center cursor-pointer rounded-full bg-umuravaBlueColor text-white'>
                                            <p className='font-sans font-bold text-[14px]'>{data.length}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {data.length === 0 ? (
                                            <p className="text-[#667185] text-center mt-[10px] font-sans select-none cursor-pointer text-[14px]">
                                                No Participants
                                            </p>
                                        ) : (
                                            sortedParticipants.map((member, index) => (
                                                <div
                                                    key={index}
                                                    className="flex pr-[24px] border-solid border-b-[1px] pt-[15px] pl-[24px] pb-[15px] flex-row space-x-[10px] cursor-pointer items-center"
                                                >
                                                    <div className="w-[40px] h-[40px] rounded-full border-solid border-white border-[2px]">
                                                        <img
                                                            src="/assets/images/default.png"
                                                            className="w-full h-full object-cover object-center rounded-full"
                                                            alt="User"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-sans font-md text-[14px]">
                                                            {member?.teamLeader?.fullName}
                                                        </p>
                                                        <p className="font-sans text-[14px]">
                                                            {member?.teamLeader?.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        )}

                                        
                                        <div className='flex pr-[24px] pb-[15px] pl-[24px] pt-[15px] flex-row space-x-[10px] cursor-pointer items-center'>
                                            {!data || data.length === 0 ? (
                                                <Button disabled className='bg-umuravaBlueColor disabled:cursor-not-allowed w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                View All
                                                </Button>
                                            ) : (
                                                <Dialog>
                                                    <DialogTrigger className='w-full'>
                                                        <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                        View All
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className='bg-white w-full md:w-[600px] h-[600px] overflow-y-scroll'>
                                                        <div className='w-full h-full'>
                                                            <div className='p-[6px] border-b border-solid border-[#E4E7EC]'>
                                                                <p className='text-[#667185] font-sans select-none cursor-pointer text-start text-[14px]'>Participants in this challenge: {data.length}</p>
                                                            </div>
                                                            <div className='p-[6px] mt-[15px]'>

                                                            {data.length === 0 ? (
                                                                <p className="text-[#667185] text-center mt-[10px] font-sans select-none cursor-pointer text-[14px]">
                                                                    No Participants
                                                                </p>
                                                            ) : (
                                                                data.map((member, index: number) => (
                                                                    <div key={index} className='flex pr-[24px] bg-[#E4E7EC] border-solid border-b-[1px] pt-[15px] pl-[24px] pt-[15px] pb-[15px] flex-row space-x-[10px] cursor-pointer items-center'>
                                                                        <div className='w-[10px] h-[60px] bg-umuravaBlueColor'></div>
                                                                        <div className='flex flex-col'>
                                                                            <p className='font-sans font-md text-[14px]'>{member?.teamLeader?.fullName} (Team leader)</p>
                                                                            <p className='font-sans text-[14px]'>{member?.teamLeader?.email}</p>
                                                                            {member.submittedWork.length === 0 ? 
                                                                                (
                                                                                    <p className='font-sans text-[14px]'>Submitted work: <span className='text-umuravaBlueColor'>Not Provided</span> | <span className='text-umuravaBlueColor'>Not Provided</span></p>
                                                                                )
                                                                                :
                                                                                (
                                                                                    member.submittedWork.map((work, index: number) => (
                                                                                        <p key={index} className='font-sans text-[14px]'>Submitted work: <span className='text-umuravaBlueColor'>{work.liveProjectLink}</span> | <span className='text-umuravaBlueColor'>{work.resourcesLink}</span></p>
                                                                                    ))
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            )}
                                        </div>
                                        {/* user */}
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </ProtectedRoute>
    )
}

export default AdminChallengePage