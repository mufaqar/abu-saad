"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
const categories = [
  "All",
  "Cells",
  "Inverter",
  "Batteries",
  "Stabilizers",
  "Online UPS",
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setfiltered] = useState(projects);
  useEffect(() => {
    if (activeCategory == "All") {
      setfiltered(projects);
    } else {
      setfiltered(
        projects.filter((elm) => elm.categories.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  return (
    <div className="row-case-study style-2">
      <div className="container">
        {/* <div class="col-md-12"> */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={120}
          data-mobile={60}
          data-smobile={60}
        />
        <div className="tab flat-tab">
          <ul className="tab-title menu-tab text-center">
            {categories.map((category) => (
              <li
                key={category}
                className={`item-title cursor-pointer ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
              </li>
            ))}
          </ul>
          <div className="tab-content-wrap clearfix">
            <div className="tab-content">
              <div className="item-content">
                <div className="row">
                  {filtered.map((item, index) => (
                    <div key={index} className="col-md-4">
                      <div
                        className={`box-img style-2 ${
                          item.isActive ? "active" : ""
                        }`}
                      >
                        <div className="img">
                          <Image
                            alt="Image"
                            width={370}
                            height={360}
                            src={item.src}
                          />
                        </div>
                        <div className="row-image-content">
                          <div className="row-image-content-text">
                            <div>
                              <span className="tittle">NEC VEHICULA </span>
                            </div>
                            <div>
                              <Link
                                href={`/project-detail`}
                                className="heading-tittle"
                              >
                                MAXIMUS LIBERO ORNARE
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
              </div>
            </div>
          </div>
          {/* /.tab-content-wrap */}
        </div>
        {/* </div> */}
        <div className="col-md-12">
          <div className="load-more text-center">
            <Link className="btn-load-more" href={`/project`}>
              Load More
            </Link>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={135}
          data-mobile={135}
          data-smobile={135}
        />
      </div>
    </div>
  );
}
