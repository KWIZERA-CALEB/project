import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'



const AdminEditChallenge = () => {
    return (
        <>
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
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Go Back</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'><Link href='/challenges'>Challenges & Hackathons</Link> / <span className='text-umuravaBlueColor'>Edit Challenge</span></p>
                            </div>
                        </div>
                        {/* create form */}
                        <div className='w-full mt-[20px] flex justify-center'>
                            <div className='bg-white w-[600px] rounded-[15px] p-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                <div>
                                    <h4 className='font-sans font-bold cursor-pointer select-none text-center'>Edit Challenge</h4>
                                    <p className='text-[#667185] font-sans select-none cursor-pointer text-center text-[14px]'>Fill out these fields to build your broadcast</p>
                                </div>
                                <div className='mt-[15px]'>
                                    <div className='flex flex-col space-y-[2px]'>
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Challenge/Hackathon Title</p>
                                        <Input type='text' placeholder='Enter Title' className='shadow-none pt-[20px] pb-[20px]' />
                                    </div>
                                    <div className='w-full flex flex-row items-center mt-[10px] space-x-[6px]'>
                                        <div className='flex flex-col w-[50%] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Deadline</p>
                                            <Input type='text' placeholder='Date' className='shadow-none pt-[20px] pb-[20px]' />
                                        </div>
                                        <div className='flex flex-col w-[50%] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Duration</p>
                                            <Input type='text' placeholder='Duration' className='shadow-none pt-[20px] pb-[20px]' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-row items-center mt-[10px] space-x-[6px]'>
                                        <div className='flex flex-col w-[50%] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Money Prize</p>
                                            <Input type='text' placeholder='Prize' className='shadow-none pt-[20px] pb-[20px]' />
                                        </div>
                                        <div className='flex flex-col w-[50%] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Contact Email</p>
                                            <Input type='email' placeholder='Email' className='shadow-none pt-[20px] pb-[20px]' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Description</p>
                                        <Textarea type='text' placeholder='Enter text here...' className='shadow-none h-[120px]' />
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                    </div>
                                    <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Brief</p>
                                        <Textarea type='text' placeholder='Enter text here...' className='shadow-none h-[120px]' />
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                    </div>
                                    <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Description & Tasks</p>
                                        <Textarea type='text' placeholder='Enter text here...' className='shadow-none h-[120px]' />
                                        <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                    </div>
                                    <div className='flex w-full flex-row space-x-[6px] mt-[10px] justify-between items-center'>
                                        <Button className='bg-white w-[50%] text-umuravaBlueColor border-solid border-[2px] border-umuravaBlueColor hover:bg-white/[90%] font-sans'>
                                            Cancel
                                        </Button>
                                        <Button className='bg-umuravaBlueColor w-[50%] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                            Update Challenge
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* create form */}
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}

export default AdminEditChallenge