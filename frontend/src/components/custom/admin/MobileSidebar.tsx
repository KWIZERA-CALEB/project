'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


const MobileSidebar = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (pathname) {
            setCurrentPath(pathname);
        }
    }, [pathname]);

    if (typeof window === 'undefined') {
        return null;
    }

    console.log(currentPath);

    const navItems = [
        {
            navLink: '/dashboard',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill={currentPath === '/dashboard' ? '#2B71F0' : '#fff'}>
                        <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>
                    </svg>,
        },
        {
            navLink: '/challenges',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill={currentPath === '/challenges' ? '#2B71F0' : '#fff'}>
                        <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                    </svg>,
        },
    ]

    return (
        <div className='w-full h-[50px] block md:hidden fixed bottom-0 left-0 right-0 pr-[15px] pl-[15px] flex flex-row items-center justify-between bg-umuravaBlueColor'>
            {navItems.map((nav, index) => (
                <Link key={index} href={nav.navLink}>
                    <div className={currentPath === nav.navLink ? 'hover:bg-[#333]/[30%] rounded-full ease-in-out cursor-pointer flex justify-center w-[30px] h-[30px] items-center bg-white' : 'hover:bg-[#333]/[30%] rounded-full ease-in-out cursor-pointer flex justify-center w-[30px] h-[30px] items-center'}>
                        <div>
                            {nav.navIcon}
                        </div>
                    </div>
                </Link>
            ))}
             <Dialog>
                <DialogTrigger>
                    <div className='hover:bg-[#333]/[30%] rounded-full ease-in-out cursor-pointer flex justify-center w-[30px] h-[30px] items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                            </svg>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className='bg-white flex justify-center'>
                    <div>
                        <div className='flex justify-center'>
                            <img src='/assets/images/share-icon.png' className='cursor-pointer w-[60px]' alt='join whatsapp' />
                        </div>
                        <div className='mt-[20px]'>
                            <div>
                                <h4 className='font-bold text-center cursor-pointer text-[#101928] select-none'>Join our WhatsApp community</h4>
                                <p className='text-[#667185] text-center select-none cursor-pointer text-[14px]'>Get notified on the latest projects and hackathons</p>
                            </div>
                        </div>
                        <div className='mt-[20px] flex justify-center'>
                            <Button className='bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>
                                Join
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
};

export default MobileSidebar