import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0C1C3D] text-white py-8 text-sm">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Social Links Section */}
        <div className="flex justify-between items-center mb-4">
          <img src="/assets/images/footer_logo.png" alt="Logo" className="h-16 w-16" />
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-75">
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
                <a href="mailto:career@tickets.com" className="hover:underline  text-gray-500">career@tickets.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-white" />
                <a href="#" className="hover:underline  text-gray-500">89 KG 14 Ave, Kigali</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+250700000" className="hover:underline  text-gray-500">+250 700 000</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2  text-gray-500">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Program</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join our newsletter to keep up to <br/> date with us!</h3>
            <form className="flex items-center border border-gray-400 rounded-md overflow-hidden">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 w-full text-black focus:outline-none h-14 px-5"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 h-full">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
          <p>Copyright &copy; All Rights Reserved SawaPay 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
