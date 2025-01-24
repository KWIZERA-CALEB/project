import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'



const AdminEditChallenge = ({ params }) => {
    const { id } = params; 
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
                                <Link href='/talent/challenges'>
                                    <div>
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Go Back</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'><Link href='/talent/challenges'>Challenges & Hackathons</Link> / <span className='text-umuravaBlueColor'>Design & Dashboard for SokoFund</span></p>
                            </div>
                        </div>

                        <div className='md:pr-[25px] md:pl-[25px] flex flex-col md:flex-row space-y-[6px] md:space-y-[0px] md:space-x-[25px] w-full'>
                            <div className='w-full md:w-[60%]'>
                                <div className='bg-white border-solid border-[1px] border-[#E4E7EC] p-[15px] rounded-[12px] mt-[20px]'>
                                    <div className='w-full h-[250px] bg-umuravaBlueColor flex justify-center items-center rounded-[10px]'>
                                        <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                                    </div>
                                    <div className='mt-[30px]'>
                                        <h4 className='font-sans font-bold cursor-pointer select-none text-start'>Project Brief : Payroll and HR Management System</h4>
                                        <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                        A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
                                        </p>
                                        <h4 className='font-sans font-bold mt-[6px] cursor-pointer select-none text-start'>Tasks:</h4>

                                        <div>
                                            <h4 className='font-sans font-bold mt-[6px] cursor-pointer select-none text-start'>Product Requirements:</h4>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                                A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='font-sans font-bold mt-[6px] cursor-pointer select-none text-start'>Product Design:</h4>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                                A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='font-sans font-bold mt-[6px] cursor-pointer select-none text-start'>Deliverables:</h4>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                                A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='font-sans font-bold mt-[6px] cursor-pointer select-none text-start'>NOTE:</h4>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                                A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-[40%]'>
                                <div className='bg-white border-solid border-[1px] border-[#E4E7EC] p-[15px] rounded-[12px] mt-[20px]'>
                                    <h4 className='font-sans font-bold cursor-pointer select-none text-start'>Key Instructions:</h4>
                                    <p className='text-[#667185] mt-[6px] font-sans select-none cursor-pointer text-start text-[14px]'>
                                    You are free to schedule the clarification call with the team via this
                                    </p>

                                    <div className='flex flex-col space-y-[10px] mt-[20px] mb-[20px]'>
                                        <div className='flex items-center flex-row space-x-[6px]'>
                                            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>talent@umurava.africa</h4>
                                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Contact Email</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-row space-x-[6px]'>
                                            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>Web Design</h4>
                                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Challenge Category</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-row space-x-[6px]'>
                                            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>7 Days</h4>
                                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Duration</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-row space-x-[6px]'>
                                            <div className='flex justify-center items-center w-[40px] h-[40px] rounded-full p-[6px] bg-[#D0E0FC]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='20' width='20' fill="#2B71F0">
                                                    <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className='font-sans font-bold cursor-pointer select-none'>$150 - $400</h4>
                                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Money Prize</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-[10px]'>
                                        <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                            Submit Your Work
                                        </Button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </>
    )
}

export default AdminEditChallenge