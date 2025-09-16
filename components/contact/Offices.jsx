import React from "react";
import Image from "next/image";
import { offices } from "@/data/offices";
export default function Offices() {
  return (
    <>
      <div className="our-office">
        <div className="container">
          <div className="col-md-12">
            <div className="themesflat-headings office style-2 text-center wow fadeInUp clearfix">
              <span className="heading-shadown-text">OUR OFFICE</span>
              <h1 className="heading">OUR OFFICE</h1>
            </div>
          </div>
          <div className="row">
            {offices.map((office) => (
              <div className="col-md-3" key={office.id}>
                <div className="box-office">
                  <Image
                    alt="Image"
                    src={office.imageSrc}
                    width={270}
                    height={180}
                  />
                  <h3 className="title-office">{office.title}</h3>
                  <p className={`infor-office ${office.infoStyle}`}>
                    {office.info}
                  </p>
                  <a className="btn-view" href="#">
                    View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={128}
        data-mobile={60}
        data-smobile={60}
      />
    </>
  );
}
