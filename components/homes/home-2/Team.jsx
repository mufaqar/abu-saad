import React from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers2 } from "@/data/team";
export default function Team() {
  return (
    <div className="row-our-team style-2">
      <div className="container-fluid">
        <div className="row row-our-team-inner">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={121}
              data-mobile={60}
              data-smobile={120}
            />
            <div className="themesflat-headings our-team style-2 text-center wow fadeInUp clearfix relative">
              <span className="heading-shadown-text">OUR TEAM</span>
              <h1 className="heading">OUR CREATIVE TEAM</h1>
              <p className="sub-heading">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed
              </p>
            </div>
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          {teamMembers2.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.id}>
              <div className={`box-team style-2 wow ${member.animation}`}>
                <div className="img-overlay" />
                <Image
                  alt="Image"
                  src={member.imageSrc}
                  width={420}
                  height={500}
                />
                <div
                  className={`icon-social-team ${
                    member.socialActive ? "active" : ""
                  }`}
                >
                  <a className="icon-team-top" href="#">
                    <i className="fa fa-share-alt" />
                  </a>
                  <ul className="list-icon-team">
                    <li>
                      <a className="icon-team" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="icon-team1" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="icon-team2" href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a className="icon-team3" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`team-info ${member.paddingRight}`}>
                  <h3 className="team-tittle">
                    <Link href={`/team`}>{member.name}</Link>
                  </h3>
                  <span>{member.role}</span>
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
