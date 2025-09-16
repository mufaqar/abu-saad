"use client";
import { articles } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Blogs() {
  return (
    <div className="row-articles">
      <div className="container">
        <div className="col-md-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={175}
            data-mobile={120}
            data-smobile={120}
          />
        </div>
        <div className="themesflat-headings style-2 wow fadeInUp article">
          <h1 className="heading">OUR INSIGHTS &amp; ARTICLES</h1>
        </div>
        <Swiper
          className="owl-carousel owl-theme d-block box-shadow "
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
        >
          {articles.map((article, i) => (
            <SwiperSlide key={i} className={`item ${article.className}`}>
              <div className="img">
                <div className="img-overlay" />
                <Image
                  alt="Image"
                  width={370}
                  height={215}
                  src={article.imgSrc}
                />
              </div>
              <ul>
                <li>
                  <Link className="date-articles" href={`/blog-detail`}>
                    {article.date}
                  </Link>
                </li>
              </ul>
              <div className="box-acticle">
                <Link href={`/blog-detail`} className="link-articles">
                  {article.title}
                </Link>
                <p className="content">{article.content}</p>
                <i className="line" />
                <Link href={`/blog-detail`} className="btn-read-more">
                  READ MORE
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="col-md-12">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={120}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    </div>
  );
}
