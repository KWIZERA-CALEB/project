'use client';

import { Play } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';
import { TestmonialCard } from '../others/TestmonialCard'
import { Button } from "../../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Kwizera Caleb", role: "Software Engineer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Hiwa Pie", role: "Product Designer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Ntwari Brian", role: "Product Designer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Uwase Aline", role: "UX Researcher, Kigali", image: "/assets/demo/blue.png" },
  { name: "Ganza Patrick", role: "Frontend Developer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Shyaka Kevin", role: "Mobile Developer, Kigali", image: "/assets/demo/blue.png" },
];

const UsersInLove = () => {
  const CARD_WIDTH = 500;
  const CARD_GAP = 24;
  const VISIBLE_WIDTH = CARD_WIDTH + CARD_GAP;
  const PARTIAL_CARD_WIDTH = 100;

  const slides = [
    {
      label: "1",
    },
    {
      label: "2",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const showNextImage = () => {
    setSlideIndex((index) => (index + 1) % slides.length);
  };

  const showPrevImage = () => {
    setSlideIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * VISIBLE_WIDTH;
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (scrollContainerRef.current) {
        const transform = new WebKitCSSMatrix(
          getComputedStyle(scrollContainerRef.current).transform
        );
        const scrollPosition = -transform.m41;
        const newIndex = Math.round(scrollPosition / VISIBLE_WIDTH);
        setCurrentIndex(newIndex);
      }
    };

    scrollContainerRef.current?.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
    return () =>
      scrollContainerRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
  }, []);

  return (
    <section className="my-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Users Are in Love with the <br /> Skills Challenges Program
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          See what our clients say about working with us. Their success <br />
          speaks for our dedication and expertise.
        </p>

        <div className="hidden sm:block">
            <div
            className="w-full"
            style={{ maxWidth: `${VISIBLE_WIDTH * 2 + PARTIAL_CARD_WIDTH + 600}px` }}
          >
            <div className="overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  width: `${testimonials.length * VISIBLE_WIDTH}px`,
                  gap: `${CARD_GAP}px`,
                }}
              >
                {testimonials.map((video, index) => (
                  <div
                    key={index}
                    className="flex-none"
                    style={{ width: `${CARD_WIDTH}px` }}
                  >
                    <TestmonialCard {...video} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 lg:mt-16 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                >
                  {slides.map((slide: any, index: number) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 flex gap-6 px-2 md:px-12 flex-col py-2 md:flex-row  aspect-[1/1] border"
                    >
                      <div className="bg-umuravaBlueColor min-h-[70%] rounded-xl w-full"></div>
                      <div className="flex items-center gap-3">
                        <div className="h-14 w-14 bg-umuravaBlueColor rounded-full"></div>
                        <div>
                          <p className="text font-semibold">Manzi Jack</p>
                          <p className="text-sm text-mutedtext">Product Designer</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  onClick={showPrevImage}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-umuravaBlueColor"
                >
                  <ChevronLeft className="h-6 text-white w-6" />
                </Button>
                <Button
                  onClick={showNextImage}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-umuravaBlueColor"
                >
                  <ChevronRight className="h-6 text-white w-6" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_: any, index: number) => (
                <div
                  key={index}
                  onClick={() => setSlideIndex(index)}
                  className={`h-2 w-2 rounded-full cursor-pointer hover:scale-[1.1] ${
                    index === slideIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UsersInLove;
