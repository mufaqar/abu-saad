import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ProjectDetails() {
  return (
    <>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={120}
        data-mobile={60}
        data-smobile={60}
      />
      <div className="project-detail-content">
        <div className="heading">
          <Image
            alt="Image"
            width={1170}
            height={628}
            src="/assets/img/shortcode/project-detail/img-project-detail.jpg"
          />
          <div className="top-information">
            <div className="project-infor">
              <h2>Project Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt
              </p>
            </div>
            <div className="category">
              <h2>Category</h2>
              <p>Curabitur elit metus</p>
            </div>
            <div className="date">
              <h2>Date</h2>
              <p>April 24, 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="infor-of-project">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={144}
          data-mobile={285}
          data-smobile={60}
        />
        <h1>INFORMATION OF PROJECT</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Image
            className="img-project-detail"
            alt="Image"
            width={370}
            height={337}
            src="/assets/img/shortcode/project-detail/infor-project1.jpg"
          />
        </div>
        <div className="col-md-4">
          <Image
            className="img-project-detail"
            alt="Image"
            width={370}
            height={337}
            src="/assets/img/shortcode/project-detail/infor-project2.jpg"
          />
        </div>
        <div className="col-md-4">
          <Image
            className="img-project-detail"
            alt="Image"
            width={370}
            height={337}
            src="/assets/img/shortcode/project-detail/infor-project3.jpg"
          />
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={35}
        data-mobile={35}
        data-smobile={35}
      />
      <div className="our-main-goal">
        <div className="row">
          <div className="col-md-12">
            <h1>OUR MAIN GOALS</h1>
          </div>
          <div className="col-md-6">
            <p className="margin-top-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna
            </p>
          </div>
          <div className="col-md-6">
            <div className="our-main-goal-inner">
              <div className="content one">
                <Link className="title" href={`/service-detail`}>
                  Quality Control System
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
              <div className="content two margin-left-16">
                <Link className="title" href={`/service-detail`}>
                  Highly Professional Staff
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
            </div>
            <div className="our-main-goal-inner">
              <div className="content tree">
                <Link className="title" href={`/service-detail`}>
                  Quality Control System
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
              <div className="content four margin-left-16">
                <Link className="title" href={`/service-detail`}>
                  Highly Professional Staff
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={45}
        data-mobile={45}
        data-smobile={45}
      />
      <div className="post-tag-project">
        <div className="tag">
          <a className="black" href="#">
            Black
          </a>
          <a className="aid" href="#">
            Aid
          </a>
          <a className="green" href="#">
            Green
          </a>
        </div>
        <div className="socical-icon">
          <span> Share :</span>
          <a className="facebook" href="#">
            <i className="fa fa-facebook" />
          </a>
          <a className="twitter" href="#">
            <i className="fa fa-twitter" />
          </a>
          <a className="pinterest" href="#">
            <i className="fa fa-pinterest-p" />
          </a>
        </div>
      </div>
      {/* ARTICLE*/}

      {/*END ARTICLE*/}
    </>
  );
}
