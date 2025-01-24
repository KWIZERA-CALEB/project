'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Sidebar = () => {
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
            navLink: '/talent/dashboard',
            navLabel: 'Dashboard',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill={currentPath === '/talent/dashboard' ? '#2B71F0' : '#fff'}>
                        <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>
                    </svg>,
        },
        {
            navLink: '/talent/challenges',
            navLabel: 'Challenges & Hackathons',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill={currentPath === '/talent/challenges' ? '#2B71F0' : '#fff'}>
                        <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
                    </svg>,
        },
    ]

    const downNavItems = [
        {
            navLink: '/settings',
            navLabel: 'Settings',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                        <path d="M2.21232 14.0601C1.91928 12.6755 1.93115 11.2743 2.21316 9.94038C3.32308 10.0711 4.29187 9.7035 4.60865 8.93871C4.92544 8.17392 4.50032 7.22896 3.62307 6.53655C4.3669 5.3939 5.34931 4.39471 6.53554 3.62289C7.228 4.50059 8.17324 4.92601 8.93822 4.60914C9.7032 4.29227 10.0708 3.32308 9.93979 2.21281C11.3243 1.91977 12.7255 1.93164 14.0595 2.21364C13.9288 3.32356 14.2964 4.29235 15.0612 4.60914C15.8259 4.92593 16.7709 4.5008 17.4633 3.62356C18.606 4.36739 19.6052 5.3498 20.377 6.53602C19.4993 7.22849 19.0739 8.17373 19.3907 8.93871C19.7076 9.70369 20.6768 10.0713 21.7871 9.94028C22.0801 11.3248 22.0682 12.726 21.7862 14.06C20.6763 13.9293 19.7075 14.2969 19.3907 15.0616C19.0739 15.8264 19.4991 16.7714 20.3763 17.4638C19.6325 18.6064 18.6501 19.6056 17.4638 20.3775C16.7714 19.4998 15.8261 19.0743 15.0612 19.3912C14.2962 19.7081 13.9286 20.6773 14.0596 21.7875C12.675 22.0806 11.2738 22.0687 9.93989 21.7867C10.0706 20.6768 9.70301 19.708 8.93822 19.3912C8.17343 19.0744 7.22848 19.4995 6.53606 20.3768C5.39341 19.633 4.39422 18.6506 3.62241 17.4643C4.5001 16.7719 4.92552 15.8266 4.60865 15.0616C4.29179 14.2967 3.32259 13.9291 2.21232 14.0601ZM3.99975 12.2104C5.09956 12.5148 6.00718 13.2117 6.45641 14.2963C6.90564 15.3808 6.75667 16.5154 6.19421 17.5083C6.29077 17.61 6.38998 17.7092 6.49173 17.8056C7.4846 17.2432 8.61912 17.0943 9.70359 17.5435C10.7881 17.9927 11.485 18.9002 11.7894 19.9999C11.9295 20.0037 12.0697 20.0038 12.2099 20.0001C12.5143 18.9003 13.2112 17.9927 14.2958 17.5435C15.3803 17.0942 16.5149 17.2432 17.5078 17.8057C17.6096 17.7091 17.7087 17.6099 17.8051 17.5081C17.2427 16.5153 17.0938 15.3807 17.543 14.2963C17.9922 13.2118 18.8997 12.5149 19.9994 12.2105C20.0032 12.0704 20.0033 11.9301 19.9996 11.7899C18.8998 11.4856 17.9922 10.7886 17.543 9.70407C17.0937 8.61953 17.2427 7.48494 17.8052 6.49204C17.7086 6.39031 17.6094 6.2912 17.5076 6.19479C16.5148 6.75717 15.3803 6.9061 14.2958 6.4569C13.2113 6.0077 12.5144 5.10016 12.21 4.00044C12.0699 3.99666 11.9297 3.99659 11.7894 4.00024C11.4851 5.10005 10.7881 6.00767 9.70359 6.4569C8.61904 6.90613 7.48446 6.75715 6.49155 6.1947C6.38982 6.29126 6.29071 6.39047 6.19431 6.49222C6.75668 7.48509 6.90561 8.61961 6.45641 9.70407C6.00721 10.7885 5.09967 11.4855 3.99995 11.7899C3.99617 11.93 3.9961 12.0702 3.99975 12.2104ZM11.9997 15.0002C10.3428 15.0002 8.99969 13.657 8.99969 12.0002C8.99969 10.3433 10.3428 9.00018 11.9997 9.00018C13.6565 9.00018 14.9997 10.3433 14.9997 12.0002C14.9997 13.657 13.6565 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path>
                    </svg>,
        },
        {
            navLink: '/help-center',
            navLabel: 'Help Center',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                        <path d="M12 4C7.58172 4 4 7.58172 4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4ZM4 14V19H7V14H4ZM17 14V19H20V14H17Z"></path>
                    </svg>,
        },
        {
            navLink: '/refer',
            navLabel: 'Refer family & friends',
            navIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                        <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path>
                    </svg>,
        },
    ]
    return (
        <div className='w-[270px] hidden fixed h-full bg-umuravaBlueColor md:flex flex-col p-[18px] justify-between'>
            <div>
                <img src='/assets/images/logo.png' className='w-[50px]' alt='Umurava' />
                <div className='flex flex-col space-y-[10px] mt-[20px]'>
                    {navItems.map((nav, index) => (
                        <Link key={index} href={nav.navLink}>
                            <div className={currentPath === nav.navLink ? 'flex flex-row cursor-pointer bg-white rounded-[6px]  pt-[6px] pb-[6px] pr-[5px] pl-[5px] items-center space-x-[10px]' : 'flex flex-row pt-[6px] pb-[6px] pr-[5px] hover:bg-[#333]/[30%] rounded-[6px] ease-in-out pl-[5px] cursor-pointer items-center space-x-[10px]'}>
                                <div>
                                    {nav.navIcon}
                                </div>
                                <div><p className={currentPath === nav.navLink ? 'font-sans text-umuravaBlueColor text-[14px]' : 'font-sans text-white text-[14px]'}>{nav.navLabel}</p></div>
                            </div>
                        </Link>
                    ))}
<<<<<<< HEAD
=======
                    <Dialog>
                        <DialogTrigger>
                            <div className='flex flex-row pt-[6px] pb-[6px] pr-[5px] hover:bg-[#333]/[30%] rounded-[6px] ease-in-out pl-[5px] cursor-pointer items-center space-x-[10px]'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                        <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                                    </svg>
                                </div>
                                <div><p className='font-sans text-white text-[14px]'>Community</p></div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
>>>>>>> master
                </div>
            </div>
            <div>
                <div className='flex flex-col space-y-[10px] mt-[20px]'>
                    {downNavItems.map((nav, index) => (
                        <div key={index} className='flex flex-row cursor-pointer rounded-[8px] items-center space-x-[10px]'>
                            <div>
                                {nav.navIcon}
                            </div>
                            <div><p className='font-sans text-[14px] text-white'>{nav.navLabel}</p></div>
                        </div>
                    ))}
                </div>
                <div className='mt-[20px] flex flex-row justify-between items-center'>
                    <div className='flex flex-row space-x-[10px] cursor-pointer items-center'>
                        <div className='w-[40px] h-[40px] rounded-full border-solid border-white border-[2px]'>
                            <img src="/assets/images/default.png" className='w-full h-full object-cover object-center rounded-full' alt="User"/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-sans text-white text-[14px]'>Hilare Sh</p>
                            <p className='font-sans text-white text-[14px]'>hilare@design</p>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                            <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar