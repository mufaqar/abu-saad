"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const slides = [
  {
    imgSrc: "/assets/img/slider/slider.jpeg",
    imgAlt: "Image ",
    captionTitle: "Design. Durability. Distinction.",
    captionSubtitle: "Blending tradition with modern design for timeless woodwork.",
    description:
      "Abu Saad Wood Works is a trusted name in high–quality wooden furniture, doors, cabinets, and interior designs. We blend traditional craftsmanship with modern design to create timeless wooden products for your home and office.",
    btnText: "Get A Quote",
  },
  {
    imgSrc: "/assets/img/slider/slider.2.jpg",
    imgAlt: "Image ",
    captionTitle: "Luxury Woodwork for Home & Office",
    captionSubtitle: "Bringing warmth and beauty of wood into your lifestyle.",
    description:
      "At Abu Saad Wood Works, we bring warmth and beauty of wood into your lifestyle with expertly crafted furniture, doors, cabinets, and interiors.",
    btnText: "Get A Quote",
  },
  // Add more slides as needed
];
export default function Hero() {
  return (
    <div className="swiper-container fullwidthbanner-container hero hero-1 rev_slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".spd22",
          bulletActiveClass: "selected",
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="tp-bullet ${className}">${index + 1}</div>`;
          },
          type: "bullets",
        }}
        navigation={{
          prevEl: ".snbp22",
          nextEl: ".snbn22",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="container">
              <div className="img-container ">
                <Image
                 alt={slide.imgAlt}
                  src={slide.imgSrc}
                  width={620}
                  height={572}
                  className="rounded-full img-slider rounded-2xl"
                />
              </div>
              <div className="content">
                <div className="text-green font-heading font-weight-500">
                  <span className="heading-tittle">{slide.captionTitle}</span>
                </div>
                <div className="text-black font-heading font-weight-400">
                  <span className="tittle1">{slide.captionSubtitle}</span>
                </div>
                <div className="line" />
                <div
                  className="text-black font-heading font-weight-400 description"
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                ></div>
                <div className="">
                  <Link href={`/contact`} className="btn get-a-quote">
                    {slide.btnText}
                  </Link>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tp-bullets custom horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe spd22"></div>

      {/* Add Navigation if needed */}
      <div
        className="tp-leftarrow tparrows custom  noSwipe snbp22"
        style={{
          top: "50%",
          transform: "matrix(1, 0, 0, 1, 120, -30)",
          left: 0,

          opacity: 1,
        }}
      />
      <div
        className="tp-rightarrow tparrows custom  noSwipe snbn22"
        style={{
          top: "50%",
          transform: "matrix(1, 0, 0, 1, -180, -30)",
          left: "100%",

          opacity: 1,
        }}
      />
    </div>
  );
}
