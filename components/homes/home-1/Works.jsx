import React from "react";
import Link from "next/link";
import Image from "next/image";
import { works } from "@/data/works";
export default function Works() {
  return (
    <div className="row-image">
      <div className="container-fluid">
        <div className="row">
          {works.map((box) => (
            <div className="col-md-4" key={box.id}>
              <div
                className={`box-img ${box.active ? "active" : ""} wow ${
                  box.animation
                }`}
              >
                <div className="img">
                  <Image
                    alt="Image"
                    width={570}
                    height={480}
                    src={box.imageSrc}
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
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
