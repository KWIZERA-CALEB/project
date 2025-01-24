import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import ChallengeCard from '@/components/custom/admin/ChallengeCard'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'




export default function AdminDashboard () {
    return (
        <>
            <div className='w-full h-[100vh] flex flex-row'>
                <Sidebar />
                <div className='md:flex-1 w-full md:ml-[270px]'>
                    <AdminNavbar />
                    <div className='bg-[#F9FAFB] z-20 pr-[25px] pl-[25px] pt-[70px] pb-[70px] md:pb-[25px] w-full min-h-screen'>
                        <div>
                            <h4 className='font-sans font-bold cursor-pointer select-none'>Welcome back Hilare</h4>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Build Work Experience through Work Challenges</p>
                        </div>
                        {/* statistics */}
                        
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
                                <ChallengeCard challengeLink='/talent/challenges/577897' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/talent/challenges/879797' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/talent/challenges/778787' challengeTitle='Design a Dashboard for SokoFund' />
                                <ChallengeCard challengeLink='/talent/challenges/76565' challengeTitle='Design a Dashboard for SokoFund' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}