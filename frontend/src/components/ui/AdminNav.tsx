import React from "react";
import { FiBell } from "react-icons/fi";
import Image from "next/image";

export default function AdminNav() {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white shadow">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-gray-100 rounded-lg px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search here..."
          className="flex-grow bg-transparent outline-none px-4 text-sm text-gray-700"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <FiBell className="text-xl text-gray-600" />
        </button>

        {/* Profile Section */}
        <Image
          src="/assets/images/profile.jpg" // Replace with your profile image
          alt="Profile"
          className="rounded-full"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
