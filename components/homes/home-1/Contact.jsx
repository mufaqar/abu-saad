import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="row-request ">
    
      <div className="container-fluid">
        <div className="row-request-inner">
          <div className="container">
            <div className="row-request-right wow fadeInUp">
              <div className="ok">
                <div className="row">
                  <h1 className="heading-request">REQUEST A QUOTE</h1>
                </div>
                <div className="row-request-right-inner">
                  <div className="request-right-inner-left">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="tittle-select">
                      <span>Solar system type?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>System Installer</option>
                        <option value={1}>system type 1</option>
                        <option value={2}>system type 2</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Solar panels place?</span>
                    </div>
                    <div>
                      <select className="select bottom-select">
                        <option value={0}>Imperdiet orci</option>
                        <option value={1}>place 1</option>
                        <option value={2}>place 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="request-right-inner-right">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Choose services</option>
                        <option value={1}>service 1</option>
                        <option value={2}>service 2</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Solar panels place?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Odio metus</option>
                        <option value={1}>place 1</option>
                        <option value={2}>place 2</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Materials on your roof?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Maecenas ligula</option>
                        <option value={1}>Maecenas ligula</option>
                        <option value={2}>Maecenas ligula</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="btn-submit">
                    <input
                      className="submit"
                      type="submit"
                      readOnly
                      value="Submit Request"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
