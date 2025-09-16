import React from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/common/Counter";
export default function About() {
  return (
    <div className="row-aubout-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={110}
              data-mobile={60}
              data-smobile={60}
            />
            <Image
              className="img-about-us"
              alt="Image"
              src="/assets/img/shortcode/about-us/about-us-left.jpg"
              width={500}
              height={601}
            />
            <Image
              className="img-about-us-1"
              alt="Image"
              src="/assets/img/shortcode/about-us/about-us-left-1.png"
              width={277}
              height={241}
            />
            <Image
              className="img-about-us-2"
              alt="Image"
              src="/assets/img/shortcode/about-us/about-us-left-2.png"
              width={250}
              height={400}
            />
            <div
              className="themesflat-counter wow fadeInUp clearfix animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="counter-item-about-us">
                <div className="text-wrap">
                  <div className="icon" />
                  <div className="number-wrap">
                    <span
                      className="number"
                      data-speed={3000}
                      data-to={10}
                      data-inviewport="yes"
                    >
                      <Counter max={10} />
                    </span>{" "}
                    <span className="suffix">+</span>
                  </div>
                </div>
                <h3 className="heading">Years Of Experiences</h3>
              </div>
            </div>

            <div
              className="themesflat-spacer clearfix"
              data-desktop={244}
              data-mobile={60}
              data-smobile={0}
            />
          </div>
          <div className="col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={183}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings about-us style-2 wow fadeInUp clearfix relative">
              <span className="heading-shadown-text">ABOUT US</span>
              <h1 className="heading">
                WE ARE QUALIFIED &amp; <br />
                PROFESSIONAL
              </h1>
              <p className="sub-heading">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
                fox. Bright vixens
              </p>
            </div>
            <div className="about-us-content">
              <div className="about-us-content-left">
                <ul>
                  <li>
                    <Link href={`/service-detail`}>Malesuada dictum neque</Link>
                  </li>
                  <li>
                    <Link href={`/service-detail`}>Malesuada dictum neque</Link>
                  </li>
                </ul>
              </div>
              <div className="about-us-content-right">
                <ul>
                  <li>
                    <Link href={`/service-detail`}> Tempor commodo </Link>
                  </li>
                  <li>
                    <Link href={`/service-detail`}> Tempor commodo </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={68}
              data-mobile={120}
              data-smobile={85}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
