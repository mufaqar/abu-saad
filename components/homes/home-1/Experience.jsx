import React from "react";
import Link from "next/link";
export default function Experience() {
  return (
    <div className="row-experiences">
      <div className="container">
        <div className="row-experiences-content wow zoomInDown">
          <div className="row">
            <h1 className="heading-experiences">EXPERIENCED WORKERS</h1>
          </div>
          <div className="row">
            <p className="content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
              <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
              <br />
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores
            </p>
          </div>
          <div className="row">
            <div className="link wow fadeInRight">
              <div className="link-1">
                <ul>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Sonsectetur adipisicing elit
                    </Link>
                  </li>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Exercitation ullamco laboris
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="link-2">
                <ul>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Eiusmod tempor incididunt
                    </Link>
                  </li>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Aolore magna aliqua
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-experiences-bottom wow fadeInUp">
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
                readOnly
                value="SUBSCRIBE"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
