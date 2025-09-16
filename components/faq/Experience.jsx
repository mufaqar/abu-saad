"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const items = ["Vision", "Mission", "Strategy"];
export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="row-experiences-2">
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <div className="experience-left flat-tab">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={143}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings style-2 wow fadeInUp clearfix relative">
              <span className="heading-shadown-text">WORKERS</span>
              <h1 className="heading">EXPERIENCED WORKERS</h1>
              <p className="sub-heading">
                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
                dui, a porta ante lectus dapibus est. Aliquam
              </p>
            </div>
            <ul className="tab-title title wow fadeInUp">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`item-title ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="tab-content-wrap clearfix">
              {activeIndex == 0 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>
                        Aliquam faucibus, odio nec commodo aliquam, neque felis
                        placerat dui, a porta ante lectus dapibus est. Aliquam a
                        bibendum mi, sed condimentum
                      </span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Sonsectetur adipisicing elit
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Exercitation ullamco laboris
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Eiusmod tempor incididunt
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Aolore magna aliqua
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* /.tab-content */}{" "}
              {activeIndex == 1 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>
                        Aliquam faucibus, odio nec commodo aliquam, neque felis
                        placerat dui, a porta ante lectus dapibus est. Aliquam a
                        bibendum mi, sed condimentum
                      </span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Eiusmod tempor incididunt
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Aolore magna aliqua
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Sonsectetur adipisicing elit
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Exercitation ullamco laboris
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* /.tab-content */}{" "}
              {activeIndex == 2 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>
                        Aliquam faucibus, odio nec commodo aliquam, neque felis
                        placerat dui, a porta ante lectus dapibus est. Aliquam a
                        bibendum mi, sed condimentum
                      </span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Sonsectetur adipisicing elit
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Exercitation ullamco laboris
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Eiusmod tempor incididunt
                          </Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>
                            Aolore magna aliqua
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* /.tab-content */}
            </div>
            {/* /.tab-content-wrap */}
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <Image
            alt="Image"
            src="/assets/img/shortcode/experience/experience-right.jpg"
            width={945}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
