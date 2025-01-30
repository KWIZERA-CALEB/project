'use client'
import { Play } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const UsersInLove = () => {

  const testimonials = [
    {
      name: "Kwizera Caleb",
      role: "Software Engineer, Kigali",
      image: "/assets/demo/blue.png",
    },
    {
      name: "Hiwa Pie",
      role: "Product Designer, Kigali",
      image: "/assets/demo/blue.png",
    },
    {
      name: "Ntwari Brian",
      role: "Product Designer, Kigali",
      image: "/assets/demo/blue.png",
    },
    {
      name: "Ntwari Brian",
      role: "Product Designer, Kigali",
      image: "/assets/demo/blue.png",
    },
    {
      name: "Ntwari Brian",
      role: "Product Designer, Kigali",
      image: "/assets/demo/blue.png",
    },
    {
      name: "Ntwari Brian",
      role: "Product Designer, Kigali",
      image: "/assets/demo/blue.png",
    },
  ];


  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 text-left">
          Users are in Love with Skills <br/>Challenges Program
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 text-left">
          See what our clients say about working with us. Their success <br/> speaks for our dedication and expertise.
        </p>

        <div className="z-10">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1.5, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-[430px] h-[300px] cursor-pointer border border-gray-200 bg-white rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full h-[250px] bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-[50px] h-[50px] bg-blue-200 rounded-full flex items-center justify-center">
                      <Play size={28} color="white" />
                    </div>
                  </div>
                  <div className="flex w-full space-x-[6px] items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-[16px] text-[#00473B]">{testimonial.name}</p>
                      <p className="text-sm text-[14px] text-[#737373]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default UsersInLove;
