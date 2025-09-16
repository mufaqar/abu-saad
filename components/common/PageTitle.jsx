import Link from "next/link";
import React from "react";

export default function PageTitle({ pageName = "About Us" }) {
  return (
    <div id="header-banner" className="header-banner clearfix">
      <div id="header-banner-inner" className="container clearfix">
        <div className="header-banner-inner-wrap">
          <div className="blog-standar-start">
            <h1 className="blog-standar-start1">{pageName.toUpperCase()}</h1>
          </div>
          <h2 className="blog-standar-end">
            <Link href={`/`} className="blog-standar-end">
              Home
            </Link>{" "}
            | <span className="blog-standar-end">{pageName}</span>
          </h2>
        </div>
        {/* /.header-banner-inner-wrap */}
      </div>
      {/* /#header-banner-inner */}
    </div>
  );
}
