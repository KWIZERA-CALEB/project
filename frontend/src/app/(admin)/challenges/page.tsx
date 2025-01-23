import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"




export default function AdminChallenges () {
    return (
        <div className='w-full h-[100vh] flex flex-row'>
            <Sidebar />
            <div className='flex-1 ml-[270px]'>
                <AdminNavbar />
                <div className='bg-[#F9FAFB] pr-[25px] pl-[25px] pt-[25px] pb-[25px] w-full min-h-screen'>
                    <div>
                        <h4 className='font-sans font-bold cursor-pointer select-none'>Challenges</h4>
                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Join a challenge or workspace to gain valuable experience</p>
                    </div>
                    <div className='mt-[40px]'>
                        {/* filters */}
                        <div className='flex flex-row space-x-[1px] mb-[10px]'>
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
                        </div>
                        {/* filters */}
                        <div className='grid grid-cols-3 gap-4'>
                            {/* card */}
                            <div className='bg-white rounded-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                <div className='pb-[20px] pr-[17px] pl-[17px] pt-[20px]'>
                                    <div className='w-full h-[180px] relative bg-umuravaBlueColor flex justify-center items-center rounded-[15px]'>
                                        <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                                        <div className='pt-[4px] pb-[4px] pr-[22px] pl-[22px] rounded-full right-[6px] top-[6px] absolute bg-[#0F973D] text-white'>
                                            <p className='font-sans font-bold text-[14px]'>Open</p>
                                        </div>
                                    </div>
                                    <div className='mt-[25px]'>
                                        <h4 className='font-sans font-bold text-[#101928] font-[600] cursor-pointer select-none'>Design a Dashboard for SokoFund</h4>
                                        <div className='mt-[17px]'>
                                            <p className='text-[#101928] font-bold font-sans text-[12px]'>Skills Needed:</p>
                                            <div className='flex flex-row space-x-[2px] flex-wrap mt-[5px]'>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>UI/UX Design</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>User Research</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>Frontend</p>
                                                </div>
                                            </div>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Seniority Level: <span className='text-[#777] font-sans font-regular'>(Junior, Intermediate, Senior)</span></p>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Timeline: <span className='text-[#777] font-sans font-regular'>15 Days</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border-t border-solid border-[#E4E7EC]'></div>
                                <div className='pb-[12px] pr-[17px] pl-[17px] pt-[12px]'>
                                    <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans'>View Challenge</Button>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className='bg-white rounded-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                <div className='pb-[20px] pr-[17px] pl-[17px] pt-[20px]'>
                                    <div className='w-full h-[180px] relative bg-umuravaBlueColor flex justify-center items-center rounded-[15px]'>
                                        <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                                        <div className='pt-[4px] pb-[4px] pr-[22px] pl-[22px] rounded-full right-[6px] top-[6px] absolute bg-[#0F973D] text-white'>
                                            <p className='font-sans font-bold text-[14px]'>Open</p>
                                        </div>
                                    </div>
                                    <div className='mt-[25px]'>
                                        <h4 className='font-sans font-bold text-[#101928] font-[600] cursor-pointer select-none'>Design a Dashboard for SokoFund</h4>
                                        <div className='mt-[17px]'>
                                            <p className='text-[#101928] font-bold font-sans text-[12px]'>Skills Needed:</p>
                                            <div className='flex flex-row space-x-[2px] flex-wrap mt-[5px]'>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>UI/UX Design</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>User Research</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>Frontend</p>
                                                </div>
                                            </div>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Seniority Level: <span className='text-[#777] font-sans font-regular'>(Junior, Intermediate, Senior)</span></p>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Timeline: <span className='text-[#777] font-sans font-regular'>15 Days</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border-t border-solid border-[#E4E7EC]'></div>
                                <div className='pb-[12px] pr-[17px] pl-[17px] pt-[12px]'>
                                    <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans'>View Challenge</Button>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className='bg-white rounded-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                <div className='pb-[20px] pr-[17px] pl-[17px] pt-[20px]'>
                                    <div className='w-full h-[180px] relative bg-umuravaBlueColor flex justify-center items-center rounded-[15px]'>
                                        <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                                        <div className='pt-[4px] pb-[4px] pr-[22px] pl-[22px] rounded-full right-[6px] top-[6px] absolute bg-[#0F973D] text-white'>
                                            <p className='font-sans font-bold text-[14px]'>Open</p>
                                        </div>
                                    </div>
                                    <div className='mt-[25px]'>
                                        <h4 className='font-sans font-bold text-[#101928] font-[600] cursor-pointer select-none'>Design a Dashboard for SokoFund</h4>
                                        <div className='mt-[17px]'>
                                            <p className='text-[#101928] font-bold font-sans text-[12px]'>Skills Needed:</p>
                                            <div className='flex flex-row space-x-[2px] flex-wrap mt-[5px]'>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>UI/UX Design</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>User Research</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>Frontend</p>
                                                </div>
                                            </div>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Seniority Level: <span className='text-[#777] font-sans font-regular'>(Junior, Intermediate, Senior)</span></p>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Timeline: <span className='text-[#777] font-sans font-regular'>15 Days</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border-t border-solid border-[#E4E7EC]'></div>
                                <div className='pb-[12px] pr-[17px] pl-[17px] pt-[12px]'>
                                    <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans'>View Challenge</Button>
                                </div>
                            </div>
                            {/* card */}
                            {/* card */}
                            <div className='bg-white rounded-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                <div className='pb-[20px] pr-[17px] pl-[17px] pt-[20px]'>
                                    <div className='w-full h-[180px] relative bg-umuravaBlueColor flex justify-center items-center rounded-[15px]'>
                                        <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                                        <div className='pt-[4px] pb-[4px] pr-[22px] pl-[22px] rounded-full right-[6px] top-[6px] absolute bg-[#0F973D] text-white'>
                                            <p className='font-sans font-bold text-[14px]'>Open</p>
                                        </div>
                                    </div>
                                    <div className='mt-[25px]'>
                                        <h4 className='font-sans font-bold text-[#101928] font-[600] cursor-pointer select-none'>Design a Dashboard for SokoFund</h4>
                                        <div className='mt-[17px]'>
                                            <p className='text-[#101928] font-bold font-sans text-[12px]'>Skills Needed:</p>
                                            <div className='flex flex-row space-x-[2px] flex-wrap mt-[5px]'>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>UI/UX Design</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>User Research</p>
                                                </div>
                                                <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                                    <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>Frontend</p>
                                                </div>
                                            </div>
                                            <div className='mt-[6px]'>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Seniority Level: <span className='text-[#777] font-sans font-regular'>(Junior, Intermediate, Senior)</span></p>
                                                <p className='text-[#101928] font-bold font-sans text-[12px]'>Timeline: <span className='text-[#777] font-sans font-regular'>15 Days</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border-t border-solid border-[#E4E7EC]'></div>
                                <div className='pb-[12px] pr-[17px] pl-[17px] pt-[12px]'>
                                    <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans'>View Challenge</Button>
                                </div>
                            </div>
                            {/* card */}
                        </div>

                        <div className='flex flex-row justify-between items-center pr-[30px] pl-[30px]'>
                            <Button className='bg-white text-[#667185] hover:bg-white/[90%] font-sans'>
                                Next
                            </Button>
                            <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%] font-sans'>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}