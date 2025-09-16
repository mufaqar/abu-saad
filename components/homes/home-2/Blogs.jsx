"use client";
import { articles2 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <div className="row-articles style-2">
      <div className="container">
        <div className="col-md-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={143}
            data-mobile={143}
            data-smobile={180}
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="themesflat-headings article style-2 wow fadeInUp clearfix">
              <span className="heading-shadown-text">NEWS</span>
              <h1 className="heading">OUR LATEST NEWS</h1>
              <p className="sub-heading">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="owl-carousel style-2 owl-theme d-block ">
              <Swiper
                style={{ maxWidth: "100%", position: "relative" }}
                slidesPerView={2}
                freeMode
                breakpoints={{
                  0: { slidesPerView: 1 },
                  575: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2.38,
                  },
                }}
                modules={[Navigation, FreeMode]}
                navigation={{
                  prevEl: ".snbp2",
                  nextEl: ".snbn2",
                }}
                spaceBetween={30}
              >
                {articles2.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={`item acticle wow ${item.wowClass}`}
                  >
                    <div className="img-overlay" />
                    <div className="top-acticle">
                      <span className="adm">
                        <Link href={`/blog-detail`}>BY ADMIN</Link>
                      </span>
                      <span className="transport">
                        <Link href={`/blog-detail`}>{item.category}</Link>
                      </span>
                    </div>
                    <Link href={`/blog-detail`} className="link-articles">
                      {item.title}
                    </Link>
                    <p className="date-article">{item.date}</p>
                    <p className="content">{item.content}</p>
                    <Link href={`/blog-detail`} className="btn-read-more">
                      Read More
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="owl-nav disabled">
                <div className="owl-prev">
                  <i className="fa fa-arrow-left snbp2" />
                </div>
                <div className="owl-next">
                  <i className="fa fa-arrow-right snbn2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={119}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    </div>
  );
}
