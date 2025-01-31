import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col w-full lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 pt-20 mt-10">
      {/* Text Content */}
      <div className="md:w-[50%] w-full lg:max-w-lg text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight mb-6">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="text-[12px] md:text-[15px] text-gray-700 mb-8">
          Enhance your Employability and Accelerate your Career Growth by working on
          Hands-on projects & hackathons from various businesses & organizations.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link href="/login">
            <Button className='bg-umuravaBlueColor font-bold pr-[25px] pl-[25px] pt-[15px] pb-[15px] text-[12px] hover:bg-umuravaBlueColor/[90%] transition ease-in-out'>Get Started</Button>
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="mt-[60px] lg:mt-0 flex justify-center lg:justify-end w-full md:w-[50%] lg:w-auto">
        <div className="flex flex-row space-x-[20px]">
          {/* First Image */}
          <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/images/image2.png"
              alt="Team Collaboration"
              width={330}
              height={320}
              className="object-contain"
            />
          </div>
          {/* Second Image */}
          <div className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] lg:w-[320px] lg:h-[380px] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/images/image1.png"
              alt="Smiling Professional"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
