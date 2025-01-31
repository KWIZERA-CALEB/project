'use client';

import { Play } from 'lucide-react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';

const testimonials = [
  { name: "Kwizera Caleb", role: "Software Engineer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Hiwa Pie", role: "Product Designer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Ntwari Brian", role: "Product Designer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Uwase Aline", role: "UX Researcher, Kigali", image: "/assets/demo/blue.png" },
  { name: "Ganza Patrick", role: "Frontend Developer, Kigali", image: "/assets/demo/blue.png" },
  { name: "Shyaka Kevin", role: "Mobile Developer, Kigali", image: "/assets/demo/blue.png" },
];

const UsersInLove = () => {
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

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            spaceBetween={50} // Increased spacing to prevent card collision
            pagination={{ clickable: true, el: ".custom-pagination" }}
            freeMode={true}
            modules={[Pagination, FreeMode]}
            className="mySwiper pb-12" // Added padding-bottom to prevent collision with pagination
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 35 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1280: { slidesPerView: 3.5, spaceBetween: 45 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-[340px] h-[320px] cursor-pointer border border-gray-200 bg-white rounded-lg p-6 flex flex-col items-center shadow-md">
                  <div className="w-full h-[200px] bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-[55px] h-[55px] bg-blue-200 rounded-full flex items-center justify-center">
                      <Play size={30} color="white" />
                    </div>
                  </div>
                  <div className="flex w-full items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`Profile picture of ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[16px] text-[#00473B]">{testimonial.name}</p>
                      <p className="text-sm text-[#737373]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Positioned Properly */}
          <div className="custom-pagination mt-8 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default UsersInLove;
