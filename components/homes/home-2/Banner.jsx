import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="row-content">
      <div className="row">
        <div className="col-md-6">
          <Image
            className="img-content-left"
            alt="Image"
            src="/assets/img/shortcode/content/content-left.png"
            width={1039}
            height={668}
          />
        </div>
        <div className="col-md-6">
          <Image
            className="img-content-right"
            alt="Image"
            src="/assets/img/shortcode/content/content-right.jpg"
            width={945}
            height={665}
          />
          <div className="box-content wow fadeInRight">
            <div className="icon" />
            <div className="content">
              <h3 className="heading">Best Awarded Company</h3>
              <p className="sub-heading">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-6">
          <div className="themesflat-headings content style-1 wow fadeInUp clearfix">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={500}
            />
            <h1 className="heading">
              WE BUILDING EVERYTHING BEST THAT YOU NEEDED
            </h1>
            <p className="sub-heading style-1">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
              nymphs grab
            </p>
            <ul className="content-link">
              <li>
                <span>01</span>
                <Link href={`/service`}>Libero nullam porttitor </Link>
              </li>
              <li>
                <span>02</span>
                <Link href={`/service`}>Ligula neque velit </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
