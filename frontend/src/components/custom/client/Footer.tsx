import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0C1C3D] text-white py-8 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Social Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <img
            src="/assets/images/footer_logo.png"
            alt="Logo"
            className="h-16 w-16"
          />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Visit our Facebook page"
              className="hover:opacity-75 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Send us an email"
              className="hover:opacity-75 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Visit our LinkedIn profile"
              className="hover:opacity-75 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Visit our YouTube channel"
              className="hover:opacity-75 transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <hr className="border-gray-600 mb-8" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Address Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Address</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-white" />
                <a
                  href="mailto:career@tickets.com"
                  className="hover:underline text-gray-500 transition"
                >
                  career@tickets.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-white" />
                <a
                  href="#"
                  className="hover:underline text-gray-500 transition"
                >
                  89 KG 14 Ave, Kigali
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-white" />
                <a
                  href="tel:+250700000"
                  className="hover:underline text-gray-500 transition"
                >
                  +250 700 000
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-500">
              {["Home", "Program", "About", "Contact Us"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Join our newsletter to keep up to <br /> date with us!
            </h3>
            <form className="flex items-center border border-gray-400 rounded-md overflow-hidden">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 w-full text-black focus:outline-none h-14 px-5"
                  required
                  aria-label="Enter your email"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 h-full"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:underline transition">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline transition">
              Terms and Conditions
            </a>
          </div>
          <p>Copyright &copy; All Rights Reserved SawaPay 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
