import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="row-request ">
    <div className="col-md-6">
      <div className="w-full h-[900px]  rounded-lg overflow-hidden shadow-lg ">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999750496492!2d2.292292615674507!3d48.85837307928767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1dfb8c49%3A0xb6c8d6b75c8e02e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1694862359381!5m2!1sen!2sfr"
        width="90%"
        height="660"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 img-left "
      ></iframe>
      </div>
       </div>
 
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
