'use client'
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Challenge } from "@/utils/types"


import { useAppSelector } from '@/redux/hooks';

const AdminNavbar = () => {
    const [inputValue, setInputValue] = useState('')
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const { data = [] } = useAppSelector((state) => state.api);

    // const searchResults = data.filter(challenge => challenge.challengeTitle === inputValue);

    const searchResults = data.filter((challenge: Challenge) => 
        challenge.challengeTitle && challenge.challengeTitle.toLowerCase().includes(inputValue.toLowerCase())
    );
    
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        if (inputValue.length > 0) {
            setIsPopoverOpen(true)
        } else {
            setIsPopoverOpen(false)
        }
    }, [inputValue])

    return (
        <div className='h-[50px] pr-[25px] fixed top-0 left-0 md:left-[270px] right-0 z-50 pl-[25px] flex flex-row justify-between items-center w-full md:w-[calc(100vw-270px)] bg-white'>
            <div className='relative'>
                <Popover open={isPopoverOpen}>
                    <PopoverTrigger>
                        <Input 
                            type="email" 
                            placeholder="Search here..." 
                            className='md:w-[400px] flex-1 pl-[30px] bg-[#F9FAFB] placeholder-gray-500'
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </PopoverTrigger>
                    <PopoverContent className='w-[100vw] pt-[0px] pr-[0px] pl-[0px] pb-[15px] md:w-[400px]'>
                        <div className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Search Results ({searchResults.length || 0})</p>
                        </div>
                        {searchResults.map((challenge: Challenge, index: number) => (
                            <div key={index} className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                                <p className='text-[#667185] font-sans select-none cursor-pointer text-umuravaBlueColor text-[14px]'><Link href={`/challenges/${challenge._id}`}>{challenge.challengeTitle}</Link></p>
                            </div>
                        ))}
                        {searchResults.length === 0 &&
                        <div className='pt-[10px] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-center text-[14px]'>No Results</p>
                        </div>
                        }
                    </PopoverContent>
                </Popover>
                <div className='absolute left-[10px] top-[50%] transform -translate-y-[50%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#333">
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                </div>
            </div>
            <div className='flex flex-row space-x-[10px]'>
                <Popover>
                    <PopoverTrigger>
                        <div className='w-[35px] h-[35px] cursor-pointer rounded-full bg-[#F9FAFB] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' width='18' fill="#333">
                                <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
                            </svg>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='pt-[0px] pr-[0px] pl-[0px] pb-[15px] w-[400px]'>
                        <div className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Notifications</p>
                        </div>
                        <div className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-umuravaBlueColor text-[14px]'>You have been allowed to join</p>
                        </div>
                        <div className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-umuravaBlueColor text-[14px]'>You have been allowed to join</p>
                        </div>
                        <div className='pt-[10px] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-center text-[14px]'>No more notifications</p>
                        </div>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <div className='w-[35px] h-[35px] cursor-pointer rounded-full'>
                            <img src="/assets/images/default.png" className='w-full h-full object-cover object-center rounded-full' alt="User"/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='pt-[10px] pr-[0px] pl-[0px] pb-[15px] w-[400px]'>
                        <div className='pt-[10px] border-b border-solid border-[#E4E7EC] pr-[10px] pl-[10px] pb-[6px]'>
                            <p className='text-[#667185] font-sans select-none cursor-pointer text-[14px]'>Profile Details</p>
                        </div>
                        <div className='mt-[20px] flex flex-row pr-[15px] pl-[15px] justify-between items-center'>
                            <div className='flex flex-row space-x-[10px] cursor-pointer items-center'>
                                <div className='w-[40px] h-[40px] rounded-full border-solid border-white border-[2px]'>
                                    <img src="/assets/images/default.png" className='w-full h-full object-cover object-center rounded-full' alt="User"/>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-sans text-[14px]'>Hilare Sh</p>
                                    <p className='font-sans text-[14px]'>hilare@design</p>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#ff0000'>
                                    <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
                                </svg>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default AdminNavbar