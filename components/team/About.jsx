import React from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "../common/Counter";
export default function About() {
  return (
    <div className="row-about-us style-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={158}
              data-mobile={80}
              data-smobile={80}
            />
            <Image
              className="img-team-about-us"
              alt="Image"
              src="/assets/img/shortcode/about-us/about-us-left-3.jpg"
              width={534}
              height={637}
            />
            <Image
              className="img-team-about-us-2"
              alt="Image"
              src="/assets/img/shortcode/about-us/about-us-left-4.jpg"
              width={154}
              height={184}
            />
          </div>
          <div className="col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={240}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings team-about-us style-2 wow fadeInUp clearfix">
              <span className="heading-shadown-text">ABOUT US</span>
              <h1 className="heading">TAKE ALL DATA AND THINK ABOUT IT!</h1>
            </div>
            <div className="about-us-wrap">
              <div className="box-about-us">
                <div className="themesflat-counter">
                  <span className="number">
                    <Counter max={90} />
                  </span>
                  <span className="percent">%</span>
                </div>
                <div className="content">
                  <div className="title">
                    <Link href={`/service-detail`}>Flexible Solutions</Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                  </p>
                </div>
              </div>
              <div className="box-about-us">
                <div className="themesflat-counter style-2">
                  <span className="number">
                    <Counter max={76} />
                  </span>
                  <span className="percent">%</span>
                </div>
                <div className="content">
                  <div className="title">
                    <Link href={`/service-detail`}>Flexible Solutions</Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
