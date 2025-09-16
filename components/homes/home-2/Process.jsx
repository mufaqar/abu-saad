import React from "react";
import Image from "next/image";
export default function Process() {
  return (
    <div className="row-work style-2">
      <div className="col-md-6">
        <div className="bg-img-work">
          <Image
            alt="Image"
            src="/assets/img/shortcode/work/bg-work-2.png"
            width={967}
            height={534}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={292}
              data-mobile={260}
              data-smobile={260}
            />
            <div className="themesflat-headings work style-1 text-center wow fadeInUp clearfix">
              <span className="heading-shadown-text">PROCESS</span>
              <h1 className="heading">OUR WORK PROCESS</h1>
              <p className="sub-heading style-1">
                Fonsetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={68}
              data-mobile={35}
              data-smobile={35}
            />
            <div className="row">
              <div className="col-md-4">
                <div className="img-box-work">
                  <Image
                    alt="Image"
                    src="/assets/img/shortcode/work/work-right.png"
                    width={226}
                    height={69}
                  />
                </div>
                <div className="box-work margin-left-30 wow fadeInUp">
                  <div className="text-wrap">
                    <span className="title-number">01</span>
                    <h6 className="heading">SET DESIGN TARGET</h6>
                    <p className="sub-heading padding-35">
                      Lorem Ipsum is simply dummy text of free available in
                      market the typesetting industry has been industry's been
                      the
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-box-work-2">
                  <Image
                    alt="Image"
                    src="/assets/img/shortcode/work/work-right.png"
                    width={226}
                    height={69}
                  />
                </div>
                <div className="box-work wow fadeInDown">
                  <div className="text-wrap">
                    <span className="title-number">02</span>
                    <h6 className="heading">GENARET UNIQ IDEA</h6>
                    <p className="sub-heading">
                      Lorem Ipsum is simply dummy text of free available in
                      market the typesetting industry has been industry's been
                      the
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box-work margin-left-27 wow fadeInUp">
                  <div className="text-wrap">
                    <span className="title-number">03</span>
                    <h6 className="heading">FRIENDLY SERVICE</h6>
                    <p className="sub-heading">
                      Lorem Ipsum is simply dummy text of free available in
                      market the typesetting industry has been industry's been
                      the industry's
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={93}
                data-mobile={60}
                data-smobile={60}
              />
            </div>
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
      </div>
    </div>
  );
}
