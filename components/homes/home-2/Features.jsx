import React from "react";
import Link from "next/link";
import { features } from "@/data/features";
export default function Features() {
  return (
    <div className="features">
      <div className="container-fluid">
        <div className="features-inner">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={91}
            data-mobile={60}
            data-smobile={50}
          />
          <div className="row">
            {features.map((service) => (
              <div className="col-lg-3 col-sm-6" key={service.id}>
                <div
                  className={`service-inner-text style-2 ${service.leftClass} wow ${service.animation}`}
                >
                  <div className={`icon ${service.iconClass}`} />
                  <div className="text-wrap">
                    <h3 className="heading">
                      <Link href={`/service-detail`}>{service.title}</Link>
                    </h3>
                    <p className="sub-heading">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={50}
            data-mobile={30}
            data-smobile={10}
          />
        </div>
      </div>
    </div>
  );
}
