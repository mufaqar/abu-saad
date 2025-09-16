import React from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers3 } from "@/data/team";
export default function Team() {
  return (
    <div className="row-our-team">
      <div className="container">
        <div className="row row-our-team-inner">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={257}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings our-team style-2 text-center wow fadeInUp clearfix relative">
              <span className="heading-shadown-text style-3">OUR TEAM</span>
              <h1 className="heading">OUR CREATIVE TEAM</h1>
              <p className="sub-heading">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={64}
              data-mobile={35}
              data-smobile={35}
            />
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          {teamMembers3.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.id}>
              <div
                className={`box-team ${member.active ? "active" : ""} wow ${
                  member.animation
                }`}
              >
                <div className="img-overlay" />
                <Image
                  alt="Image"
                  src={member.imageSrc}
                  width={270}
                  height={300}
                />
                <div className={`box ${member.boxClass}`}>
                  <h3 className="team-tittle">
                    <Link href={`/team`}>{member.name}</Link>
                  </h3>
                  <span>{member.role}</span>
                  <div className="icon-social-team">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
}
