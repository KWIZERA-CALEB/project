
import React from "react";
import { Button } from "./button";
import { FiSettings, FiHelpCircle, FiArrowRight } from "react-icons/fi";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";


export default function SideNav() {
  return (
    <div className="h-screen w-64 bg-blue-500 text-white flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex items-center justify-center py-6">
          <div className="bg-white p-2 rounded-full">
            <Image
              src="/logo.svg" // Replace with your logo
              alt="Logo"
              className="w-10 h-10"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 px-4">
          
          {[
            { label: "Dashboard", icon: <AiOutlineHome /> ,href:"dashboard"},
            { label: "Challenges & Hackathons", icon: <AiOutlineFile /> ,href:"challenges" },
            { label: "Community", icon: <AiOutlineUser />, href:"Community" },
          ].map((item, index) => (
          
            <Button
              key={index}
              variant="ghost"
              className={`w-full flex justify-start gap-4 py-2 px-4 rounded-md ${
                index === 0 ? "bg-blue-700" : "hover:bg-blue-600"
              }`}
            >
              {item.icon}
              {item.label}
            </Button>
            
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <div className="mb-6 space-y-0 px-4">
      <Link href={"/setting"}>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-4 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FiSettings />
         Settings
          
        </Button>
        </Link>  
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-4 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FiHelpCircle />
          Help Center
        </Button>
        <Button
          variant="ghost"
          className="w-full flex justify-start gap-4 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Refer family & friends
        </Button>

        {/* Profile Section */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/profile.jpg" // Replace with profile image
              alt="Profile"
              className="w-10 h-10 rounded-full"
              width={100}
              height={100}
            />
            <div>
              <p className="font-medium">Hilaire Sh</p>
              <p className="text-sm text-blue-200">hilaire@uidesign</p>
            </div>
          </div>
          <FiArrowRight className="text-xl text-blue-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
