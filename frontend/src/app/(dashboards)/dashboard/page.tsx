import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import Link from 'next/link'
import ChallengeCard from '@/components/custom/admin/ChallengeCard'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'




export default function AdminDashboard () {
    const currentUser = 'admin'
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
                        {currentUser === 'client' ? 
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
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Total Challenge</p>
                                            <div className='flex flex-row items-center space-x-[10px]'>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-[#777] font-bold text-[12px]'>This week</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-[#777] font-bold text-[12px]'>This week</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-[#777] font-bold text-[12px]'>This week</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-[#777] font-bold text-[12px]'>This week</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
                                                <div className='bg-[#E7F6EC] flex flex-row items-center space-x-[2px] p-[4px] rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='12' width='12' fill="#2B71F0">
                                                        <path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>
                                                    </svg>
                                                    <p className='font-sans text-umuravaBlueColor font-bold text-[12px]'>15%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center absolute top-[10px] right-[10px] cursor-pointer space-x-[4px]'>
                                        <p className='font-sans text-[#777] font-bold text-[12px]'>This month</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#777">
                                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                            <div className='md:mt-[12px] mt-[6px] w-full flex flex-col space-y-[6px] md:space-y-[0px] md:flex-row justify-between items-center md:space-x-[12px]'>
                                <div className='bg-white h-[120px] rounded-[15px] w-full md:w-[50%] flex items-center border-solid border-[1px] border-[#E4E7EC] p-[16px]'>
                                    <div className='flex flex-row justify-between w-full items-center'>
                                        <div className='pl-[10px] border-l-[3px] border-solid border-umuravaBlueColor'>
                                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Completed Challenge</p>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
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
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>29,405</h4>
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
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                <ChallengeCard challengeLink='/challenges/577897' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/challenges/879797' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/challenges/778787' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/challenges/76565' challengeTitle='Design a Dashboard for SokoFund' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}