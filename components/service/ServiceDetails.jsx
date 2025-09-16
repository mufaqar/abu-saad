import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ServiceDetails() {
  return (
    <div id="content-wrap" className="container">
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_category style-2 widget no-sep">
            <h3 className="widget-title">
              <span>Popular Service</span>
            </h3>
            <ul className="list-category">
              <li>
                <Link href={`/service`}>Tempor lorem interdum</Link>
              </li>
              <li>
                <Link href={`/service`}>Auctor mattis lacus </Link>
              </li>
              <li>
                <Link href={`/service`}>Dolor proin </Link>
              </li>
              <li>
                <Link href={`/service`}>Pharetra amet </Link>
              </li>
              <li>
                <Link href={`/service`}>Nullam dolor gravida </Link>
              </li>
            </ul>
          </div>
          {/* /.widget_category */}
          <div className="widget widget_get-a-quote">
            <h3 className="widget-title">
              <span>Get a Quote</span>
            </h3>
            <div className="name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="message">
              <input type="text" placeholder="Message" />
            </div>
            <a className="btn-send" href="">
              Send
            </a>
          </div>
          {/* /.widget_get-a-quote */}
          <div className="widget-company-profile">
            <div className="widget-company-profile-inner-wrap">
              <h3 className="title">Company Profile</h3>
              <p className="infor-company">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt
              </p>
              <div className="btn-download">
                <a href="#">Download</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-mobile={60}
          data-smobile={60}
        />
      </div>

      {/* /#sidebar */}
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Link href={`/service-detail`}>
                <Image
                  alt="Image"
                  width={770}
                  height={500}
                  src="/assets/img/shortcode/service-detail/service-detail-1.jpg"
                />
              </Link>
            </div>
            {/* /.post-media */}
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>PREDICTABLE PAYMENTS</span>
                </span>
              </h1>
              {/* /.post-title */}
              <div className="post-content margin-bottom-51">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </p>
                <p className="margin-top-19">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="row">
                <div className="col-md-6">
                  <div className="post-img">
                    <Image
                      alt="Image"
                      width={370}
                      height={270}
                      src="/assets/img/shortcode/service-detail/service-detail-2.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3 className="post-title-service-detail margin-top-4">
                      <span className="post-title-inner">
                        Quality Control System
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content margin-bottom-32">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="post-title-service-detail">
                      <span className="post-title-inner">
                        Highly Professional Staff
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadip scing
                        elitr, sed diam nonumy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                  Fermentum purus fermentum
                </span>
              </h3>
              {/* /.post-title */}
              <div className="post-content margin-bottom-40">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="row-box-service-detail">
                <div className="col-service-detail">
                  <div className="box-service-detail text-center">
                    <div className="icon zingbox-icon-sola-plant margin-left-61" />
                    <div className="title">Sign up</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis at est id leo
                    </p>
                  </div>
                </div>
                <div className="col-service-detail">
                  <div className="box-service-detail active text-center">
                    <div className="icon zingbox-icon-Solar-power-lamp margin-left-66" />
                    <div className="title">Select course</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis at est id leo
                    </p>
                  </div>
                </div>
                <div className="col-service-detail">
                  <div className="box-service-detail text-center">
                    <div className="icon zingbox-icon-Solar-power-light margin-left-78" />
                    <div className="title">Start Learning</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis at est id leo
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p className="margin-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                </p>
              </div>
              {/* /.post-excerpt */}
            </div>
            {/* /.post-content-wrap */}
          </article>
          {/* /.hentry */}
        </div>
        {/* /#inner-content */}
      </div>
      {/* /#site-content */}
    </div>
  );
}
