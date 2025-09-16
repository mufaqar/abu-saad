import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="row-about-us style-2  margin-top">
      {/* <div class="themesflat-spacer clearfix" data-desktop="137" data-mobile="60" data-smobile="60"></div> */}
      <Image
        className="bg-about-us"
        alt="Image"
        width={1920}
        height={730}
        src="/assets/img/shortcode/about-us/bg-about-us.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5" />
          <div className="col-lg-7 col-md-12">
            <div className="about-us service-about relative">
              <div className="themesflat-headings about-us style-1 clearfix">
                <span className="heading-shadown-text">ABOUT US</span>
                <h1 className="heading">
                  WE ARE QUALIFIED &amp; <br />
                  PROFESSIONAL
                </h1>
                <p className="sub-heading margin-top-6">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                  jumpy veldt fox. Bright vixens
                </p>
              </div>
              <div className="about-us-content">
                <div className="about-us-content-left">
                  <ul>
                    <li>
                      <Link href={`/service-detail`}>
                        Malesuada dictum neque
                      </Link>
                    </li>
                    <li>
                      <Link href={`/service-detail`}>
                        Malesuada dictum neque
                      </Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
