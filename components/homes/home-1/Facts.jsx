import React from "react";
import Image from "next/image";
import { counterData } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <div className="row-counter">
      <Image
        alt="Image"
        width={838}
        height={463}
        src="/assets/img/shortcode/counter/bg-counter.png"
      />
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className={`box-counter wow ${item.wowClass}`}>
                <div className="themesflat-counter style-1 align-center clearfix">
                  <div className="counter-item">
                    <div className="inner">
                      <div className="text-wrap">
                        <span className={`icon ${item.icon}`} />
                        <div className="number-wrap">
                          <span className="number">
                            <Counter max={item.number} />
                          </span>
                          <span className="suffix">{item.suffix}</span>
                        </div>
                        <h3 className={`heading ${item.marginClass}`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* /.col-md-3 */}
        </div>
        {/* /.row */}
        <div className="row clearfix">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={115}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          {/* /.col-md-12 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
