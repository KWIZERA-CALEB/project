import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#F9FAFB]">
      <div className="text-center flex flex-col items-center space-y-6">
        {/* Circle Illustration */}
        <div className="relative">
          <div className="w-[150px] h-[150px] bg-[#E4E7EC] rounded-full flex items-center justify-center">
            <div className="w-[120px] h-[120px] bg-[#F9FAFB] rounded-full border-[5px] border-[#E4E7EC] flex items-center justify-center">
              <p className="text-[50px] font-bold text-[#667185] select-none">404</p>
            </div>
          </div>
          <div className="absolute w-[200px] h-[10px] bg-[#E4E7EC] rounded-full top-[160px] opacity-50 blur-sm"></div>
        </div>

        {/* Text Content */}
        <div className="max-w-md">
          <h4 className="font-extrabold text-[24px] text-[#1F2937]">
            Oops! Page Not Found
          </h4>
          <p className="text-[#667185] text-[16px]">
            The page you are looking for doesn’t exist or has been moved. Don’t worry, we’ll help you find your way.
          </p>
        </div>

        {/* Go Back Button */}
        <Link href="/">
          <Button className="bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%] px-6 py-3 rounded-md">
            Go Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
