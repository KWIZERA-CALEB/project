"use client";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { useAppSelector } from '@/redux/hooks';

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Challenge & Hackathons", path: "/challenges_hackathons" },
    { name: "For Educational Institutions", path: "/for_learning_institutions" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between h-[80px] md:pl-[50px] pr-[20px] pl-[20px] md:pr-[50px] pt-[10px] pb-[10px]">
      <div className="flex items-center">
        <Image
          alt="logo"
          src="/assets/images/umurava-logo.png"
          width={150}
          height={150}
          className="rounded cursor-pointer"
        />
      </div>

      <div className="hidden md:flex items-center space-x-[15px] lg:space-x-8 text-sm text-gray-600">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "hover:text-blue-500 text-[12px] transition ease-in-out",
              currentPath === link.path && "text-blue-500"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        {user ? 
          <Link href="/dashboard">
            <Button className='bg-[#041738] text-[12px] hover:bg-umuravaBlueColor transition ease-in-out'>Open App</Button>
          </Link>
        : 
          <Link href="/login">
            <Button className='bg-[#041738] text-[12px] hover:bg-umuravaBlueColor transition ease-in-out'>Join the Program</Button>
          </Link>
        }
      </div>

      <button
        className="md:hidden text-blue-500 text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="#777">
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16  flex flex-col space-y-[10px] z-50 left-0 w-full bg-white p-4 shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                "hover:text-blue-500 text-[12px] transition ease-in-out",
                currentPath === link.path && "text-blue-500"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 w-full">
            {user ? 
              <Link href="/dashboard" className='w-full'>
                <Button className='bg-[#041738] w-full text-[12px] hover:bg-umuravaBlueColor transition ease-in-out'>Open App</Button>
              </Link>
            : 
              <Link href="/login" className='w-full'>
                <Button className='bg-[#041738] w-full text-[12px] hover:bg-umuravaBlueColor transition ease-in-out'>Join the Program</Button>
              </Link>
            }
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
