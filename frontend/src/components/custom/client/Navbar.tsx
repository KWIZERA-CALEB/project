import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 mb-80 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/images/Umurava logo.png" // Replace with the correct logo path
            alt="Umurava Logo"
            className="h-12 w-auto" // Increased logo width
          />
          
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            href="#challenges"
            className="text-gray-700 hover:text-blue-600"
          >
            Challenge & Hackathons
          </Link>
          <Link
            href="#institutions"
            className="text-gray-700 hover:text-blue-600"
          >
            For Educational Institutions
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="#join"
            className="bg-blue-950 text-white px-5 py-3 rounded-sm shadow-md hover:bg-blue-900 transition"
          >
            Join the Program
          </Link>
        </div>
      </div>
    </nav>
  );
}
