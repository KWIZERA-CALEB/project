import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 pt-20 mt-20">
      {/* Text Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-4xl font-bold text-blue-600 leading-tight mb-6">
          Build Work Experience  through Skills Challenges Program
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Enhance your Employability and Accelerate your Career Growth by working on
          Hands-on projects & hackathons from various businesses & organizations.
        </p>

        <Button className="bg-blue-600 text-white px-10 py-6 rounded-sm shadow-md hover:bg-blue-700 transition">
          Get Started
        </Button>
      </div>

      {/* Image Content */}
      <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <div className="grid grid-cols-2">
          {/* First Image */}
          <div className="w-[320px] h-[320px] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/images/image 2.png"
              alt="Team Collaboration"
              width={330}
              height={320}
              className="object-contain"
            />
          </div>
          {/* Second Image */}
          <div className="w-[320px] h-[380px] flex items-center justify-center rounded-xl ">
            <Image
              src="/assets/images/image 1.png"
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
