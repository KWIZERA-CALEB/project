"use client"
import React, { FC } from 'react';

const Hero: FC = () => {
  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side: Title and Paragraphs */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-14">
          <h3 className="text-blue-600 text-3xl font-bold tracking-wide mb-4">
            Our Story
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
            With 3 years of experience matching African digital talents to local and global job markets, we still remain with a big number of jobs that remain unfilled due to the lack of experienced African Talents.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a project-based learning solution for talents to gain real-world experience, solve problems, and build portfolios so that they become ready for global job markets.
          </p>
        </div>

        {/* Right Side: Video */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end h-96">
          <video
            className="w-full max-w-lg rounded-lg cursor-pointer"
            poster="/assets/videos/video_thumb.png"
            onClick={handleVideoClick}
          >
            <source src="/assets/videos/umurava_about_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
