"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero: FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side: Title and Paragraphs */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-blue-600 text-2xl font-bold tracking-wide mb-4">
          Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution
          </h3>
          <p className="text-gray-600 text-base text-md sm:text-md mb-4 leading-relaxed">
          We partner with Universities, Schools, and Trainining Institutions to  build the work experience of their students and trainees through project based learning challenges and hackathons
          </p>

          <Button className="bg-blue-600 text-white px-10 py-6 rounded-sm shadow-md hover:bg-blue-700 transition">
         Partner with us
        </Button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full h-96 lg:w-auto">
            <Image
              alt="image 3"
              width={480}
              height={320}
              className="object-cover rounded-xl"
              src="/assets/images/Image3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
