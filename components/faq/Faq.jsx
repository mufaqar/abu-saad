"use client";
import { faqs } from "@/data/faqs";
import Image from "next/image";
import { useState } from "react";
export default function Faq() {
  const [activeId, setActiveId] = useState(4);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={140}
        data-mobile={60}
        data-smobile={60}
      />
      <div className="ask-question">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-question">
                <Image
                  alt="Image"
                  src="/assets/img/shortcode/question/ask-question.png"
                  width={84}
                  height={84}
                />
                <div className="themesflat-headings style-2 wow fadeInUp clearfix">
                  <h1 className="heading">ASK QUESTION</h1>
                  <p className="sub-heading">
                    Lorem Ipsum simply industry standard .
                  </p>
                </div>
                <div className="search wow fadeInUp">
                  <input type="text" placeholder="Search keywords" />
                  <a href="" />
                </div>
                <div className="infor wow fadeInUp">
                  <input
                    className="first"
                    type="text"
                    placeholder="Your Email"
                  />
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="message wow fadeInUp">
                  <input type="text" placeholder="Write Massege" />
                  <button className="message-submit" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-faq">
                {faqs.map(({ id, question, answer }) => (
                  <div
                    key={id}
                    className={`accordion-item ${
                      activeId === id ? "active" : ""
                    }`}
                  >
                    <div
                      className="question"
                      onClick={() => toggleAccordion(id)}
                    >
                      {question}
                    </div>
                    {activeId === id && (
                      <div
                        className="infor-question"
                        style={{ display: "block" }}
                      >
                        <span>{answer}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={0}
        data-mobile={60}
        data-smobile={60}
      />
    </>
  );
}
