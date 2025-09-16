import React from "react";

export default function Offices() {
  return (
    <div className="w-full h-[900px]  rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999750496492!2d2.292292615674507!3d48.85837307928767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1dfb8c49%3A0xb6c8d6b75c8e02e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1694862359381!5m2!1sen!2sfr"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
}





{/* <div className="our-office">
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
      /> */}

