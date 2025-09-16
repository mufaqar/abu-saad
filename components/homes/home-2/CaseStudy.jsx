import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects2 } from "@/data/projects";
export default function CaseStudy() {
  return (
    <div className="row-case-study style-2">
      <div className="container">
        <div className="row row-experiences-bottom style-2 wow fadeInUp">
          <div className="col-md-6">
            <h1 className="heading-experiences">
              SIGN UP FOR NEWSLATER &amp; GET LATTEST NEWS &amp; UPDATE
            </h1>
          </div>
          <div className="col-md-6">
            <div className="form">
              <input className="text" type="text" placeholder="Email Address" />
              <input
                className="submit"
                type="submit"
                defaultValue="SUBSCRIBE"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="themesflat-headings study style-2 wow fadeInUp clearfix">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={10}
                data-smobile={10}
              />
              <span className="heading-shadown-text">CASE</span>
              <h1 className="heading margin-bottom-23">CASE STUDY</h1>
              <p className="sub-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est id leo luctus gravida a in ipsum. Vivamus vel molestie nisi.
                Aliquam maximus maximu
              </p>
            </div>
          </div>
          {projects2.map((box) => (
            <div className="col-md-4" key={box.id}>
              <div
                className={`box-img ${box.active ? "active" : ""} wow ${
                  box.animation
                }`}
              >
                <div className="img">
                  <Image
                    alt="Image"
                    src={box.imageSrc}
                    width={370}
                    height={360}
                  />
                </div>
                <div className="row-image-content">
                  <div className="row-image-content-text">
                    <div>
                      <span className="tittle">{box.title}</span>
                    </div>
                    <div>
                      <Link href={`/project-detail`} className="heading-tittle">
                        {box.heading}
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
            </div>
          ))}
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={270}
          data-mobile={220}
          data-smobile={220}
        />
      </div>
    </div>
  );
}
