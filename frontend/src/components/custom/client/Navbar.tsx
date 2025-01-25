"use client";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation links directly in the component
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Challenge & Hackathons", path: "#challenges" },
    { name: "For Educational Institutions", path: "#institutions" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          alt="logo"
          src="/assets/images/umurava-logo.png"
          width={150}
          height={150}
          className="rounded"
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "hover:text-blue-500 transition",
              currentPath === link.path && "text-blue-500 font-semibold"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Call-to-Action Button for Desktop */}
      <div className="hidden md:block">
        <Link
          href="#join"
          className="px-4 py-2 bg-[#041738] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Join the Program
        </Link>
      </div>

      {/* Hamburger Menu (visible on small screens) */}
      <button
        className="md:hidden text-blue-500 text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-md text-sm font-medium text-gray-600 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={clsx(
                "block py-2 hover:text-blue-500 transition",
                currentPath === link.path && "text-blue-500 font-semibold"
              )}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}

          {/* Add the button inside the mobile menu */}
          <div className="mt-4">
            <Link
              href="#join"
              className="w-full text-center px-4 py-2 bg-[#041738] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition block"
            >
              Join the Program
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
