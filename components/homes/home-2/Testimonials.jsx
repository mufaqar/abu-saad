"use client";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="row-question style-2">
      <div className="container-fluid">
        <div className="question">
          <Image
            className="img-left-question"
            alt="Image"
            src="/assets/img/shortcode/question/bg-question-left.png"
            width={282}
            height={439}
          />
          <Image
            className="img-right-question"
            alt="Image"
            src="/assets/img/shortcode/question/bg-question-right.png"
            width={815}
            height={678}
          />
          <div className="row">
            <div className="col-md-12">
              <div className="themesflat-headings style-1 question text-center wow fadeInUp clearfix">
                <span className="heading-shadown-text">TESTIMONIALS</span>
                <h1 className="heading">CLIENT TESTIMONIALS</h1>
                <p className="sub-heading">
                  Fonsetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut <br />
                  labore et dolore magna aliquyam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-question-slider">
          <div className="container">
            <Swiper
              className="swiper-container style-2 mySwiper2"
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd2",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1199: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
            >
              {testimonials2.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`swiper-slide wow ${item.wowClass}`}
                >
                  <div className="box-question text-center">
                    <Image
                      alt="Image"
                      src={item.imgSrc}
                      width={98}
                      height={98}
                    />
                    <span className="fa fa-quote-left" />
                    <p>{item.text}</p>
                    <div className="author-content">
                      <div className="name-author">
                        <a href="#">{item.author}</a>
                      </div>
                      <div>
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination style-2 spd2" />
          </div>
        </div>
      </div>
    </div>
  );
}
