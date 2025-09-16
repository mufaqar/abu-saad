"use client";
import { slides } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedProjects() {
  return (
    <div className="row-articles">
      <div className="col-md-12">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={137}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
      <div className="themesflat-headings style-2 wow fadeInUp article">
        <h1 className="heading project">RELATED PROJECTS</h1>
      </div>
      <Swiper
        className="swiper-container style-2 mySwiper3"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide wow ${slide.wowClass}`}
          >
            <div
              className={`box-img ${
                slide.isActive ? "active" : ""
              } wow fadeInUp`}
            >
              <div className="img">
                <Image
                  alt="Image"
                  width={370}
                  height={360}
                  src={slide.imgSrc}
                />
              </div>
              <div className="row-image-content style-2">
                <div className="row-image-content-text">
                  <div>
                    <span className="tittle">NEC VEHICULA </span>
                  </div>
                  <div>
                    <Link href={`/project-detail`} className="heading-tittle">
                      MAXIMUS LIBERO ORNARE
                    </Link>
                  </div>
                </div>
                <div className="row-image-content-link">
                  <Link href={`/project-detail`} className="icon">
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="col-md-12">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={90}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </div>
  );
}
